import axios from "axios";
import styled from "styled-components";
import * as React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { LoginState } from "recoil/user";
import { LoadingState } from "recoil/loading";

const Devtools = () => {
    const login = useRecoilValue(LoginState);
    const setLogin = useSetRecoilState(LoginState);
    const setLoadState = useSetRecoilState(LoadingState);
    const [loginState, setLoginState] = React.useState<boolean>(false);
    const cookieSet = async () => {
        if(login === null){
            try{
              setLoadState(true);
                console.log('로그인 하는중 ...');
                const request = await axios.get(
                  'https://api-v2.storicha.in/api/User/SiteSnsLogin?site_user_id=testkwy@test.com&pwd=1234QWER!',
                  { withCredentials: true },
                )
                setLogin(request);
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
              setLoadState(true);
              console.log('로그아웃 하는중...');
              await axios.get(
                'https://api-v2.storicha.in/api/User/Logout',
                { withCredentials: true },
              )
              setLogin(null);
            } catch(error) {
              console.log(error);
            }
        }
        setLoadState(false);
    }
    React.useEffect(()=>{
        login === null ? setLoginState(true) : setLoginState(false);
    },[]);
    React.useEffect(()=>{
        login === null ? setLoginState(true) : setLoginState(false);
    },[login]);
    return (
        <Wrarpper>
            <Container onClick={cookieSet}>
                {loginState ? '로그인하기' : '로그아웃하기'}
            </Container>
            <Box onClick={()=> console.log(login)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
            </Box>
        </Wrarpper>
    )
}

const Wrarpper = styled.div`
    position: fixed;
    bottom:20px;
    left: 20px;
    gap: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999999;
`

const Container = styled.div`
    cursor: pointer;
    padding: 6.5px 10.5px;
    background-color: var(--title);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    gap: 4px;
    svg{
        width: 20px;
        height: 20px;
        transition: all .3s ease-in-out;
        color: var(--bgColor);
        transition: .15s all ease-in-out;
    }
    font-size: 16px;
    color: var(--bgColor);
    transition: .15s all ease-in-out;
    &:hover{
        color:rgb(235, 59, 90);
        svg{
            fill: rgb(235, 59, 90);
        }
    }
`
const Box = styled.div`
    background-color: var(--title);
    padding: 4px;
    border-radius: 4px;
    color: var(--bgColor);
    cursor: pointer;
    &:hover{
        svg{
            fill: rgb(235, 59, 90);
        }
    }
`
export default Devtools;