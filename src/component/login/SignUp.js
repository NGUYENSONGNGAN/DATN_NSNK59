import { Link } from "react-router-dom";
import './Author.css'

const SignUp = () => {
  return (
    <div className="limiter">
      <div className="container-login">
        <div className="wrap-login">
          <span className="login-form-title">Sign Up</span>
          <div className="d-flex justify-content-center">
            {/* {errorFullname && <span className="text-danger">* Please Check Your Full Name!</span>}
                        {errorEmail && <span className="text-danger">* Please Check Your Email!</span>}
                        {emailRegex && <span className="text-danger">* Incorrect Email Format</span>}
                        {errorPassword && <span className="text-danger">* Please Check Your Password!</span>}
                        {errorPhone && <span className="text-danger">* Please Check Your Phone Number!</span>} */}
          </div>
          <div className="wrap-input validate-input">
            <input className="input" type="text" placeholder="Full Name" />
          </div>

          <div className="wrap-input rs1 validate-input">
            <input className="input" type="text" placeholder="Email" />
          </div>

          <div className="wrap-input rs1 validate-input">
            <input className="input" type="password" placeholder="Password" />
          </div>

          <div className="wrap-input rs1 validate-input">
            <input className="input" type="text" placeholder="Phone" />
          </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn">Sign Up</button>
          </div>
          

          <div className="text-center btn-text">
            <span className="txt1">Login?</span>
            &nbsp;
            <Link to="/signin" className="txt2 hov1">
            Clickddd
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
