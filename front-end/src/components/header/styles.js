import styled from "styled-components"
import { TitleWrapper } from "../title/styles"
import { theme } from "@/styles/theme"

const HeaderWrapper = styled.header`
    grid-area: header;

    width: 100%;
    height: 7.5rem;
    background-color: var(--color-white);
    color: var(--color-text);
    border-bottom: 1px solid rgb(0, 0, 0, 0.3);

    padding: 1.25rem 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

        @media(max-width: ${theme.breakpoints.xs}){
        height: 3.75rem;
        padding: .75rem .625rem;
        gap: .625rem;

        background-color: var(--color-primary);
        color: var(--color-text-light);

        align-items: baseline;
        overflow-wrap: normal;
    }


    /* toggle IMAGE and TITLE components*/
    ${TitleWrapper}{
        display: block;
            @media(max-width: ${theme.breakpoints.xs}){
            display: none;
        }
    } 
    > img{
        display: none;
            @media(max-width: ${theme.breakpoints.xs}){
            display: block;
        }
    }
`

const UserName = styled.p`
    color: var(--color-text-gray);
    font-weight: 200;
    font-size: 20px;

        @media(max-width: ${theme.breakpoints.xs}){
        font-size: 14px;
        font-weight: 500;
        color: var(--color-text-light);
        text-wrap-mode: nowrap;
    }
`

export { HeaderWrapper, UserName }