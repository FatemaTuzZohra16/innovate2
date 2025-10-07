import React from 'react'
import Container from '../Layout/Container'
import title from '../../assets/title.png'
import service1 from "../../assets/service1.png"
import service2 from "../../assets/service2.png"
import service3 from "../../assets/service3.png"

const Services = () => {
    const data =[
        {
            img: service1,
            title: "MARKETING STRATEGY",
            description: "Social Media has changed the way we interact & do business while creating a new avenue.",
            button: "Read more"
        },
        {
            img: service2,
            title: "Social Marketing",
            description: "Social Media has changed the way we interact & do business while creating a new avenue.",
            button: "Read more"
        },
        {
            img: service3,
            title: "Content Marketing",
            description: "Content Marketing is the other fold of online advertisement. If you are looking to build",
            button: "Read more"
        },
    ]
  return (
    <div className='pt-[60px] pb-[99px]'>
        <Container>
            <div className='text-center'>
                <img src={title} alt=""  className='mx-auto'/>
                <h2 className='font-sans font-extrabold text-[48px] text-title py-4'>Our Services</h2>
                <p className='font-paprika text-[18px] leading-[32px] text-para'>We have been providing great flooring solutions service.</p>
            </div>
            <div className="cards pt-[52px] flex gap-[30px]">
                {
                    data.map((item)=>(
                          <div className='w-[370px] bg-[#ebf7e9] py-[52px] px-[30px] rounded-[20px] hover:bg-[#d8eaff] text-center'>
                            <img src={item.img} alt=""  className='mx-auto'/>
                            <h2 className='w-[275px] mt-[28px] mb-[20px] font-sans font-semibold text-[25px] leading-[36px] text-[#202427]'>{item.title}</h2>
                            <p className='font-paprika text-[18px] leading-[30px] text-[#6C7D93] mb-[20px]'>{item.description}</p>
                            <div className='relative z-[0]'>
                                <div className='absolute z-[-1] left-[90px] top-1/2 -translate-y-1/2 w-[33px] h-[33px] bg-primary rounded-full'></div>
                                <a href="" className='font-sans font-bold text-[18px] leading-[24px] text-[#202427]'>{item.button}</a>
                            </div>
                        </div>
                    ))}
            </div>
        </Container>
    </div>
  )
}

export default Services