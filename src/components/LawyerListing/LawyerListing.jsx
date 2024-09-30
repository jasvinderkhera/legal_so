import "./LawyerListing.css";
import { Link } from "react-router-dom";
import star from "../../assets/images/category_logo/star.png";
import rating from "../../assets/images/category_logo/rating.png";
import briefcase from "../../assets/images/category_logo/briefcase.png";
import mapandflag from "../../assets/images/category_logo/maps-and-flags.png";
import lawyer2 from "../../assets/images/lawyer_2.jpg";
import lawyer3 from "../../assets/images/lawyer_3.jpg";
import lawyer4 from "../../assets/images/lawyer_4.jpg";
import lawyer5 from "../../assets/images/lawyer_5.jpeg";
import lawyer6 from "../../assets/images/laywer_6.jpg";
import lawyer7 from "../../assets/images/laywer_7.jpeg";
import lawyer8 from "../../assets/images/lawyer_8.jpg";
import lawyer9 from "../../assets/images/lawyer_9.jpg";
import React, { useState } from "react";
import RangeSlider from "../common/RangeSlider";

function LawyerListing() {
  const [range, setRange] = useState({ from: 20, to: 80 });

  const handleRangeChange = (from, to) => {
    setRange({ from, to });
  };

  return (
    <div>
      <section className="section lawyer_listing_banner">
        <div className="custom_container">
          <h2>500+ Consumer Protection Lawyers</h2>
          <p>
            Consumer protection lawyers specialize in advocating for the rights
            of consumers. They handle cases related to fraud, deceptive
            practices, product liability, warranty issues, and unfair business
            practices.
          </p>
        </div>
      </section>

      <section className="section lawyer_listing_main">
        <div className="custom_container">
          <div className="lawyer_listing_content">
            <div className="col_1">
             <div className="range">
             <h3>Consulting Price</h3>
              <hr />

              <RangeSlider
                min={500}
                max={10000}
                from={range.from}
                to={range.to}
                onChange={handleRangeChange}
              />
             </div>

              <div className="search_category">
                <h3>Law Category</h3>
                <hr />

                <div className="category_list">
                  <div className="category_list_item">
                    <input type="checkbox" name="" id="" />
                    <label for="">Civil Law</label>
                  </div>
                  <div className="category_list_item">
                    <input type="checkbox" name="" id="" />
                    <label for="">Criminal Law</label>
                  </div>
                  <div className="category_list_item">
                    <input type="checkbox" name="" id="" />
                    <label for="">Corporate Law</label>
                  </div>
                  <div className="category_list_item">
                    <input type="checkbox" name="" id="" />
                    <label for="">Family Law</label>
                  </div>
                  <div className="category_list_item">
                    <input type="checkbox" name="" id="" />
                    <label for="">Intellectual Property Law</label>
                  </div>
                  <div className="category_list_item">
                    <input type="checkbox" name="" id="" />
                    <label for="">Employment Law</label>
                  </div>
                  <div className="category_list_item">
                    <input type="checkbox" name="" id="" />
                    <label for="">Tax Law</label>
                  </div>
                  <div className="category_list_item">
                    <input type="checkbox" name="" id="" />
                    <label for="">Immigration Law</label>
                  </div>
                  <div className="category_list_item">
                    <input type="checkbox" name="" id="" />
                    <label for="">Constitutional Law</label>
                  </div>
                </div>
              </div>

              <div className="search_category">
                <h3>Law Category</h3>
                <hr />

                <div className="category_list">
                  <div className="category_list_item">
                    <input type="checkbox" name="" id="" />
                    <label for="">Civil Law</label>
                  </div>
                  <div className="category_list_item">
                    <input type="checkbox" name="" id="" />
                    <label for="">Criminal Law</label>
                  </div>
                  <div className="category_list_item">
                    <input type="checkbox" name="" id="" />
                    <label for="">Corporate Law</label>
                  </div>
                  <div className="category_list_item">
                    <input type="checkbox" name="" id="" />
                    <label for="">Family Law</label>
                  </div>
                  <div className="category_list_item">
                    <input type="checkbox" name="" id="" />
                    <label for="">Intellectual Property Law</label>
                  </div>
                  <div className="category_list_item">
                    <input type="checkbox" name="" id="" />
                    <label for="">Employment Law</label>
                  </div>
                  <div className="category_list_item">
                    <input type="checkbox" name="" id="" />
                    <label for="">Tax Law</label>
                  </div>
                  <div className="category_list_item">
                    <input type="checkbox" name="" id="" />
                    <label for="">Immigration Law</label>
                  </div>
                  <div className="category_list_item">
                    <input type="checkbox" name="" id="" />
                    <label for="">Constitutional Law</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="col_2">
              <div className="lawyer_profile">
                <div className="lawyer_img">
                  <img src={lawyer2} alt="" />
                </div>
                <div className="lawyer_details">
                  <h3>Adv. Harshwardhan Sharma</h3>

                  <div className="lawyer_ratings">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={rating} alt="" />
                  </div>

                  <div className="lawyer_experience">
                    <img src={briefcase} alt="" />
                    <h4>5+ Years of Experience</h4>
                  </div>

                  <div className="lawyer_tags">
                    <span>Cheque Bounce</span>
                    <span>Divorce and Family Law</span>
                    <span>Corporate and Business Law</span>
                    <span>Consumer Protection Law</span>
                    <span>Labour and Employment Law</span>
                  </div>

                  <hr />

                  <div className="lawyer_location">
                    <img src={mapandflag} alt="" />
                    <p>
                      Chamber 12, Karkardooma Court, Karkardooma, Vishwash
                      Nagar, Delhi
                    </p>
                  </div>
                </div>
                <div className="consult_div">
                  <h4>INR 500</h4>
                  <Link to={"/lawyer"} className="btn btn-default">
                    Consult
                  </Link>
                </div>
              </div>
              {/* <!-- Lawyer Profile 1 --> */}
              <div className="lawyer_profile">
                <div className="lawyer_img">
                  <img src={lawyer3} alt="" />
                </div>
                <div className="lawyer_details">
                  <h3>Adv. Rohit Aggarwal</h3>

                  <div className="lawyer_ratings">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>

                  <div className="lawyer_experience">
                    <img src={briefcase} alt="" />
                    <h4>10+ Years of Experience</h4>
                  </div>

                  <div className="lawyer_tags">
                    <span>Criminal Law</span>
                    <span>Intellectual Property Law</span>
                    <span>Taxation Law</span>
                    <span>Corporate and Business Law</span>
                    <span>Property Disputes</span>
                  </div>

                  <hr />

                  <div className="lawyer_location">
                    <img src={briefcase} alt="" />
                    <p>Chamber 15, Patiala House Court, India Gate, Delhi</p>
                  </div>
                </div>
                <div className="consult_div">
                  <h4>INR 1000</h4>
                  <Link href="./lawyer.html" className="btn btn-default">
                    Consult
                  </Link>
                </div>
              </div>

              {/* <!-- Lawyer Profile 2 --> */}
              <div className="lawyer_profile">
                <div className="lawyer_img">
                  <img src={lawyer6} alt="" />
                </div>
                <div className="lawyer_details">
                  <h3>Adv. Shreya Gupta</h3>

                  <div className="lawyer_ratings">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={rating} alt="" />
                  </div>

                  <div className="lawyer_experience">
                    <img src={briefcase} alt="" />
                    <h4>4+ Years of Experience</h4>
                  </div>

                  <div className="lawyer_tags">
                    <span>Consumer Protection Law</span>
                    <span>Medical Negligence</span>
                    <span>Family Law</span>
                    <span>Labour and Employment Law</span>
                    <span>Cyber Law</span>
                  </div>

                  <hr />

                  <div className="lawyer_location">
                    <img src={mapandflag} alt="" />
                    <p>Chamber 5, Saket Court, Saket, Delhi</p>
                  </div>
                </div>
                <div className="consult_div">
                  <h4>INR 600</h4>
                  <Link href="" className="btn btn-default">
                    Consult
                  </Link>
                </div>
              </div>

              {/* <!-- Lawyer Profile 3 --> */}
              <div className="lawyer_profile">
                <div className="lawyer_img">
                  <img src={lawyer5} alt="" />
                </div>
                <div className="lawyer_details">
                  <h3>Adv. Arjun Singh</h3>

                  <div className="lawyer_ratings">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={rating} alt="" />
                  </div>

                  <div className="lawyer_experience">
                    <img src={briefcase} alt="" />
                    <h4>8+ Years of Experience</h4>
                  </div>

                  <div className="lawyer_tags">
                    <span>Cheque Bounce</span>
                    <span>Corporate Law</span>
                    <span>Real Estate Law</span>
                    <span>Environmental Law</span>
                    <span>Taxation Law</span>
                  </div>

                  <hr />

                  <div className="lawyer_location">
                    <img src={mapandflag} alt="" />
                    <p>Chamber 22, Rohini Court, Rohini, Delhi</p>
                  </div>
                </div>
                <div className="consult_div">
                  <h4>INR 850</h4>
                  <Link href="./lawyer.html" className="btn btn-default">
                    Consult
                  </Link>
                </div>
              </div>

              {/* <!-- Lawyer Profile 4 --> */}
              <div className="lawyer_profile">
                <div className="lawyer_img">
                  <img src={lawyer7} alt="" />
                </div>
                <div className="lawyer_details">
                  <h3>Adv. Nisha Verma</h3>

                  <div className="lawyer_ratings">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={rating} alt="" />
                  </div>

                  <div className="lawyer_experience">
                    <img src={briefcase} alt="" />
                    <h4>6+ Years of Experience</h4>
                  </div>

                  <div className="lawyer_tags">
                    <span>Family Law</span>
                    <span>Cyber Crime</span>
                    <span>Consumer Protection</span>
                    <span>Labour Law</span>
                    <span>Intellectual Property Law</span>
                  </div>

                  <hr />

                  <div className="lawyer_location">
                    <img src={mapandflag} alt="" />
                    <p>Chamber 14, Karkardooma Court, Karkardooma, Delhi</p>
                  </div>
                </div>
                <div className="consult_div">
                  <h4>INR 550</h4>
                  <Link href="" className="btn btn-default">
                    Consult
                  </Link>
                </div>
              </div>

              {/* <!-- Lawyer Profile 5 --> */}
              <div className="lawyer_profile">
                <div className="lawyer_img">
                  <img src={lawyer4} alt="" />
                </div>
                <div className="lawyer_details">
                  <h3>Adv. Karan Malhotra</h3>

                  <div className="lawyer_ratings">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={rating} alt="" />
                  </div>

                  <div className="lawyer_experience">
                    <img src={briefcase} alt="" />
                    <h4>9+ Years of Experience</h4>
                  </div>

                  <div className="lawyer_tags">
                    <span>Criminal Law</span>
                    <span>Banking Law</span>
                    <span>Corporate Law</span>
                    <span>Labour Law</span>
                    <span>Property Disputes</span>
                  </div>

                  <hr />

                  <div className="lawyer_location">
                    <img src={mapandflag} alt="" />
                    <p>Chamber 11, Tis Hazari Court, Civil Lines, Delhi</p>
                  </div>
                </div>
                <div className="consult_div">
                  <h4>INR 900</h4>
                  <Link href="" className="btn btn-default">
                    Consult
                  </Link>
                </div>
              </div>

              {/* <!-- Lawyer Profile 6 --> */}
              <div className="lawyer_profile">
                <div className="lawyer_img">
                  <img src={lawyer9} alt="" />
                </div>
                <div className="lawyer_details">
                  <h3>Adv. Sneha Kapoor</h3>

                  <div className="lawyer_ratings">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={rating} alt="" />
                  </div>

                  <div className="lawyer_experience">
                    <img src={briefcase} alt="" />
                    <h4>3+ Years of Experience</h4>
                  </div>

                  <div className="lawyer_tags">
                    <span>Divorce and Family Law</span>
                    <span>Cheque Bounce</span>
                    <span>Medical Negligence</span>
                    <span>Corporate Law</span>
                    <span>Consumer Protection</span>
                  </div>

                  <hr />

                  <div className="lawyer_location">
                    <img src={briefcase} alt="" />
                    <p>Chamber 6, Saket Court, Saket, Delhi</p>
                  </div>
                </div>
                <div className="consult_div">
                  <h4>INR 500</h4>
                  <Link href="" className="btn btn-default">
                    Consult
                  </Link>
                </div>
              </div>

              {/* <!-- Lawyer Profile 7 --> */}
              <div className="lawyer_profile">
                <div className="lawyer_img">
                  <img src={lawyer8} alt="" />
                </div>
                <div className="lawyer_details">
                  <h3>Adv. Abhishek Anand</h3>

                  <div className="lawyer_ratings">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={rating} alt="" />
                  </div>

                  <div className="lawyer_experience">
                    <img src={briefcase} alt="" />
                    <h4>12+ Years of Experience</h4>
                  </div>

                  <div className="lawyer_tags">
                    <span>Criminal Law</span>
                    <span>Family Law</span>
                    <span>Cyber Law</span>
                    <span>Property Disputes</span>
                    <span>Corporate Law</span>
                  </div>

                  <hr />

                  <div className="lawyer_location">
                    <img src={mapandflag} alt="" />
                    <p>Chamber 3, Patiala House Court, India Gate, Delhi</p>
                  </div>
                </div>
                <div className="consult_div">
                  <h4>INR 1200</h4>
                  <Link href="" className="btn btn-default">
                    Consult
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LawyerListing;
