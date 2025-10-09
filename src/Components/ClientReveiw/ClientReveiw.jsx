import React from 'react'
import Container from '../Layout/Container'
import title from '../../assets/title.png'
import reveiw from '../../assets/reveiw.png'

const ClientReveiw = () => {
  return (
    <div className='py-[100px]'>
        <Container>
            <div>
                <div className="main flex">
                   <div>
                     <img src={title} alt="" />
                    <h2 className='font-sans font-extrabold text-[48px] text-title pt-[16px] pb-[20px]'>Client Review</h2>
                    <p className='font-paprika text-[18px] leading-[30px] text-para'>people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.  </p>
                   </div>
                    <div className="reveiws">
                        <div className="one pt-[25px] pr-[51px] pl-[40px] pb-[40px] rounded-[20px] hover:bg-[#d8eaff]">
                            <p className='font-paprika text-[18px] leading-[30px] mb-[9px] text-para'>people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.  </p>
                            <div className='flex items-center gap-[10px]'>
                                <div className="left">
                                    <div className='w-[94px] h-[94px] rounded-full bg-[#c4c4c4]'></div>
                                    <img src={reveiw} alt="" />
                                </div>
                                <div className="right">
                                    <h2 className='font-sans font-semibold text-[24px] text-[#202427] mb-2'>Eleanor Pena</h2>
                                    <p className='font-sans text-[18px] text-[#202427]'>Architecture</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default ClientReveiw