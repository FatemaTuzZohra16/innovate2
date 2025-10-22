import React from 'react'
import Container from '../Layout/Container'
import title from '../../assets/title.png'

const Blog = () => {
  return (
    <div className='mt-[80px] mb-[118px]'>
        <Container>
            <div className='text-center'>
                <img src={title} alt=""  className='mx-auto'/>
                <h2 className='font-sans font-extrabold text-[48px] text-title mt-5 mb-6'>Our Latest Blog</h2>
                <p className='font-roboto text-[18px] leading-[30px] text-para mb-[52px]'>We provide digital experience services to startups <br/>and small businesses.</p>
            </div>
        </Container>
    </div>
  )
}

export default Blog