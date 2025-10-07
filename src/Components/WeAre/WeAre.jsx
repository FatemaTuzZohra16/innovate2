import React from 'react'
import Container from '../Layout/Container'
import img from "../../assets/images.png"
import title from "../../assets/title.png"
import partner from "../../assets/partner-logo.png"

const WeAre = () => {
  return (
    <div className='pt-[100px] pb-[80px]'>
        <Container>
            <div className='flex gap-[102px]'>
                <div className="left w-[542px]">
                    <img src={img} alt="" />
                </div>
                <div className="right w-[469px]">
                    <img src={title} alt="" />
                    <h2 className='font-sans font-extrabold text-[48px] text-title py-[15px]'>Who We Are</h2>
                    <p className='font-paprika text-[18px] leading-[30px] text-para'>We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, </p>
                    <p className='font-paprika text-[12px] text-para my-[3px]'>Join the 10.000+ Companys Trusting </p>
                    <img src={partner} alt=""  className='ml-[-25px]'/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default WeAre