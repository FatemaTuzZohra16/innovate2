import React from 'react'
import Container from '../Layout/Container'
import title from '../../assets/title.png'
import reveiw from '../../assets/reveiw.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientReveiw = () => {
  var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  centerMode: false,
  variableWidth: false,
}
  return (
    <div className='py-[100px]'>
        <Container>
            <div>
                <div className="main flex gap-[52px]">
                   <div className='description z-[20]'>
                     <img src={title} alt="" />
                    <h2 className='font-sans font-extrabold text-[48px] text-title pt-[16px] pb-[20px] w-[346px]'>Client Review</h2>
                    <p className='w-[331px] font-paprika text-[18px] leading-[30px] text-para'>people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.  </p>
                   </div>
                    <div className="reveiws w-full overflow-hidden relative z-[50]">
                      <div className="arrow-wrapper overflow-visible relative">
                        <Slider {...settings}>
                        <div className="one max-w-[370px] pt-[25px] pr-[51px] pl-[40px] pb-[40px] rounded-[20px] hover:bg-[#d8eaff] group">
                            <p className='w-[270px] font-paprika text-[18px] leading-[30px] mb-[9px] text-para'>Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient.   </p>
                            <div className='flex items-center gap-[27px]'>
                                <div className="left relative">
                                    <div className='w-[94px] h-[94px] rounded-full bg-[#c4c4c4] group-hover:invisible'></div>
                                    <img src={reveiw} alt=""  className='absolute top-[55px] left-[73px]'/>
                                </div>
                                <div className="right">
                                    <h2 className='font-sans font-semibold text-[24px] text-[#202427] mb-2'>Jane Cooper</h2>
                                    <p className='font-sans text-[18px] text-[#202427]'>Fashion Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="two max-w-[370px] pt-[25px] pr-[51px] pl-[40px] pb-[40px] rounded-[20px] hover:bg-[#d8eaff] group">
                            <p className='w-[270px] font-paprika text-[18px] leading-[30px] mb-[9px] text-para'>Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. </p>
                            <div className='flex items-center gap-[27px]'>
                                <div className="left relative">
                                    <div className='w-[94px] h-[94px] rounded-full bg-[#c4c4c4] group-hover:opacity-0'></div>
                                    <img src={reveiw} alt=""  className='absolute top-[55px] left-[73px]'/>
                                </div>
                                <div className="right">
                                    <h2 className='font-sans font-semibold text-[24px] text-[#202427] mb-2'>Eleanor Pena</h2>
                                    <p className='font-sans text-[18px] text-[#202427]'>Architecture</p>
                                </div>
                            </div>
                        </div>
                        <div className="three max-w-[370px] pt-[25px] pr-[51px] pl-[40px] pb-[40px] rounded-[20px] hover:bg-[#d8eaff] group">
                            <p className='w-[270px] font-paprika text-[18px] leading-[30px] mb-[9px] text-para'>Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient.  </p>
                            <div className='flex items-center gap-[27px]'>
                                <div className="left relative">
                                    <div className='w-[94px] h-[94px] rounded-full bg-[#c4c4c4] group-hover:invisible'></div>
                                    <img src={reveiw} alt=""  className='absolute top-[55px] left-[73px]'/>
                                </div>
                                <div className="right">
                                    <h2 className='font-sans font-semibold text-[24px] text-[#202427] mb-2'>Eleanor Pena</h2>
                                    <p className='font-sans text-[18px] text-[#202427]'>Architecture</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                      </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default ClientReveiw