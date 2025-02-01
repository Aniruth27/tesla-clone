import React from 'react'
import styled from "styled-components"

function Header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt=""/>
      </a>
      <Menu>
        <p><a href="#">Model S</a></p>
        <p><a href="#">Model 3</a></p>
        <p><a href="#">Model X</a></p>
        <p><a href="#">Model Y</a></p>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla account</a>
        
      </RightMenu>
    </Container>
  )
}

export default Header


const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content
  flex: 1;
  color: black;
  padding-left: 320px;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px; 
    flex-wrap: no-wrap;
  }

  @media(max-width: 768px){
    display:none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  padding-left: 200px;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px; 
    flex-wrap: no-wrap;
  }
`
