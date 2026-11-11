import { Link } from "react-router-dom"
import SiteContext from "./Sitecontext"
import { useContext } from "react";
export default function Navbar({cartItems}) {
    
    const {siteName} = useContext(SiteContext);
  return (
    <div>
       <nav className="nav fixed-top">
        <h2> <div className="logo">{siteName}</div> </h2>
        <div className="nav-links">
          <Link className="navi fw-medium" to="/">
            Home
          </Link>

          <Link className="navi fw-medium" to="/About">
            About
          </Link>

          <Link className="navi fw-medium" to="/cart">
            Cart ({cartItems.length})
          </Link>

          <Link className="navi fw-medium" to="/Login">
            Login
          </Link>
        </div>
      </nav>
    </div>
  )
}
