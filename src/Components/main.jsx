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
    render() { 
        return( 
        <div id="main_container">
            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Body/>}/>
                    <Route exact path="/resume" element={<Resume/>}/>
                    <Route exact path="/projects" element={<Project/>}/>
                    <Route exact path="/contact" element={<Contact/>}/>
                </Routes>
                <Footer/>
            </Router>
            <Router>
                <Routes>
                    <Route exact path="/cv" element={<CV/>}/>
                </Routes>
            </Router>
        </div>
        );
    }
}
 
export default Main;