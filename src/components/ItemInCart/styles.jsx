import styled from "styled-components";

export const StyledItemsInCart = styled.div`
display: flex;
border-radius: 6px;
justify-content: space-between;
border: ${({ theme }) => 
    `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
    padding: 1.5rem;
    margin: 2rem 0;
    
    .item-info {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
    }
    
    img {
        widht: 7.5rem;
    }
    
    h2 {
        margin: 0;
    }
    
    .price {
        margin: 0.5rem 0 1rem;
    }
    
    .quantity {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin: 2rem 0;
    }
    
    button {
        display: flex;
        border: none;
        background-color: ${({ theme }) => theme.color.support};
        color: ${({ theme }) => theme.color.buttonText};
        border-radius: 6px;
        cursor: pointer;

        &:hover {
            opacity: 1;
            background-color: ${({ theme }) => theme.color.highlight};
            color: ${({ theme }) => theme.color.support};
        }
    }
    `;