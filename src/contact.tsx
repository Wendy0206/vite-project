
import './App.css'

function Contact() {

const send_message =(): void=>{
     const comment = document.querySelector(".comment_in") as HTMLInputElement | null;
    const phone = document.querySelector(".phone_in")  as HTMLInputElement | null;
    const email = document.querySelector(".email_in")  as HTMLInputElement | null;
if(comment && phone && email){
    comment.value='';
  phone.value='';
  email.value='';
}

}


window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal") as NodeListOf<HTMLElement>;

  // Get the total height of the document
  const total = document.body.scrollHeight;

  // Get the current scroll position and the viewport height
  const s = window.scrollY + window.innerHeight;

  // Check if the user has reached the bottom of the page
  if (total - s <= 1) {
    // Iterate over each element and add the "active" class
    reveals.forEach((elm) => {
      elm.classList.add("active");
    });
  }
});


  return (
   <>
        <div className="contact_div" id="contact">
          <a id="contact_section"></a>
          <div className="d-flex justify-content-center">
            <h1 className="line_hi">Lets discuss</h1>
          </div>

          <div className="big_contact">
            <form onSubmit={()=>{return false;}}>
              <div className="styled-input style reveal fade-left">
                <input type="email" required className=" input_class email_in" />

                <label>Email</label>
              </div>

              <div className="styled-input reveal fade-right">
                <input type="text" required className=" input_class phone_in " />

                <label>Phone Number</label>
              </div>

              <div className="styled-input reveal fade-left">
                <textarea required className="input_class comment_in"></textarea>
                <label>Message</label>
              </div>

              <button className="btn-lrg submit-btn" onClick={()=>send_message()} >Send Message</button>
            </form>
          </div>


          <ul className="d-flex mt-3">
            <li>
              <a
               href='https://www.linkedin.com/in/wendy-donley-pierre-5b5261197'
                target="_blank"
                className="social_a"
                ><i className="fa-brands fa-linkedin-in social_size"></i
              ></a>
            </li>

            <li>
              <a
              href='https://github.com/Wendy0206'
                target="_blank"
                className="social_a"
                ><i className="fa-brands fa-github social_size"></i
              ></a>
            </li>

            <li>
              <a
                href='https://stackoverflow.com/users/10836917/dydy'
                target="_blank"
                className="social_a"
                ><i className="fa-brands fa-stack-overflow social_size "></i
              ></a>
            </li>
          </ul>
        </div>
        <footer className="p-4 d-flex justify-content-center footer_style ">
          <h3 className="footer_text">© 2024 wendydonleypierre.dev</h3>
        </footer>

        </>
  )
}

export default Contact
