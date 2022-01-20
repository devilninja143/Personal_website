import React, { Component } from 'react';
import { Facebook, Linkedin, Twitter } from 'react-bootstrap-icons';
import "./css/footer.css"


class Footer extends React.Component {
    render() { 
        return <div id="footer">
            <div className="footer_1st">
                &copy; 2021 by Nurul Hafiz Likhon. <br />
                Proudly Created by Myself
            </div>
            <div className="footer_2nd">
                <div className="footer_section1">
                    <div className="footer_label1">Call</div>
                    <div className="footer_cont1">+8801531379620</div>
                </div>
                <div className="footer_section2">
                    <div className="footer_label2">Write</div>
                    <div className="footer_cont2">hafizlikhon143@gmail.com</div>
                </div>
                <div className="footer_section3">
                    <div className="footer_label3">Follow</div>
                    <div className="footer_cont3">
                        <a href=""><Facebook/></a>
                        <a href=""><Twitter/></a>
                        <a href=""><Linkedin/></a>
                    </div>
                </div>
            </div>
        </div>;
    }
}
 
export default Footer;