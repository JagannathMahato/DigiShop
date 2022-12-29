import React from 'react'
import styled from 'styled-components'
import {MdSearch, MdOutlineShoppingCart} from 'react-icons/md';
import Badge from '@mui/material/Badge';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 60px;
    ${mobile({height:"50px"})}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content:  space-between;
    align-item: center;
    ${mobile({padding:"10px 0px"})}
`;

const Left = styled.div`
    flex:1;
    display: flex;
    align-item: center;
`;

const Center = styled.div`
    flex:1;
    text-align: center;
`;

const Right = styled.div`
    flex:1;
    display: flex;
    align-item: center;
    justify-content: flex-end;
    ${mobile({flex:2, justifyContent:"center"})}
`;

const MenuItem = styled.div`
    font-size:14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSizee:"12px", marginLeft:"10px"})}
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})}
`;

const SearchContainer =styled.div`
    border:0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left:25px;
    ${mobile({marginLeft:"10px"})}
`;
const Input = styled.input`
    border:none;
    padding:10px;
    ${mobile({width:"50px"})}
`;

const Logo=styled.h1`
    font-weight:bold;
    ${mobile({fontSize:"24px"})}
`;


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/>
                    <MdSearch style={{color:'gray', fontsize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>DigiShop</Logo>
            </Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <MenuItem>
                    <Badge badgeContent={3} color="primary">
                        <MdOutlineShoppingCart color="action" />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
