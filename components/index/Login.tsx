import axios from "axios";
import { GetServerSideProps } from "next";
import Image from "next/image";
import * as React from 'react';
import { useSetRecoilState } from "recoil";
import { LoadingState } from "recoil/loading";
import { LoginMadalState } from "recoil/loginModal";
import { LoginState } from "recoil/user";
import styled from "styled-components";

const LoginBox = () => {
    const loginBoxRef = React.useRef<any>(null);
    const [inputEmail, setInputEmail] = React.useState('');
    const [inputPassword, setInputPassword] = React.useState('');
    const [errorMassage, setErrorMessage] = React.useState<string>('');

    const setLogin = useSetRecoilState(LoginState);
    // loading-state
    const setLoadState = useSetRecoilState(LoadingState);

    // login-madal-state
    const setLoginModal = useSetRecoilState(LoginMadalState);

    const stateChange = (event:any) => {
        event.target.name === 'email' && setInputEmail(event.target.value);
        event.target.name === 'password' && setInputPassword(event.target.value);
    }

    // login-set
    const setLoginState = () => {
        setLoadState(true);
        console.log('login begen...');
        axios({
            method: 'GET',
            url: `https://api-v2.storicha.in/api/User/SiteSnsLogin?site_user_id=${inputEmail}&pwd=${inputPassword}`,
            withCredentials: true,
        })
        .then((response):any => {
            console.log('login complete..');
            if(response.data.response_code == 2012){
                setErrorMessage('The account does not exist');
                return;
            }
            if(response.data.response_code == 2013){
                setErrorMessage('password does not match');
                return;
            }
            setLogin(response ? response.data.response_data[0] : null);
            setErrorMessage('');
            setLoginModal(false);
        })
        .catch((error):any=> {
            console.log('error: ',error);
        })
        setLoadState(false);
    }
    // outside-click-sensing
    React.useEffect(() => {
        document.addEventListener('mousedown', clickModalOutside);
        return () => {
            document.removeEventListener('mousedown', clickModalOutside);
        };
    });
    // outside-click-function
    const clickModalOutside = (event:any) => {
        if(!loginBoxRef.current.contains(event.target)){
            setLoginModal(false);
        }
    }
    return (
        <Container>
            <DarkBox/>
            <Box ref={loginBoxRef}>
                <div className="logo">
                    {localStorage.theme === 'light' ? 
                        <Image
                            src={'/images/logo/dark-logo.png'}
                            layout="fill"
                            objectFit="cover"
                            alt="logo"
                        />
                    : (
                        <Image
                            src={'/images/logo/white-logo.png'}
                            layout="fill"
                            objectFit="cover"
                            alt="logo"
                        />
                    )}
                </div>
                <h1 className="title" onClick={()=> console.log(localStorage.theme)}>SIGN IN<br/>TO CONTINUE</h1>
                    <input 
                        name="email"
                        type="text" 
                        placeholder="example@email.com" 
                        value={inputEmail} 
                        autoComplete="off" 
                        style={{marginTop: '24px'}}
                        onChange={stateChange}
                    />
                    <input 
                        name="password"
                        type="password" 
                        autoComplete="off" 
                        value={inputPassword}
                        onChange={stateChange}
                    />
                    <p className="error">{errorMassage}</p>
                    <button className="login-btn" onClick={setLoginState}>LOGIN</button>
                <h2 className="join-text">Don't have an account? <b>Register</b></h2>
            </Box>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 999999;
`

const DarkBox = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.8;
`
const Box = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px 30px;
    transform: translate(-50%, -50%);
    background-color: var(--box1);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    .logo{
        width: 70px;
        height: 90px;
    }
    .title{
        text-align: center;
        font-size: 18px;
        letter-spacing: .25px;
        margin-top: 12px;
        color: var(--title);
    }
    input {
        background-color: #d7d7d7;
        font-size: 16px;
        padding: 10.5px 20px;
        width: 300px;
        border-radius: 28px;
        color: #000000;
        ::placeholder{
            color: #464646;
        }
    }
    .error{
        margin-top: 6px;
        font-size: 16px;
        color: #f00;
    }
    .login-btn{
        width: 120px;
        padding: 10.5px 0;
        font-size: 16px;
        background-color: #000000;
        color: #FFFFFF;
        margin-top: 12px;
        border-radius: 36px;
    }
    .join-text{
        font-size: 16px;
        margin-top: 12px;
        letter-spacing: -.2px;
        color: var(--title);
        :hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }
    @media screen and (max-width: 500px) {
        width: calc(100vw - 40px);
        min-width: 300px;
    }
`

export const getServerSideProps: GetServerSideProps = async ctx => {
    // get the cookies
    const res = await fetch(`https://go-apod.herokuapp.com/apod`);
    const data = await res.json();
    ctx.res.setHeader('set-Cookie', 'test-cookie');
    return {
        props: { data }
    }
}

export default LoginBox;