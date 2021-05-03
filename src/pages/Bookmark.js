import React from 'react'
import Navbar from '../components/Navbar'

const Bookmark = () => {
  const getDataBookMark = JSON.parse(localStorage.getItem("data-bookmark"))
  return (
    <>
      <Navbar />
      <div className="p-4 flex flex-col text-left w-full max-w-3xl mx-auto">
        <h1>
          Bookmark anda:
        </h1>
        <div>
          {getDataBookMark.map((item) => (
            <a href={item.url.url}>
              <div className="flex flex-col py-3 md:flex-row">
                <div className="w-full h-full md:w-96 md:h-48">
                  <img
                    src={`https://obs.line-scdn.net/${item.thumbnail.hash}`}
                    alt={item.thumbnail.type}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col md:justify-center md:ml-4">
                  <h1 className="w-full md:w-80 text-sm font-bold tracking-normal my-1">{item.title}</h1>
                  <span className="text-gray-400 text-xs my-1">{item.publisher}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Bookmark
