import React from 'react'
import styled from 'styled-components'
import { MdFacebook, MdLocationPin, MdOutlinePhone, MdEmail } from 'react-icons/md';
import { AiFillLinkedin, AiOutlineInstagram, 
    AiFillTwitterCircle } from 'react-icons/ai';
import { mobile } from '../responsive';

const Container = styled.div`
    display:flex;
    ${mobile({flexDirection:"column"})}
`; 
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`;
const Logo = styled.h1`
    
`;
const Desc = styled.p`
    margin:20px 0px;
`;
const SocialContainer = styled.div`
    display:flex;
`;
const SocialIcon = styled.div` 
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color:#${props => props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`;

const Right = styled.div`
flex:1;
padding: 20px;
${mobile({backgroundColor:"#eee"})}
`; 

const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`;

const Payment = styled.img`
    width:50%;
`;

const Center = styled.div`
flex:1;
padding: 20px;
${mobile({display:"none"})}
`; 

const Title=styled.h3`
margin-bottom:30px;
`;
const List=styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`;
const ListItem=styled.li`
    width:50%;
    margin-bottom:10px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
            <Logo>DigiShop</Logo>
            <Desc>Contrary to popular belief, Lorem Ipsum is not
                 simply random text. It has roots in a piece of classical
                  Latin literature from 45 BC, making it over 2000 years 
                  old.</Desc>

            <SocialContainer>
                <SocialIcon color="3B5999">
                    <MdFacebook/>
                </SocialIcon>
                <SocialIcon color="3449eb">
                    <AiFillLinkedin/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <AiFillTwitterCircle/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <AiOutlineInstagram/>
                </SocialIcon>
            </SocialContainer>
      </Left>
    <Center>
        <Title>Useful links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Favourites</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Terms and Conditions</ListItem>
        </List>
    </Center>
    <Right>
        <Title>Contacts</Title>
        <ContactItem>
            <MdLocationPin style={{marginRight:"10px"}}/>
            Jamshedpur, Jharkhand - India
        </ContactItem>
        <ContactItem>
            <MdOutlinePhone style={{marginRight:"10px"}}/>
            +91-766-1234504
        </ContactItem>
        <ContactItem>
            <MdEmail style={{marginRight:"10px"}}/>
            contact@digishop.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>

    </Right>
    </Container>
  )
}

export default Footer
