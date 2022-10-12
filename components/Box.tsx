import styled from "styled-components";

const Box = ({children}:any) => {
    return (
        <Container className='bg-[#FFFFFF] dark:bg-[#17171A]'>
            {children}
        </Container>
    )
}

export default Box;

const Container = styled.div`
  box-sizing: border-box;
  min-width: 428px;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 12px;
  position: relative;
  z-index: 999;
  margin: 40px 0 80px 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media screen and (max-width: 500px) {
    width: 100%;
    min-width: 350px;
    padding: 30px 16px 20px 16px;
    margin-top: 0px;
    border-radius: 0px;
  }
`