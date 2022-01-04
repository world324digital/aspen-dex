import "../App.css";
import img from "../images/punk9911.png";
import {NavLink} from 'react-router-dom'

function HeaderLite() {
  return (
      <section className="header container-fluid" style={{height:'auto'}}>
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light col-12">
              <NavLink className="navbar-brand" to="/">
                Navbar
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/project_list">
                      Projects
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Writing
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      <i className="fab fa-twitter" />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
           
          </div>
        </div>
      </section>
    
  );
}

export default HeaderLite;
