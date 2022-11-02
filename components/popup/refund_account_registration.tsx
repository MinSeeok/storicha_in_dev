import Image from 'next/image';
import * as React from 'react';
import styled from 'styled-components';
import brakeWarning from '../../assets/images/icons/BrakeWarning.svg'

export const RefundAccountRegistrationBox = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <HeadTitle>
                        <h2>환불계좌 정보</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </HeadTitle>
                    <div className='title'>
                        <Image
                            width={'30px'}
                            height={'30px'}
                            src={brakeWarning}
                        />
                        <h1>환불계좌를 등록해주세요</h1>
                    </div>
                    <div className='accountHolder'>
                        <h1>예금주</h1>
                        <input type="text" className='name' placeholder='이름' required/>
                    </div>
                    <div className='accountHolder'>
                        <h1>은행</h1>
                        <>
                            <select name="bank" id="bank">
                                <option value="">KB국민은행</option>
                                <option value="">신한은행</option>
                                <option value="">KEB하나은행</option>
                                <option value="">우리은행</option>
                                <option value="">IBK기업은행</option>
                                <option value="">NH농협은행</option>
                                <option value="">SC제일은행</option>
                                <option value="">BNK부산은행</option>
                                <option value="">한국씨티은행</option>
                                <option value="">DGB대구은행</option>
                                <option value="">BNK경남은행</option>
                                <option value="">SH수협은행</option>
                                <option value="">광주은행</option>
                                <option value="">카카오뱅크</option>
                                <option value="">전북은행</option>
                                <option value="">제주은행</option>
                                <option value="">케이뱅크은행</option>
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </>
                    </div>
                    <div className='accountHolder'>
                        <h1>계좌번호</h1>
                        <>
                            <input type="text" className='account' placeholder='이름' required/>
                            <button>인증</button>
                        </>
                    </div>
                    <Description>
                        <li>무통장 입금(가상계좌) 혹은 휴대폰 전월 주문내역을 취소할 경우 무통장 계좌로 환불해드립니다. (단, 고객님 본인 명의의 계좌만 가능)</li>
                        <li>환불계좌 등록 후, 환불대기중의 상품은 등록하신 계좌로 변경되어 환불됩니다.</li>
                        <li>그 외 문의는 고객센터(02-542-6056) 또는 1:1 게시판 문의를 이용해주시기 바랍니다.</li>
                    </Description>
                    <SaveBtn>
                        저장
                    </SaveBtn>
                </Wrapper>
            </Container>
            <ShadowBox/>
        </>
    )
}

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 20px;
    padding-top: 60px;
    min-width: 360px;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: 999999;
    border-radius: 18px;
    overflow: hidden;
    background-color: #FFFFFF;
    .title{
        width: 100%;
        margin-top: 20px;
        text-align: center;
        gap: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        h1{
            font-size: 22px;
            font-weight: 900;
        }
    }
    .accountHolder{
        width: 100%;
        padding: 8px 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 12px;
        h1{
            font-size: 20px;
            font-weight: 900;
        }
        select{
            -webkit-appearance: none;
            -moz-appearance: none;
            & + svg {
                position: absolute;
                width: 24px;
                height: 24px;
                right: 12px;
                bottom: calc(50% - 40px);
                transform: translateY(-50%);
            }
        }
        input, select {
            width: 100%;
            border: 1.8px solid #141414;
            margin-top: 10.5px;
            border-radius: 8px;
            font-size: 18px;
            padding: 8px 14px;
        }
        .account{
            border: 1.8px solid #F33838;
            & + button {
                position: absolute;
                right: 8px;
                padding: 6px 14.5px;
                bottom: calc(50% - 43px);
                transform: translateY(-50%);
                background-color: #141414;
                color: white;
                font-size: 16px;
                border-radius: 8px;
            }
        }
    }
`

const ShadowBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #141414;
    opacity: 0.7;
    z-index: 10;
`
const HeadTitle = styled.div`
    width: 100%;
    height: 54px;
    padding: 14px;
    background-color: #141414;
    color: #FFFFFF;
    position: absolute;
    top: 0;
    left: 0;
    h2{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font-size: 24px;
    }
    svg{
        position: absolute;
        right: 14px;
        top: 50%;
        width: 32px;
        height: 32px;
        transform: translateY(-50%) rotate(45deg);
    }
`

const Description = styled.ul`
    padding: 0 12px;
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 18px;
    li {
        list-style: disc;
        font-size: 16px;
        line-height: 18px;
        font-weight: 300;
    }
`

const SaveBtn = styled.button`
    padding: 10.5px 84px;
    color: #FFFFFF;
    background-color: #141414;
    font-size: 18px;
    margin-top: 32px;
    border-radius: 33px;
    font-weight: 900;
    letter-spacing: .7px;
`