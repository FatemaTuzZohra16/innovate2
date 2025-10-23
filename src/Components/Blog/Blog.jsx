import React from 'react'
import Container from '../Layout/Container'
import title from '../../assets/title.png'
import image from '../../assets/Image.png'

const Blog = () => {
    const blogData = [
        {
            image: image,
            title: "How to Be Ahead of Stock Changes",
            description: "By John  - 5 Comments",
            button: "Read more"
        },
        {
            image: image,
            title: "Online Reputation And Management",
            description: "By Amin  - 10 Comments",
            button: "Read more"
        },
        {
            image: image,
            title: "Tips To Move Your Project More Forward",
            description: "By Insider  - 15 Comments",
            button: "Read more"
        }
    ]
  return (
    <div className='mt-[80px] mb-[118px]'>
        <Container>
            <div className='text-center'>
                <img src={title} alt=""  className='mx-auto'/>
                <h2 className='font-sans font-extrabold text-[48px] text-title mt-5 mb-6'>Our Latest Blog</h2>
                <p className='font-roboto text-[18px] leading-[30px] text-para mb-[52px]'>We provide digital experience services to startups <br/>and small businesses.</p>
            </div>
            <div className='flex gap-[30px]'>
                {
                    blogData.map ((item)=>(
                        <div>
                            <img src={item.image} alt="" />
                            <h2 className='font-sans font-medium text-[24px] leading-[32px] text-[#413F45] mt-[30px] mb-[16px] ml-[30px] max-w-[264px]'>{item.title}</h2>
                            <p>{item.description}</p>
                            <button>{item.button}</button>
                        </div>
                    ))
                }
            </div>
        </Container>
    </div>
  )
}

export default Blog