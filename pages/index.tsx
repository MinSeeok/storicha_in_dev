import React from 'react';
import { ThemeNavigation } from 'components/index/ThemeChangeBtn';
import styled from 'styled-components';
import HelmetProvier from 'components/Helmet';
import Router, { useRouter } from 'next/router';
import axios from 'axios';

export default function Home(props:any){
    console.log(props.data.dataseries);
    return (
        <>
            <HelmetProvier title='IP Manager'/>
            <ThemeNavigation/>
            <Box>
                <img onClick={()=> Router.push('/series?idx=5737')} src="/images/aadcb6a8c15c5e54b4d13add8c1cf389e843a361.gif" alt="" />
            </Box>
        </>
    )
}

const Box = styled.div`
    padding: 20px;
    width: 100vw;
    min-height: calc(100vh - 252px);
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        cursor: pointer;
        height: 70vh;
        margin-top: 100px;
    }
    @media screen and (max-width: 768px) {
        img{
            margin-top: 20px;
        }
    }
`

export async function getStaticPaths(){
    const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    const paths = posts.data.dataseries.map(({id}:any) => ({params: {id: `${id}`}}));
    return {
        paths,
        fallback: true,
    };
}