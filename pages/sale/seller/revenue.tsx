import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AOS from "aos";
import "aos/dist/aos.css";
import Area from 'components/Area';
import HelmetProvier from 'components/Helmet';

export default function Revenue(){
    const [viewState, setViewState] = useState(true);
    useEffect(() => {
        AOS.init();
    },[]);
    return(
        <>
            <HelmetProvier title='판매 수익'/>
            <Area>
                <Box>
                    <div>
                        <div data-aos="fade-right">
                            <h1>판매 실적</h1>
                            <p>유료화 스토리 시리즈 수<span>3</span><span className='date'></span></p>
                            <p>유료화 스토리 에피소드 수<span>65</span><span className='date'></span></p>
                            <p>누적 에피소드 판매 건<span>54</span><span className='date'></span></p>
                            <p>지난 달 에피소드 판매 건<span>25</span><span className='date'>22.10.01~22.10.31</span></p>
                            <p>이번 달 에피소드 판매 건<span>15</span><span className='date'>22.11.01~22.11.31</span></p>
                        </div>
                        <div data-aos="fade-right">
                            <h1>판매 금액</h1>
                            <p>유료화 스토리 시리즈 수<span>3</span><span className='date'></span></p>
                            <p>유료화 스토리 에피소드 수<span>65</span><span className='date'></span></p>
                            <p>누적 에피소드 판매 건<span>54</span><span className='date'></span></p>
                            <p>지난 달 에피소드 판매 건<span>25</span><span className='date'>22.10.01~22.10.31</span></p>
                            <p>이번 달 에피소드 판매 건<span>15</span><span className='date'>22.11.01~22.11.31</span></p>
                        </div>
                    </div>
                    <div>
                        <div className='fullBox' data-aos="zoom-in">
                            <h1>정산</h1>
                            <p>정산 주기일<span>(1,3,5,7,9월 5일)</span><span className='date'></span></p>
                            <p>누적 정산금<span>524,550 KRW</span><span className='date'>19.10.01~22.08.55</span></p>
                            <p>지난주기 정산금<span>524,550 KRW</span><span className='date'>22.09.05</span></p>
                            <p>출금요청 가능금액<span>21,524,550 KRW</span><span className='date'></span></p>
                            <h3>출금요청 방법</h3>
                            <h3 style={{marginTop: '0px'}}>정산가능 금액 120,000KWR이상일 때 요청 가능.<br/>정산 후 10일 이내 요청 가능. 요청 후 영업일 (N)일 이내 계약된 계좌로 출금. 입금받을 계좌 (XXX) 은행 예금주 (XXXX)</h3>
                            <button>출금 요청</button>
                            <p>출금신청액<span>21,524,550 KRW</span><span className='date'>출금대기 중</span></p>
                        </div>
                    </div>
                    <div className='rightBox' data-aos="fade-left">
                        <div>
                            <h1>수익</h1>
                            <p>누적 수익<span>8,121,524,550 KRW</span><span className='date'>19.10.01~22.10.31</span></p>
                            <p>누적 취소환불<span>5,141 KRW</span><span className='date'>19.10.01~22.10.31</span></p>
                            <p>지난 주기 수익<span>21,524,550 KRW</span><span className='date'>22.10.01~22.10.31</span></p>
                            <p>지난 주기 취소환불<span>890,000 KRW</span><span className='date'>22.11.01~22.11.31</span></p>
                            <p>이번 주기 수익<span>100,000,000 KRW</span><span className='date'>22.11.01~22.11.31</span></p>
                        </div>
                    </div>
                </Box>
                <TitleBox>
                    <H1Title onClick={()=> setViewState(true)}>정산내역</H1Title>
                    <H1Title onClick={()=> setViewState(false)}>출금요청 및 수익 내역</H1Title>
                    <div className='btnLine' id={viewState ? "" : "request"}></div>
                </TitleBox>
                <Box2 style={viewState ? {} : {display: "none"}}>
                    <div className='line' id='topLine'>
                        <div className='left'>
                            <p>번호</p>
                            <p>판매기간</p>
                        </div>
                        <div className='center'>
                            <p>정산 주기일</p>
                            <p>판매액</p>
                        </div>
                        <div className='right'>
                            <p>파트너티어</p>
                            <p>정산금</p>
                        </div>
                        <div className='btnbox'>
                            <p>정산명세서</p>
                        </div>
                    </div>
                    {[0,1,2,3,4,5].map((content, i) => (
                    <div className='line' key={i}>
                        <div className='left'>
                            <p className='pc'>3242</p>
                            <p className='mobile idx'>3242</p>
                            <p className='date'>22.06.21~22.08.31</p>
                            </div>
                            <div className='center'>
                            <p className='pc'>22.09.05</p>
                            <p className='mobile'>
                                <span>정산주기일</span>
                                <span>22.09.05</span>
                            </p>
                            <p className='pc'>105,000</p>
                            <p className='mobile'>
                                <span>판매액</span>
                                <span>105,000 원</span>
                            </p>
                        </div>
                        <div className='right'>
                            <p className='pc'>T1</p>
                            <p className='mobile'>
                                <span>파트너티어</span>
                                <span>Tier 1</span>              
                            </p>
                            <p className='pc number'>1,956,777</p>
                            <p className='mobile'>
                                <span>정산금</span>
                                <span>1,956,777 원</span>  
                            </p>
                        </div>
                        <div className='btnbox last'>
                            <button>상세보기</button>
                        </div>
                    </div>
                    ))}
                </Box2>
                <Box3 style={viewState ? {display: "none"} : {}}>
                    <div className='list' id='listTop'>
                        <p className='number'>번호</p>
                        <p className='calculate'>정산일</p>
                        <p className='withdraw_request'>출금요청일</p>
                        <p className='withdraw_complete'>출금완료일</p>
                        <p className='supplyprice'>공급가(원)</p>
                        <p className='surtax'>부가세(원)</p>
                        <p className='paye'>원천징수(원)</p>
                        <p className='sum'>합계(원)</p>
                        <p className='statement'>거래명세서</p>
                    </div>
                    <div className='list'>
                    <p className='number'>
                        <span className='pc'>3242</span>
                        <span className='mobile idx'>3242</span>
                    </p>
                    <p className='calculate'>
                        <span className='pc'>22.09.05</span>
                        <span className='mobile'>정산일<b>22.09.05</b></span>
                    </p>
                    <p className='withdraw_request'>
                        <span className='pc'>22.09.06</span>
                        <span className='mobile'>출금요청일<b>22.09.06</b></span>
                    </p>
                    <p className='withdraw_complete'>
                        <span className='pc'>출금대기중</span>
                        <span className='mobile'>출금완료일<b>출금대기중</b></span>
                    </p>
                    <p className='supplyprice'>
                        <span className='pc'>19,567,773</span>
                        <span className='mobile'>공급가(원)<b>19,567,773</b></span>
                    </p>
                    <p className='surtax'>
                        <span className='pc'>1,956,777</span>
                        <span className='mobile'>부가세(원)<b>1,956,777</b></span>
                    </p>
                    <p className='paye'>
                        <span className='pc'>0</span>
                        <span className='mobile' style={{width:'auto'}}>원천징수(원)<b>0</b></span>
                    </p>
                    <p className='sum'>
                        <span className='pc'>21,524,550</span>
                        <span className='mobile'>합계(원)<b>21,524,550</b></span>
                    </p>
                    <p className='statement'><span>대기중</span></p>
                    </div>
                    <div className='list'>
                    <p className='number'>
                        <span className='pc'>3242</span>
                        <span className='mobile idx'>3242</span>
                    </p>
                    <p className='calculate'>
                        <span className='pc'>22.09.05</span>
                        <span className='mobile'>정산일<b>22.09.05</b></span>
                    </p>
                    <p className='withdraw_request'>
                        <span className='pc'>22.09.06</span>
                        <span className='mobile'>출금요청일<b>22.09.06</b></span>
                    </p>
                    <p className='withdraw_complete'>
                        <span className='pc'>출금대기중</span>
                        <span className='mobile'>출금완료일<b>출금대기중</b></span>
                    </p>
                    <p className='supplyprice'>
                        <span className='pc'>19,567,773</span>
                        <span className='mobile'>공급가(원)<b>19,567,773</b></span>
                    </p>
                    <p className='surtax'>
                        <span className='pc'>1,956,777</span>
                        <span className='mobile'>부가세(원)<b>1,956,777</b></span>
                    </p>
                    <p className='paye'>
                        <span className='pc'>0</span>
                        <span className='mobile' style={{width:'auto'}}>원천징수(원)<b>0</b></span>
                    </p>
                    <p className='sum'>
                        <span className='pc'>21,524,550</span>
                        <span className='mobile'>합계(원)<b>21,524,550</b></span>
                    </p>
                    <p className='statement complete'><span>명세서</span></p>
                    </div>
                </Box3>
            </Area>
        </>
    )
}
const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 300px;
    gap: 12px;
    div{
        width: 100%;
        gap: 18px;
        div {
            background-color: var(--box2);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: 20px 24px;
            padding-bottom: 40px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
            h1{
                width: 100%;
                text-align: center;
                font-size: 22px;
                padding-bottom: 14px;
                border-bottom: 2.4px solid var(--box1);
                color: var(--title);
            }
            p{
                width: 100%;
                text-align: left;
                font-size: 18px;
                margin-top: 24px;
                color: var(--title);
                span{
                    position: absolute;
                    right: 0;
                }
                .date{
                    position: absolute;
                    left: 0;
                    top: 22px;
                    font-size: 14.5px;
                    color: #939393;
                }
            }
            p:nth-child(2){
                margin-top: 0;
            }
            h3{
                margin-top: 42px;
                font-size: 16px;
                color: var(--title);
            }
            button{
                padding: 8px;
                width: 100%;
                font-size: 18px;
                background-color: var(--point);
                outline: none;
                border: none;
                color: #FFFFFF;
                border-radius: 24px;
                margin-top: 38px;
                cursor: pointer;
            }
        }
        div:nth-child(2){
            margin-top: 24px !important;
        }
        .fullBox{
            align-items: flex-start;
            justify-content: flex-start;
            height: 772.8px;
        }
    }
    @media screen and (max-width: 1200px) {
        flex-direction: column;
        .fullBox{
            height: auto !important;
            margin-top: 24px;
        }
        .rightBox{
            margin-top: 24px;
            padding-bottom: 40px;
        }
    }
