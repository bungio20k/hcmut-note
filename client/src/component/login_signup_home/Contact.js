import React from "react";
import Navbar from "./Navbar";
import Footer from "../footer/Footer"



export default function Contact() {



  return (
    <div>
      <Navbar />
      <hr className='text-info' />
      <br />
      <br />

      <div className='container'>
        <div className='row justify-content-center'>
          <div class="col-md-6 col-sm-12 pt-lg">
            <div class="  ">


              <h2 id="h2text">We’d love to hear from you </h2>
              <h5 id="hometext">
                {" "}
                Have questions about our products, features, trials?
                Need a demo?
                Our teams will help you.
              </h5>

              <p class="no-margin">&nbsp; </p>
              <p>Contact info:</p>
              <p class="no-margin"><strong>Phone: </strong> +84 352385014</p>
              <p class="no-margin"><strong>Email: </strong>&nbsp; contact@hcmut-note.com | support@hcmut-note.com</p>


            </div>
          </div>
          <div class="col-md-6 col-sm-12 pt-lg">

            <div class="form-wrapper">
              <h2 id="h2text">Get in touch with us</h2>

              <form class="mbr-form" method="post" >

                <div class="row row-sm-offset">
                  <div class="col-md-6 multi-horizontal" data-for="name">
                    <div class="form-group">
                      <label class="form-control-label mbr-fonts-style display-7" for="name-form1-4">Name</label>
                      <input type="text" class="form-control" name="name" data-form-field="Name" required id="name-form1-4" />
                    </div>
                  </div>
                  <div class="col-md-6 multi-horizontal" data-for="email">
                    <div class="form-group">
                      <label class="form-control-label mbr-fonts-style display-7" for="email-form1-4">Email</label>
                      <input type="email" class="form-control" name="email" data-form-field="Email" required id="email-form1-4" />
                    </div>
                  </div>

                </div>
                <div class="form-group" data-for="message">
                  <label class="form-control-label mbr-fonts-style display-7" for="message-form1-4">Message</label>
                  <textarea type="text" class="form-control" name="message" rows="7" data-form-field="Message" id="message-form1-4"></textarea>
                </div>
                {/* <button id="subbutton" onClick={handleSubmitContact}>SUBMIT</button> */}
                <br />
                <button id="subbutton" >SUBMIT</button>
              </form>

              <br />

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
