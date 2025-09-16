import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard';

const Favourites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(favs);
    }, [])

    if (favorites.length == 0) {
        return <div className="text-center mt-10">No favorites yet.</div>;
    }
    return (
        <div>
            <h2 className='text-3xl sm:text-4xl font-bold text-center text-gray-800 my-6 tracking-wide'>Favorite Items</h2>
            <div className='flex flex-wrap gap-6 justify-center'>
                {favorites.map((l, i) => (
                    <MovieCard movieData={l} />
                ))}
            </div>
        </div>
    )
}

export default Favourites;