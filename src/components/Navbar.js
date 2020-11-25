import React from "react";
import "./styles/style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="index.html">
            <h2>Mario Diosdado</h2>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-className="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a 
                className="nav-link" 
                href="#contact"
                onClick={() => props.handlePageChange("Contact")}
                >
                    Contact 
                </a>
                <a 
                className="nav-link" 
                href="#portfolio"
                onClick={() => props.handlePageChange("Portfolio")}
                >
                    Portfolio
                </a>
                <a 
                className="nav-link active" 
                href="#about"
                onClick={() => props.handlePageChange("About")}
                >
                    About Me<span className="sr-only">(current)</span>
                </a>
                <a className="nav-link" href="https://raw.githubusercontent.com/MarioDiosdado/mariodiosdado.github.io/078ef70dcb028cdf75b789ae1cb20a7131cfd253/Assets/Images/Mario%20Diosdado%202020.pdf">Resume</a>
                <a className="nav-link fa fa-linkedin" href="https://www.linkedin.com/in/mariodiosdado" target="_blank" rel="noreferrer"></a>
                <a className="nav-link fa fa-github" href="https://github.com/MarioDiosdado" target="_blank" rel="noreferrer"></a>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;