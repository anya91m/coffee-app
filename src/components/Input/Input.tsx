import { FC } from 'react'
import { Grid, Layout } from '../../styles/Layout/Layout.styles'
import styled from 'styled-components'

const FormWrapper = styled.form`
    grid-column: 1 / -1;

    @media (min-width: 768px) {
        grid-column: 5 / -1;
    }
`

const InputField: FC = () => {
    return (
        <Layout>
            <Grid>
                <FormWrapper>
                    <input type="text" placeholder="search for local cafes" />
                </FormWrapper>
            </Grid>
        </Layout>
    )
}

export default InputField
