import React from 'react'
import '../Assests/CSS/FAQ.css'

function FAQ() {
  return (
    <>
    <div className="faq1">
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
        <br />
       <br />
       <li>UPI</li>
       <li>Credit Card / Debit Card</li>
       <li>Netbanking</li>
       <li>e-Wallets</li>
       <li>Meal Cards</li>
       <li>Pay Later</li>
       <li>Cash on Delivery</li>
     </p>
   </label>
   <input id="settings" type="checkbox" />
   <input id="faq1-f" type="checkbox" />
   <label htmlFor="faq1-f">
     <p className="faq1-heading">
     Can I pay online during the delivery of the product?
    </p>
     <div className="faq1-arrow" />
     <p className="faq1-text">
        <br />
       <br />
       You can pay by scanning the QR available on the invoice using any UPI app at the time of delivery. Please 
       check with the delivery executive to assist you.
     </p>
   </label>
   <input id="settings" type="checkbox" />
   <input id="faq1-f" type="checkbox" />
   <label htmlFor="faq1-f">
     <p className="faq1-heading">
     What are RBI guidelines?

    </p>
     <div className="faq1-arrow" />
     <p className="faq1-text">
        <br />
       <br />
       As per RBI guidelines, effective 1st October 2022, merchants can no longer save your credit or debit card details. Instead, 
       the card will be stored at merchant, payment gateway and aggregators in the form of tokens.
     </p>
   </label>
   <input id="settings" type="checkbox" />
   <input id="faq1-f" type="checkbox" />
   <label htmlFor="faq1-f">
     <p className="faq1-heading">
     How will I know if AgroFresh delivers to my area?

    </p>
     <div className="faq1-arrow" />
     <p className="faq1-text">
        <br />
       <br />
       You can check the serviceability of your area while selecting your pin code when you place your order.

     </p>
   </label>
   <input id="settings" type="checkbox" />
   <input id="faq1-f" type="checkbox" />
   <label htmlFor="faq1-f">
     <p className="faq1-heading">
     What is delivery fee? Why am I being charged?
    </p>
     <div className="faq1-arrow" />
     <p className="faq1-text">
        <br />
       <br />
       A Delivery fee is the amount that is charged to a customer, aside from the order total, to cover shipping 
       and handling costs. This fee covers the cost of fulfilling the given customer's order, including storage 
       costs, packaging, shipping etc. We are charging a nominal delivery fee of Rs.40 on all the orders less 
       than cart value of Rs.250 for selected categories in JioMart. We are not charging any delivery fees for 
       orders above Rs.250.
     </p>
   </label>
   <input id="settings" type="checkbox" />
   <input id="faq1-f" type="checkbox" />
   <label htmlFor="faq1-f">
     <p className="faq1-heading">
     If I cancel/return the product, will I get back my delivery fees?
     </p>
     <div className="faq1-arrow" />
     <p className="faq1-text">
        <br />
       <br />
       In case of complete cancellation of order, delivery fee will be refunded to you along with the product amount you paid. In case of 
       return of already delivered product, delivery fee will not be refunded, only product amount will be refunded.
     </p>
   </label>
 </div>
    </>
  )
}

export default FAQ