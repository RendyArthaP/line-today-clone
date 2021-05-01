import React,{ useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getDataLineToday } from '../redux/actions/GetDataLineToday.actions';
import Navbar from '../components/Navbar';
import Category from '../components/Category';
import Article from '../components/Article';
import SkeletonLoader from '../components/SkeletonLoader';

const Home = () => {
  const dispatch = useDispatch()
  const categoryLineToday = useSelector((state) => state.handleGetDataLineToday.data.result)
  const parameterCategory = [...new Set(categoryLineToday && categoryLineToday.categories.map(item => item.name))]
  const [paramsCategory, setParamsCategory] = useState(categoryLineToday)
  const [defaultPage, setDefaultPage] = useState(true)
  console.log(categoryLineToday)

  const handleFilterButton = (name) => {
    setDefaultPage(false)
    const getCategory = categoryLineToday.categories.filter((article) => article.name === name);
    setParamsCategory(getCategory)
  }

  useEffect(() => {
    dispatch(getDataLineToday())
  }, [dispatch])

  return (
    <>
      <Navbar />
      <div>
        <Category 
          categoryLineToday = {parameterCategory} 
          handleFilterButton = {handleFilterButton}
        />
        {/* {categoryLineToday === undefined ? <SkeletonLoader />} */}
        {defaultPage && (
          <div className="p-4 flex flex-col text-left w-full max-w-3xl mx-auto">
            {categoryLineToday && categoryLineToday.categories[0].templates.filter(news => news.title).map((article, index) => {
              return(
                <div
                  key={index}
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
                            className="flex flex-row flex-wrap justify-center md:justify-between md:mx-10"
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
        )}
        {paramsCategory && paramsCategory.map((articles) => {
          return (
            <Article 
              articles = {articles}
              key = {articles.id}
            />
          )
        })}
      </div>
    </>
  )
}

export default Home
