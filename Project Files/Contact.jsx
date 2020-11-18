import React, { useState } from 'react';


const Contact = () => {

  const [data , setData] = useState({
    fullName:'',
    phone:'',
    email:"",
    msg:"",
  }) ;

  const inputEvent = (event) => {

    const {name , value} = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name] : value,
      }
    })

  }

  const formSubmit = (e) => {
    
    e.preventDefault();
    alert(`My name is ${data.fullName}. My phone number is ${data.phone}.My email is ${data.email}.The message I am leaving is ${data.msg}.`)


  };
  return (
    <>
      <div className="my-4">
        <h1 className="text-center" > Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit} >
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullName" value = {data.fullName}  onChange={inputEvent} placeholder="Enter Your Full Name" required />
              </div>
              <div class="mb-3">

              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value = {data.phone} onChange={inputEvent} placeholder="Enter Your Number" required />
              </div>
              <div class="mb-3">


              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value = {data.email} onChange={inputEvent} placeholder="name@example.com" required />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Leave A Message </label>
                <textarea class="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={inputEvent} rows="3"></textarea>

              </div>

              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
