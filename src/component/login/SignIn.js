import { Link } from "react-router-dom";
import "./Author.css";
const SignIn = () => {
  return (
    <div className="limiter">
      <div className="container-login">
        <div className="wrap-login">
          <span className="login-form-title">Sign In</span>
          {/* <div class="d-flex justify-content-center pb-5"></div> */}
          <div className="wrap-input validate-input">
            <input className="input" type="text" placeholder="Email" />
          </div>

          <div className="wrap-input validate-input">
            <input className="input" type="password" placeholder="Password" />
          </div>

          <div className="container-login-form-btn">
            {/* {redirect && <Redirect to={`/`} />} */}
            <button className="login-form-btn">Sign in</button>
          </div>

          
          <div className="text-center btn-text">
            <span className="txt1">Create an account?</span>
            &nbsp;
            <Link to="/signup" className="txt2 hov1">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
