import styled from "styled-components";

const Area = ({children}:any) => {
    return (
        <Container className='bg-[#FFFFFF] dark:bg-[#17171A]'>
            {children}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding: 8;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
`

export default Area;