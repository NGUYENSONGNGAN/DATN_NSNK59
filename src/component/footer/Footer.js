import React from "react";
import "./footer.css";

import { FaHome, FaRegEnvelope, FaPhone } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div
      className="font-small mdb-color lighten-3 pt-4 Footer"
    > 
      <div className="container text-center text-md-left">  
        <div className="row"> 
          <div className="col-md-3 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">  
            <h5 className="font-weight-bold mb-4">INTRODUCE</h5>
            <p>
             lorem ipsum dolor sit amet, consect
            </p>
            <p>
            lorem ipsum dolor sit amet, consect
            </p>
            <p>
            lorem ipsum dolor sit amet, consect
            </p>
          </div>
   
          <hr className="clearfix w-100 d-md-none"></hr>
          <div className="col-md-3 col-lg-3 mx-12 my-md-4 my-0 mt-4 mb-1">
            <h5 className="font-weight-bold mb-4">ADDRESS</h5>

            <ul className="list-unstyled">
              <li>
                <p>
                  <FaHome /> Quận 9, Việt Nam
                </p>
              </li>
              <li>
                <p> 
                  <FaRegEnvelope /> nguyensongnganuuuu@gmail.com
                </p>
              </li>
              <li>
                <p>
                <FaPhone /> 0988 390 847
                </p>
              </li>
            </ul>
          </div>

          <hr className="clearfix w-100 d-md-none"></hr>
          <div className="col-md-3 col-lg-3 text-center mx-12 my-4">
            <h5 className="font-weight-bold mb-4">FOLLOW ME</h5>
            <div className="row">
              <div className="col">
                <a
                  href="https://www.facebook.com/songngannguye/"
                  type="button"
                  className="btn-floating"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>

              <div className="col">
                <a href="#" type="button" className="btn-floating">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>

              <div className="col">
                <a href="#" type="button" className="btn-floating">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
              <div className="col">
                <a href="#" type="button" className="btn-floating">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>


              <div className="col">
                <a
                  href="https://github.com/trandinhthao2000"
                  type="button"
                  className="btn-floating"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-lg-3 text-center mx-12 my-4">
            <h5 className="font-weight-bold mb-4">FOLLOW ME</h5>
            <div className="row">
              <div className="col">
                <a
                  href="https://www.facebook.com/profile.php?id=100058422053540"
                  type="button"
                  className="btn-floating"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>

              <div className="col">
                <a href="#" type="button" className="btn-floating">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>

              <div className="col">
                <a href="#" type="button" className="btn-floating">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
              <div className="col">
                <a href="#" type="button" className="btn-floating">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
              

              <div className="col">
                <a
                  href="https://github.com/trandinhthao2000"
                  type="button"
                  className="btn-floating"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3 bottom_Footer">
        <a href="https://www.facebook.com/">
         @ Cửa hàng đồ trang sức NSN
        </a>
      </div>
    </div>
  );
};

export default Footer;
