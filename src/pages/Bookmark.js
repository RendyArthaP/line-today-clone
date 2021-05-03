import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'

const Bookmark = () => {
  const getDataBookMark = JSON.parse(localStorage.getItem("data-bookmark"))
  const [dataBookMark, setDataBookMark] = useState(getDataBookMark)
  const deleteBookmark = (item) => {
    let data = JSON.parse(localStorage.getItem("data-bookmark"))
    let deleteBookmarked = data.filter(content => content.id !== item.id)
    setDataBookMark([...deleteBookmarked])
  }

  useEffect(() => {
    localStorage.setItem('data-bookmark', JSON.stringify(dataBookMark))
  }, [dataBookMark])

  return (
    <>
      <Navbar />
      <div className="p-4 flex flex-col text-left w-full max-w-3xl mx-auto">
        <h1 className="font-bold">
          Bookmark anda:
        </h1>
        <div>
          {dataBookMark.length === 0 
            ?
              <div className="flex py-72 justify-center">
                <h1>
                  Tidak ada data bookmark
                </h1>
              </div>
            :
              <div>
                {dataBookMark.map((item) => (
                  <div key={item.id}>
                    <div className="flex flex-col py-3 md:flex-row">
                      <a href={item.url.url}>
                        <div className="w-full h-full md:w-96 md:h-48">
                          <img
                            src={`https://obs.line-scdn.net/${item.thumbnail.hash}`}
                            alt={item.thumbnail.type}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </a>
                      <div className="flex flex-col md:justify-center md:ml-4">
                        <a href={item.url.url}>
                          <h1 className="w-full md:w-80 text-sm font-bold tracking-normal my-1">{item.title}</h1>
                        </a>
                        <div className="flex flex-row justify-between items-center md:flex-col md:items-start">
                          <span className="text-gray-400 text-xs my-1">{item.publisher}</span>
                          <p 
                            className="text-red-500 text-xs"
                            onClick={() => deleteBookmark(item)}
                          >
                            Delete
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          }
        </div>
      </div>
    </>
  )
}

export default Bookmark
