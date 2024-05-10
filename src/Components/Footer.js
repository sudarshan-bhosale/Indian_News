import React from "react";
import facebook from '../Assets/Images/facebook.png';
import instagram from '../Assets/Images/instagram.png';
import  twitter from '../Assets/Images/twitter.png';
import icon from '../Assets/Images/logo.png';

export default function Footer() {
   let img_style={
        height:'25px',
        width:'25px'
    }
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            
            <span className="mb-3 mb-md-0 text-body-secondary">
            <img style={{height:'30px',borderRadius:"10%",marginRight:'10px'}}alt="logo" src={icon}/>
            
              © 2024 Indian News . 
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-bodsy-secondary" rel="noreferrer"  target="_blank" href="https://www.instagram.com/__mr.sudarshan__208__/">
             
                <img style={img_style} src={facebook} alt="facebook"/>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" rel="noreferrer"  target="_blank" href="https://www.instagram.com/__mr.sudarshan__208__/">
              <img style={img_style} src={instagram} alt="instagram"/>
             

              </a>
            </li>

            <li className="ms-3">
              <a className="text-body-secondary" rel="noreferrer"  target="_blank" href="https://www.instagram.com/__mr.sudarshan__208__/">
              <img style={img_style} src={twitter} alt="twitter"/>
              
              
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
