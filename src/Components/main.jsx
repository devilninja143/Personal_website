import React, { Component } from 'react';
import Navbar from './navbar';
import Body from './mainbody';
import Resume from './resume';
import Project from './projects';
import Contact from './contact';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './footer';
import "./css/main.css"
import CV from './cv';


class Main extends React.Component {

    state = {
        project: {
            id1: {
                name: "CV Creating Website",
                link: "#",
                desc: "This is a CV creating website. Its website that can help anyone create a perfect cv without much hassel. 😂"
            },
            id2: {
                name: "Creative Programmers",
                link: "creativeprogrammers.herokuapp.com",
                desc: "Its a Blog website and you can use this website to upload content and manage user"
            },
        }
    }
    render() { 
        return( 
        <div id="main_container">
            {/* Initiat React Router */}
            <Router>
                {/* Navigation Bar */}
                <Navbar/>
                <Routes>
                    <Route exact path="Personal_website/" element={<Body/>}/>
                    <Route exact path="Personal_website/resume" element={<Resume/>}/>
                    <Route exact path="Personal_website/projects" element={<Project api={this.state.project}/>}/>
                    <Route exact path="Personal_website/contact" element={<Contact/>}/>
                    <Route exact path="Personal_website/cv" element={<CV/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
        );
    }
}
 
export default Main;