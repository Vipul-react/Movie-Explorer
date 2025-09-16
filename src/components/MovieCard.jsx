import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const MovieCard = ({ movieData }) => {
    const { title, overview, poster_path, release_date } = movieData;
    const [isfav, setIsfav] = useState(false);
    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem("favorites")) || [];
        setIsfav(favs.some((m) => m.id === movieData.id));
    }, [movieData.id]);

    const toggleFavorite = () => {
        let favs = JSON.parse(localStorage.getItem("favorites")) || [];
        if (isfav) {
            favs = favs.filter((m) => m.id !== movieData.id);
        } else {
            favs.push(movieData);
        }
        localStorage.setItem("favorites", JSON.stringify(favs));
        setIsfav(!isfav);
    };

    return (
        <div className=' w-60 rounded-lg '>
             <Link to={"/movie/" + movieData.id} >
            <img className='rounded-lg' src={"https://image.tmdb.org/t/p/w500/" + poster_path} alt="Move Image" />
            </Link>
            <div className='flex justify-around '>
                <div>
                    <p className='font-bold'>{title}</p>
                    <p>Release Year : {release_date}</p>
                </div>
                <button
                    className={` top-2 right-2 text-xl ${isfav ? "text-red-500" : "text-gray-400"}`}
                    onClick={toggleFavorite}
                >
                    ♥
                </button>
            </div>
        </div>
    )
}

export default MovieCard