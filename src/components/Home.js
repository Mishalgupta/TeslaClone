import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import model_s from "../images/model-s.jpg";
import model_y from "../images/model-y.jpg";
import model_3 from "../images/model-3.jpg";
import accessories from "../images/accessories.jpg";
import solar_roof from "../images/solar-roof.jpg";

const Home = () => {
    return (
        <Container>
            <Section
                title="Model S"
                description="order online for touchless delivery"
                backgroundImg={model_s}
                leftBtn="Order now"
                rightBtn="Inventory"
            />
            <Section
                title="Model Y"
                description="order online for touchless delivery"
                backgroundImg={model_y}
                leftBtn="Order now"
                rightBtn="Inventory"

            />
            <Section
                title="Model 3"
                description="order online for touchless delivery"
                backgroundImg={model_3}
                leftBtn="Order now"
                rightBtn="Inventory"
            />
            <Section
                title="Accessories"
                description="order online for touchless delivery"
                backgroundImg={accessories}
                leftBtn="Order now"
                rightBtn="Inventory"
            />
            <Section
                title="New solar roofs"
                description="order online for touchless delivery"
                backgroundImg={solar_roof}
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