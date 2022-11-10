import axios from "axios";
import Layout from "components/Layout"
import { RefundAccountRegistrationBox } from "components/popup/refund_account_registration"
import * as React from 'react'
import styled from "styled-components";

export default function View(){
    const [fetchData, setFetchData] = React.useState<any>(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<any>(null);
    const fetchDatas = async () => {
        try {
            // error, data 초기화
            setError(null);
            setFetchData(null);
            // loading state true
            setLoading(true);
            const getData = await axios.get(
                'https://dev-nft.storicha.in/api/payment/method?display_yn=y&product_id=0',{withCredentials:true}
            )
            setFetchData(getData);
        } catch(e) {
            setError(e);
        }
        setLoading(false);
    };
    React.useEffect(()=> {
        fetchDatas();
    },[]);
    return (
        <>
            <Title onClick={()=> console.log(fetchData)}>테스트</Title>
            <Layout>
                {/* <HeightControlBox/> */}
                <RefundAccountRegistrationBox/>
            </Layout>
        </>
    )
}
const Title = styled.h1`
    font-size: 34px;
    cursor: pointer;
    z-index: 999999;
`