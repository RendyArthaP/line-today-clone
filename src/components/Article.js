import React from 'react'

const Article = ({articles}) => {
  return (
    <div className="p-4 flex flex-col text-left w-full max-w-3xl mx-auto">
      {articles.templates.filter(news => news.title).map((article) => {
        return(
          <div 
            key={article.id}
            className="py-3"
          >
            <h1 className="font-black tracking-wider">
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
                      className="flex flex-row flex-wrap justify-center md:justify-between"
                    >
                      {contents.articles.slice(0, 6).map((content, index) => (
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
                        </div>
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
