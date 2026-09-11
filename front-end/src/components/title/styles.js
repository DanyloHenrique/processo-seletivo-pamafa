import styled from "styled-components";

const TitleWrapper = styled.h2`
    color: var(--color-text);
    font-weight: ${({ $isBig }) => ($isBig ? 700 : 600)};
    font-size: ${({ $isBig }) => ($isBig ? '24px' : '36px')} ; 
`

export { TitleWrapper }