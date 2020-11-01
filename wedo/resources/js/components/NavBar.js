import React from "react";

function NavBar() {
    return(
          <nav className="c-header c-header-fixed navbar navbar-expand-md navbar-light bg-white shadow-sm">
              <div className="container">
                  <a className="navbar-brand" href="//">
                  </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse"
                          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
            
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                
                      </ul>
                
                      <ul className="navbar-nav ml-auto">
                          <li className="nav-item">
                              <a className="nav-link" href="#">Login</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Register</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
    );
}

export default NavBar;
