import { useSelector } from "react-redux"

export default function Stats() {
    const highestName = useSelector(({ postReducer }) => postReducer.highestName);
    const highestRating = useSelector(({ postReducer }) => postReducer.highestRating);
    const page = useSelector(({ postReducer }) => postReducer.page);
    return (
        <div className="container">
        <div className="row">
            <h2>Movies</h2>
        </div>
        <div className="row" id="stats-parent">
            <div className="card w-100 p-3">
                <h4>Stats</h4>
                <span>Current page: {page}</span>
                <span>Number of movies: 20</span>
                <span>Top rated movie: {highestName}</span>
                <span>Rating: {highestRating}</span>
            </div>

        </div>
    </div>


    )
}