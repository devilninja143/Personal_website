import React, { Component } from 'react';
import "./css/projects.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

class Project extends React.Component {
    render() { 
        return <div id="project_body">
            <h1 id="project_body_label" className="fw-bolder">Projects</h1>
            <div className="col-md-8 m-auto project_body_paragraph">
                Here is various projects that I worked on. Each of this project Reflect my shill in web & application development.
            </div>
            <div className="col-md-8 bg-light row m-auto mt-5">
                <div className="col-12 col-md-10 p-5">
                    <div className="col-12 info_card">
                        <div className="col-12 projectName fs-5 fw-bold text-primary">CV Creating Website</div>
                        <a href="" className="col-12 websiteLink text-decoration-none text-dark fw-bold">http://example.com</a>
                    </div>
                    <p className="col-12 mt-5">
                        This is a CV creating website. Its website that can help anyone create a perfect cv without much hassel. 😂
                    </p>
                </div>
            </div>
        </div>;
    }
}
 
export default Project;