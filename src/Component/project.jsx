import React from 'react';
import '../App.css';
function Project() {
   return (
     <section className="section project" id="project"> 
     <h2>My Projects</h2>
     <p className="project-subtitle">
     Here are some of the projects I have created while learning and improving my
      web development skills. </p>
     <div className="project-container">
     <div className="project-card"> 
      <div className="project-icon">💻</div>
       <h3>Portfolio Website</h3>
        <p> A modern personal portfolio website created using React and CSS to
           showcase my skills, projects, and experience. </p>
            <button>View Project</button>
             </div>
              <div className="project-card"> 
               <div className="project-icon">🌐</div>
               <h3>Business Website</h3>
               <p> A responsive and attractive business website designed with a
              clean layout and user-friendly interface. </p>
             <button>View Project</button> </div>
            <div className="project-card"> 
            <div className="project-icon">🛒</div> 
           <h3>Online Store</h3>
           <p> A clean and stylish e-commerce website design created
           to provide a simple and engaging online shopping 
           experience. </p>
         <button>View Project</button> 
         </div>
       </div>
       </section>
    ); 
}

export default Project;