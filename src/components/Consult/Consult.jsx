import React, { useState } from 'react'
import "./Consult.css"
import lawyer2 from "../../assets/images/lawyer_2.jpg"
import star from "../../assets/images/category_logo/star.png"
import rating from "../../assets/images/category_logo/rating.png"
import briefcase from "../../assets/images/category_logo/briefcase.png"
import verified from "../../assets/images/category_logo/verified.png"
import { useLocation } from 'react-router-dom'

function Consult() {
  let decisionInput = useLocation();
const [modal,setModal] = useState("hide")

  return (
    <div>
         <section class="lawyer_page">
      <div class="custom_container">
        <div class="lawyer_page_row">
          <div class="col_9">
            { decisionInput.pathname === "/consult" ? <div class="lawyer_page_profile">
              <img src={lawyer2} alt="" />
              <div class="lawyer_detail">
                <h3>Adv. Harshwardhan Sharma</h3>
                <div class="lawyer_rating_main">
                           <div className="rating_img">
                           <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={rating} alt="" />
                           </div>

                  <span>4.9 | 50+ user ratings</span>
                </div>
                <div class="lawyer_experience">
                     <img src={briefcase} alt="" />
                    
                  <h4>8+ Years of Experience</h4>
                </div>
                <div class="about_section">
                  <h4>About</h4>
                  <p>
                  Harshwardhan Sharma is a seasoned attorney with over 8 years of experience in various areas of law, including family law, criminal defense, and corporate law. Committed to providing personalized legal solutions, Harshwardhan believes in a client-centered approach that prioritizes clear communication and understanding.
                  </p>
                </div>
              </div>
            </div> : ""}

            <div class="consultation_form">
                <h3>Free Consultation Booking</h3>
                <form action="" method="post">
                    <div class="name form_div">
                        <div class="first">
                            <label for="">First Name</label>
                            <input type="text" placeholder="eg. Rohit" />
                        </div>
                        <div class="middle">
                            <label for="">Middle Name</label>
                            <input type="text" placeholder="eg. Singh" />
                        </div>
                        <div class="last">
                            <label for="">Last Name</label>
                            <input type="text" placeholder="eg. Kashyap" />
                        </div>
                    </div>
                    <div class="mail_phone form_div">
                        <div class="email">
                            <label for="">Email Address</label>
                            <input type="email" placeholder="eg. rohit@gmail.com" />
                        </div>
                        <div class="phone">
                            <label for="">Phone Number</label>
                            <input type="tel" placeholder="eg. +91XXXXX" />
                        </div>
                    </div>
                    <div class="category form_div">
                        <div class="case_category">
                            <label for="">Case Category</label>
                            <select name="case" id="">
                                <option value="">Select</option>
                                <option value="Divorce">Divorce</option>
                                <option value="Cheque_Bounce">Cheque Bounce</option>
                                <option value="Family">Family</option>
                                <option value="Litigation">Litigation</option>
                                <option value="Property">Property</option>
                                <option value="Consumer_Complaint">Consumer Complaint</option>
                            </select>
                        </div>
                        <div class="phone">
                            <label for="">Phone Number</label>
                            <input type="tel" placeholder="eg. +91XXXXX" />
                        </div>
                        <div class="contact_method">
                            <label for="">Contact Method</label>
                            <select name="contact" id="">
                                <option value="">Select</option>
                                <option value="Email">Email</option>
                                <option value="Phone">Phone</option>
                                <option value="WhatsApp">WhatsApp</option>
                            </select>
                        </div>
                        <div class="contact_time">
                            <label for="">Contact Time</label>
                            <select name="" id="">
                                <option value="">Select</option>
                                <option value="Morning">Morning</option>
                                <option value="Afternoon">Afternoon</option>
                                <option value="Evening">Evening</option>
                            </select>
                        </div>

                    </div>
                    <div class="case_description form_div">
                        <label for="">Case Description</label>
                        <textarea name="" id="" placeholder="Write your case description here..."></textarea>
                    </div>
                    <div class="appointment_date form_div">
                        <label for="">Appointment Date</label>
                        <input type="date" />
                    </div>
                    <div class="terms">
                        <input type="checkbox" name="" id="" />
                        <p> I accept and agree to the <a href="" >Terms and Conditions</a> and 
                        <a href="" >Privacy Policy</a></p>
                    </div>

                    <a href="javascript:void(null)" class="btn-default" onClick={()=> setModal("show")}>Consult Now</a>
                </form>
            </div>
          </div>
          { decisionInput.pathname === "/consult" ? <div class="col_3">
            <h4>Language</h4>
            <div class="languages">
              <span>English</span>
              <span>Hindi</span>
              <span>Tamil</span>
            </div>

            <h4>Courts</h4>
            <div class="courts">
              <span>KKD Court</span>
              <span>Supreme Court</span>
              <span>High Court</span>
              <span>Tees Hazari Court</span>
              <span>Saket Court</span>
            </div>
          </div> : ""}
        </div>

        
      </div>
    </section>

    <div class="form_modal" style={ modal === "hide" ? {display: "none"} : {display: "flex"}}>
        <div class="form_content">
            <div class="div_1">
                <img src={verified} alt="" />
            <h3>Appointment Booking Successful</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corrupti ut perspiciatis aut eum magni ipsa sapiente id eaque, tempora inventore veritatis, beatae nisi iure odit accusamus, dolorum tenetur blanditiis! </p>
            </div>
            <i class="fa-solid fa-x" onClick={()=>window.location.pathname="/"}></i>
        </div>
    </div>
    </div>
  )
}

export default Consult