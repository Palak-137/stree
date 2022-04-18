import React, { useState } from 'react'
import money from '../../assets/img/money.svg'
import "./pay.css"
import axios from "axios"
import { Navigate } from "react-router-dom"


function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function Pay({user}) {
  const [receiver, setReceiver] = useState();
  const [amount, setAmount] = useState(0);
  const [receiverCurency, setReceiverCurrency] = useState();
  const [senderCurrency, setSenderCurrency] = useState();
  const [msg, setMsg] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    setAmount(amount / 100);

    const info = {
      receiver,
      amount,
      receiverCurency,
      senderCurrency,
      msg
    }
   

      axios.post("http://localhost:1337/sendinfo", info)
        .then(() => {
          console.log("sendinfo!!!");
        })
      .catch(err => { console.error(err) });
    setTimeout(showRazorpay, 1000);
  
    
    //   const res = await loadScript(
    //     "https://checkout.razorpay.com/v1/checkout.js"
    //   );
  
    //   if (!res) {
    //     alert("Razorpay SDK failed to load. Are you online?");
    //     return;
    //   }
  
    //   const data = await fetch("http://localhost:1337/razorpay", {
    //     method: "POST",
    //   }).then((t) => t.json());
  
    //   console.log("njn",data);
  
    //   const options = {
    //     key: "rzp_test_zbP7YtnBtqB6zp",
    //     currency: receiverCurency,
    //     amount: data.amount,
    //     order_id: data.id,
    //     name: "Donation",
    //     description: "Thank you for nothing. Please give us some money",
    //     image: "http://localhost:1337/logo.svg",
    //     handler: function (response) {
  
    //       alert("Transaction successful");
    //     },
    //     prefill: {
    //       name: "palak",
    //       email: "lethalmoana.0508@gmail.com",
    //       phone_number: "7668495607",
    //     },
    //   };
    //   const paymentObject = new window.Razorpay(options);
    // paymentObject.open();
    
  }


  async function showRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch("http://localhost:1337/razorpay", {
      method: "POST",
    }).then((t) => t.json());

    console.log("njn",data);

    const options = {
      key: "rzp_test_zbP7YtnBtqB6zp",
      currency: receiverCurency,
      amount: data.amount,
      order_id: data.id,
      name: "Donation",
      description: "Thank you for nothing. Please give us some money",
      image: "http://localhost:1337/logo.svg",
      handler: function (response) {

        alert("Transaction successful");
      },
      prefill: {
        name: "palak",
        email: "lethalmoana.0508@gmail.com",
        phone_number: "7668495607",
      },
    };
    const paymentObject = new window.Razorpay(options);
  paymentObject.open();
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  } 


  return (
    <div className='container' id="pay">
          <div className='row' class="pay-form">
              <div className='col'>
                <img src={money} className="image-fluid"></img>
              </div>
              <div className='col'>
              <form onSubmit={handleSubmit} method="post" role="form" class="php-email-form" data-aos="fade-up">
                    <div class="form-group">
              <input placeholder="Name of Receiver" type="text" name="nameOfReceiver" class="form-control" id="name" required onChange={(e) => { setReceiver(e.target.value);}}/>
                    </div>
                    <select class="form-control select2" name="receiverCurrency" onChange={(e)=>{setReceiverCurrency(e.target.value)}}>
                      <option>Select receiver currency</option> 
                      <option>INR</option> 
                      <option>USD</option> 
                      <option>Yuan</option> 
                      <option>Canadian Dollar</option> 
                      <option>Euros</option> 
                    </select>
                      
                    <select class="form-control select2" name="senderCurrency" onChange={(e)=>{setSenderCurrency(e.target.value)}}>
                          <option>Select sender currency</option> 
                          <option>INR</option> 
                          <option>USD</option> 
                          <option>Yuan</option> 
                          <option>Canadian Dollar</option> 
                          <option>Euros</option> 
                    </select>

                    <div class="form-group mt-3">
                        <input placeholder="Amount to be paid" type="text" class="form-control" name="amount" id="subject" required disabled={!receiverCurency || !senderCurrency} onChange={(e)=>{setAmount(e.target.value)}}  />
                    </div>
            
                    <div class="form-group mt-3">
                        <textarea placeholder="Message" class="form-control" name="msg" rows="5" onChange={(e)=>{setMsg(e.target.value)}} ></textarea>
                    </div>
                    <div class="my-3">
                        <div class="error-message"></div>
                        <div class="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div class="text-center"><button type="submit">Send Message</button></div>
                  </form>
                  
              </div>
        </div>
    </div>
  )
}

export default Pay