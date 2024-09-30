import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import menubar from "../../assets/images/menu.png"

function Header() {
  const [menu, setMenu] = useState("hide")
  let ShowMenu = () => {
    
  }
  return (
    <navbar className="custom_container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" height="70" width="200" />
        </Link>
      </div>
      <div className="searchbar">
        <input type="text" />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="menu">
        <div className="nav-link menu_links dropdown">
          <Link to={"/services"}>Services</Link>
          <i className="fa-solid fa-angle-down"></i>
          <div className="dropdown-menu">
            <div className="menu_container">
              <div className="menu_col">
                <h4>Civil Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Property disputes</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">
                    Family law (divorce, child custody, inheritance)
                  </a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Consumer protection</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Contractual disputes</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Criminal Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Criminal defense</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Bail applications</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">FIR lodging</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Legal representation in criminal cases</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Corporate Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Company formation and registration</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Corporate compliance and governance</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Mergers and acquisitions</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Insolvency and bankruptcy</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Intellectual Property Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Trademark registration and disputes</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Copyright protection</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Patent filing</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Design protection</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Taxation Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Tax advisory and compliance</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">GST registration and disputes</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Income tax filing</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Handling tax audits and appeals</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Labour and Employment Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Employment contracts</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Industrial disputes</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Labor compliance and policies</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Employee benefits and compensation</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Real Estate Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Property registration</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Land disputes</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Lease and rental agreements</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Real estate transactions</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Dispute Resolution and Arbitration</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Arbitration proceedings</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Mediation services</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Negotiation of settlements</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Litigation support</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Banking and Finance Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Loan agreements</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Debt recovery</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Financial compliance</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Bankruptcy filings</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Cyber Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Data protection and privacy</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Cybercrime investigation and defense</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">E-commerce and internet law compliance</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-link menu_links dropdown">
          <Link to={'/lawyerlisting'}>Find a Lawyer</Link>
          <i className="fa-solid fa-angle-down"></i>
          <div className="dropdown-menu">
            <div className="menu_container">
              <div className="menu_col">
                <h4>Civil Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Property disputes</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">
                    Family law (divorce, child custody, inheritance)
                  </a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Consumer protection</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Contractual disputes</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Criminal Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Criminal defense</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Bail applications</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">FIR lodging</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Legal representation in criminal cases</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Corporate Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Company formation and registration</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Corporate compliance and governance</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Mergers and acquisitions</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Insolvency and bankruptcy</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Intellectual Property Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Trademark registration and disputes</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Copyright protection</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Patent filing</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Design protection</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Taxation Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Tax advisory and compliance</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">GST registration and disputes</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Income tax filing</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Handling tax audits and appeals</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Labour and Employment Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Employment contracts</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Industrial disputes</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Labor compliance and policies</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Employee benefits and compensation</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Real Estate Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Property registration</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Land disputes</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Lease and rental agreements</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Real estate transactions</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Dispute Resolution and Arbitration</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Arbitration proceedings</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Mediation services</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Negotiation of settlements</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Litigation support</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Banking and Finance Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Loan agreements</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Debt recovery</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Financial compliance</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Bankruptcy filings</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Cyber Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Data protection and privacy</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Cybercrime investigation and defense</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">E-commerce and internet law compliance</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-link menu_links dropdown">
          <Link to="/legalkit">Legal Documents</Link>
          <i className="fa-solid fa-angle-down"></i>
          <div className="dropdown-menu">
            <div className="menu_container">
              <div className="menu_col">
                <h4>Civil Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Property disputes</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">
                    Family law (divorce, child custody, inheritance)
                  </a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Consumer protection</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Contractual disputes</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Criminal Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Criminal defense</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Bail applications</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">FIR lodging</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Legal representation in criminal cases</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Corporate Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Company formation and registration</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Corporate compliance and governance</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Mergers and acquisitions</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Insolvency and bankruptcy</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Intellectual Property Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Trademark registration and disputes</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Copyright protection</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Patent filing</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Design protection</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Taxation Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Tax advisory and compliance</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">GST registration and disputes</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Income tax filing</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Handling tax audits and appeals</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Labour and Employment Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Employment contracts</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Industrial disputes</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Labor compliance and policies</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Employee benefits and compensation</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Real Estate Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Property registration</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Land disputes</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Lease and rental agreements</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Real estate transactions</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Dispute Resolution and Arbitration</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Arbitration proceedings</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Mediation services</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Negotiation of settlements</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Litigation support</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Banking and Finance Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Loan agreements</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Debt recovery</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Financial compliance</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Bankruptcy filings</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Cyber Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Data protection and privacy</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Cybercrime investigation and defense</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">E-commerce and internet law compliance</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-link menu_links dropdown">
          <Link to={'/caserequest'}>Case Request</Link>
          <i className="fa-solid fa-angle-down"></i>
          <div className="dropdown-menu">
            <div className="menu_container">
              <div className="menu_col">
                <h4>Civil Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Property disputes</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">
                    Family law (divorce, child custody, inheritance)
                  </a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Consumer protection</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Contractual disputes</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Criminal Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Criminal defense</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Bail applications</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">FIR lodging</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Legal representation in criminal cases</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Corporate Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Company formation and registration</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Corporate compliance and governance</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Mergers and acquisitions</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Insolvency and bankruptcy</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Intellectual Property Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Trademark registration and disputes</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Copyright protection</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Patent filing</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Design protection</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Taxation Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Tax advisory and compliance</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">GST registration and disputes</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Income tax filing</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Handling tax audits and appeals</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Labour and Employment Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Employment contracts</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Industrial disputes</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Labor compliance and policies</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Employee benefits and compensation</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Real Estate Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Property registration</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Land disputes</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Lease and rental agreements</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Real estate transactions</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Dispute Resolution and Arbitration</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Arbitration proceedings</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Mediation services</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Negotiation of settlements</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Litigation support</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Banking and Finance Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Loan agreements</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Debt recovery</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Financial compliance</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Bankruptcy filings</a>
                </div>
              </div>
              <div className="menu_col">
                <h4>Cyber Law</h4>
                <div className="nav-link dropdown_items">
                  <a href="">Data protection and privacy</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">Cybercrime investigation and defense</a>
                </div>
                <div className="nav-link dropdown_items">
                  <a href="">E-commerce and internet law compliance</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-link menu_links">
          <Link to={"/blog"}>Blog</Link>
        </div>
      </div>
      <div className="mobile_menu">
        <img src={menubar} alt="" style={{height:"20px"}} onClick={()=>setMenu("show")}/>
      </div>
      <div className="mobile_menu_options" style={menu === "hide" ? {display:"none"}:{display:"flex"}}>
        <div className="mob_menu_items">
        <div className="mob_menu_item">
        <Link to={"/services"} onClick={()=>setMenu("hide")}>Services</Link>
        </div>
        <div className="mob_menu_item">
        <Link to={'/lawyerlisting'} onClick={()=>setMenu("hide")}>Find a Lawyer</Link>
        </div>
        <div className="mob_menu_item">
        <Link to={'/legalkit'} onClick={()=>setMenu("hide")}>Legal Documents</Link>
        </div>
        <div className="mob_menu_item">
        <Link to={"/consult"} onClick={()=>setMenu("hide")}>Case Request</Link>
        </div>
        <div className="mob_menu_item">
        <Link to={"/blog"} onClick={()=>setMenu("hide")}>Blog</Link>
        </div>
        </div>
        <div className="close">
          <i className="fa-solid fa-x" onClick={()=>setMenu("hide")}></i>
        </div>
      </div>
    </navbar>
  );
}

export default Header;
