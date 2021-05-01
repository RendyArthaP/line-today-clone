import React,{ useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getDataLineToday } from '../redux/actions/GetDataLineToday.actions';
import Navbar from '../components/Navbar';
import Category from '../components/Category';
import Article from '../components/Article';

const Home = () => {
  const dispatch = useDispatch()
  const categoryLineToday = useSelector((state) => state.handleGetDataLineToday.data.result)
  const parameterCategory = [...new Set(categoryLineToday && categoryLineToday.categories.map(item => item.name))]
  const [paramsCategory, setParamsCategory] = useState(categoryLineToday)
  console.log(categoryLineToday)
  const handleFilterButton = (name) => {
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
