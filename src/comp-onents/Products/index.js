import React from 'react'
import {
    ProductsContainer, 
    ProductsWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductDesc,
    ProductPrice,
    ProductImg,
    ProductInfo,
    ProductButton
} from './ProductsElements'

const Products = ({heading, data}) => {
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductsWrapper>
                {data.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt}/>
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    );
                })}
            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default Products
