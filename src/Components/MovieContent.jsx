import {Link} from 'react-router-dom'

export const MovieContent = ({
        movieId,
        moviePoster,
        movieReleaseDate,
        movieTitle,
        appendToImageUrl,
        handleNavigate
    }) => {
    return (
        <>
            <div className="col-lg-3 col-sm-6">
                <div className="card my-3">
                    <Link
                        to={`/${movieId}`}
                    >
                        <img 
                            src={`${appendToImageUrl}${moviePoster}`}
                            alt={movieTitle} 
                            className='card-img-top'
                            onClick={() => handleNavigate(movieId)}
                        />
                    </Link>
                    <div className="card-body">
                        <h5 className='card-text'>
                            Date: {movieReleaseDate}
                        </h5>
                    </div>
                </div>  
            </div>
        </>
    )
}