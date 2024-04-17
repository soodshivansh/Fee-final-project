import React, { useState } from "react"
import { Link } from "react-router-dom"

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

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <span class='fa-solid fa-border-all'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/pages'>pages</Link>
              </li>
              <li>
                <Link to='/user'>user account</Link>
              </li>
              <li>
                <Link to='/vendor'>vendor account</Link>
              </li>
              <li>
                <Link to='/track'>track my order</Link>
              </li>
              <li>
                <Link to='/contact'>contact</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
      <div style={{"position": "absolute","zIndex":"100","display":"none"}} className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Navbar
