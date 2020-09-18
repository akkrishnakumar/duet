import React from 'react'
import { Container } from '@material-ui/core'

const Layout = (props) => (
    <Container maxWidth={false}>
        {props.children}
    </Container>
)

export default Layout