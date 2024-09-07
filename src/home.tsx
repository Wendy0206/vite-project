import { useRef } from "react";
import "./App.css";
import img1 from "./assets/image_part_001.png";
import img2 from "./assets/image_part_002.png";
import img3 from "./assets/image_part_003.png";
import img4 from "./assets/image_part_004.png";
import img5 from "./assets/image_part_005.png";
import img6 from "./assets/image_part_006.png";
import img7 from "./assets/image_part_007.png";
import img8 from "./assets/image_part_008.png";
import img9 from "./assets/image_part_009.png";
import img10 from "./assets/image_part_010.png";
import img11 from "./assets/image_part_011.png";
import img12 from "./assets/image_part_012.png";

export const Home = () => {
  let currentMode = useRef(0);

  const dark_mode = (): void => {
    const dark = document.querySelector(".darkMode") as HTMLElement;
    const homeLeft = document.querySelector(".left_side") as HTMLElement | null;
    //const awesome_icon = document.querySelector(".visible") as HTMLElement | null;
    const project = document.querySelectorAll(
      ".all_project_div"
    ) as NodeListOf<HTMLElement>;
    const footerS = document.querySelector(
      ".footer_style"
    ) as HTMLElement | null;
    const container = document.querySelector(
      ".container_div"
    ) as HTMLElement | null;
    const awesome = document.querySelectorAll(
      ".about_img i"
    ) as NodeListOf<HTMLElement>;
    const inputBg = document.querySelectorAll(
      ".input_class"
    ) as NodeListOf<HTMLElement>;
  
    const social = document.querySelectorAll(
      ".social_a"
    ) as NodeListOf<HTMLElement>;
    const hiLine = document.querySelectorAll(
      ".line_hi"
    ) as NodeListOf<HTMLElement>;
    const submit = document.querySelector(".submit-btn") as HTMLElement | null;
      const resume = document.querySelector(".resume_button") as HTMLElement | null;
    const footerYear = document.querySelector(
      ".footer_text"
    ) as HTMLElement | null;
     const social_l = document.querySelectorAll(
      ".social_size"
    )  as NodeListOf<HTMLElement>;

    if (
      homeLeft &&
      project &&
      footerS &&
      container &&
      awesome &&
      inputBg &&
      social &&
      hiLine &&
      submit &&
      footerYear &&
      dark && resume && social_l
    ) {

      if (currentMode.current === 0) {
        dark.classList.remove("fa-moon");
        dark.classList.add("text-light");
        dark.classList.add("fa-sun");
        homeLeft.style.backgroundColor = "rgba(33, 96, 47, 0.51)";
        project[0].style.backgroundColor = "rgba(33, 96, 47, 0.51)";
        project[1].style.backgroundColor = "rgba(33, 96, 47, 0.51)";
        footerS.style.backgroundColor = "rgba(33, 96, 47, 0.51)";
        submit.style.backgroundColor = "rgba(33, 96, 47, 0.51)";
       
         resume.style.color = "white";
        social_l[0].style.color = "white";
         social_l[1].style.color = "white";
          social_l[2].style.color = "white";
        container.classList.toggle("dark_mode");

        awesome.forEach((element) => {
          element.style.color = "black";
        });

    
        social.forEach((element) => {
          element.style.color = "black";
        });

           inputBg.forEach((element) => {
          element.style.backgroundColor = "rgba(33, 96, 47, 0.51)";
        });

  hiLine.forEach((elm) => (elm.style.color = "white"));

        currentMode.current = 1;
      } else {
        dark.classList.remove("fa-sun");
        dark.classList.remove("text-light");
        dark.classList.add("fa-moon");
       
       social_l[0].style.color = "black";
        social_l[1].style.color = "black";
         social_l[2].style.color = "black";
        submit.style.backgroundColor = "#1a261d";
      
         resume.style.color = "black";
        container.classList.toggle("dark_mode");
        social.forEach((elm) => (elm.style.color = "white"));
      
       hiLine.forEach((element) => { element.style.color = "black";});

  inputBg.forEach((element) => {
          element.style.backgroundColor = "#2d2d2d";
        });

        awesome.forEach((element) => {
          element.style.color = "white";
        });

      //  document.documentElement.style.setProperty("--color", "white");
        currentMode.current = 0;
      }
    }
  };

  return (
    <div className="home_div" id="home">
      <a id="home_section"></a>
      <div className="left_side">
        <h3 className=" line_hi">Hi,</h3>
        <div className="d-flex">
          <h1 className="header_style slide_in">&lt;</h1>
          <h1 className="header_style">Wendy</h1>
        </div>
        <h1 className="header_style header_shake">Donley</h1>
        <div className="d-flex">
          <h1 className="header_style text-light">Pierre</h1>
          <h1 className="header_style slide_out">/&gt;</h1>
        </div>
      </div>

      <div className="right_side">
        <div className="dark_mode_div">
          <i
            className="fa-solid fa-moon fa-flip darkMode"
            onClick={() => dark_mode()}
          ></i>
        </div>
        <div className="theBoard">
          <div className=" fade_in  delay-1">
            <img src={img1} className="image_part" />
          </div>
          <div className=" fade_in  delay-2">
            <img src={img2} className="image_part" />
          </div>
          <div className=" fade_in  delay-3">
            <img src={img3} className="image_part" />
          </div>
          <div className=" fade_in  delay-4">
            <img src={img4} className="image_part" />
          </div>
          <div className=" fade_in  delay-5">
            <img src={img5} className="image_part" />
          </div>
          <div className=" fade_in  delay-6">
            <img src={img6} className="image_part" />
          </div>
          <div className=" fade_in  delay-7">
            <img src={img7} className="image_part" />
          </div>
          <div className=" fade_in  delay-8">
            <img src={img8} className="image_part" />
          </div>
          <div className=" fade_in  delay-9">
            <img src={img9} className="image_part" />
          </div>
          <div className=" fade_in  delay-10">
            <img src={img10} className="image_part" />
          </div>
          <div className=" fade_in  delay-11">
            <img src={img11} className="image_part" />
          </div>
          <div className=" fade_in  ">
            <img src={img12} className="image_part" />
          </div>
        </div>
      </div>
    </div>
  );
};
