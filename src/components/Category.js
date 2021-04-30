import React from 'react'

const Category = ({categoryLineToday}) => {
  console.log(categoryLineToday)
  return (
    <div className="w-full max-w-3xl mx-auto py-4 flex flex-row overflow-hidden overflow-x-scroll">
      {!!categoryLineToday && categoryLineToday.categories.map((category) => {
        console.log(category)
        return (
          <div 
            key={category.id}
            className="w-full"
          >
            <h1 className="text-sm font-bold w-full items-center text-center mr-10">
              {category.name}
            </h1>
          </div>  
        )
      })}
    </div>
  )
}

export default Category
