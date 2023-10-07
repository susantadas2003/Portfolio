import React from 'react'
import styled from 'styled-components'



const Card = styled.div`
    width: 330px;
    height: 350px;
    margin-top:25px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
`



const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    // display: -webkit-box;
    display:flex;
    margin-top:50px;
    margin-left:100px;
    padding:5px;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`




const Description = styled.div`
    font-weight: 800;
     color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 30px;
    display: -webkit-box;
    max-width: 100%;
    // -webkit-line-clamp: 3;
    // -webkit-box-orient: vertical;
    // text-overflow: ellipsis;
`

 const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 50px;
  max-height: 50px;
  border-radius: 50%;
  margin-left:120px;
//   border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-width: 50px;
    max-height: 50px;
  }

  @media (max-width: 640px) {
    max-width: 50px;
    max-height: 50px;
  }
`;


const TestimonialsCard = ({testimonial}) => {
    return (
        <Card >
            
            <Details>
           
          <Img src={testimonial.image}/>
                <Description>{testimonial.description}</Description>
                <Title>{testimonial.title}</Title>
            </Details>
            
  
        </Card>
    )
}

export default TestimonialsCard