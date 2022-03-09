import React, { Component } from 'react';
import "./css/navbar.css";
import { Link } from 'react-router-dom'
import icon1 from "../img/nameIcon.png"


class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    navbtnOnclick = (e)=>{
        document.getElementById("hamberger").classList.toggle("active");
        document.getElementById("navbar_menu").classList.toggle("nav-active");
    }
    componentDidMount(){
        console.log(window.location.pathname);
    }
    render() { 
        return <div id="navbar">
            <div id="navbar_header">
                <Link to="Personal_website/">
                    <img src={icon1} alt="profile_icon" id='profile_icon'/>
                    <div id="nav-header-txt">
                        <span className="header1">Nurul Hafiz Likhon /&nbsp;</span><span className="header2">Freelancer</span>
                    </div>
                </Link>
            </div>
            <div id="navbar_menu">
                <Link to="Personal_website/">about me</Link>
                <Link to="Personal_website/resume">resume</Link>
                <Link to="Personal_website/projects">projects</Link>
                <Link to="Personal_website/contact">contact</Link>
            </div>
            <button id="hamberger" className="" onClick={this.navbtnOnclick} >
                <div id="hamberger_mark"></div>
            </button>
        </div>;
    }
}
 
export default Navbar;