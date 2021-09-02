import React from 'react'
import { NavLink } from 'react-router-dom'

 const Common= (props) => {
    return (
        <>
        <section id="header" class=" d-flex align-items-center">       
           <div className="container-fluid">
               <div className="row">
                    <div className="col-10 mx-auto">  
                        <div className="row">
                            <div className="col-md-6  order-2 order-lg-1 d-flex justify-content-center flex-column ">
                                <h1>{props.name} <strong><br/>Prince Thechnical</strong></h1>
                                <h2 className="mt-3">We are the team of telented developer making websites.</h2>
                                    <div className="mt-3">
                                    <button className="btn-get-started"><NavLink to={props.visit} className="serviceLink">{props.btname}</NavLink></button> 
                                    </div>
                            </div>
                            <div className="col-md-6 order-1 order-lg-2">
                                <img className="img-fluid imgAnimation" src={props.imgsrc} alt="Prince Logo" />
                            </div>
                        </div> 
                    </div>       
               </div>
            </div>
       </section>               
       </>
    )
}
export default Common;