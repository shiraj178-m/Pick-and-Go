import { Link } from "react-router-dom";
import "./App.css";


export default function Login() {
  function submit() {

  }

  return (
    <div className="form">
      <div className="login">
        <h3 style={{ textAlign: "center" }}>Login</h3>
        
          <input
            type="email"
            placeholder="Enter mail Id"
            
          />
        
        <input
          type="password"
          placeholder="Enter password"
        />

        <button
          className="btn btn-primary fw-medium"
          onClick={submit}
        >
          Submit
        </button>

        <p>
          Don't have an account?{" "}
          <Link to="/Signin">Sign In</Link>
        </p>
      </div>

    </div>
  );
}