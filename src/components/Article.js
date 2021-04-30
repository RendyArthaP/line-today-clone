import React from 'react'

const Article = ({articles}) => {
  return (
    <div>
      {articles.templates.map((news) => {
        console.log(news)
        return(
          <div key={news.id}>
            <h1>{news.title}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default Article
