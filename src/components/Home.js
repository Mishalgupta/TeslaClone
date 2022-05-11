import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Home = () => {
    return (
        <Container>
            <Section
                title="Model S"
                description="order online for touchless delivery"
                backgroundImg="model-s.jpg"
                leftBtn="Order now"
                rightBtn="Inventory"
            />
            <Section
                title="Model Y"
                description="order online for touchless delivery"
                backgroundImg="model-y.jpg"
                leftBtn="Order now"
                rightBtn="Inventory"

            />
            <Section
                title="Model 3"
                description="order online for touchless delivery"
                backgroundImg="model-3.jpg"
                leftBtn="Order now"
                rightBtn="Inventory"
            />
            <Section
                title="Accessories"
                description="order online for touchless delivery"
                backgroundImg="accessories.jpg"
                leftBtn="Order now"
                rightBtn="Inventory"
            />
            <Section
                title="New solar roofs"
                description="order online for touchless delivery"
                backgroundImg="solar-roof.jpg"
                leftBtn="Order now"
                rightBtn="Inventory"
            />
        </Container>
    )
}

export default Home;

const Container = styled.div`
height:100vh;
`