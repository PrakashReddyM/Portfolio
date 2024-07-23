import React from 'react'
import "../styles/projects.css"

const ProjectSection = () => {
   
  return (
    <div className='sect'>
        <div className="container mt-5">
            <h2 className="text-center text-success font-weight-bold  mb-5">Projects</h2>
            <div className='col mt-5'>
                <div className="car">
                    <div><a href="https://tomato-dun.vercel.app/"><img src={require("../asswsts/tomato.png")} alt="pic1" /></a></div>
                    <div className='content'>
                        <h4>Tomato</h4>
                        <p>Developed a full-featured Tomato food delivery application, completing the frontend 
using React.js. Currently finalizing the backend with Node.js, Express, and MongoDB to 
ensure a seamless user experience. </p>
                    </div>
                </div>
                <div className="car bus">
                    <div className='content'>
                        <h4>Shopper</h4>
                        <p>Currently developing a comprehensive e-commerce website using the MERN stack. 
Completed 30% of the project, including the basic frontend design.</p>
                    </div>
                    <div><a href="https://shopper-d67no5tva-prakashreddyms-projects.vercel.app/"><img src={require("../asswsts/shopper.png")} alt="pic2" /></a></div>
                </div>
                <div className="car">
                    <div><a href="/"><img src={require("../asswsts/pic3.jpeg")} alt="pic3" /></a></div>
                    <div className='content'>
                        <h4>Protfolio</h4>
                        <p>Seamlessly blending Bootstrap with React and CSS, my portfolio showcases a stunning collection of projects, reflecting my dedication to elegant design and robust functionality in web development.</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ProjectSection;
