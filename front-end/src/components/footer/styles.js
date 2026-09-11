import styled from 'styled-components'
import { theme } from '@/styles/theme'

const FooterWrapper = styled.footer`
    grid-area: footer;

    width: 100%;
    height: 60px;
    background-color: var(--color-white);

    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;

    color: var(--color-text-gray);
    font-weight: 400;
    font-size: 16px;
    font-style: 'regular';
    
    @media ${theme.medias.xs}{
        font-size: 14px;
    }
`

export { FooterWrapper }