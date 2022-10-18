import Box from 'components/Box';
import { NextPage } from 'next';
import Image from 'next/image';
import { fetchTopupData } from 'pages/api/getDataApi';
import * as React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

const Cash:NextPage = () => {
    const [inputValue, setInputValue] = React.useState<any>("0");
    const [selectNumber, setSelectNumber] = React.useState<number>(0);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const onlyNumber = value.replace(/[^0-9]/g, '');
        return setInputValue(onlyNumber);
    }
    const coinSelect = (number: number) => {
        return setSelectNumber(number);
    }
    const {isLoading, data} = useQuery('productData', fetchTopupData);
    return(
        <Box>
            <Title>
                나의 토리 캐시 잔액 &nbsp;
                {isLoading ? '로딩중 입니다..' : '로딩완료' }
                <Image
                    src={'/images/icons/toriCoin.png'}
                    width={'20px'}
                    height={'20px'}
                    alt='Image'
                />
                &nbsp;
                50,00,222,111 
                <span onClick={()=>console.log(data)}>TC</span>
            </Title>
            <TopupBoxTop>
                <Directly
                    placeholder='0'
                    type="text"
                    onChange={onChange}
                    value={inputValue}
                />
                <button>구매하기</button>
                <span><b>CASH</b>직접입력</span>
            </TopupBoxTop>
            <TopupBox>
                <CoinBox onClick={() => coinSelect(10)} className={selectNumber === 10 ? "select" : ""}>
                    <div className='left'>
                        <Image
                            src={'/images/toriCoin.png'}
                            width={'20px'}
                            height={'20px'}
                            alt='image'
                        />
                    </div>
                    <div className='right'>
                        <p>10개</p>
                    </div>
                    <div className='left'>
                        </div>
                    <div className='right'>
                        <p>₩1,100</p>
                    </div>
                </CoinBox>
                <CoinBox onClick={() => coinSelect(50)} className={selectNumber === 50 ? "select" : ""}>
                    <div className='left'>
                        <Image
                            src={'/images/toriCoin.png'}
                            width={'20px'}
                            height={'20px'}
                            alt='image'
                        />
                    </div>
                    <div className='right'>
                        <p>50개</p>
                    </div>
                    <div className='left'>
                        </div>
                    <div className='right'>
                        <p>₩5,500</p>
                    </div>
                </CoinBox>
                <CoinBox onClick={() => coinSelect(100)} className={selectNumber === 100 ? "select" : ""}>
                    <div className='left'>
                        <Image
                            src={'/images/toriCoin.png'}
                            width={'20px'}
                            height={'20px'}
                            alt='image'
                        />
                    </div>
                    <div className='right'>
                        <p>100개</p>
                    </div>
                    <div className='left'>
                    </div>
                    <div className='right'>
                        <p>₩11,000</p>
                    </div>
                </CoinBox>
                <CoinBox onClick={() => coinSelect(150)} className={selectNumber === 150 ? "select" : ""}>
                    <div className='left'>
                        <Image
                            src={'/images/toriCoin.png'}
                            width={'20px'}
                            height={'20px'}
                            alt='image'
                        />
                    </div>
                    <div className='right'>
                        <p>150개</p>
                    </div>
                    <div className='left'>
                        <p>10% 할인</p>
                    </div>
                    <div className='right'>
                        <p>₩13,200</p>
                    </div>
                </CoinBox>
                <CoinBox onClick={() => coinSelect(300)} className={selectNumber === 300 ? "select" : ""}>
                    <div className='left'>
                        <Image
                            src={'/images/toriCoin.png'}
                            width={'20px'}
                            height={'20px'}
                            alt='image'
                        />
                    </div>
                    <div className='right'>
                        <p>300개</p>
                    </div>
                    <div className='left'>
                        <p>15% 할인</p>
                    </div>
                    <div className='right'>
                        <p>₩25,500</p>
                    </div>
                </CoinBox>
                <CoinBox onClick={() => coinSelect(500)} className={selectNumber === 500 ? "select" : ""}>
                    <div className='left'>
                        <Image
                            src={'/images/toriCoin.png'}
                            width={'20px'}
                            height={'20px'}
                            alt='image'
                        />
                    </div>
                    <div className='right'>
                        <p>500개</p>
                    </div>
                    <div className='left'>
                        <p>30% 할인</p>
                    </div>
                    <div className='right'>
                        <p>₩38,500</p>
                    </div>
                </CoinBox>
            </TopupBox>
            <Semen>
            <p>월 자동 충전권</p>
            <p><span>210</span>CASH</p>
            <p><span>18,000원</span>(VAT포함)</p>
            </Semen>
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
        border: 1.8px solid var(--lineColor);
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
    pointer-events: none;
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
        margin-bottom: -4px;
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