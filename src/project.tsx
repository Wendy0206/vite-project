import "./App.css";
import DyGeek from './assets/DyGeek.png'
import countryquiz from './assets/countryquiz.png'
import spotless from './assets/spotless.png'
import mediaPlayer from './assets/mediaPlayer.png'
import checkers from './assets/checkers.png'
import phi from './assets/phi.png'

import { useState } from "react";

export const Project = () => {


interface eachProject {
  codeLink: string;
  title: string;
  projectLink: string;
  description: string;
  skills: string;
  img_url: string;
}

const [projectObj] = useState<eachProject[]>([
  {
    codeLink: 'https://github.com/Wendy0206/Wendy_DYGeek_Project',
    img_url: DyGeek,
    title: 'Dygeek',
    projectLink: 'https://dygeek.netlify.app/',
    description: 'Marvel and Pop Culture fan can look up series, comics and events of their favorite characters.',
    skills: 'React JS REST API Marvel Api Firebase'
  },
  {
    codeLink: 'https://phihaiti.com/',
     img_url: phi,
    title: 'PHI Wellness',
    projectLink: 'https://phihaiti.com/',
    description: 'A CRM designed for their daily activities. Create orders, Refund, and other processing.',
    skills: 'React Php JavaScript Mysql'
  },
    {
    codeLink: 'https://github.com/Wendy0206/Spotless_Project_Wendy_Chris',
     img_url: spotless,
    title: 'Spotless',
    projectLink: 'https://github.com/Wendy0206/Spotless_Project_Wendy_Chris',
    description: 'A on demand cleaning service app that connects homeowner and Airbnb Host with Gig Worker.',
    skills: 'React  JS  Flask Sql  Alchemy Context API JWT'
  }

]);
const [otherProject] = useState<eachProject[]>([
   {
    codeLink: 'https://github.com/Wendy0206/Wendy_checkers_Game',
     img_url: checkers,
    title: 'CHeckers game',
    projectLink: 'https://checkersbywendy.netlify.app/',
    description: 'A simple react app to enjoy with your partner or by yourself.',
    skills: 'React JavaScript '
  },
   {
    codeLink: 'https://github.com/Wendy0206/wendy_media_api',
     img_url: mediaPlayer,
    title: 'Audio Streaming',
    projectLink: 'https://mediaplayerbywendy.vercel.app/',
    description: 'A simple Music streaming app.',
    skills: 'React  JavaScript'
  }, 
  {
    codeLink: 'https://github.com/Wendy0206/wendy_country_quiz',
     img_url: countryquiz,
    title: 'Country Quiz',
    projectLink: 'https://countryquizbywendy.vercel.app/',
    description: 'How well do you know history, would you recognize those flags? Try and tell me.',
    skills: 'React  JavaScript'
  }
]);



const show_code= (id : number): void =>{
//const imageHover = document.querySelectorAll(".project_img_div") as NodeListOf<HTMLElement>;
const showInfo = document.querySelectorAll(".project_info_div") as NodeListOf<HTMLElement>;
showInfo.forEach((elm)=>elm.classList.remove('show_project_info'));
showInfo[id].classList.add("show_project_info");
}

  return (
    <>
   
      <div className="all_project_div">
        <h1 className="line_hi project_text">Projects</h1>
        <div className="project_div">
          <a id="project_section"></a>

{projectObj.map((element,ind)=>
          <div className="project_card_div" key={ind}>
            <div className="project_img_div" onMouseOver={()=>show_code(ind)}>
              <img
                className="card-img-top"
                src={element.img_url}
                alt="Card image cap"
              />
            </div>
            <div className="project_info_div">
              <div className="link_l">
                <a
                  href={element.codeLink}
                  target="_blank"
                  className="undo_a"
                >
                  <i className="fa-brands fa-github fa-2xl"></i>
                </a>
                <a
                  href={element.projectLink}
                  target="_blank"
                  className="undo_a"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square fa-xl fa-fade"></i>
                </a>
              </div>

              <div className="project_description_div">
                <h3 className="featured_text">{element.title}</h3>
                <h4 className="descr_p">{element.description}</h4>
              </div>
              <div className="project_tech_div">
                <h5>{element.skills}</h5>
                
              </div>
            </div>
           
          </div>


)}
         
        </div>

      </div>



      {/* // All project div starts below */}
      <div className="all_project_div">
        <h1 className="line_hi project_text">Other Projects</h1>
        <div className="project_div">

     {otherProject.map((element,ind)=>
          <div className="project_card_div" key={ind}>
            <div className="project_img_div" onMouseOver={()=>show_code(ind+3)}>
              <img
                className="card-img-top"
                src={element.img_url}
                alt="Card image cap"
              />
            </div>
            <div className="project_info_div">
              <div className="link_l">
                <a
                  href={element.codeLink}
                  target="_blank"
                  className="undo_a"
                >
                  <i className="fa-brands fa-github fa-2xl"></i>
                </a>
                <a
                  href={element.projectLink}
                  target="_blank"
                  className="undo_a"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square fa-xl fa-fade"></i>
                </a>
              </div>

              <div className="project_description_div">
                <h3 className="featured_text">{element.title}</h3>
                <h4 className="descr_p">{element.description}</h4>
              </div>
              <div className="project_tech_div">
                <h5>{element.skills}</h5>
                
              </div>
            </div>
           
          </div>


)}    
        </div>
      
      </div>
    </>
  );
};
