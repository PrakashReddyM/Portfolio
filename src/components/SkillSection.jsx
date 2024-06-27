// import React from 'react'
// import  "../styles/skills.css"

// const SkillSection = () => {
//   return (
//     <div className="main bg w-100 mt-8 my-5" style={{ backgroundColor: "black" }}>
//     <div className="container text-center py-4 ">
//       <h2 className="font-weight-bold text-white ">
//         <span className="text-success">Technology</span> Stack
//       </h2>
//       <div className="text-white lead pb-4">
//         I design, develop and deliver with these weapons
//       </div>
//     </div>
//     <div
//       className="d-flex w-80 flex-column align-items-center justify-content-between py-3"
//     >
//       <div className="d-flex flex-row justify-content-between">
//         <div className="d-flex flex-column align-items-center p-4" >
//           <img
//             className="img rounded-5 "
            
//             src={require("../asswsts/html.jpeg")}
//             alt="img"
            
//           />
          
//         </div>
//         <div className="d-flex flex-column align-items-center p-4">
//           <img
//             className="img rounded"
//             src={require("../asswsts/css.jpeg")}
//             alt="img"
//           />
          
//         </div>
//         <div className="d-flex flex-column align-items-center p-4">
//           <img
//             className="img rounded"
//             src={require("../asswsts/jss.jpeg")}
//             alt="img"
//           />
          
//         </div>
//         <div className="d-flex flex-column align-items-center p-4">
//           <img
//             className="img rounded"
//             src={require("../asswsts/boot.jpeg")}
//             alt="img"
//           />
          
//         </div>
//       </div>
//       <div className="d-flex flex-row mb-5">
//         <div className="d-flex flex-column align-items-center p-4">
//           <img
//             className="img rounded"
//             src={require("../asswsts/reactjs.jpeg")}
//             alt="img"
//           />
          
//         </div>
        
//         <div className="d-flex flex-column align-items-center p-4">
//           <img
//             className="img rounded"
//             src={require("../asswsts/exp.jpeg")}
//             alt="img"
//           />
          
//         </div>
//         <div className="d-flex flex-column align-items-center p-4">
//           <img
//             className="img rounded"
//             src={require("../asswsts/node.jpeg")}
//             alt="img"
//             style={{width:"100"}}
//           />
          
//         </div>
//         <div className="d-flex flex-column align-items-center p-4">
//           <img
//             className="img rounded"
//             src={require("../asswsts/mango.jpeg")}
//             alt="img"
//           />
          
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default SkillSection


import React from 'react';
import "../styles/skills.css";

const SkillSection = () => {
  return (
    <div className="main bg w-100 mt-8 my-5" style={{ backgroundColor: "black" }}>
      <div className="container text-center py-4 ">
        <h2 className="font-weight-bold text-white ">
          <span className="text-success">Technology</span> Stack
        </h2>
        <div className="text-white lead pb-4">
          I design, develop, and deliver with these weapons
        </div>
      </div>
      <div className="d-flex w-80 flex-column align-items-center justify-content-between py-2">
        <div className="d-flex flex-wrap justify-content-around">
          <div className="d-flex flex-column align-items-center p-4" >
            <img className="img rounded-5" src={require("../asswsts/html.jpeg")} alt="img" />
          </div>
          <div className="d-flex flex-column align-items-center p-4">
            <img className="img rounded" src={require("../asswsts/css.jpeg")} alt="img" />
          </div>
          <div className="d-flex flex-column align-items-center p-4">
            <img className="img rounded" src={require("../asswsts/jss.jpeg")} alt="img" />
          </div>
          <div className="d-flex flex-column align-items-center p-4">
            <img className="img rounded" src={require("../asswsts/boot.jpeg")} alt="img" />
          </div>
          <div className="d-flex flex-column align-items-center p-4">
            <img className="img rounded" src={require("../asswsts/reactjs.jpeg")} alt="img" />
          </div>
          <div className="d-flex flex-column align-items-center p-4">
            <img className="img rounded" src={require("../asswsts/exp.jpeg")} alt="img" />
          </div>
          <div className="d-flex flex-column align-items-center p-4">
            <img className="img rounded" src={require("../asswsts/node.jpeg")} alt="img"  />
          </div>
          <div className="d-flex flex-column align-items-center p-4">
            <img className="img rounded" src={require("../asswsts/mango.jpeg")} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
