import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_OPTIONS } from '../utils/constants';

const MoviePage = () => {
    const { id } = useParams();
    const [data, setData] = useState({});

    

    const fetchData = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + id + "?language=en-US", API_OPTIONS);
        const json = await data.json();
        console.log(json)
        setData(json);
    }
    const { title, backdrop_path, poster_path, genres, release_date, runtime, vote_average, overview } = data;

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="w-full min-h-screen bg-gray-900 text-white p-4 md:p-8 flex justify-center">
            <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6">

                <div className="flex flex-col md:w-2/3 gap-4">
                    <img
                        className="w-full h-64 md:h-96 object-cover rounded-lg"
                        src={"https://image.tmdb.org/t/p/w500/" + backdrop_path}
                        alt={title + " backdrop"}
                    />
                    <img
                        className="w-full h-64 md:h-80 object-cover rounded-lg"
                        src={"https://image.tmdb.org/t/p/w500/" + poster_path}
                        alt={title + " poster"}
                    />
                </div>

                <div className="md:w-1/3 flex flex-col justify-start gap-4">

                    <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>

                    <div className="flex flex-wrap gap-2">
                        {genres && genres.map((g, i) => (
                            <span
                                key={i}
                                className="bg-red-600 text-white px-2 py-1 rounded-full text-sm md:text-base"
                            >
                                {g.name}
                            </span>
                        ))}
                    </div>

                    <div className="space-y-1 text-sm md:text-base">
                        <p>Release Date: {release_date}</p>
                        <p>Runtime: {runtime} min</p>
                        <p>IMDb Rating: {vote_average}/10</p>
                    </div>

                    <p className="text-sm md:text-base leading-relaxed">Plot: {overview}</p>

                </div>
            </div>
        </div>


    )
}

export default MoviePage