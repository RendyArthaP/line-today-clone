import React, { useState } from 'react'

const ListArticle = ({content, index}) => {
  const [bookMarks, setbookMarks] = useState(true)
  const [listBookMark, setListBookmark] = useState([])
  const handleBookmarks = (content) => {
    console.log(bookMarks)
    console.log(content)
    setbookMarks(!bookMarks)
    if(bookMarks === true) {
      setListBookmark(JSON.parse(localStorage.getItem('listBookMark')))
      listBookMark.push(content)
      localStorage.setItem('data-bookmark', JSON.stringify(listBookMark))
    } else {

    }
  }
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
      <div className="flex text-xs">
        <button 
          onClick={() => handleBookmarks(content)}
          className="focus:outline-none"
        >
          {bookMarks ? 'Add Bookmark': 'Bookmarked'}
        </button>
      </div>
    </div>
  )
}

export default ListArticle
