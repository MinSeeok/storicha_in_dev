import axios from 'axios';
import Box from 'components/Box';
import HelmetProvier from 'components/Helmet';
import { TopupProductData } from 'enum/data-type';
import { commaNumber } from 'func/addComma';
import { NextPage } from 'next';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';
import * as React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { LoadingState } from 'recoil/loading';
import { LoginMadalState } from 'recoil/loginModal';
import { LoginState } from 'recoil/user';
import styled from 'styled-components';

const Cash:NextPage = () => {
    const [inputValue, setInputValue] = React.useState<string>('');
    const [selectNumber, setSelectNumber] = React.useState<number>(0);
    const [idx, setIdx] = React.useState<number>(0);
    const [price, setPrice] = React.useState<number>(0);
    const [dcPrice, setDcPrice] = React.useState<number>(0);
    const [balance, setBalance] = React.useState<number>(0);

    const [productIdx, setProductIdx] = React.useState<number | undefined>(0);
    const [pricePolicy, setPricePolicy] = React.useState<number | undefined>(0);
    const [fillupAmount, setFillupAmount] = React.useState<number>(0);
    const [cashBuyType, setCashBuyType] = React.useState<string>('Direct');

    const [login, setLogin] = React.useState<String | null>('');
    const router = useRouter();
    const routerIdx = router.asPath.substring(router.asPath.indexOf('idx=')+4);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPrice(Number(value.replace(',', '')));
        setDcPrice(Number(value.replace(',', '')));
        setFillupAmount(Number(value.replace(',', '')));
        const onlyNumber = value.replace(/[^0-9]/g, '').replace(/(^0+)/, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        setInputValue(onlyNumber);
    }
    const coinSelect = (number: number, price:number , dcPrice:number) => {
        setSelectNumber(number);
        setInputValue(String(price).replace(/[^0-9]/g, '').replace('/^0/','').replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        setPrice(price);
        setDcPrice(dcPrice);
    }
    const regex = /[^0-9]/gi;

    // topup-data
    const [topupData, setTopupData] = React.useState<TopupProductData | null>(null);
    // loading state
    const setLoadState = useSetRecoilState(LoadingState);
    const [error, setError] = React.useState<any>(null);

    const fetchDatas = async () => {
        if(localStorage.getItem('stori-token')){
            console.log('fetch Data start...');
            try {
                // error, data ?????????
                setError(null);
                setTopupData(null);
                // loading state true
                setLoadState(true);
                axios({
                    method: 'POST',
                    url: 'https://api-v2.storicha.in/api/cash/product?display_yn=y&product_id=0',
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                    data: {
                        tk: localStorage.getItem('stori-token')
                    },
                }).then ((response):any => {
                    setTopupData(response.data);
                }).catch(()=> {
                    console.log('????????????');
                })
            } catch(e) {
                setError(e);
                console.log(error);
            }
        }
        setLoadState(false);
    };
    const nextPage = () => {
        if(pricePolicy === 0){
            alert('CASH ????????? ?????? ??? ???????????????');
            return;
        }
        axios({
            method: 'POST',
            url: `https://api-v2.storicha.in/api/product-order`,
            headers: {
                "Content-Type": "multipart/form-data"
            },
            data: {
                prd_idx: productIdx,
                policy_idx: pricePolicy,
                fill_qty: fillupAmount,
                tk: localStorage.getItem('stori-token')
            },
        }).then((response):any => {
            const res_idx = response.data.response_data[0].cash_product_order_idx;
            const res_bp = response.data.response_data[0].cash_fillup_amount;
            const res_vatin = response.data.response_data[0].actual_buy_price;
            Router.push({
                pathname: `/cash/checkout`,
                query: {
                    res_idx, 
                    res_bp, 
                    res_vatin
                }
            },`/cash/checkout?idx=${routerIdx}`);
        }).catch((error)=> {
            console.log(error);
        })
    }
    const returnToPage = async () => {
        alert('????????? ??? ????????? ??? ????????????.')
        router.push('/')
    }
    React.useEffect(()=>{
        console.log('component lender')
        let useParams = new URLSearchParams(window.location.search)
        setIdx(Number(useParams.get('idx')))
        localStorage.getItem('stori-token') ? setLogin(localStorage.getItem('stori-email')) : returnToPage()
        localStorage.getItem('stori-token') ? fetchDatas() : setTopupData(null)
    },[]);
    return(
        <>
            <HelmetProvier title='?????? ?????? ??????'/>
            <Box>
                {login && (
                    <>
                        <Title onClick={()=>returnToPage()}>
                            ?????? ?????? ?????? ?????? &nbsp;
                            <Image
                                src={'/images/icons/toriCoin.png'}
                                width={'20px'}
                                height={'20px'}
                                alt='Image'
                            />
                            &nbsp;
                            {balance !== 0 ? String(balance).replace(/[^0-9]/g, '').replace(/(^0+)/, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0}
                            <span onClick={()=> console.log(balance)}>TC</span>
                        </Title>
                        <TopupBoxTop>
                            <Directly
                                placeholder='0'
                                type="text"
                                onChange={onChange}
                                onClick={()=> 
                                    {
                                        setInputValue('0');
                                        coinSelect(0,0,0);
                                        setCashBuyType('Direct');
                                        setPricePolicy(topupData?.response_data  && topupData.response_data[0].cash_price_policy_idx);
                                        setProductIdx(topupData?.response_data  && topupData.response_data[0].cash_product_idx); 

                                    }
                                }
                                value={inputValue}
                            />
                            <button onClick={()=> {
                                nextPage();
                            }}>????????????</button>
                            <span><b>CASH</b>????????????</span>
                        </TopupBoxTop>
                        <TopupBox>
                            {topupData !== null && topupData.response_data?.map((content, i) => {
                                if(content.cash_buy_type === "Suggeted")
                                    return (
                                        <CoinBox 
                                            id={`CoinBox${i}`} 
                                            key={i} 
                                            onClick={() => {
                                                setFillupAmount(Number(content.cash_fillup_amount));
                                                setPricePolicy(content.cash_price_policy_idx);
                                                setProductIdx(content.cash_product_idx); 
                                                setCashBuyType('Suggeted');
                                                coinSelect(content.cash_product_idx ? content.cash_product_idx : 0, content.product_price ? content.product_price : 0, content.product_dc_price ? content.product_dc_price : 0)} 
                                            }
                                                className={selectNumber === content.cash_product_idx ? "select" : ""}
                                        >
                                            <div className='left'>
                                                <Image
                                                    src={'/images/toriCoin.png'}
                                                    width={'20px'}
                                                    height={'20px'}
                                                    alt='image'
                                                />
                                            </div>
                                            <div className='right'>
                                                <p>{content.product_price ? commaNumber(content.product_price) + "??????" : ""}</p>
                                            </div>
                                            <div className='left'>
                                                {content.product_dc_price_yn === "Y" ? (
                                                    <p>{content.product_price && content.product_dc_price ? ((content.product_price - content.product_dc_price) / content.product_price * 100).toFixed(0) + '% ??????' : ""}</p>
                                                ) : (
                                                    <p></p>
                                                )}
                                            </div>
                                            <div className='right'>
                                                {content.product_dc_price_yn === "Y" ? (
                                                    <p>???{commaNumber(Number(content.product_dc_price))}</p>                                        
                                                ) : (
                                                    <p>{content.cash_product_title ? '???'+commaNumber(Number(content.cash_product_title.replace(regex, ""))) : ""}</p>
                                                    
                                                )}
                                            </div>
                                        </CoinBox>
                                    )
                                }
                            )}
                        </TopupBox>
                        {topupData !== null && topupData.response_data?.map((content, i)=>{
                            if(content.cash_buy_type === "Autotopup")
                                return(
                                    <Semen key={i} onClick={async ()=> {
                                        // setFillupAmount(Number(content.cash_fillup_amount))
                                        // setPricePolicy(content.cash_price_policy_idx)
                                        // setProductIdx(content.cash_product_idx)
                                        setCashBuyType('Autotopup');
                                        await axios({
                                            method: 'POST',
                                            url: `https://api-v2.storicha.in/api/product-order`,
                                            headers: {
                                                "Content-Type": "multipart/form-data"
                                            },
                                            data: {
                                                prd_idx: content.cash_product_idx,
                                                policy_idx: content.cash_price_policy_idx,
                                                fill_qty: content.cash_fillup_amount,
                                            },
                                            withCredentials: true,
                                        }).then((response):any => {
                                            console.log(response);
                                            const res_idx = response && response.data.response_data[0].cash_product_order_idx;
                                            const res_bp = response && response.data.response_data[0].cash_fillup_amount;
                                            const res_vatin = response && response.data.response_data[0].actual_buy_price;
                                            Router.push({
                                                pathname: '/cash/checkout',
                                                query: {res_idx, res_bp, res_vatin}
                                            },'/cash/checkout');
                                        }).catch((error)=> {
                                            console.log(error);
                                        })
                                    }}>
                                        <p>??? ?????? ?????????</p>
                                        <p><span>{content.cash_fillup_amount ? commaNumber(content.cash_fillup_amount) : ''}</span>CASH</p>
                                        <p><span>{content.product_price ? commaNumber(content.product_price) : ''}???</span>(VAT??????)</p>
                                    </Semen>
                                )
                        })}
                        <SubText>
                            <p>?????? ?????? ???????????? ?????? ?????? ?????????.</p>
                            <p>????????? ???????????? ?????? ?????? ????????? ?????? ?????????.</p>
                            <p>???????????????????????? ????????? ????????? 1???????????? ????????????, ???????????? ?????? ?????? ?????? ???????????????.</p>
                        </SubText>
                        <SubulTitle>?????? ??? ?????? ????????????</SubulTitle>
                        <Subul>
                            <li>????????? ????????? ??????????????? ?????????????????? 5?????? ?????????.</li>
                            <li>?????? ??????/ ??????????????? ?????? ????????? ???????????? ???????????? ????????? ???????????????.</li>
                            <li>150??? ?????? ????????? ?????? ????????? ?????? ????????? ????????? ????????? ??? ????????????. <br />(????????????1%,????????????2%,????????????2%,???????????????3%)</li>
                            <li>???????????? ????????? ????????? ?????? ?????? ?????? ?????????. (??? :10,000??? / ??? : 400,000???)</li>
                            <li>???????????? ????????? ????????? ?????? ????????? ???????????????. (??? : 95,000??? / ??? : 300,000???)?????? ????????? 23???59???59??? / ?????? ????????? ?????? ???????????? ?????? ?????????.</li>
                            <li>???????????? ???????????? ?????? ??? ?????? ???????????? ????????? ??? ????????????.</li>
                            <li>?????? ???????????? ?????? ?????? ???????????? ????????? ????????? ????????? ????????? ???????????????.</li>
                            <li>???????????? ?????? ????????? ?????? ?????? ??? 7??? ?????? ??????????????? ????????????, 1:1?????? ???????????? ????????? ????????? ????????????.</li>
                            <li>?????????????????? ?????? ??????. ????????? ????????? ???????????? ?????? ????????? ?????? ????????? ???????????? ?????? ?????? ???????????? ???????????? ????????? 3?????? ??????, ??? ????????? ??? ??? ?????? ?????? ????????? ????????? 30??? ?????? ?????? ????????? ?????? ?????????.</li>
                        </Subul>
                    </>
                )}
            </Box>
        </>
    )
}

const Title = styled.p`
    font-size: 20px;
    letter-spacing: -.6px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: var(--title);
    span {
        margin-left: 4px;
    }
    @media screen and (max-width: 500px) {
        width: 100%;
        justify-content: center;
    }
`

const TopupBoxTop = styled.div`
    position: relative;
    width: 100%;
    margin-top: 24px;
    padding: 24px 0 12px 0;
    button {
        position: absolute;
        right: 10px;
        top: calc(50% + 6px);
        transform: translateY(-50%);
        background-color: var(--point);
        border-radius: 6px;
        padding: 6.5px 14px;
        border: 1.4px solid var(--point);
        outline: none;
        color: var(--pointContracst);
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;
    }
    span {
        position: absolute;
        top: 0;
        width: auto;
        left: 14px;
        background-color: var(--box1);
        color: var(--title);
        padding: 16px 6px 4px 6px;
        font-size: 16px;
    }
    b {
        color: var(--point);
        font-weight: bold;
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    }
    @media screen and (max-width: 500px) {
        margin-top: 12px;
    }
`

const Directly = styled.input`
    width: 100%;
    padding: 12px 104px 12px 12px;
    border: 1.8px solid var(--lineColor);
    border-radius: 6px;
    font-size: 20px;
    text-align: right;
    outline: none;
    color: var(--title);
    background-color: var(--box1);
    &:focus{
        border: 1.8px solid var(--point);
    }
`

const TopupBox = styled.div`
    position: relative;
    width: 100%;
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    row-gap: 8px;
    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`
const CoinBox = styled.div`
    width: 49%;
    border: 1.8px solid var(--transBorder);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-radius: 8px;
    row-gap: 11px;
    font-size: 16px;
    color: var(--title);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    cursor: pointer;
    div {
        display: flex;
        align-items: center;
        width: 50%;
    }
    .left{
        justify-content: flex-start;
        p {
        font-size: 16px;
        color: var(--accent);
        }
    }
    .right{
        justify-content: flex-end;
    }
    img{
        height: 1.25rem;
    }
    p{
        color: var(--title);
    }
    &.select{
        border: 1.8px solid var(--accent);
        box-shadow: 0;
    }
    @media screen and (max-width: 500px) {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        div:nth-child(1){
        width: auto;
        margin-right: 8px;
        }
        div:nth-child(2){
        justify-content: flex-start;
        }
        div:nth-child(3){
        justify-content: flex-end;
        }
        div:nth-child(4){
        width: auto;
        margin-left: 8px;
        }
    }
`
const Semen = styled.button`
    width: 100%;
    padding: 14px 20px;
    background-color: var(--box2);
    border-radius: 5px;
    margin-top: 32px;
    color: var(--title);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 8px;
    p{
        width: 40%;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        font-size: 16px;
    }
    span{
        font-size: 1.8rem;
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        font-weight: bold;
        margin-right: 4px;
    }
    p:nth-child(1){
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 1.6rem;
    }
    p:nth-child(2){
        justify-content: flex-start;
    }
    p:nth-child(3){
        width: 60%;
        justify-content: flex-end;
    }
    @media screen and (max-width: 500px) {
        border-radius: 6px;
        p:nth-child(1){
        font-size: 18px;
        }
        p:nth-child(2){
        font-size: 14px;
        }
        p:nth-child(3){
        font-size: 14px;
        }
        span{
        font-weight: 600;
        }
    }
`
const SubText = styled.div`
    width: 100%;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
        font-size: 16px;
        color: #8E8D8D;
        line-height: 16px;
        letter-spacing: -.4px;
    }
    `
    const SubulTitle = styled.p`
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: var(--title);
    margin-top: 32px;
    `
    const Subul = styled.ul`
    font-size: 14px;
    line-height: 19px;
    list-style-type: disc;
    padding-left: 12px;
    li:nth-child(1){
        margin-top: 16px;
    }
    li {
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        color: var(--sub);
    }
`
export default Cash;