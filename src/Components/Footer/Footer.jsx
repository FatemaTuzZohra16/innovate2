import React from 'react'
import Container from '../Layout/Container'
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className='pt-[140px]'>
        <Container>
            <div className='flex justify-between mb-[80px]'>
                <div>
                  <img src={logo} alt="" />
                  <p className='max-w-[446px] mt-[44px] font-roboto text-[18px] leading-[180%] text-para'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                </div>
                <div>
                  <h3 className='font-sans font-semibold mb-[48px] text-[24px] leading-[140%] text-[#413F45]'>Features</h3>
                  <p className='font-roboto font-semibold text-[20px] leading-[120%] text-para mb-[30px]'>Home</p>
                  <p className='font-roboto font-semibold text-[20px] leading-[120%] text-para mb-[30px]'>About</p>
                  <p className='font-roboto font-semibold text-[20px] leading-[120%] text-para mb-[30px]'>Benifit</p>
                  <p className='font-roboto font-semibold text-[20px] leading-[120%] text-para mb-[30px]'>Pricing</p>
                  <p className='font-roboto font-semibold text-[20px] leading-[120%] text-para'>Blog</p>                
                </div>
                <div>
                  <h3 className='font-sans font-semibold mb-[48px] text-[24px] leading-[140%] text-[#413F45]'>Products</h3>
                  <p className='font-roboto font-semibold text-[20px] leading-[120%] text-para mb-[30px]'>Task Management</p>
                  <p className='font-roboto font-semibold text-[20px] leading-[120%] text-para mb-[30px]'>Company growth</p>
                  <p className='font-roboto font-semibold text-[20px] leading-[120%] text-para mb-[30px]'>Time tracking</p>                
                </div>
                <div>
                  <h3 className='font-sans font-semibold mb-[48px] text-[24px] leading-[140%] text-[#413F45]'>Support</h3>
                  <p className='font-roboto font-semibold text-[20px] leading-[120%] text-para mb-[30px]'>Customer service</p>
                  <p className='font-roboto font-semibold text-[20px] leading-[120%] text-para mb-[30px]'>Accessibility</p>
                  <p className='font-roboto font-semibold text-[20px] leading-[120%] text-para mb-[30px]'>Contact us</p>                
                </div>
            </div>
            <div className='flex justify-between mb-[57px]'>
                <h3 className='font-roboto text-[18px] leading-[180%] text-para'>@2024 Innovate.All rights reserved.</h3>
                <div className='flex gap-[60px]'>
                  <p className='font-roboto text-[18px] leading-[180%] text-para'>Privacy policy</p>
                  <p className='font-roboto text-[18px] leading-[180%] text-para'>Terms & condition</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer