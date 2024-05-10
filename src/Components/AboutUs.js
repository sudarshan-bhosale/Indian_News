import React from "react";
import  '../Assets/Styles/AboutUs.css';
import harsh from '../Assets/Images/commaon.png';
import soham from '../Assets/Images/commaon.png';
import vicky from '../Assets/Images/commaon.png';

export default function AboutUs() {
  
    let name_style={
        textAlign:'center'
    }
  return(
  <div style={{ marginTop: "100px" }} className="container AboutUs">
<div className="about-section">
  <h1 style={{fontFamily:'Times new roman'}}>About Us</h1>
  <p>Welcome to Indian News ! We provide timely and accurate news coverage on various topics. Our experienced team is dedicated to delivering high-quality journalism and diverse perspectives. Contact us for feedback and stay informed with Indian News.</p>
</div>

<h2 style={{textAlign:"center",backgroundColor:'rgb(221, 212, 212)',marginTop:'10px'}}>Our Team</h2>


<div className="row flex justify-content-center" style={{margin:'30px'}}>
  
  <div className="column">
    <div className="card">
      <div className="container" > <img src={vicky} alt="Vicky Autade" style={{width:"100%",borderRadius:'50%',height:'300px'}}/> </div>
        <div className="container my-3" style={name_style}>
        <h3>Akash Abhang</h3>
        <p className="title">Developer</p>
        <p>abhangakash222@gmail.com</p>
        <p><a className="btn btn-dark"  target="_blank" rel="noreferrer"  href="https://www.instagram.com/akash__abhang?igsh=MWpod3R6MzFkODMyNw==">Contact</a></p>
      </div>
    </div>
  </div>


  <div className="column">
    <div className="card">
    <div className="container"> <img src={harsh} alt="Vicky Autade" style={{width:"100%",borderRadius:'50%',height:'300px'}}/> </div>

      <div className="container my-3" style={name_style}>
        <h3>Abhinav Murkute</h3>
        <p className="title">Developer</p>
        <p>abhinavmurkute2002@gmail.com</p>
        <p><a className="btn btn-dark" target="_blank" rel="noreferrer"  href="https://www.instagram.com/abhinav_murkute_?igsh=Nmd1NzFudDFiaW13">Contact</a></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <div className="container"> <img src={soham} alt="Soham Bhaskarwar" style={{width:"97%",borderRadius:'50%',height:'300px'}}/>  </div>
      <div className="container my-3" style={name_style}>
        <h3>Sudarshan Bhosale</h3>
        <p className="title">Developer</p>
       
        <p>sudarshanbe2129@gmail.com</p>
        <p><a className="btn btn-dark" target="_blank" rel="noreferrer"  href="https://www.instagram.com/__mr.sudarshan__208__/">Contact</a></p>
      </div>
    </div>
  </div>


</div>

  </div>
  );
  
}
