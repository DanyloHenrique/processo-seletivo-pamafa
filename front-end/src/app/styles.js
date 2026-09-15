import styled from "styled-components";

import { TitleWrapper } from "../components/title/styles";
import { theme } from '@/styles/theme'

const Container = styled.div`
    height: 100dvh;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 40px 1fr 60px;
    grid-template-areas: 
        "header"
        "nav"
        "content"
        "footer";


    @media(${theme.medias.xs}){
        grid-template-columns: auto 1fr;
        grid-template-rows: 120px 1fr 60px;
        grid-template-areas: 
            "nav header"
            "nav content"
            "nav footer";
    }
`

const Main = styled.main`
    grid-area: content;
    
    padding: 1.875rem 1.25rem ;
    height: 100%;
    display: flex;
    flex-direction: column;

    ${TitleWrapper}{
        @media ${theme.medias.xs}{
            display: none;
        }
    } 
`

export { Container, Main }