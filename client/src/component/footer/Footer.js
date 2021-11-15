import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div class="col-4">

            <h4>HCMUT Note</h4>

            <ul class="footer-links d-inline">
              <a href="\" class=" text-muted mb-0">Home</a>|
              <a href="\tutorial" class=" text-muted mb-0" >Tutorial </a>|
              <a href="\about" class=" text-muted mb-0" >About us</a>|
              <a href="\contact" class=" text-muted mb-0">Contact</a>|
              <a href="\login" class=" text-muted mb-0">Login</a>|
              <a href="\register" class=" text-muted mb-0">Resgiter</a>
            </ul>

            <br />
            <br />
            <p className="col-sm">&copy;{new Date().getFullYear()} HCMUT</p>
          </div>

          <div class="col-4">

            <h4>Contact </h4>
            <br />

            <div className='contact-icons'>
              <i class="bi bi-telephone-fill"></i>
              <p className='d-inline' >+84 352385014</p>
            </div>

            <div className='contact-icons'>
              <i class="bi bi-headset mr-5"></i>
              <p className='d-inline ml-5'><a href="mailto:support@hcmut-note.com">support@hcmut-note.com</a></p>
            </div>

          </div>

          <div class="col-4">


            <h4 className='d-block'>About the Hcmut Note</h4>
            <p>
              More than just a notes organiser, we provide an entire workspace
              for those who hustle hard
            </p>



            <div className='footer-icons'>
              <a href="#"><i class="bi bi-facebook"></i></a>
              <a href="#"><i class="bi bi-twitter"></i></a>
              <a href="#"><i class="bi bi-linkedin"></i></a>
              <a href="#"><i class="bi bi-github"></i></a>
            </div>

          </div>



        </div>
        <hr />
        <div className="row">
          {/* <p className="col-sm">&copy;{new Date().getFullYear()} HCMUT</p> */}
        </div>
      </div>
    </div >
  );
};

export default Footer;
