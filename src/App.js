import { useState } from "react";
import SearchIcon from "./searchSvg.svg";
import "./App.css";
import Movies from "./Components/moviesList";


const App = () => {
    const [title, setTitle] = useState("");
    const [showMovies, setShowMovies] = useState(false);

    const handleClick = () => {
        return (setShowMovies(true))
    };
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                placeholder="search for movies"
                value={title}
                onChange={(event)=>{
                    const inputTitle = event.target.value;
                    return (setTitle(inputTitle))
                }}
                />
                <img
                src={SearchIcon}
                alt="Search"
                onClick={handleClick}
                />
            </div>
            {showMovies && <Movies title={title} />}
        </div>
    );
}

export default App;