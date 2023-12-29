import React from 'react'
import '../Assests/CSS/FAQ.css'
import Navbar1 from '../Components/Navbar1'
import Footer from '../Components/Footer'

function FAQ() {
  return (
    <>
    <Navbar1/>
    <div className="faq1 mt-5 mb-5">
    <h1 className='faq11-heading'>FAQ</h1>
   <input id="faq1-a" type="checkbox" />
   <label htmlFor="faq1-a">
     <p className="faq1-heading">Do I need to register before shopping on AgroFresh?</p>
     <div className="faq1-arrow" />
     <p className="faq1-text">
      <br />
       <br />
       Yes, you do need to register before shopping with us. However, you can browse the website without 
       registration. You are required to login or register while you checkout.

     </p>
   </label>
   <input id="faq1-b" type="checkbox" />
   <label htmlFor="faq1-b">
     <p className="faq1-heading">
     Can I register multiple times using the same phone number/email ID?
     </p>
     <div className="faq1-arrow" />
     <p className="faq1-text">
   
       <br />
       <br />
       Each email ID/login ID and mobile number can only be associated with one customer account.
     </p>
   </label>
   <input id="faq1-c" type="checkbox" />
   <label htmlFor="faq1-c">
     <p className="faq1-heading">How will you ensure the freshness of products?
     </p>
     <div className="faq1-arrow" />
     <p className="faq1-text">
      
       <br />
       <br />
       We ensure that all our products are hygienically and carefully handled and maintain them in the correct temperature & packaging.
     </p>
   </label>
   <input id="faq1-d" type="checkbox" />
   <label htmlFor="faq1-d">
     <p className="faq1-heading">
     Can I call and place an order?
  </p>
     <div className="faq1-arrow" />
     <p className="faq1-text">
        <br />
       <br />
       No, currently this service is not available.
     </p>
   </label>
   <input id="faq1-e" type="checkbox" />
   <label htmlFor="faq1-e">
     <p className="faq1-heading">How do I make changes to my order?
     </p>
     <div className="faq1-arrow" />
     <p className="faq1-text">
        <br />
       <br />
       Currently, there is no provision to modify the order once it is placed. You may cancel the order until it is shipped.
        You may request for a return of the ordered product as per the return policy.
     </p>
   </label>
   <input id="settings" type="checkbox" />
   <input id="faq1-f" type="checkbox" />
   <label htmlFor="faq1-f">
     <p className="faq1-heading">
     What are the various modes of payment I can use for shopping?
    </p>
     <div className="faq1-arrow" />
     <p className="faq1-text">
     
       <li>UPI</li>
       <li>Credit Card / Debit Card</li>
       <li>Netbanking</li>
       <li>e-Wallets</li>
       <li>Pay Later</li>
       <li>Cash on Delivery</li>
     </p>
   </label>
  
 

 

 </div>
 <Footer/>
    </>
  )
}

export default FAQ