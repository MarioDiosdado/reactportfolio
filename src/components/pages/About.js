import React from "react";
import "../styles/style.css";
import profile from "../Images/profile.jpg";

function About() {
    return (
        <div>
        <div className="row">
            <div className="col-md-12">
                <h1>About Me</h1>
                    <p><i className="fa fa-envelope"></i> diosdado.mario@gmail.com</p>
                    <p><i className="fa fa-phone"></i> Phone: 512-466-4826</p>
            </div>
        </div>
        <hr></hr>
        <main className="row">
            <div className="col-md-12">
                <img className="float-left img-fluid" src={profile} alt="Mario Diosdado"></img>
                <p>Highly motivated web developer. I got my computer science degree back in 2014 and I am currently
                    enrolled in a coding boot camp at the University of Texas at Austin.
                    I have worked on tech for the past 12 years, from tech support to working on the behavior of
                    self-driving vehicles.
                    I worked on web development for a year back in 2016 and I am excited to get back to it, the coding
                    boot camp has been a great help to get me back on track.
                    Coding is a passion for me, I love making things work with logic and specially finding solutions to
                    challgenges.
                </p>
                <p>I'm always looking for something new to learn in the world of tech, to be part of whatever comes next
                    that is gonig to change the world and make it a better place for everyone.
                </p>
            </div>
        </main>
        </div>
    );
  }

export default About;