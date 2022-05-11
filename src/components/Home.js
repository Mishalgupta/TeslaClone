import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Home = () => {
    return (
        <Container>
            <Section
                title="Model S"
                description="order online for touchless delivery"
                backgroundImg="../images/model-s.jpg"
                leftBtn="Order now"
                rightBtn="Inventory"
            />
            <Section
                title="Model Y"
                description="order online for touchless delivery"
                backgroundImg="../images/model-y.jpg"
                leftBtn="Order now"
                rightBtn="Inventory"

            />
            <Section
                title="Model 3"
                description="order online for touchless delivery"
                backgroundImg="../images/model-3.jpg"
                leftBtn="Order now"
                rightBtn="Inventory"
            />
            <Section
                title="Accessories"
                description="order online for touchless delivery"
                backgroundImg="../images/accessories.jpg"
                leftBtn="Order now"
                rightBtn="Inventory"
            />
            <Section
                title="New solar roofs"
                description="order online for touchless delivery"
                backgroundImg="../images/solar-roof.jpg"
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