import styled from "styled-components"
import { TitleWrapper } from "../title/styles"
import { theme } from "@/styles/theme"

const HeaderWrapper = styled.header`
    grid-area: header;

    height: 3.75rem;
    width: 100%;
    background-color: var(--color-primary);
    color: var(--color-text-light);
    border-bottom: 1px solid rgb(0, 0, 0, 0.3);
    
    padding: .75rem .625rem;
    gap: .625rem;

    display: flex;
    justify-content: space-between;
    align-items: baseline;
    overflow-wrap: normal;

    @media(${theme.medias.xs}){
        flex-direction: column;
        
        height: 7.5rem;
        background-color: var(--color-white);
        color: var(--color-text);

        padding: 1.25rem 0.5rem;
        align-items: center;
    }

    @media (min-width: 550px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 1.25rem 2.5rem;
    }

    /* toggle IMAGE and TITLE components*/
    ${TitleWrapper}{
        display: none;
        @media(${theme.medias.xs}){
            display: block;
            font-size: 28px;
        }

        @media ${theme.medias.sm}{
            font-size: 36px;
        }
    } 
    > img{
        display: block;
        @media(${theme.medias.xs}){
            display: none;
        }
    }
`

const UserName = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: var(--color-text-light);
    white-space: nowrap;
    
    @media(${theme.medias.xs}){
        color: var(--color-text-gray);
        font-weight: 200;
        font-size: 1rem;
    }

    @media ${theme.medias.sm}{
        font-size: 1.25rem;
    }
`

export { HeaderWrapper, UserName }