import React from 'react'
import "../styles/title.css"
import hero from "../asswsts/hero.jpeg"

const Title = () => {
    const Name = "Prakash Reddy";
    const LeadText = "Mern Stack Developer Ready To Develop"
  return (
    <div className="set container my-5 py-5" >
      <div className="row align-items-center text-center">
        <div className="col-12 col-md-6">
          <img
            className="img-fluid w-50 rounded-5"
            src={hero}
            alt="Prakash Reddy"
          />
        </div>
        <div className="col-12 col-md-6 pt-4">
          <h1 className='font-weight-bold'>Hey, I am <span className="text-success">{Name}</span></h1>
          <h5>{LeadText}</h5>
        </div>
      </div>
    </div>
  )
}

export default Title