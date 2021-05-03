import React, { useState, useEffect } from 'react'

const ListArticle = ({ content, index }) => {
  const [listBookMark, setListBookmark] = useState(JSON.parse(localStorage.getItem('data-bookmark')))
  const handleBookmarks = (content, status) => {
    let data = JSON.parse(localStorage.getItem('data-bookmark'))
    if (!data) {
      let temporaryData = []
      localStorage.setItem('data-bookmark', JSON.stringify(temporaryData))
      data = JSON.parse(localStorage.getItem('data-bookmark'))
    }
      if (status === false) {
        setListBookmark([...data, content])
      } else {
        let deleteBookMark = data.filter(item => item.id !== content.id)
        setListBookmark([...deleteBookMark])
      }
  }

  useEffect(() => {
    localStorage.setItem('data-bookmark', JSON.stringify(listBookMark))
  }, [listBookMark])

  return (
    <div
      key={index}
      className="w-full h-auto p-2 my-2 max-w-xs"
    >
      <a href={content.url.url}>
        <div className="mx-2 flex flex-col w-64">
          <div className="w-64 h-56 mx-auto">
            <img
              src={`https://obs.line-scdn.net/${content.thumbnail.hash}`}
              alt={content.thumbnail.type}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="">
            <h1 className="mt-2 font-normal text-sm">
              {content.title}
            </h1>
            <span className="text-xs text-gray-400">
              {content.publisher}
            </span>
          </div>
        </div>
      </a>
      <div className="flex flex-row justify-between mx-2 w-64 -mt-5">
        <div></div>
        <div className="flex text-xs">
          {!!listBookMark && listBookMark.find(item => item.id === content.id)
            ?
            <button 
              className="focus:outline-none" 
              onClick={() => handleBookmarks(content, true)}
            >
              Bookmarked
            </button>
            :
            <button
              onClick={() => handleBookmarks(content, false)}
              className="focus:outline-none"
            >
              Add Bookmark
              </button>
          }
        </div>
      </div>
    </div>
  )
}

export default ListArticle
