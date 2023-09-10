import styled from 'styled-components'

export const Layout = styled.div`
    display: grid;
    grid-template-columns:
        [full-start] minmax(0, 1fr) [main-start] minmax(0, 1344px)
        [main-end] minmax(0, 1fr) [full-end];
    grid-column-gap: 1rem;
    margin-inline: auto;

    @media (min-width: 768px) {
        grid-column-gap: 1.5rem;
    }

    @media (min-width: 1280px) {
        grid-column-gap: 2rem;
    }

    & > * {
        grid-column: main;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
    grid-auto-columns: 0;
    isolation: isolate;

    @media (min-width: 768px) {
        grid-template-columns: repeat(12, 1fr);
        grid-column-gap: 1.5rem;
    }

    @media (min-width: 1280px) {
        grid-column-gap: 2rem;
    }
`
