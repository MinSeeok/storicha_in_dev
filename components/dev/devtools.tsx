import axios from "axios";
import styled from "styled-components";
import * as React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { LoginState } from "recoil/user";
import Image from "next/image";
import LoadingIcon from '../../assets/icon/loading.svg';

const Devtools = () => {
    const login = useRecoilValue(LoginState);
    const setLogin = useSetRecoilState(LoginState);
    const [loading, setLoading] = React.useState(false);
    const cookieSet = async () => {
        if(login === null){
            axios.defaults.headers.common['CLIENT_IP'] = '211.253.9.217:443'
            try{
                setLoading(true);
                console.log('로그인 하는중 ...');
                const request = await axios.post(
                    'https://api-v2.storicha.in/api/User/SiteSnsLogin?site_user_id=testkwy@test.com&pwd=1234QWER!',
                )
                // setUser(request);
                setLogin(request);
                alert('로그인 완료');
            } catch (error) {
                console.log(error);
            }
        } else {
            setLogin(null);
            alert('로그아웃되었습니다.');
        }
        setLoading(false);
    }
    return (
        <Wrarpper>
            <Container onClick={cookieSet}>
                {login === null ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>
                )}
                {/* {login === null ? (
                    <span>로그인하기</span>
                ) : (
                    <span>로그아웃하기</span>
                )} */}
            </Container>
            <Box onClick={()=> console.log(login)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
            </Box>
            {loading ? (
                <LoadingBox>
                    <DarkBackground/>
                    <Image
                        src={LoadingIcon}
                        width={'80px'}
                        height={'80px'}
                        alt={'LOADING...'}
                    />
                </LoadingBox>
            ) : (
                <></>
            )}
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
    padding: 4px 10.5px;
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
    span {
        font-size: 16px;
        color: var(--bgColor);
        transition: .15s all ease-in-out;
    }
    &:hover{
        svg{
            fill: rgb(235, 59, 90);
        }
        span{
            color:rgb(235, 59, 90);;
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
const LoadingBox = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999;
    transition: all ease-in-out .15s;
    pointer-events: none;
    img{
        opacity: 1;
    }
`

const DarkBackground = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.6;
    position: absolute;
`
export default Devtools;