import React, { useState } from 'react'
import '../Assests/CSS/PrivacyPolicy.css'
import Navbar1 from '../Components/Navbar1';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ContactUs() {
    const[firstname,setFirstname]=useState(" ");
    const[subject,setSubject]=useState(" ");
    const[emailid,setEmailid]=useState(" ");
    const[mobile,setMobile]=useState(" ");
  const[query,setQuery]=useState(" ");
  const nav=useNavigate('');

  const contactus= () => {
    const url = 'http://localhost/test/formSubmit2.php';
    let fData = new FormData();
    fData.append('firstname', firstname);
    fData.append('subject', subject);
    fData.append('emailid', emailid);
    fData.append('mobile', mobile);
    fData.append('query', query);
    axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
    alert("Success")
    nav("/")
  };
  return (
    <>
    <Navbar1/>
    <section className="contact-info-area mt-3 mb-4">
  <div className="container">
              <div className="contact-form">
                          <div className="sec-title-style1 float-left">
                              <div className="title">Send Your Message</div>
                              <div className="text"><div className="decor-left"><span></span></div><p>Contact Form</p></div>
                          </div>
                      <form id="contact-form" name="contact_form" className="default-form" onSubmit={contactus}>
                                          <div className="input-box">   
                                              <input type="text" name="form_name"  placeholder="Name"  onChange={(e)=>setFirstname(e.target.value)}/>
                                          </div> 
                                           <div className="input-box"> 
                                              <input type="text" name="form_phone"  placeholder="Phone" onChange={(e)=>setMobile(e.target.value)}/>
                                          </div>
                                          <div className="input-box"> 
                                              <input type="email" name="form_email"  placeholder="Email" onChange={(e)=>setEmailid(e.target.value)}/>
                                          </div>
                                          <div className="input-box"> 
                                              <input type="text" name="form_subject"  placeholder="Subject" onChange={(e)=>setSubject(e.target.value)}/>
                                          </div>     
                                  <div className="input-box">    
                                      <textarea name="form_message" placeholder="Your Message..." onChange={(e)=>setQuery(e.target.value)}></textarea>
                                  </div>
                                  <div className="button-box">
                                      <button type="submit">Send Message</button>    
                                  </div>         
                      </form>
                  </div>
              </div>
</section>
<Footer/>
    </>
  )
}

export default ContactUs