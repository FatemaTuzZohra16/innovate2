import React from 'react'
import Container from '../Layout/Container'
import hero from '../../assets/hero.png'
import Navbar from '../Navbar/Navbar'
import title from '../../assets/title.png'

const Hero = () => {
  return (
    <div
      className="relative h-[960px] pt-[30px] flex flex-col items-start"
      style={{
        background: "linear-gradient(90deg, rgba(253, 254, 252, 1) 0%, rgba(254, 247, 235, 1) 50%, rgba(255, 250, 243, 1) 100%)",
      }}
    >
      {/* Transparent image overlay */}
      <img
        src={hero}
        alt="Hero background"
        className="absolute inset-0 w-full h-[945px] object-cover object-center opacity-90 pointer-events-none"
      />

      {/* 🧩 Everything stays above image layer */}
      <div className="relative z-10 w-full">
        <Container>
          <Navbar />
          <div className="pt-[184px]">
            <img src={title} alt="" />
            <h1 className="w-[686px] font-sans font-extrabold text-[72px] text-title bt-[22px] pb-[20px]">
              We Are Digital <span className="text-primary">Marketing</span> Agency
            </h1>
            <p className="w-[571px] font-paprika text-[20px] leading-[36px] text-para">
              Use customer data to build great and solid product experiences that
              convert. Digital marketing’s development has changed the way brands
              and businesses use technology for marketing.
            </p>
            <button className='font-sans font-bold text-[20px] leading-[24px] bg-primary text-white py-[20px] px-[40px] rounded-[100px] mt-[32px]'>Get Free Quoto</button>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Hero
