import React from 'react'
import Common from './Components/Common'
import aboutImg from './img/About.png'

 const About= () => {
    return (
        <>
        <Common name="Welcome to" imgsrc={aboutImg} visit="/contact" btname="Contact Now"/>  
       </>
    )
}
export default About;