import React from 'react'
import styled from 'styled-components';
import down_arrow from '../images/down-arrow.svg'

const Section = ({ title, description, backgroundImg, leftBtn, rightBtn }) => {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtn}
                    </LeftButton>
                    <RightButton>
                        {rightBtn}
                    </RightButton>
                </ButtonGroup>
                <DownArrow src={down_arrow} />
            </Buttons>
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
backgroun-repeat:no-repeat;
background-image: ${(props) => `url(${props.bgImage})`};
display:flex;
flex-direction:column;
justify-content:space-between; // vertical
align-items:center; // horizontal
`

const ItemText = styled.div`
padding-top:15vh;
text-align:center;
`

const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;
@media(max-width:768px){
    flex-direction:column;
}
`

const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;
`

const RightButton = styled(LeftButton)`
background:white;
opacity:0.65;
color:black;
`

const DownArrow = styled.img`
 height:40px;
overflow-x:hidden;
animation:animateDown infinite 1.5s;
cursor:pointer;
`

const Buttons = styled.div`

`