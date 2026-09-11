import styled from "styled-components";
import Link from 'next/link'
import { theme } from "@/styles/theme";

const SidebarWrapper = styled.aside`
    grid-area: nav;

    background-color: var(--color-primary);
    height: 100dvh;

    @media(max-width: ${theme.breakpoints.xs}){
        background-color: transparent;
        height: 2.5rem;
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
    }
`
const ContainerLogo = styled.div`
    width: 280px;
    height: 132px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: ${theme.breakpoints.xs}){
        display: none;
    }
`

const Nav = styled.nav``

const UlList = styled.ul`
    display: flex;
    flex-direction: column;
    background-color: var(--color-primary);

    gap: 1.25rem;
    padding: 1.25rem 1.875rem;

    @media(max-width: ${theme.breakpoints.xs}){
        flex-direction: row;
        background-color: transparent;
        width: max-content;
        min-width: max-content;
        padding: 0;
        gap: 0;
    }
`

const LiItem = styled.li`
    color: var(--color-text-light);
    font-weight: 400;
    font-size: 16px;
    width: fit-content;

    text-decoration: underline transparent;
    transition: text-decoration 100ms ease-in-out;
    &:hover { 
        text-decoration: underline var(--color-text-light) 1px;
    }
    
    @media(max-width: ${theme.breakpoints.xs}){
        padding: .625rem .9375rem;

        font-weight: 500;
        border-bottom: 1px solid ${({ $isActive }) => ($isActive ? theme.colors.primary : 'transparent')};
        color: ${({ $isActive }) => ($isActive ? theme.colors.primary : theme.colors.textGray)};
    }
`

const LinkNav = styled(Link)`
    width: fit-content;
`

export { SidebarWrapper, ContainerLogo, Nav, UlList, LiItem, LinkNav }

