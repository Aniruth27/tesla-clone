import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';



function Section({title, description, leftBtnText, rightBtnText, bg}) {
  
  return (
    <Wrap bgImage={bg}>
      <Fade bottom>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
      </Fade>

        <Buttons>
        <Fade bottom>
        <ButtonGroup>
            <LeftButton>
                {leftBtnText}
            </LeftButton>
            {rightBtnText &&
              <RightButton>
                {rightBtnText}
              </RightButton>
            }

        </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg"></DownArrow>
        </Buttons>
          
    </Wrap>
  )
}

export default Section

const Wrap=styled.div`
  width: 100vw; //verticle width
  height: 100vh; //verticle height
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url("/images/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between; //verticle line
  align-items: center //horizontal
  
`
const ItemText=styled.div`
  padding-top: 15vh;
  text-align: center;
`

const ButtonGroup=styled.div`
   display: flex;
   margin-bottom: 30px;
   @media (max-width: 770px){
    flex-direction: column;
   }
`
const LeftButton=styled.div`
    background-color: rgba(23, 26, 32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    fonr-size: 12px;
    cursor: pointer;
    margin: 8px;

`
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.60;
  color: black; // text color
`

const DownArrow= styled.img`
  height: 40px;
  animation: animateDown infinite 1.6s;
  overflow-x: hidden;

`

const Buttons= styled.div`
  
`