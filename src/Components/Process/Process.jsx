import React from 'react'
import Container from '../Layout/Container'
import title from '../../assets/title.png'
import blank from '../../assets/blank.png'

const Process = () => {
  return (
    <div className='py-[80px] px-[100px]'>
        <Container>
            <div className='text-center'>
                <img src={title} alt=""  className='mx-auto'/>
                <h2 className='pt-[16px] pb-[20px] font-sans font-extrabold text-[48px] text-title'>Our creative process.</h2>
                <p className='font-roboto text-[18px] leading-[30px] text-para mb-[52px]'>We provide digital experience services to startups <br/> and small businesses.</p>
            </div>
            <div className="main">
                <div className="card1 flex gap-[133px]">
                    <div className="left pt-[24px] pl-[24px] pr-[85px] pb-[20px] bg-[#ebf7e9] rounded-[20px] my-[59px]">
                        <div className='relavite flex items-center'>
                            <div className='absolute w-[33px] h-[33px] rounded-full bg-primary z-0'></div>
                            <h5 className='font-sans font-bold text-[18px] leading-[24px] text-[#202427] ml-[16px] relative z-10'>Step-1</h5>
                        </div>
                        <h2 className='font-sans font-semibold text-[30px] leading-[32px] text-[#202427] pt-[18px] pb-[20px]'>Global SEO Research</h2>
                        <p className='w-[356px] font-roboto text-[18px] leading-[30px] text-para'>Practical tools and features make it easier to build and manage your site.</p>
                    </div>
                    <div className="right">
                        <img src={blank} alt="" />
                    </div>
                </div>
                <div className="card2 flex gap-[133px]">
                    <div className="left">
                        <img src={blank} alt="" />
                    </div>
                    <div className="right pt-[24px] pl-[24px] pr-[85px] pb-[20px] bg-[#ebf7e9] rounded-[20px] my-[59px]">
                        <div className='relavite flex items-center'>
                            <div className='absolute w-[33px] h-[33px] rounded-full bg-primary z-0'></div>
                            <h5 className='font-sans font-bold text-[18px] leading-[24px] text-[#202427] ml-[16px] relative z-10'>Step-2</h5>
                        </div>
                        <h2 className='font-sans font-semibold text-[30px] leading-[32px] text-[#202427] pt-[18px] pb-[20px]'>Social media integration</h2>
                        <p className='w-[356px] font-roboto text-[18px] leading-[30px] text-para'>Practical tools and features make it easier to build and manage your site.</p>
                    </div>
                </div>
                <div className="card3 flex gap-[133px]">
                    <div className="left pt-[24px] pl-[24px] pr-[85px] pb-[20px] bg-[#ebf7e9] rounded-[20px] my-[59px]">
                        <div className='relavite flex items-center'>
                            <div className='absolute w-[33px] h-[33px] rounded-full bg-primary z-0'></div>
                            <h5 className='font-sans font-bold text-[18px] leading-[24px] text-[#202427] ml-[16px] relative z-10'>Step-3</h5>
                        </div>
                        <h2 className='font-sans font-semibold text-[28px] leading-[32px] text-[#202427] pt-[18px] pb-[20px]'>Launching the Application</h2>
                        <p className='w-[356px] font-roboto text-[18px] leading-[30px] text-para'>Practical tools and features make it easier to build and manage your site.</p>
                    </div>
                    <div className="right">
                        <img src={blank} alt="" />
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Process