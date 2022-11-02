import * as React from "react"
import styled from "styled-components"

type Props = {
    children: React.ReactNode;
}

export default function Layout( props: Props ){
    return (
        <Container>
            {props.children}
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`