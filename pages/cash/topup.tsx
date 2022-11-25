import axios from 'axios';
import Box from 'components/Box';
import HelmetProvier from 'components/Helmet';
import { TopupProductData } from 'enum/data-type';
import { commaNumber } from 'func/addComma';
import { NextPage } from 'next';
import Image from 'next/image';
import Router from 'next/router';
import * as React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { LoadingState } from 'recoil/loading';
import { LoginState } from 'recoil/user';
import styled from 'styled-components';

const Cash:NextPage = () => {
    const [inputValue, setInputValue] = React.useState<string>('');
    const [selectNumber, setSelectNumber] = React.useState<number>(0);
    const login = useRecoilValue(LoginState);
    const [idx, setIdx] = React.useState<number>(0);
    const [price, setPrice] = React.useState<number>(0);
    const [dcPrice, setDcPrice] = React.useState<number>(0);

    const [productIdx, setProductIdx] = React.useState<number | undefined>(0);
    const [pricePolicy, setPricePolicy] = React.useState<number | undefined>(0);
    const [fillupAmount, setFillupAmount] = React.useState<number>(0);
    const [cashBuyType, setCashBuyType] = React.useState<string>('Direct');

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
    const loading = useRecoilValue(LoadingState);
    const setLoadState = useSetRecoilState(LoadingState);
    const [error, setError] = React.useState<any>(null);

    const fetchDatas = async () => {
        if(login !== null){
            console.log('fetch Data start...');
            try {
                // error, data 초기화
                setError(null);
                setTopupData(null);
                // loading state true
                setLoadState(true);
                const getData = await axios.get(
                    'https://api-v2.storicha.in/api/cash/product?display_yn=y&product_id=0',{withCredentials:true}
                )
                setTopupData(getData.data);
            } catch(e) {
                setError(e);
                console.log(error);
            }
        }
        setLoadState(false);
    };
    const nextPage = () => {
        axios({
            method: 'POST',
            url: `https://api-v2.storicha.in/api/product-order`,
            headers: {
                "Content-Type": "multipart/form-data"
            },
            data: {
                cash_product_idx: productIdx,
                cash_price_policy_idx: pricePolicy,
                cash_fillup_amount: fillupAmount,
            },
            withCredentials: true,
        }).then((response):any => {
            Router.push(`/cash/checkout?idx=${response.data.response_data[0].cash_product_order_idx}&bp=${response.data.response_data[0].cash_fillup_amount}&vatin=${response.data.response_data[0].actual_buy_price}`);
        }).catch((error)=> {
            console.log(error);
        })
    }

    React.useEffect(()=> {
        console.log('login change');
        login !== null ? fetchDatas() : setTopupData(null);
    },[login]);
    React.useEffect(()=>{
        console.log('component lender');
        let useParams = new URLSearchParams(window.location.search);
        setIdx(Number(useParams.get('idx')));
        login !== null ? fetchDatas() : setTopupData(null);
    },[]);
    return(
        <Box>
            <HelmetProvier title='토리 캐시 결제'/>
            {!loading && (
                <>
                    <Title>
                        나의 토리 캐시 잔액 &nbsp;
                        <Image
                            src={'/images/icons/toriCoin.png'}
                            width={'20px'}
                            height={'20px'}
                            alt='Image'
                        />
                        &nbsp;
                        50,00,222,111 
                        <span onClick={()=> console.log(productIdx, pricePolicy, fillupAmount, cashBuyType)}>TC</span>
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
                        }}>구매하기</button>
                        <span><b>CASH</b>직접입력</span>
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
                                            <p>{content.product_price ? commaNumber(content.product_price) + "캐쉬" : ""}</p>
                                        </div>
                                        <div className='left'>
                                            {content.product_dc_price_yn === "Y" ? (
                                                <p>{content.product_price && content.product_dc_price ? ((content.product_price - content.product_dc_price) / content.product_price * 100).toFixed(0) + '% 할인' : ""}</p>
                                            ) : (
                                                <p></p>
                                            )}
                                        </div>
                                        <div className='right'>
                                            {content.product_dc_price_yn === "Y" ? (
                                                <p>₩{commaNumber(Number(content.product_dc_price))}</p>                                        
                                            ) : (
                                                <p>{content.cash_product_title ? '₩'+commaNumber(Number(content.cash_product_title.replace(regex, ""))) : ""}</p>
                                                
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
                                            cash_product_idx: content.cash_product_idx,
                                            cash_price_policy_idx: content.cash_price_policy_idx,
                                            cash_fillup_amount: content.cash_fillup_amount,
                                        },
                                        withCredentials: true,
                                    }).then((response):any => {
                                        console.log(response.data.response_data[0]);
                                        Router.push(`/cash/checkout?idx=${response.data.response_data[0].cash_product_order_idx}&bp=${response.data.response_data[0].cash_fillup_amount}&vatin=${response.data.response_data[0].actual_buy_price}`);
                                    }).catch((error)=> {
                                        console.log(error);
                                    })
                                }}>
                                    <p>월 자동 충전권</p>
                                    <p><span>{content.cash_fillup_amount ? commaNumber(content.cash_fillup_amount) : ''}</span>CASH</p>
                                    <p><span>{content.product_price ? commaNumber(content.product_price) : ''}원</span>(VAT별도)</p>
                                </Semen>
                            )
                    })}
                    <SubText>
                        <p>매월 결제 금액만큼 자동 충전 됩니다.</p>
                        <p>결제를 취소하실 경우 익월 취소로 승인 됩니다.</p>
                        <p>월자동충전권으로 결제한 캐쉬는 1개월간만 유효하며, 사용하지 않은 만큼 자동 소멸됩니다.</p>
                    </SubText>
                    <SubulTitle>구매 전 필수 유의사항</SubulTitle>
                    <Subul>
                        <li>구매한 캐시의 유효기간은 구입일로부터 5년간 입니다.</li>
                        <li>캐시 구매/ 이용내역은 마이 페이지 토리캐시 지갑에서 확인이 가능합니다.</li>
                        <li>150개 이상 구매시 결제 방법에 따라 보너스 캐시를 제공할 수 있습니다. <br />(신용카드1%,계좌이체2%,가상계좌2%,무통장입금3%)</li>
                        <li>캐시구매 한도가 초과한 경우 구매 불가 합니다. (일 :10,000개 / 월 : 400,000개)</li>
                        <li>캐시구매 한도가 초과한 경우 선물이 불가합니다. (일 : 95,000개 / 월 : 300,000개)당일 한도는 23시59분59초 / 당월 한도는 매월 말일까지 적용 됩니다.</li>
                        <li>미성년자 가입자는 캐시 및 유료 아이템을 구매할 수 없습니다.</li>
                        <li>법정 대리인의 동의 없이 미성년자 명의로 결제한 캐시는 환불이 가능합니다.</li>
                        <li>사용하지 않은 캐시에 한에 구매 후 7일 이내 청약철회가 가능하며, 1:1문의 게시판에 신청해 주시기 바랍니다.</li>
                        <li>유료아이템의 내용 표시. 광고의 내용과 다르거나 계약 내용과 다게 이행된 경우에는 해당 유료 아이템을 공급받은 날부터 3개월 이내, 그 사실을 안 날 또는 알수 있었던 날부터 30일 이내 청약 철회가 가능 합니다.</li>
                    </Subul>
                </>
            )}
        </Box>
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