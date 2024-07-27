import "./App.css";
import DyGeek from './assets/DyGeek.png'
import countryquiz from './assets/countryquiz.png'
import spotless from './assets/spotless.png'
import mediaPlayer from './assets/mediaPlayer.png'
import checkers from './assets/checkers.png'
import phi from './assets/phi.png'




export const Project = () => {
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
          <div className="project_card_div">
            <div className="project_img_div" onMouseOver={()=>show_code(0)}>
              <img
                className="card-img-top"
                src={DyGeek}
                alt="Card image cap"
              />
            </div>
            <div className="project_info_div">
              <div className="link_l">
                <a
                  href="https://github.com/Wendy0206/Wendy_DYGeek_Project.git"
                  target="_blank"
                  className="undo_a"
                >
                  <i className="fa-brands fa-github fa-2xl"></i>
                </a>
                <a
                  href="https://dygeek.netlify.app/"
                  target="_blank"
                  className="undo_a"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square fa-xl fa-fade"></i>
                </a>
              </div>

              <div className="project_description_div">
                <h3 className="featured_text">DyGeek</h3>
                <h4 className="descr_p">
                   Marvel and Pop Culture fan can look up series,
                  comics and events of their favorite characters.
                </h4>
              </div>
              <div className="project_tech_div">
                <h5>React</h5>
                <h5>JS</h5>
                <h5>REST API</h5>
                <h5>Marvel Api</h5>
                <h5>Firebase</h5>
              </div>
            </div>
             {/* Project # 2 ends below */}
          </div>
          <div className="project_card_div">
            <div className="project_img_div" onMouseOver={()=>show_code(1)}>
              <img
                className="card-img-top"
                src={phi}
                alt="Card image cap"
              />
            </div>
            <div className="project_info_div">
              <div className="link_l">
                <a href="https://phihaiti.com/" target="_blank" className="undo_a">
                  <i className="fa-brands fa-github fa-2xl"></i>
                </a>
                <a
                  href="https://phihaiti.com/"
                  target="_blank"
                  className="undo_a"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square fa-xl fa-fade"></i>
                </a>
              </div>
              <div className="project_description_div">
                <h3 className="featured_text">PHI Wellness</h3>
                <h4 className="descr_p">
                  A CRM designed for their daily activities. Create orders,
                  Refund, and other processing.
                </h4>
              </div>
              <div className="project_tech_div">
                <h5>React</h5>
                <h5>Php</h5>
                <h5>JavaScript</h5>
                <h5>Mysql</h5>
              </div>
            </div>
            {/* // Project # 3 ends below */}
          </div>
          <div className="project_card_div">
            <div className="project_img_div" onMouseOver={()=>show_code(2)}>
              <img
                className="card-img-top"
                src={spotless}
                alt="Card image cap"
              />
            </div>
            <div className="project_info_div">
              <div className="link_l">
                <a
                  href="https://github.com/Wendy0206/Final_Project_Wendy_Chris"
                  target="_blank"
                  className="undo_a"
                >
                  <i className="fa-brands fa-github fa-2xl "></i>
                </a>

                <a
                  href="https://github.com/Wendy0206/Final_Project_Wendy_Chris"
                  target="_blank"
                  className="undo_a"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square fa-xl fa-fade"></i>
                </a>
              </div>
              <div className="project_description_div">
                <h3 className="featured_text">Spotless</h3>

                <h4 className="descr_p">
                  A on demand cleaning service app that connects homeowner and
                  Airbnb Host with Gig Worker.
                </h4>
              </div>
              <div className="project_tech_div">
                <h5>React</h5>
                <h5>JS</h5>
                <h5>Flask</h5>
                <h5>Sql Alchemy</h5>
                <h5>Context API</h5>
                <h5>JWT</h5>
              </div>
            </div>
            {/* // Project # 2 ends below */}
          </div>
          {/* // Project_div ends below */}
        </div>
        {/* // All project div ends below */}
      </div>
      {/* // All project div starts below */}
      <div className="all_project_div">
        <h1 className="line_hi project_text">Other Projects</h1>
        <div className="project_div">
          <a id="project_section"></a>
          <div className="project_card_div">
            <div className="project_img_div" onMouseOver={()=>show_code(3)}>
              <img
                className="card-img-top"
                src={checkers}
                alt="Card image cap"
              />
            </div>
            <div className="project_info_div">
              <div className="link_l">
                <a
                  href="https://github.com/Wendy0206/Wendy_checkers_Game"
                  target="_blank"
                  className="undo_a"
                >
                  <i className="fa-brands fa-github fa-2xl"></i>
                </a>
                <a
                  href="https://checkersbywendy.netlify.app/"
                  target="_blank"
                  className="undo_a"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square fa-xl fa-fade"></i>
                </a>
              </div>

              <div className="project_description_div">
                <h3 className="featured_text">Checkers App</h3>
                <h4 className="descr_p">
                  A simple react app to enjoy with your partner or by yourself.
                </h4>
              </div>
              <div className="project_tech_div">
                <h5>React</h5>
                <h5>JavaScript</h5>
              </div>
            </div>
            {/* // Project # 4 ends below */}
          </div>
          <div className="project_card_div">
            <div className="project_img_div" onMouseOver={()=>show_code(4)}>
              <img
                className="card-img-top"
                src={mediaPlayer}
                alt="Card image cap"
              />
            </div>
            <div className="project_info_div">
              <div className="link_l">
                <a
                  href="https://github.com/Wendy0206/wendy_media_api"
                  target="_blank"
                  className="undo_a"
                >
                  <i className="fa-brands fa-github fa-2xl "></i>
                </a>

                <a
                  href="https://mediaplayerbywendy.vercel.app/"
                  target="_blank"
                  className="undo_a"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square fa-xl fa-fade"></i>
                </a>
              </div>
              <div className="project_description_div">
                <h3 className="featured_text">Audio Streaming</h3>

                <h4 className="descr_p">A simple Music streaming app.</h4>
              </div>
              <div className="project_tech_div">
                <h5>React</h5>
                <h5>JavaScript</h5>
                <h5>Spotify Api</h5>
              </div>
            </div>
            {/* // Project # 5 ends below */}
          </div>
          <div className="project_card_div">
            <div className="project_img_div" onMouseOver={()=>show_code(5)}>
              <img
                className="card-img-top"
                src={countryquiz}
                alt="Card image cap"
              />
            </div>
            <div className="project_info_div">
              <div className="link_l">
                <a
                  href="https://github.com/Wendy0206/wendy_country_quiz"
                  target="_blank"
                  className="undo_a"
                >
                  <i className="fa-brands fa-github fa-2xl"></i>
                </a>
                <a
                  href="https://countryquizbywendy.vercel.app/"
                  target="_blank"
                  className="undo_a"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square fa-xl fa-fade"></i>
                </a>
              </div>
              <div className="project_description_div">
                <h3 className="featured_text">Country Quiz</h3>
                <h4 className="descr_p">
                  How well do you know history, would you recognize those flags?
                  Try and tell me.
                </h4>
              </div>
              <div className="project_tech_div">
                <h5>React</h5>
                <h5>JavaScript</h5>
              </div>
            </div>
            {/* Project # 3 ends below */}
          </div>
          {/* // Project_div ends below */}
        </div>
         {/* All project div ends below */}
      </div>
    </>
  );
};
