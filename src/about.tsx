import { useEffect} from 'react'
import './App.css'

export const About=()=> {

 useEffect(()=>{
generate_bg();
 },[])


 useEffect(()=>{
setTimeout(pop_function(), 4000)
 },[])



let interval :number;
  let allIcon: string[]= ["fa-solid fa-code fa-fade",
    " fa-solid fa-code-compare fa-fade",
    " fa-regular fa-file-code fa-fade",
    " fa-brands fa-free-code-camp fa-fade",
    " fa-solid fa-gear fa-fade",
    " fa-solid fa-code-merge fa-fade",
    " fa-brands fa-gitkraken fa-fade",
    " fa-solid fa-code-commit fa-fade",
    " fa-brands fa-codepen fa-fade",
    " fa-brands fa-github fa-fade",
    " fa-brands fa-react fa-fade",
    " fa-solid fa-code-fork fa-fade",
    " fa-brands fa-square-gitlab fa-fade",
    " fa-solid fa-laptop-code fa-fade",
    " fa-solid fa-user-secret fa-fade",
    " fa-solid fa-share-nodes fa-fade",
    " fa-brands fa-github-alt fa-fade",
    " fa-solid fa-folder fa-fade",
    " fa-regular fa-file-code fa-fade",
    " fa-brands fa-square-js fa-beat fa-fade",
    " fa-brands fa-python fa-fade",
    " fa-solid fa-database fa-fade",
    " fa-brands fa-quinscape fa-fade",
    " fa-solid fa-bug fa-fade",
    " fa-solid fa-share-nodes fa-fade",
    " fa-solid fa-code-fork fa-fade",
    " fa-solid fa-cube fa-fade",
    " fa-solid fa-bars fa-fade",
    " fa-solid fa-folder-open fa-fade",
    " fa-solid fa-code fa-beat fa-fade",
    " fa-solid fa-code-compare fa-fade",
    " fa-brands fa-free-code-camp fa-fade",
    " fa-solid fa-gear fa-fade",
    " fa-solid fa-code-merge fa-fade",
    " fa-brands fa-gitkraken fa-fade",
    " fa-solid fa-code-commit fa-fade",
    " fa-brands fa-codepen fa-fade",
    " fa-brands fa-github fa-fade",
    " fa-brands fa-react fa-fade",
    " fa-brands fa-square-gitlab fa-fade",
    " fa-solid fa-laptop-code fa-fade",
    " fa-solid fa-user-secret fa-fade",
    " fa-brands fa-github-alt fa-fade",
    " fa-solid fa-folder fa-fade",
    " fa-brands fa-square-js fa-fade",
    " fa-brands fa-python fa-fade",
    " fa-solid fa-database fa-fade",
    " fa-brands fa-quinscape fa-fade",
    " fa-solid fa-bug fa-fade",
    " fa-solid fa-share-nodes fa-fade",
    " fa-solid fa-cube fa-fade",
    " fa-solid fa-bars fa-fade",
    " fa-solid fa-code-compare fa-fade",
    " fa-solid fa-folder-open fa-fade",
    " fa-solid fa-code fa-fade",
    " fa-solid fa-code-fork fa-fade",
    " fa-solid fa-share-nodes fa-fade",
    " fa-solid fa-code-compare fa-fade",
    " fa-regular fa-file-code fa-fade",
    " fa-solid fa-gear fa-fade",
    " fa-solid fa-code-merge fa-fade",
    " fa-brands fa-gitkraken fa-fade",
    " fa-solid fa-code-commit fa-fade",
    " fa-brands fa-codepen fa-fade",
    " fa-brands fa-github fa-fade",
    " fa-brands fa-react fa-fade",
    " fa-brands fa-square-gitlab fa-fade  fa-fade",
    " fa-solid fa-laptop-code  fa-fade",
    " fa-solid fa-user-secret  fa-fade",
    " fa-brands fa-github-alt  fa-fade",
    " fa-solid fa-folder  fa-fade",
    " fa-brands fa-free-code-camp  fa-fade",
    " fa-brands fa-square-js  fa-fade",
    " fa-brands fa-python   fa-fade",
    " fa-solid fa-share-nodes  fa-fade",
    " fa-solid fa-database  fa-fade",
    " fa-brands fa-quinscape fa-bounce  fa-fade",
    " fa-solid fa-bug  fa-fade",
    " fa-solid fa-share-nodes",
       " fa-solid fa-code-commit fa-fade",
    " fa-brands fa-codepen fa-fade",
    " fa-brands fa-github fa-fade",
    " fa-brands fa-react fa-fade",
    " fa-solid fa-code-fork fa-fade",
    " fa-brands fa-square-gitlab fa-fade",
    " fa-solid fa-laptop-code fa-fade",
    " fa-solid fa-user-secret fa-fade",
    " fa-solid fa-share-nodes fa-fade",
    " fa-brands fa-github-alt fa-fade",
    " fa-solid fa-folder fa-fade",
    " fa-regular fa-file-code fa-fade",
    " fa-brands fa-square-js fa-beat fa-fade",
    " fa-brands fa-python fa-fade",
    " fa-solid fa-database fa-fade",
    " fa-brands fa-quinscape fa-fade",
    " fa-solid fa-bug fa-fade",
    " fa-solid fa-share-nodes fa-fade",
    " fa-solid fa-code-fork fa-fade",
    " fa-solid fa-cube fa-fade",
    " fa-solid fa-bars fa-fade",
    ];

  
const generate_bg = (): void => {
  const get_left_side = document.querySelector('.about_left_div') as HTMLElement | null;
  
  // Ensure get_left_side is not null
  if (get_left_side) {
  
    for (let i = 0; i < 100; i++) {
      let newDiv = document.createElement('div');
      newDiv.className = 'B' + i;
      let newI = document.createElement('i');
      // Ensure the icon index is within bounds
      newI.className = allIcon[i] || '';  // Provide a fallback or default class name if needed
      newDiv.appendChild(newI);
      get_left_side.appendChild(newDiv);
    }


  }
};

type ClearIntervalFunction = () => void;
const pop_function = (): ClearIntervalFunction => {

  interval = setInterval(() => {
    remove_highlight();

    const id_div = '.B' + Math.floor(Math.random() * 99);
    const get_spot = document.querySelector(id_div + '>i') as HTMLElement | null;

    if (get_spot) {
      get_spot.style.visibility = 'visible';
    }

  }, 1500);

  return () => {
    if (interval) {
      clearInterval(interval);
    }
  };
};






const remove_highlight = (): void => { 
  const get_all = document.querySelectorAll('.about_left_div i');

  // Iterate over NodeList and update the style
  get_all.forEach((elm: Element) => {
    const element = elm as HTMLElement; 
    element.style.visibility = 'hidden';
  });
};



  return (
     <div className="about_div" id="about">
          <a id="about_section"></a>

          <div className="about_left_div">

          </div>

          <div className="about_right_div">
 <h1 className="mb-4 line_hi">Who am I ?</h1>
            <p className="descr_p mb-5">
              I'm a software developer located in Hollywood, FL.
              <strong>4Geeks Academy</strong> alumni with a <strong>Bachelors of science degree</strong> in
            <strong> Computer Science</strong>  and a minor in business management. Passionate
              about my work, eagerly seeking every possible opportunity to
              enhance and deliver operational, intuitive solutions. With two
              years of experience in JavaScript, MySQL, and SQL Server, I've
              collaborated on numerous projects. I'm committed to
              advancing and staying current with technology.
            </p>

            <a href="https://drive.google.com/file/d/1A2i2oyFTdSX_5OMx37q-1aoipv11pNvu/view" className="resume_button ">My Resume</a>

          </div>
      

    

        </div>

  )
}


