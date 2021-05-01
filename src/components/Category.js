import React from 'react'

const Category = ({categoryLineToday, handleFilterButton}) => {
  return (
    <div className="w-full sticky top-0 bg-white max-w-3xl mx-auto py-4 flex flex-row overflow-hidden overflow-x-scroll">
      {categoryLineToday && categoryLineToday.map((category, index) => {
        return (
          <div 
            key={index}
            className="w-full cursor-pointer"
            onClick={() => handleFilterButton(category)}
          >
            <h1 className="text-sm font-semibold w-full items-center text-center mr-10">
              {category}
            </h1>
          </div>  
        )
      })}
    </div>
  )
}

export default Category
