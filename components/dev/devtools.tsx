import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import styled from "styled-components";
import cookie from "cookie";
import * as React from "react";
import { Cookies } from 'react-cookie';

const Devtools = () => {
    const [user, setUser] = React.useState<any>(null);
    const cookieSet = async () => {
        try{
            const request = await axios.post(
                'https://api-v2.storicha.in/api/User/SiteSnsLogin?site_user_id=testkwy@test.com&pwd=1234QWER!',
            )
            setUser(request);
            console.log(request.headers);
        } catch (error) {
            console.log(error);
        }
    }
    React.useEffect(()=> {
        cookieSet();
    },[]);
    return (
        <Container>
            <svg onClick={()=>console.log(user.headers['set-cookie'])} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
            </svg>
            <svg onClick={()=>console.log(user)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
            </svg>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    bottom:20px;
    left: 20px;
    cursor: pointer;
    padding: 4px 10.5px;
    background-color: var(--title);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    z-index: 999999;
    svg{
        width: 24px;
        height: 24px;
        transition: all .3s ease-in-out;
        color: var(--bgColor);
    }
    &:hover{
        svg{
            fill: yellowgreen;
        }
    }
`
export default Devtools;