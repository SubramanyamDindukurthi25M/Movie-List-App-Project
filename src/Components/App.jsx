import {Routes,Route} from 'react-router-dom'
import { Movie } from "../pages/Movie"
import { MovieUnique } from "../pages/MovieUnique"

export const App = () => {
    return (
        <>
            <h2
                className="text-center mb-0 text-secondary font-weight-bold text-capitalize"
            >
                movie list app project
            </h2>
            <div className="underline-title mx-auto bg-info"></div>
            <Routes>
                <Route
                    path='/'
                    element={<Movie/>}
                />
                <Route
                    path='/:id'
                    element={<MovieUnique/>}
                />
            </Routes>
        </>
    )
}