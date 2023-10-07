import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './TestimonialsStyle'
import TestimonialsCard from '../Cards/TestimonialsCards'
import { testimonials } from '../../data/Constants'



const Testimonials = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="testimonials">
      <Wrapper>
        <Title>Testimonials</Title>
        <Desc>
         What Others say
        </Desc>
        <CardContainer>
          {toggle === 'all' && testimonials
            .map((testimonial) => (
              <TestimonialsCard testimonial={testimonial} />
            ))}
          {testimonials
            .filter((item) => item.category == toggle)
            .map((testimonial) => (
              <TestimonialsCard testimonial={testimonial} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Testimonials