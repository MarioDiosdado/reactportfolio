import React, { Component } from "react";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles/style.css";

class Container extends Component {
    state = {
        currentPage: "About"
    };

    handlePageChange = page => {
        this.setState({currentPage: page});
    };

    renderPage = () => {
        if (this.state.currentPage === "About") {
            return <About />;
        } else if (this.state.currentPage === "Contact") {
            return <Contact />;
        } else if (this.state.currentPage === "Portfolio") {
            return <Portfolio />;
        } else {
            return <About />
        }
    };

    render () {
        return (
            <div>
                <Navbar 
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                />
                <div className="container">
                {this.renderPage()}
                </div>
                <Footer />
            </div>
        );
    }
}


export default Container;

