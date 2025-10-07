import React from 'react'
import Container from '../Layout/Container'
import title from '../../assets/title.png'
import showcase from '../../assets/showcase.png'

const Showcase = () => {
  return (
    <div className='mt-[80px] mb-[100px]'>
        <Container>
            <div className='text-center'>
                <img src={title} alt=""  className='mx-auto'/>
                <h2 className='font-sans font-extrabold text-[48px] text-title pt-[16.25px] pb-[47px]'>Work Showcase </h2>
                <img src={showcase} alt="" />
            </div>
        </Container>
    </div>
  )
}

export default Showcase