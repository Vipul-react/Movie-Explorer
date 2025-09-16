import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link to="/" className="ml-10 px-4 py-2 bg-red-500 text-white rounded">
                                Home
                            </Link>
            <Link to="/favorites" className="ml-10 px-4 py-2 bg-red-500 text-white rounded">
                Favorites
            </Link>
        </div>
    )
}

export default Header