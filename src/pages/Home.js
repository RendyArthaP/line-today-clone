import React,{ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getDataLineToday, filterCategory } from '../redux/actions/GetDataLineToday.actions';
import Navbar from '../components/Navbar';
import Category from '../components/Category';
import Article from '../components/Article';

const Home = () => {
  const dispatch = useDispatch()
  const categoryLineToday = useSelector((state) => state.handleGetDataLineToday.data.result)
  const defaultData = useSelector((state) => state.handleGetDataLineToday.oldData)
  const parameterCategory = [...new Set(categoryLineToday && categoryLineToday.categories.map(item => item.name))]

  const handleFilterButton = (name) => {
    dispatch(filterCategory(name))
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
        {defaultData && defaultData.map((articles) => {
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
