import CreateCard from "./card";
import { useEffect, useState } from "react";

const API_Url = `http://www.omdbapi.com/?apikey=2968c9f4`;

const Movies = (props) => {
    const [moviesArr, setMoviesArr] = useState([]);
    const searchDetails = async (title) => {
        try {
            const response = await fetch(`${API_Url}&s=${title}`);
            const data = await response.json();
            if (data.Search) {
                setMoviesArr(data.Search);
            } else {
                setMoviesArr([]);
            }
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
        // console.log(data.Search);
    };
    useEffect(() => {
        searchDetails(props.title);
    }, [props.title]);
    return (
        <div className="container">
            {moviesArr.map((movie)=>{
                return(
                    <CreateCard
                    key={movie.imdbID}
                    year = {movie.Year}
                    imgUrl = {movie.Poster} 
                    type={movie.Type}
                    name = {movie.Title}
                    />
                );
            })}
        </div>
    );
}

export default Movies;