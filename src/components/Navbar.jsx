import React from 'react'
import styled from 'styled-components'
import {MdSearch, MdOutlineShoppingCart} from 'react-icons/md';
import Badge from '@mui/material/Badge';


const Container = styled.div`
    height: 60px;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content:  space-between;
    align-item: center;
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
`;

const MenuItem = styled.div`
    font-size:14px;
    cursor: pointer;
    margin-left: 25px;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer =styled.div`
    border:0.5px solid lightgrey;
    display: flex;
    align-item: center;
    margin-left:25px;
    padding:5px;
`
const Input = styled.input`
    border:none;
`

const Logo=styled.h1`
    font-weight:bold;
`


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
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
                    <Badge badgeContent={4} color="primary">
                        <MdOutlineShoppingCart color="action" />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
