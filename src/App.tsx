
import './App.css'
import Contact from './contact'
import {About} from './about'
import { Project } from './project'
import { Home } from './home'


function App() {
 
const turn_off_menu= (): void =>{
const uncheck = document.querySelector("#ham-menu") as HTMLInputElement | null;

if (uncheck) {
   uncheck.checked = false;
}

}



  return (
    <div className="container_div">
     <input type="checkbox" id="ham-menu" />
      <label htmlFor="ham-menu">
        <div className="hide-des ">
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </div>
      </label>

      <div className="ham-menu">
        <ul className="centre-text bold-text">
          <li><a href="#home_section" className="link_section" onClick={()=>turn_off_menu()}>Home</a></li>
          <li><a href="#about_section" className="link_section" onClick={()=>turn_off_menu()}>About</a></li>
          <li><a href="#project_section" className="link_section" onClick={()=>turn_off_menu()}>Project</a></li>
          <li><a href="#contact_section" className="link_section" onClick={()=>turn_off_menu()}>Contact</a></li>
        </ul>
      </div>
  <section>
  <Home/>
  <About/>
  <Project/>
  <Contact/>
  </section>
      
    </div>
  )
}

export default App
