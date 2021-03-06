import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-green-500">
      <div className="p-4 flex flex-row justify-between">
        <Link 
          className="font-bold text-xl text-white"
          to="/"
        >
          LINE Today
        </Link>
        <Link 
          className="font-bold text-xl text-white" 
          to="/bookmark"
        >
          Bookmark
        </Link>
      </div>
    </div>
  )
}

export default Navbar
