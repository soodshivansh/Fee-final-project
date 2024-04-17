import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Furniture",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Art",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Cars",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Clocks and Watches",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Jewelry",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Books and Manuscripts",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Pottery and Ceramics",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Textiles",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Metalwork",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Tools and Technology",
    },
  ]

  return (
    <>
      {/* <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div> */}
    </>
  )
}

export default Categories
