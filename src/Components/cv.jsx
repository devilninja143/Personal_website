import React, { Component } from 'react';
import my_pic from "../img/my-pic.jfif";
import './css/cv.css';
import { ClockFill, GeoAltFill, EnvelopeFill, TelephoneFill, PersonCircle, BookFill, BriefcaseFill } from 'react-bootstrap-icons';
import ReactToPdf from 'react-to-pdf'

class CV extends Component {

    state = {  } 
    componentDidMount(){
        document.getElementById("navbar").style.display = "none";
        document.getElementById("footer").style.display = "none";
    }
    download = ()=>{
        alert("Btn Clicked");
    }
    ref = React.createRef();
    render() { 
        return (
            <React.Fragment>
                <div className="cv_cont p-2 border" ref={this.ref}>
                    <div id="personal_info" className="col-auto p-3 d-flex bg-primary">
                        <div id="info_cont" className=' d-flex'>
                            <div className="m-auto row col-11">
                                <div className="col-12 fs-2 text-light p-0 text-uppercase">Nurul Hafiz Likhon</div>
                                <div className="col-12 border border-2 border-primary row m-auto">
                                    <div className="sub_info_cont col-12 d-flex">
                                        <div className="label"><ClockFill /></div><div className="info_value px-2">Age: 21</div>
                                    </div>
                                    <div className="sub_info_cont col-12 d-flex">
                                        <div className="label"><TelephoneFill /></div><div className="info_value px-2"><a href="tel:+8801531379620">Phone/Tel: +8801531379620</a></div>
                                    </div>
                                    <div className="sub_info_cont col-12 d-flex">
                                        <div className="label"><EnvelopeFill /></div><div className="info_value px-2"><a href="mailto:hafizlikhon143@gmail.com">Email: hafizlikhon143@gmail.com</a></div>
                                    </div>
                                    <div className="sub_info_cont col-12 d-flex">
                                        <div className="label"><GeoAltFill /></div><div className="info_value px-2">Address: 2/21, Bordhon bari, Mirpur-1, Dhaka-1216</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="img_cont">
                            <img src={my_pic} alt="cv img" className="img_fluid" />
                        </div>
                    </div>
                    <div className="col-11 px-2 pb-2 m-auto d-flex">
                        <h4 className='text-uppercase mb-0 m-auto'>Profile</h4><hr width="100%" className='m-auto mx-2' /><h4 className='mb-0 m-auto'><PersonCircle/></h4>
                    </div>
                    <div id="object_cont" className='col-11 m-auto d-flex'>
                        <h4 className="text-uppercase text-primary px-3">Objective:</h4>
                        <p className="col-8">I like to gain more professional knowledge by working with Professional's and emprove myself as a developer as a person.</p>
                    </div>
                    <div id="experience_cont" className='col-11 m-auto d-flex'>
                        <h4 className="text-uppercase text-primary px-3">Experience:</h4>
                        <p className="col-8">
                            <div className="label text-dark">Freelancer|Fiverr,Mirpur,Dhaka</div>
                            <div className="text-secondary">Oct 2019 - Present</div>
                            <div className="text-dark">I am Still working as a Freelancer.</div>
                        </p>
                    </div>
                    <div className="col-11 px-2 pb-2 m-auto d-flex">
                        <h4 className='text-uppercase mb-0 m-auto'>Education</h4><hr width="100%" className='m-auto mx-2' /><h4 className='mb-0 m-auto'><BookFill/></h4>
                    </div>
                    <div id="school_cont" className='col-11 m-auto d-flex'>
                        <h5 className="text-uppercase text-primary px-3">School/College:</h5>
                        <p className="col-8">
                            <div className="edu_cont">
                                <div className="label text-dark">S.S.C|Monipur High School and College,Ibrahimpur, Mirpur-14,Dhaka-1216</div>
                                <div className="text-secondary">2017 - 2018</div>
                                <div className="text-secondary">Grade: 4.61 / 5.00</div>
                                <div className="text-secondary">Science</div>
                            </div>
                            <div className="edu_cont">
                                <div className="label text-dark">Diploma|Graphics Art Institute, Mohammadpur, Mirpur, Dhaka</div>
                                <div className="text-secondary">2019 - Present</div>
                                <div className="text-secondary">Grade: 2.94 / 4.00</div>
                                <div className="text-secondary">Computer</div>
                            </div>
                        </p>
                    </div>
                    <div className="col-11 px-2 pb-2 m-auto d-flex">
                        <h4 className='text-uppercase mb-0 m-auto'>Skills</h4><hr width="100%" className='m-auto mx-2' /><h4 className='mb-0 m-auto'><BriefcaseFill/></h4>
                    </div>
                    <div className="col-11 m-auto row skills_cont">
                        <div className="col-12">
                            <h4 className="text-primary text-uppercase mb-0 bg-primary text-light ps-3 lable-cont">Programming Skills</h4>
                            <ol className="col-12 text-start">
                                <li className=''>HTML</li>
                                <li className=''>CSS</li>
                                <li className=''>JS</li>
                                <li className=''>REACT</li>
                                <li className=''>DJANGO</li>
                            </ol>
                        </div>
                        <div className="col-12">
                            <h4 className="text-primary text-uppercase mb-0 bg-primary text-light ps-3 lable-cont">Language</h4>
                            <ol className="col-12 text-start">
                                <li className='col-6'>BANGLA(Proficient)</li>
                                <li className='col-6'>ENGLISH(Native)</li>
                            </ol>
                        </div>
                        <div className="col-12">
                            <h4 className="text-primary text-uppercase mb-0 bg-primary text-light ps-3 lable-cont">Hobbies</h4>
                            <p className="col-12 text-start">
                                &emsp;I a like building various Web-Application and Games.
                            </p>
                        </div>
                    </div>
                </div>
                <ReactToPdf targetRef={this.ref} filename="cv.pdf">
                    {({toPdf}) =>  (
                        <button className="btn btn-primary px-5 d-flex me-5 ms-auto my-4" onClick={toPdf}>Downlaod</button>
                        )}
                </ReactToPdf>
            </React.Fragment>
        );
    }
}
 
export default CV;