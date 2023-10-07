import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider, ButtonContainer, SeeMoreButton } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/Constants'


const Projects = ({openModal,setOpenModal}) => {
  // const [toggle, setToggle] = useState('all');
  const[seeMore,setseeMore]=useState(false);
 
  const handleSeeMore=()=>{
    setseeMore(true);
  }
 

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects.Here are some of my projects.
        </Desc>
      
        <CardContainer>
          { !seeMore  && projects.slice(0,3)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
               { seeMore&& projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
             
        
          
        </CardContainer>
      <ButtonContainer>
        {!seeMore && <SeeMoreButton onClick={handleSeeMore}>See More</SeeMoreButton>}
      </ButtonContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects