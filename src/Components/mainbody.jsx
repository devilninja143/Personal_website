import React, { Component } from 'react';
import "./css/mainbody.css";
import img1 from "../img/my-pic.jfif";
import {Facebook, Linkedin, Twitter} from "react-bootstrap-icons";
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

class Body extends React.Component {
    render() { 
        return <div id="main_body">
            <div id="intro_card">
                <div className="intro_1st" style={{textAlign: "center"}}>
                    <img src={img1} alt="My Pic"/>
                    <div className="my_name">
                        Nurul Hafiz <br /> Likhon
                        <div className="hr"> </div>
                    </div>
                    <div className="my_job">Freelancer</div>
                    <div className="contact">
                        <a href="https://www.facebook.com/nurulhafiz.likhon/"><Facebook/></a>
                        <a href="https://twitter.com/NHLikhon143"><Twitter/></a>
                        <a href="https://www.linkedin.com/in/nurul-hafiz-likhon-991b09204/"><Linkedin/></a>
                    </div>
                </div>
                <div className="intro_2nd">
                    <p>
                        <div className="big-txt">Hello</div>
                        <div className="intro-txt">Here's things about me and my work</div>
                        <div className="intro-btn">
                            <Link to="resume" className="btn btn-outline-primary border-2 btn-1">RESUME</Link>
                            <Link to="projects" className="btn btn-outline-primary border-2 btn-2">PROJECTS</Link>
                        </div>
                        <div className="intro-desc">
                        I have created many websites and improved myself with each project. I can create any kind of website with enough information. You can give me any PSD or Website as a reference. I am looking forward to working with you.
                        <br />
                        <br />
                        Thank you...
                        </div>
                    </p>
                </div>
            </div>
        </div>;
    }
}
 
export default Body;