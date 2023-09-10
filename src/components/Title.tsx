import { FC } from 'react'
import styled from 'styled-components'
import { Grid, Layout } from '../styles/Layout/Layout.styles'

const Header = styled.h1`
    grid-column: 1 / -1;
    text-align: center;
    padding-top: 8rem;

    @media (min-width: 768px) {
        grid-column: 4 / span 6;
    }

    @media (min-width: 1440px) {
        padding-top: 12rem;
    }
`

const Title: FC = () => {
    return (
        <Layout>
            <Grid>
                <Header>find coffee near me</Header>
            </Grid>
        </Layout>
    )
}

export default Title
