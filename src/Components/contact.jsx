import React, { Component } from 'react';
import "./css/contact.css"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

class Contact extends React.Component {
    render() { 
        return <div id="contact_body">
            <h2 id="contact_label" className="fw-bold">Talk with me</h2>
            <div className="form_cont col-11 col-md-6 bg-light p-5 m-auto">
                <div class="row gy-2">
                    <div className="row col-12 col-md-6 mx-auto">
                        <label htmlFor="First_name" className="col-12 col-md-12 text-dark fw-bold pt-3">First Name*</label>
                        <input type="text" name="First_name" id="form_firstname" className="col-12" />
                    </div>
                    <div className="row col-12 col-md-6 mx-auto">
                        <label htmlFor="Last_name" className="col-12 text-dark pt-3 fw-bold">Last Name*</label>
                        <input type="text" name="Last_name" id="form_lastname" className="col-12" />
                    </div>
                    <label htmlFor="Email" className="col-12 col-md-12 fw-bold text-dark pt-5">Email*</label>
                    <input type="email" name="Email" id="form_email" className="col-12" />
                    <label htmlFor="Subject" className="col-12 col-md-12 fw-bold text-dark pt-3">Subject*</label>
                    <input type="text" name="Subject" id="form_subject" className="col-12" />
                    <label htmlFor="Textarea" className="col-12 col-md-12 fw-bold text-dark pt-3">Message*</label>
                    <textarea name="Textarea" id="form_textarea" cols="30" rows="10" className="col-12"></textarea>
                    <button className="btn btn-primary" id="btn-form">Send</button>
                </div>
            </div>
        </div>;
    }
}
 
export default Contact;