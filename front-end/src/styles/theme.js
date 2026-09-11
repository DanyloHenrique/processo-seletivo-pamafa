const colors = {
    primary: '#203E88',
    background: '#EAEAEA',
    white: '#FFFFFF',
    text: '#2A2A2A',
    textGray: '#656565',
    textLight: '#C9C9C9'
}

const breakpoints = {
    xs: '360px', //360px
    sm: '768px', //768px
    lg: '1024px' //1024px
}

const medias = {
    xs: `(min-width: ${breakpoints.xs})`,
    sm: `(min-width: ${breakpoints.sm})`,
    lg: `(min-width: ${breakpoints.lg})`
}

export const theme = {
    colors, breakpoints, medias
}