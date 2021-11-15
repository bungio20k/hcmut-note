import React from "react";
import Navbar from "./Navbar";
import Footer from "../footer/Footer"

export default function About() {
  return (
    <div>
      <Navbar />
      <hr className="text-info" />

      <div class="container py-5">
        <div class="row h-100 align-items-center py-5">
          {/* <div class="row h-100 align-items-center py-5"> */}
          <div class="col-lg-6">
            <h2 class="display-4">About us</h2>
            {/* <h5>Hcmut Note is a web application that allows you to take notes, schedule everything and is specially designed for HCMUT-er.</h5> */}
            <p class="lead text-muted mb-0">Hcmut Note is a web application that allows you to take notes, schedule everything and is specially designed for HCMUT-er.</p>
            <br />
            {/* <p class="d-inline lead text-muted mb-0"> Try it now. </p> */}
            <p className="d-inline lead text-muted mb-0 mr-5">Try it now.    </p>
            <a href="/register" class=" btn btn-light px-5 rounded-pill shadow-sm" id="loginbt" >Resgiter</a>

          </div>
          <div class="col-lg-6 d-none d-lg-block">
            <img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" class="img-fluid" /></div>
        </div>
      </div>


      {/* <div class="bg-white py-5"> */}
      <div class="container">

        <div class="row align-items-center">
          <div class="col-lg-5 px-5 mx-auto">
            <img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" class="img-fluid mb-4 mb-lg-0" /></div>
          <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
            <h2 class="font-weight-light">Simple but effective.</h2>
            <p class="lead text-muted mb-0">We aim to be more convenient, simple, user-friendly and efficient than a regular note-taking app.</p>
            <br />

            <p class="d-inline lead text-muted mb-0"> Want to learn more? </p>
            <a href="/tutorial" class=" btn btn-light px-5 rounded-pill shadow-sm" id="loginbt">Visit tutorial page</a>

          </div>
        </div>
      </div>
      {/* </div> */}

      <div class="py-5">
        <div class="container py-5">
          <div class="row mb-4">
            <div class="col-lg-5">
              <h2 class="display-4 font-weight-light">Our team</h2>
              <p class="lead text-muted mb-0">HCMUT Note is developed by</p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item text-muted">Le Duc An</li>
                <li class="list-group-item text-muted">Tran Toan</li>
                <li class="list-group-item text-muted">Dinh Nhu Tan</li>
                <li class="list-group-item text-muted">Dao Van Tien Quyen</li>

              </ul>
            </div>
            <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" class="img-fluid mb-4 mb-lg-0" />
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div >

  );
}