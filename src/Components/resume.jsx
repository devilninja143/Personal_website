import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./css/resume.css"

class Resume extends React.Component {
    render() { 
        return <div id="resume_body">
            <div id="resume_cont" className='col-12 col-md-10'>
                <div className="btn-cont pt-5 px-3">
                    <a href="" className="btn btn-primary">Visit Linkedin Profile</a>
                    <a href="/cv" className="btn btn-primary">View & Download CV</a>
                </div>
                <h2 className="resume_label">Education</h2>
                <div className="resume_card bg-white">
                    <h3 className="resume_card_year_label text-primary">2018</h3>
                    <div className="resume_card_cont row">
                        <div className="cont1 col-12 col-md-6">
                            <div className="sclName">Monipur Highschool & College</div>
                            <div className="degreeName">Senior School Certificate</div>
                            <div className="sclLocation">Ibrahimpur, Mirpur-14, Dhaka, Bangladesh</div>
                        </div>
                        <div className="cont2 col-12 col-md-6">
                            My high school is the place where I found my passion for web development. 
                        </div>
                    </div>
                </div>
                <div className="resume_card bg-white mt-2">
                    <h3 className="resume_card_year_label text-primary">2018-Present</h3>
                    <div className="resume_card_cont row">
                        <div className="cont1 col-12 col-md-6">
                            <div className="sclName">Graphics Arts Institute</div>
                            <div className="degreeName">Diploma in Engineering</div>
                            <div className="sclLocation">Bus Stand, Mohammadpur, Dhaka, Bangladesh</div>
                        </div>
                        <div className="cont2 col-12 col-md-6">
                            This College help me to learn all about web development and programming. With 
                            the knowledge I learn from college I can make better website and application.
                        </div>
                    </div>
                </div>
                <h2 className="resume_label">Skill</h2>
                <div className="resume_card bg-white">
                    <h3 className="resume_card_year_label text-dark">Professional skillset</h3>
                    <div className="resume_card_cont">
                        <div className="cont1">
                            <div class="row list_elem">
                                <div className="col-md-6"><li>HTML5</li></div><div className="col-md-6"><li>CSS3</li></div>
                                <div className="col-md-6"><li>JAVASCRIPT</li></div><div className="col-md-6"><li>PYTHON</li></div>
                                <div className="col-md-6"><li>DJANGO</li></div><div className="col-md-6"><li>REACT.JS</li></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="resume_card bg-white mt-2">
                    <h3 className="resume_card_year_label text-dark">Language Skill</h3>
                    <div className="resume_card_cont">
                        <div className="cont1">
                            <div class="row list_elem">
                                <div className="col-md-6"><li>English (Native)</li></div><div className="col-md-6"><li>Bangla (Proficient)</li></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
 
export default Resume;