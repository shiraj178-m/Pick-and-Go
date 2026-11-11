import { Link, useNavigate } from "react-router-dom";
import "./App.css";

export default function Signin() {
const navigate = useNavigate();

const toLogin = () => {
navigate("/login");
};

return ( <div className="signin-form"> <div className="signin-box"> <h2>Create Account</h2> <p className="signin-text">Sign up to get started</p>


    <input type="text" placeholder="Enter your name" />

    <input type="email" placeholder="Enter your email" />

    <input type="password" placeholder="Enter password" />

    <input type="password" placeholder="Re-enter password" />

    <button
      className="btn btn-primary fw-medium signin-btn"
      onClick={toLogin}
    >
      Sign In
    </button>

    <p className="signin-footer">
      Already have an account? <Link to="/login">Login</Link>
    </p>
  </div>
</div>


);
}
