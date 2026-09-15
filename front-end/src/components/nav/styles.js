import styled from "styled-components";
import Link from 'next/link'
import { theme } from "@/styles/theme";

const SidebarWrapper = styled.aside`
    grid-area: nav;

    background-color: transparent;
    height: 2.5rem;
    display: flex;
    overflow-x: scroll;
    scrollbar-width: thin;

    @media ${theme.medias.xs}{
        height: 100dvh;
        width: clamp(9.375rem, 25vw, 17.5rem);
        background-color: var(--color-primary);
        flex-direction: column;
    }
`
const ContainerLogo = styled.div`
    display: none;

    @media ${theme.medias.xs}{
        width: 100%;
        height: 132px;
        padding-inline: 1rem;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media ${theme.medias.sm}{
        padding-inline: 0rem;
    }
`

const Nav = styled.nav``

const UlList = styled.ul`
    display: flex;
    background-color: transparent;
    width: max-content;
    min-width: max-content;
    padding: 0;
    gap: 0;

    @media ${theme.medias.xs}{
        flex-direction: column;
        gap: 1.25rem;
        padding: 1.25rem 1.875rem;
    }
`

const LiItem = styled.li`
    font-size: 16px;
    font-weight: 500;
    padding: .625rem .9375rem;
    width: fit-content;

    border-bottom: 1px solid ${({ $isActive }) => ($isActive ? theme.colors.primary : 'transparent')};
    color: ${({ $isActive }) => ($isActive ? theme.colors.primary : theme.colors.textGray)};
    
    @media ${theme.medias.xs}{
        padding: 0;
        color: var(--color-text-light);
        font-weight: 400;

        text-decoration: underline transparent;
        transition: text-decoration 100ms ease-in-out;
        &:hover { 
            text-decoration: underline var(--color-text-light) 1px;
        }
    }

`

const LinkNav = styled(Link)`
    width: fit-content;
`

export { SidebarWrapper, ContainerLogo, Nav, UlList, LiItem, LinkNav }

