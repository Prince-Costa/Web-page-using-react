import React from 'react'
import CardData from './Components/CardData'
import Card from './Components/Card'
 const Service =() =>{
    return (
        <>
            <div className="mt-5">
                <h1 className="text-center text-success fw-bold">Our Services</h1>
            </div>
            <div className="container-fluid mb-5 mt-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                                 {
                                     CardData.map(( val, index) => {
                                         return<Card key={index}
                                         serviceImg={val.serviceImg}
                                         title={val.title}
                                         />
                                     })
                                 }
                        </div>
                   </div>
               </div>
            </div>
        </>
    )
}

export default Service;