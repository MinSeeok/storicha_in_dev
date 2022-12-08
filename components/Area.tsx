import styled from "styled-components";

const Area = ({children}:any) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    padding: 40px 12px 60px 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    z-index: 10;
    background-color: var(--box1);
`

export default Area;