import React, { useEffect } from 'react';
import Container from 'components/Container';
import { ThemeNavigation } from 'components/index/ThemeChangeBtn';
import styled from 'styled-components';
import axios from 'axios';
import HelmetProvier from 'components/Helmet';

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
                'https://api-v2.storicha.in/api/cash/product?display_yn=y&product_id=0',{withCredentials:true}
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
            <HelmetProvier title='토리 캐시 결제'/>
            <ThemeNavigation/>
            <Box>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div onClick={() => console.log(cash)}>Load Data End!!</div>
                )}
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
`