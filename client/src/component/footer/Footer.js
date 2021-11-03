import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>MEMBER</h4>
            <h4 className="list-unstyled">
              <li>Dinh Nhu Tan</li>
              <li>Dao Van Tien Quyen</li>
              <li>Tran Toan</li>
              <li>Le Duc An</li>
            </h4>
          </div>
          
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">&copy;{new Date().getFullYear()} HCMUT</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
