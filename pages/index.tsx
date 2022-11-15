import React, { useEffect } from 'react';
import HelmetProvier from 'components/Helmet';
import Container from 'components/Container';
import { Navigation } from 'components/index/Navigation';
import { ThemeNavigation } from 'components/index/ThemeChangeBtn';
import styled from 'styled-components';
import axios from 'axios';

export default function Home(){
    const [loading, setLoading] = React.useState(false);
    const [cash, setCash] = React.useState(null);
    const [error, setError] = React.useState(null);
    const fetchDatas = async () => {
        try{
            setCash(null);
            // loading 상태를 true로 바꾼다.
            setLoading(true);
            const getData:any = await axios.get(
                'https://dev-nft.storicha.in/api/cash/product?display_yn=y&product_id=0',{withCredentials:true}
            )
            setCash(getData);
        } catch(e:any) {
            setError(e);
            console.log(error);
        }
        setLoading(false);
    }
    useEffect(()=>{
        fetchDatas();
    },[])
    return (
        <>
            <HelmetProvier title='STORICHAIN'/>
            <Navigation/>
            <ThemeNavigation/>
            <Box>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div onClick={() => console.log(cash)}>Load Data End!!</div>
                )}
            </Box>
            <Container/>
        </>
    )
}

const Box = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999;
`