`
const Box2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    padding: 20px;
    margin-bottom: 20px;
    background-color: var(--box2);
    gap: 8px;
    .title{
        width: 100%;
        text-align: center;
        font-size: 22px;
        padding-bottom: 18px;
        border-bottom: 2.4px solid var(--box1);
    }
    .line{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--title);
        padding: 10.5px 0;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
        padding: 12px;
        div{
            width: 100%;
            display: flex;
            &.left{
                p{
                    text-align: left;
                }
                p:nth-child(1){
                    max-width: 100px;
                }
            }
            &.center{
            }
            &.right{
            }
            &.btnbox{
                width: 100%;
                max-width: 140px;
                display: flex;
                justify-content: center;
                align-items: center;
                button{
                    padding: 5.5px 28px;
                    font-size: 16px;
                    background-color: var(--boxColor);
                    outline: none;
                    border: none;
                    color: var(--title);
                    cursor: pointer;
                    transition: all ease-in-out .1s;
                    border-radius: 4px;
                    &:hover{
                        background-color: var(--unchecked);
                        color: #FFFFFF;
                    }
                }
                @media screen and (max-width: 1024px) {
                    max-width: 100%;
                    button{
                        width: 100% !important;
                    }
                }
            }
            p{
                width: 100%;
                text-align: center;
                font-size: 18px;
            }
        }
        .number{
            text-align: center;
        }
        .mobile{
            display: none;
        }
        &#topLine{
            font-weight: bold;
        }
        &:hover{
            background-color: var(--box3);
            &#topLine{
                background-color: var(--box2);
            }
        }
    }
    @media screen and (max-width: 1024px) {
        background-color: var(--box1);
        .title{
            font-size: 24px !important;
        }
        #topLine{
            display: none !important;
        }
        .line{
            padding: 20px !important;
            flex-direction: column;
            background-color: var(--box2);
            row-gap: 12px !important;
            margin-top: 12px;
            .left, .center, .right, .btnbox{
                display: flex;
                justify-content: space-between;
                width: 100% !important;
                p{
                    font-size: 20px !important;
                    width: auto;
                    @media screen and (max-width: 500px) {
                        font-size: 16px !important;
                    }
                }
                button{
                    margin-top: 24px;
                    width: 100%;
                    font-size: 20px !important;
                    padding: 6px 0 !important;
                    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
                }
            }
            .left{
                .mobile{
                    padding: 4px 6px;
                    border-radius: 4px;
                    background-color: var(--box2);
                    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                }
            }
            .pc{
                display: none;
            }
            .mobile{
                display: block;
            }
            .center, .right{
                display: flex;
                flex-direction: column;
                row-gap: 12px;
                .mobile{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }
            }
            &:hover{
                background-color: var(--box2);
                .left{
                    .mobile{
                        background-color: var(--box1);
                    }
                }
                button{
                    background-color: var(--point) !important;
                    color: #FFFFFF !important;
                    box-shadow: none;
                }
            }
        }
    }
    @media screen and (max-width: 768px) {
        padding: 8px !important;
    }
    @media screen and (max-width: 500px) {
        padding: 0px !important;
    }
`
const TitleBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .btnLine{
        position: absolute;
        width: 240px;
        left: 0;
        bottom: 0;
        border-bottom: 4px solid var(--point);
        z-index: 999999;
        transition: all ease-in-out .2s;
    }
    #request{
        transform: translateX(240px);
    }
    @media screen and (max-width: 1024px) {
        .btnLine{
            width: 50%;
        }
        #request{
            transform: translateX(100%);
        }
    }
