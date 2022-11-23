import axios from 'axios';
import * as React from 'react';
import { useSetRecoilState } from 'recoil';
import { LoadingState } from 'recoil/loading';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const getDataDev = () => {
    const [data, setData] = React.useState<any>(null);
    const [error, setError] = React.useState<any>(null);
    const setLoadState = useSetRecoilState(LoadingState);
    const router = useRouter();
    const dataApiTest = async () => {
        setData(null);
        setError(null);
        try {
            setLoadState(true);
            console.log('데이터 불러오는 중...')
            axios({
                method: 'GET',
                url: `https://api-v2.storicha.in/api/cashseries/episode?series_idx=${router.query.idx}&page_no=1`,
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                data: {
                    series_idx: router.query.idx ,
                    page_no: 1,
                },
                withCredentials: true,
            })
            .then(response => {
                setData(response);
                console.log('데이터 저장완료...')
            })
        } catch(error) {
            console.log(error);
        }
        setLoadState(false);
    }
    React.useEffect(()=>{
    },[]);
    return (
        <Container>
            <button onClick={()=> dataApiTest()}>테스트</button>
            <button onClick={()=> console.log(data)}>데이터</button>
            <button onClick={()=> console.log(router.query.idx)}>데이터2</button>
            <p className='error'>{error && error.message}</p>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999999;
    gap: 18px;
    button {
        padding: 6px 10px;
        font-size: 18px;
        border: 1.4px solid #000000;
    }
    .error{
        margin-top: 24px;
        font-size: 18px;
        color: #F00000;
    }
`

export default getDataDev;