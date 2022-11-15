import React from 'react';
import styled from 'styled-components';

export default function PaymentDone(){
  return(
        <Box>
            <TopTitle>결제 완료</TopTitle>
            <TopTitleLine/>
            <TitleText>결제가 완료 되었습니다.</TitleText>
            <svg width="67" height="67" viewBox="0 0 67 67" className='iconAccent' xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_545_1131)">
                <path d="M30.7085 45.783L17.5877 32.6622L21.496 28.7538L30.7085 37.9663L54.1585 14.5163C48.8543 9.21217 41.596 5.58301 33.5002 5.58301C18.146 5.58301 5.5835 18.1455 5.5835 33.4997C5.5835 48.8538 18.146 61.4163 33.5002 61.4163C48.8543 61.4163 61.4168 48.8538 61.4168 33.4997C61.4168 28.1955 60.021 23.4497 57.5085 19.2622L30.7085 45.783Z" fill="#F2C572"/>
            </g>
            <defs>
                <clipPath id="clip0_545_1131">
                    <rect width="67" height="67" fill="white"/>
                </clipPath>
            </defs>
            </svg>
            <ProductName style={{marginTop: "44px"}}>
                <div>결제 내역</div>
                <div>11,000원(VAT포함)</div>
            </ProductName>
            <ProductName>
                <div>결제 방법</div>
                <div>신용카드</div>
            </ProductName>
            <ProductName>
                <div>결제 아이디</div>
                <div>moon@storicha.in</div>
            </ProductName>
                <button>나의 캐시 지갑 보기</button>
            <BackP>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
                돌아가기
            </BackP>
        </Box>
    )
}
const Box = styled.div`
    box-sizing: border-box;
    min-width: 428px;
    max-width: 500px;
    padding: 50px 30px 40px 30px;
    border-radius: 16px;
    position: relative;
    z-index: 999;
    margin-top: 24px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    color: var(--title);
    background-color: var(--box1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .iconAccent {
        margin-top: 24px;
        width: 22%;
        path{
        fill: var(--iconAccent) !important;
        }
    }
    @media screen and (max-width: 500px) {
        width: 100%;
        min-width: 350px;
        border-radius: 0px;
        padding: 50px 14px 30px 14px;
        margin-top: 0;
        min-height: 100vh;
        justify-content: flex-start;
    }
    button {
        padding: 6.5px 28px;
        border-radius: 8px;
        font-size: 18px;
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        margin-top: 42px;
        border: 0;
        outline: none;
        color: var(--title);
        background-color: var(--box2);
        cursor: pointer;
    }
`
const TopTitle = styled.span`
    font-size: 18px;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    position: absolute;
    top: 24px;
    left: 30px;
    background-color: var(--box1);
    z-index: 9999;
    padding-right: 8px;
    color: var(--textColor);
    font-weight: 700;
`
const TopTitleLine = styled.div`
    border-top: 1.8px solid var(--line);
    position: absolute;
    width: calc(100% - 60px);
    top: 33px;
`
const TitleText = styled.p`
    width: 100%;
    font-size: 24px;
    margin-top: 60px;
    font-weight: 700;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    text-align: center;
`
const ProductName = styled.div`
    font-size: 22px;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
    font-weight: 300;
    padding: 0 12px;
    div:nth-child(1){
        width: 140px;
        padding: 12px;
        font-size: 16px;
        background-color: var(--line);
        color: var(--title);
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div:nth-child(2){
        width: calc(100% - 160px);
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid var(--line);
        border-bottom: 1px solid var(--line);
        height: 100%;
        padding: 10px 0;
        font-weight: 500;
    }
    span{
        font-weight: 500;
        font-size: 12px;
        margin-bottom: -2px;
    }
`
const BackP = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 32px;
    font-size: 20px;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    svg{
        color: var(--title);
        margin-right: 4px;
    }
`