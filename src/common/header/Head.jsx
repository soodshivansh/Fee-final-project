import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +91 12345 67890</label>
            <i className='fa fa-envelope'></i>
            <label> support@relicrealm.com</label>
          </div>
          <div className='right row RText'>
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            <label className="text-xl">🇮🇳</label>
            <label>INR</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
