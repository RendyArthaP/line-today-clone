import React from 'react'
import ListArticle from './ListArticle'

const Article = ({articles}) => {
  return (
    <div className="p-4 flex flex-col text-left w-full max-w-3xl mx-auto">
      {articles.templates.filter(news => news.title).map((article) => {
        return(
          <div 
            key={article.id}
            className="py-3"
          >
            <h1 className="font-black tracking-wider text-sm md:text-base">
              {article.title.toUpperCase()}
            </h1>
            {article.sections.map((contents, index) => (
              <div key={index}>
                {contents.articles.length === 0 
                  ? 
                    <div key={index}>
                      <h1 className="pt-4 text-center">
                        Tidak Ada Berita
                      </h1>
                    </div> 
                  : 
                    <div 
                      key={index} 
                      className="flex flex-row flex-wrap justify-center md:justify-between md:mx-10"
                    >
                      {contents.articles.slice(0, 6).map((content, index) => (
                        <ListArticle 
                          content={content} 
                          key={index} 
                        />
                      ))}
                    </div>
                }
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default Article
