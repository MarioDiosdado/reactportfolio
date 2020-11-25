import React from "react";
import "../styles/style.css";

function Contact() {
    return (
        <div>
        <div className="row">
            <div className="col-md-12">
                <h1>Contact</h1>
            </div>
        </div>
        <hr></hr>
        <form>
            <div className="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="John Smith"></input>
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                    placeholder="john.smith@gmail.com"></input>
            </div>

            <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                    placeholder="Message"></textarea>
            </div>

        </form>
        <div className="row">
            <div className="col-md-12">
                <button type="button" className="btn btn-primary btn-lg">Submit</button>
            </div>
        </div>
        </div>
    );
  }

export default Contact;