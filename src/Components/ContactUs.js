import React, { useState,useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Assets/Styles/ContactUs.css";

export default function ContactUs({Progress}) {
  useEffect(() => {
    Progress(0);
  }, [Progress]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone:"",
    company:""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      
      if (response.ok) {
        console.log("Form submitted successfully!");
        toast.success("Form submitted successfully!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeButton: false,
          draggable: false,
          pauseOnHover: false,
          className: "large-toast",
        });
        // Optionally, reset form fields
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Form submission failed!");
        toast.error("Form submission failed!",{
            position: "top-center",
            autoClose: 2000,
          hideProgressBar: true,
          closeButton: false,
          draggable: false,
          pauseOnHover: false,
          className: "large-toast"
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again later.");
    }

    setTimeout(() => {
      Progress(100); // Update progress to 100 just before reloading
      // setShowNavbar(true); // Set showNavbar to true before reloading
      window.location.reload();
    }, 2000);

  };

  return (
    <div className="ContactUs" style={{ marginTop: "100px" }}>
      <ToastContainer />
      <div className="container_contact">
        <h1 className="maint">Animated Contact Form</h1>
        <div className="section animated bounceInLeft">
          <div className="brandname">
            <h3>INDIAN NEWS</h3>
            <ul>
              <br/>
              <br/>
              <li>+91 7498997208</li>
              <li>contactus@newsindia.com</li>
              <br/>
              <br/>
              <li>Sinhgad College , Pune .</li>
            </ul>
          </div>
          <div className="contact">
            <h3>Email Us</h3>
            <form onSubmit={handleSubmit} method="post" action="/saveData">
              <p>
                <label htmlFor="#">Name</label>
                <input type="text" name="name" required onChange={handleChange}/>
              </p>
              <p>
                <label htmlFor="#">Company</label>
                <input type="text" name="company" required onChange={handleChange}/>
              </p>
              <p>
                <label htmlFor="#">Email Address</label>
                <input type="email" name="email" required onChange={handleChange}/>
              </p>
              <p>
                <label htmlFor="#">Phone Number</label>
                <input type="text" name="phone" required maxLength='10' minLength="10" onChange={handleChange} />

              </p>
              <p className="full">
                <label htmlFor="#">Message</label>
                <textarea name="message" cols="30" rows="5" required onChange={handleChange}></textarea>
              </p>
              <p className="full">
                <button type="submit">Submit</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