`
const H1Title = styled.h1`
    font-weight: bold;
    font-size: 24px;
    margin-top: 36px;
    padding-bottom: 16px;
    width: 240px;
    text-align: center;
    cursor: pointer;
    border-bottom: 4px solid var(--box3);
    color: var(--title);
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
    @media screen and (max-width: 500px) {
        font-size: 20px;
    }
    @media screen and (max-width: 420px) {
        font-size: 16px;
    }
`
const Box3 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--box2);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 20px;
    margin-top: 18px;
    margin-bottom: 48px;
    .list{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all ease-in-out .1s;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        background-color: var(--boxColor2);
        p{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            color: var(--sub);
            .pc{
                display: block;
            }
            .mobile{
                display: none;
            }
        }
        .number{
            width: 80px;
            justify-content: flex-start;
        }
        .calculate{
            width: 80px;
            justify-content: flex-start;
        }
        .withdraw_request, .withdraw_complete{
            width: 140px;
        }
        .supplyprice, .surtax{
            width: 120px;
            justify-content: flex-start;
        }
        .paye{
            width: 100px;
            justify-content: flex-start;
        }
        .sum{
            width: 130px;
            justify-content: flex-start;
        }
        .statement{
            width: 110px;
            span{
                padding: 2.6px 18px;
                background-color: var(--box3);
                font-size: 16px;
                border-radius: 4px;
            }
        }
        &:not(#listTop){
            padding: 10.5px 0;
            &:hover{
                background-color: var(--box3);
                cursor: pointer;
                p{
                    color: ${props => props.theme.textColor} !important;
                }
                .statement{
                    span{
                        padding: 2.6px 18px;
                        background-color: var(--box1);
                        color: var(--accent);
                        border-radius: 4px;
                        font-size: 16px;
                    }
                }
                .complete{
                    span{
                        color: var(--point) !important;
                    }
                }
                .number{
                    .mobile{
                        width: auto;
                        padding: 4px 16px;
                        background-color: var(--box1);
                    }
                }
            }
        }
    }
    #listTop.list{
        padding-bottom: 24px;
        p{
            color: var(--title) !important;
        }
    }
    @media screen and (max-width: 1200px) {
        .list{
            p{
                font-size: 16px;
            }
            .number{
                width: 70px;
            }
            .withdraw_request, .withdraw_complete{
                width: 120px;
            }
            &:not(#listTop){
                padding: 8px 0;
            }
            .supplyprice{
                width: 110px;
            }
            .surtax{
                width: 110px;
            }
            .paye{
                margin-right: 12px;
            }
            .sum{
                width: 110px;
            }
        }
        #listTop.list{
            padding-bottom: 24px !important;
        }
    }
    @media screen and (max-width: 1024px) {
        padding: 12px;
        box-shadow: none;
        background-color: transparent;
        margin-top: 0;
        .list{
            background-color: var(--boxColor);
            margin-top: 24px;
            padding: 12px 16px !important;
            flex-direction: column;
        }
        p {
            width: 100% !important;
            font-size: 20px !important;
            color: var(--title);
            .pc{
                display: none !important;
            }
            .mobile{
                display: block !important;
                width: 100%;
                color: var(--title);
                &.title{
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
                }
            }
        }
        .number{
            .mobile{
                width: auto;
                padding: 4px 16px;
                background-color: var(--box3);
                box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
                border-radius: 4px;
            }
        }
        .calculate, .withdraw_request, .withdraw_complete, .supplyprice, .surtax, .paye, .sum{
            margin-top: 18px;
            .mobile{
                b{
                    position: absolute;
                    right: 0px;
                }
            }
        }
        .paye{
            .mobile{
                width: 100% !important;
                left: 6px;
            }
        }
        .statement{
            margin-top: 42px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
            span{
                width: 100%;
                text-align: center;
                padding: 12px 0 !important;
                font-size: 20px !important;
            }
        }
        #listTop.list{
            display: none;
        }
    }
    @media screen and (max-width: 1024px) {
        padding: 0;
    }
`