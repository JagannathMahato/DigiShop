import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'



const Container= styled.div`

`;

const Wrapper= styled.div`
    padding:20px;
    ${mobile({padding:"10px"})}
`;

const Title= styled.h1`
    font-weight:300;
    text-align:center;
`;

const Top= styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`;

const TopButton= styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border:${props=> props.type === "filled" && 'none'};
    background-color:${props => props.type === "filled" ? "black": "transparent"};
    color:${props => props.type === "filled" && "white"};
`;

const TopTexts= styled.div`
${mobile({display:"none"})}
`;

const TopText= styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0px 10px;
`;


const Bottom= styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:"column"})}
`;

const Info= styled.div`
    flex:3;
`;

const Summary= styled.div`
    flex:1;
    border:0.5px solid lightgray;
    border-radius:10px;
    padding:20px;
    height:50vh;
`;


const SummaryTitle = styled.h1`
    font-weight:200;
`;

const SummaryItem = styled.div`
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight:${props => props.type === "total" && "500"};
    font-size:${props => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`

`;

const SummaryItemPrice = styled.span`

`;

const Button = styled.button`
    width:100%;
    padding:10px;
    background-color:black;
    color:white;
    font-weight:600;

`;

const Hr = styled.hr`
    background-color:#eee;
    border:none;
    height:1px;
`;

const Product = styled.div`
    display:flex;
    justify:content:space-between;
    ${mobile({flexDirection:"column"})}
`;

const ProductDetail = styled.div`
    flex:2;
    display:flex;
`;

const Details = styled.div`
    display:flex;
    padding:20px;
    flex-direction:column;
    justify-content:space-around;
`;

const Image = styled.img`
    width:200px;
`;

const ProductName = styled.span`

`;

const ProductColor = styled.div`
    width:20px; 
    height:20px;
    border-radius:50%;
    background-color:#${props => props.color}
`;

const ProductId = styled.span`

`;

const ProductSize = styled.span`

`;

const PriceDetail = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`; 

const ProductQuantityContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`;

const ProductQuantity = styled.div`
    font-size:24px;
    margin:5px;
    ${mobile({margin:"5px 15px"})}
`;

const ProductPrice = styled.div`
    font-size:30px;
    font-weight:200;
    ${mobile({marginBottom:"20px"})}
`;





const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                 <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://www.freepnglogos.com/uploads/women-bag-png/women-bag-png-transparent-images-download-clip-6.png"/>
                            <Details>
                                <ProductName><b>PRODUCT :</b>VINCENT LOUIES TOTE BAG</ProductName>
                                <ProductId><b>ID :</b>0000849168</ProductId>
                                <ProductColor color="fa5e2f"/>
                                <ProductSize><b>SIZE :</b>MEDIUM</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductQuantityContainer>
                                <Add />
                                    <ProductQuantity>2</ProductQuantity>
                                <Remove />
                            </ProductQuantityContainer>
                            <ProductPrice> $30</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://www.freepnglogos.com/uploads/women-bag-png/women-bag-women-shoulder-bags-png-transparent-images-31.png"/>
                            <Details>
                                <ProductName><b>PRODUCT :</b>OPPO TOTE BAG</ProductName>
                                <ProductId><b>ID :</b>0000845868</ProductId>
                                <ProductColor color="31478b"/>
                                <ProductSize><b>SIZE :</b>MEDIUM</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductQuantityContainer>
                                <Add />
                                    <ProductQuantity>1</ProductQuantity>
                                <Remove />
                            </ProductQuantityContainer>
                            <ProductPrice> $50</ProductPrice>
                        </PriceDetail>
                    </Product>
                    
                 </Info>
                 <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal : </SummaryItemText>
                        <SummaryItemPrice>$ 110</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping : </SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount : </SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total : </SummaryItemText>
                        <SummaryItemPrice>$ 110</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                 </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>      
    </Container>
  )
}

export default Cart
