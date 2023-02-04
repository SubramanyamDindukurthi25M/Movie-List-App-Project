import { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { MovieContent } from '../Components/MovieContent'
import { Loader } from '../Components/Loader'
import axios from 'axios'
import swal from 'sweetalert'

export const Movie = () => {
    const appendToImageUrl = 'https://image.tmdb.org/t/p/w500/'

    const navigate = useNavigate()

    const handleNavigate = (id) => {
        navigate(`/${id}`)
    }

    const baseUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_APP_MOVIE_API_KEY}`

    const [moviesData, setMoviesData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const {
        results
    } = moviesData

    const fetchData = () => {
        axios
            .get(baseUrl)
            .then((response) => {
                setMoviesData(response.data)
                setIsLoading(!isLoading)
            })
            .catch((error) => {
                swal(error.message)
            })
    }
    useEffect(fetchData, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        results?.map((movie,i) => {
                            const {
                                id,
                                poster_path,
                                release_date,
                                title
                            } = movie
                            return(
                                <>
                                    {
                                        (isLoading) ? <Loader/> : <MovieContent
                                            key = {i}
                                            movieId = {id}
                                            moviePoster = {poster_path}
                                            movieReleaseDate = {release_date}
                                            movieTitle = {title}
                                            appendToImageUrl = {appendToImageUrl}
                                            handleNavigate = {handleNavigate}
                                        />
                                    }
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}