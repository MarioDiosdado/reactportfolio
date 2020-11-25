import React from "react";
import "../styles/style.css";
import cms from "../Images/cms.jpg";
import band from "../Images/band.jpg";

function Portfolio() {
    return (
        <div>
            <div className="row">
            <div className="col-md-12">
                <h1>Portfolio</h1>
            </div>
        </div>
        <hr></hr>
        <div className="row">
            <div className="col-md-6">
                <h2>Weather App</h2>
                <a href="https://github.com/MarioDiosdado/WeatherApp" target="_blank" rel="noreferrer">Repository</a>
                <a href="https://mariodiosdado.github.io/WeatherApp/" target="_blank" rel="noreferrer">
                    <img className="img-fluid center" alt="Weather"
                        src="https://github.com/MarioDiosdado/WeatherApp/raw/main/Assets/img1.jpg" alt="Weather"></img>
                </a>
            </div>
            <div className="col-md-6">
                <h2>Pixel Picks</h2>
                <a href="https://github.com/codyalmand/Pixel-Picks" target="_blank" rel="noreferrer">Repository</a>
                <a href="https://codyalmand.github.io/Pixel-Picks/" target="_blank" rel="noreferrer">
                    <img className="img-fluid center" alt="Pixel"
                        src="https://github.com/codyalmand/Pixel-Picks/blob/main/Screenshot/screen.jpg?raw=true"
                        alt="Pixel picks"></img>
                </a>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <h2>Code Quiz</h2>
                <a href="https://github.com/MarioDiosdado/CodeQuiz" target="_blank" rel="noreferrer">Repository</a>
                <a href="https://mariodiosdado.github.io/CodeQuiz/" target="_blank" rel="noreferrer">
                    <img className="img-fluid center" alt="Code"
                        src="https://github.com/MarioDiosdado/CodeQuiz/raw/master/Assets/image1.jpg" alt="quiz app"></img>
                </a>
            </div>

            <div className="col-md-6">
                <h2>Password Generator</h2>
                <a href="https://github.com/MarioDiosdado/PasswordGenerator" target="_blank" rel="noreferrer">Repository</a>
                <a href="https://mariodiosdado.github.io/PasswordGenerator/" target="_blank" rel="noreferrer">
                    <img className="img-fluid center" alt="Password generator"
                        src="https://github.com/MarioDiosdado/PasswordGenerator/raw/master/passwordgenerator.jpg"
                        alt="Password Generator"></img>
                </a>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <h2>Band-Aid</h2>
                <a href="https://github.com/Manii-dot/Band-Aids" target="_blank" rel="noreferrer">Repository</a>
                <a href="https://band-aids.herokuapp.com/" target="_blank" rel="noreferrer">
                    <img className="img-fluid center" alt="Band Aid"
                        src={band}
                        alt="Band-Aid"></img>
                </a>
            </div>

            <div className="col-md-6">
                <h2>Employee Tracker</h2>
                <a href="https://github.com/MarioDiosdado/cms" target="_blank" rel="noreferrer">Repository</a>
                <a href="https://github.com/MarioDiosdado/cms" target="_blank" rel="noreferrer">
                    <img className="img-fluid center" alt="Employee tracker"
                        src={cms}
                        alt="Employee Tracker"></img>
                </a>
            </div>
        </div>
        </div>
    );
  }

export default Portfolio;