import React from 'react'
import { useState } from 'react'

export default function Contact() {
    const [data, setData] = useState({
        fullname:'',
        phone: '',
        email: '',
        meggage:''
    });
    const InputEvent = (event) =>{
        const {name, value} = event.target;
        setData((preVal) => {
            return{
                ...preVal,
                [name]: value,
            }
        })
   } 
   const formSubmit = (e) => {
       e.preventDefault();
       alert(`My name is ${data.fullname}. My mobile number is ${data.phone} and my email is ${data.email}, Here is what I want to say`)
   };

    return (
        <>
            <div className="mt-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" required name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Full Name"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" required name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your mobile phone number"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" required name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" required rows={3} name="message" value={data.message} onChange={InputEvent}/>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
