import React,{ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getDataLineToday } from '../redux/actions/GetDataLineToday.actions';
import Navbar from '../components/Navbar';
import Category from '../components/Category';

const Home = () => {
  const dispatch = useDispatch()
  const categoryLineToday = useSelector((state) => state.handleGetDataLineToday.data.result)

  useEffect(() => {
    dispatch(getDataLineToday())
  }, [dispatch])
  return (
    <>
      <Navbar />
      <div>
        <Category categoryLineToday = {categoryLineToday} />
      </div>
    </>
  )
}

export default Home
