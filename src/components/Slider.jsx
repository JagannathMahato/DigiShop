import styled from 'styled-components'
import {MdOutlineKeyboardArrowLeft,
     MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { useState } from 'react';
import { sliderItems } from '../data';
import { mobile } from '../responsive';


const Container = styled.div`
    width:100%;
    height:80vh;
    display:flex;
    overflow:hidden;
    position:relative;
    ${mobile({display:"none"})}
`;

const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7; 
    border-radius:50%;
    display: flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    left:${props => props.direction === 'left' && "10px"};
    right:${props => props.direction === 'right' && "10px"};
    cursor:pointer;
    opacity:50%;
    z-index:2;

`; 

const Wrapper=styled.div`
    height:100%;
    display:flex;
    transition: all 1.5s ease;
    transform:translateX(${(props)=> props.slideIndex * -100}vw);
`;
const Slide = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-item:center;
    background-color:#${props=>props.bg};
`;
const ImageContainer = styled.div`
    height:100%;
    flex:1;
`;
const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
`;
const Title=styled.h1`
    font-size:70px;

`;
const Description=styled.p`
    margin:50px 0px;
    font-size:20px;
    font-weight: 500;
    letter-spacing:3px;
`;
const Button=styled.button`
    padding:10px;
    font-size: 20px;
    background-color:transparent;
    cursor:pointer;
`;

const Image=styled.img`
    height:80%;
`;

function Slider() {

    const [slideIndex, setSlideIndex]=useState(0);

    const handleClick = (direction) => {
       if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
       }else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
       }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <MdOutlineKeyboardArrowLeft/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>(
                <Slide bg={item.bg} key={item.id}>
                <ImageContainer>
                    <Image src={item.img}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>
                    <Button>Shop Now</Button>
                </InfoContainer>
            </Slide>
            ))}
            
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <MdOutlineKeyboardArrowRight/>
        </Arrow>
    </Container>
  )
}

export default Slider
