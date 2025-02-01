import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
          title="Model S"
          description="Order for touchless delivery"
          bg="model-s.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
        />
        <Section 
          title="Model 3"
          description="Order for touchless delivery"
          bg="model-3.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
        />

        <Section 
          title="Model X"
          description="Order for touchless delivery"
          bg="model-x.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
        />
        <Section 
          title="Model Y"
          description="Order for touchless delivery"
          bg="model-y.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing inventory"
        />
        <Section 
          title="Low cost solar panels"
          description="Money back"
          bg="solar-panel.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
        />
        <Section 
          title="Solar for new roof"
          description="Costs less than a new roof plus solar panel"
          bg="solar-roof.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
        />
        <Section 
          title="Accessories"
          description=""
          bg="accessories.jpg"
          leftBtnText="Shop now"
        />
    </Container>
  )
}

export default Home
const Container=styled.div`
    height:100vh;
`