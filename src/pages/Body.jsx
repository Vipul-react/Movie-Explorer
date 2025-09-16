import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants';
import MovieCard from '../components/MovieCard';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Error from '../components/Error';

const Body = () => {
    const [movielist, setMovielist] = useState([]);
    const [showlist, setShowlist] = useState([]);
    const [input, setInput] = useState();
    const [error, setError] = useState();
    const [page, setPage] = useState(1);
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const fetchMovieList = async () => {
        try{

            const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=" + page, API_OPTIONS);
            const json = await data.json();
            setMovielist(json.results);
            setShowlist(json.results);
            console.log(json);
        }catch(err){
            setError(err);
        }
    }
    useEffect(() => {
        fetchMovieList();
    }, [page])
    const handleChange = (e) => {
        if (!e) {
            setShowlist(movielist); // show all movies if input is empty
            return;
        }
        const temp = movielist.filter((i) => i.title.toLowerCase().includes(e.toLowerCase()));
        setShowlist(temp);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            handleChange(input);
        }, 1000);
        return () => {
            clearTimeout(timer);
        }
    }, [input, movielist])

    if(error) return(<Error err = {error}/>)

    return (
        <div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 ">
                <input
                    type="text"
                    placeholder='Search...'
                    className="w-72 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={(e) => setInput(e.target.value)}
                />
                 <Link to="/favorites" className="px-4 py-2 bg-red-500 text-white rounded w-full sm:w-auto text-center">
                                Favorites
                            </Link>
            </div>


            <div className="flex flex-wrap justify-center gap-2 my-4">

                {arr.map((a) => (
                    <button
                        key={a}
                        onClick={() => setPage(a)}
                        className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors duration-200"
                    >
                        {a}
                    </button>
                ))}
                
            </div>

            <div className='flex flex-wrap gap-6 justify-center'>
                {
                showlist.length  === 0 ? (<h1>Movie Not Found</h1>)
                
               : (showlist && showlist.map((m, i) => (
                   
                        <MovieCard key={m.id} movieData={m} />
                   
                )))}
            </div>
        </div>
    )
}

export default Body