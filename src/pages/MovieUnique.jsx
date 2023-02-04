import { useEffect, useState } from 'react'
import {Link,useParams} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

export const MovieUnique = () => {
    const {
        id
    } = useParams()

    const uniqueMovie = `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_APP_MOVIE_API_KEY}`

    const [movieData, setMovieData] = useState([])

    const {
        original_title,
        overview,
        tagline
    } = movieData

    const fetchData = () => {
        axios
            .get(uniqueMovie)
            .then((response) => {
                setMovieData(response.data)
            })
            .catch((error) => {
                swal(error.message)
            })
    }
    useEffect(fetchData, [])

    return (
        <>
            <button className='btn'>
                <Link
                    to={'/'}
                > Back To Home Page </Link>
            </button>
            <article className='mx-2'>
                {
                    original_title && <h2 className='text-secondary'>Movie-Title : {original_title}</h2>
                }
                {
                    overview && <p className="lead">Overview : {overview}</p>
                }
                {
                    tagline && <h5 className='text-success'>Tag Line : {tagline}</h5>
                }
            </article>
        </>
    )
}