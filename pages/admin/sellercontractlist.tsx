import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchOutline } from 'react-ionicons';

export default function SellerContractList(){
    const [sortKind, setSortKind] = useState<string>("사업자명");
    const dataState = ["신청", "보류", "검토중", "거절", "보류", "보류", "보류", "보류", "보류"];
    const [sortView, setSortView] = useState<boolean>(false);
    return (
        <Box>
            <h1 className='headTitle'>파트너 티어별 수량</h1>
            <ChartBox>
                <HeadBox>
                    <p>누적 신청 수: 51</p>
                    <p>계약 승인된 판매자 수: 25</p>
                    <p>최근 30일 내 신청수: 8</p>
                </HeadBox>
            </ChartBox>
            <ListTop>
                <div className='sortBox' style={!sortView ? {display: 'none'} : {display: 'flex'}}>
                    <p onClick={()=> {
                        setSortView((e) => !e);
                        sortKind !== "사업자명" && setSortKind("사업자명");
                    }}>사업자명</p>
                    <p onClick={()=> {
                        setSortView((e) => !e);
                        sortKind !== "사업자등록증" && setSortKind("사업자등록증");
                    }}>사업자등록증</p>
                    <p onClick={()=> {
                        setSortView((e) => !e);
                        sortKind !== "판매자ID" && setSortKind("판매자ID");
                    }}>판매자ID</p>
                </div>
                <div className='inputBox'>
                    <input type="text" placeholder='검색'/>
                    <SearchOutline/>
                </div>
            </ListTop>
            <ListBox>
                <div className='listHead'>
                    <div className='left'>
                        <div>No</div>
                        <div>판매자 ID</div>
                    </div>
                    <div className='center'>
                        <div>사업자명</div>
                        <div>신청날짜</div>
                    </div>
                    <div className='right'>
                        <div>파트너티어</div>
                        <div>요율</div>
                        <div>상태</div>
                    </div>
                    <div className='btn'>
                        <div>상세보기</div>
                    </div>
                </div>
                {dataState.map((content, i) => (
                    <div className='contentLine' key={i}>
                        <div className='left'>
                            <div>199</div>
                            <div>moon@storicha.in</div>
                        </div>
                        <div className='center'>
                            <p className='pc'>문콘텐츠연구소</p>
                            <p className='mobile'> 
                                <span className='head'>사업자명</span>
                                <span>문콘텐츠연구소</span>
                            </p>
                            <p className='pc'>2022-01-05</p>
                            <p className='mobile'> 
                                <span className='head'>신청날짜</span>
                                <span>2022-01-05</span>
                            </p>
                        </div>
                        <div className='right'>
                            <p className='pc'>파트너티어</p>
                            <p className='mobile'> 
                                <span className='head'>파트너티어</span>
                                <span>Tier1</span>
                            </p>
                            <p className='pc'>요율</p>
                            <p className='mobile'> 
                                <span className='head'>요율</span>
                                <span>1:9</span>
                            </p>
                            <p className='pc'>상태</p>
                            <p className='mobile'> 
                                <span className='head'>상태</span>
                                <span>{content}</span>
                            </p>
                        </div>
                        <div className='btn'>
                            <div><button className='classBtn'>상세</button></div>
                        </div>
                    </div>
                ))}
            </ListBox>
        </Box>
  )
}
const Box = styled.div`
    width: 100%;
    padding: 32px 42px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--box1);
    border-radius: 15px;
    z-index: 9999;
    .headTitle{
        font-size: 26px;
        padding-bottom: 48px;
        color: var(--title);
        @media screen and (max-width: 768px) {
            padding-bottom: 28px;
        }
        @media screen and (max-width: 768px) {
            font-size: 22px;
            padding-bottom: 18px;
        }
    }
    .topCharts{
        min-height: auto !important;
        display: flex;
        justify-content: flex-start;
        .apexcharts-tooltip {
            background-color: var(--box1);
            color: var(--title);
        }
        .apexcharts-theme-light .apexcharts-tooltip-title {
            background-color: var(--box2);
            color: var(--title);
            border-bottom: 0;
            font-weight: bold;
        }
        .apexcharts-toolbar{
            display: none;
        }
        .apexcharts-xaxis{
            margin-top: -4px;
            transform: translateY(-6px);
        }
        .apexcharts-inner{
            height: 100%;
        }
        .apexcharts-text {
            fill: var(--title);
            color: var(--title);
        }
        .apexcharts-bar-area{
        
        }
        path{
        /* fill: #DEFFBC; */
        }
        @media screen and (max-width: 768px) {
            .apexcharts-xaxis{
                margin-top: -4px;
                transform: translateY(-10px);
            }
        }
        .apexcharts-text tspan{
            font-size: 16px;
            color: var(--title);
            @media screen and (max-width: 768px) {
                font-size: 12px;
            }
            @media screen and (max-width: 600px) {
                font-size: 10px;
            }
            @media screen and (max-width: 500px) {
                display: none;
            }
        }
    }
    @media screen and (max-width: 1024px) {
        padding: 20px;
        border-radius: 0px;
    }
    .boxTitle{
        width: 100%;
        font-size: 22px;
        padding-bottom: 14px;
        border-bottom: 1.8px solid var(--sub);
    }
`
const ChartBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 14px;
    @media screen and (max-width: 1024px) {
        flex-direction: column;
        align-items: flex-start;
    }
`
const HeadBox = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    line-height: 34px;
    background-color: ${props => props.theme.bgColor};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 6px;
    p{
        color: var(--title);
        font-size: 20px;
    }
    @media screen and (max-width: 1024px) {
        background-color: var(--box1);
    }
    @media screen and (max-width: 500px) {
        margin-top: -28px;
    }
`
const ListTop = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 20px;
    margin-top: 24px;
    .sortP{
        width: 200px;
        font-size: 20px;
        background-color: var(--box2);
        padding: 12px 20px;
        display: flex;
        align-items: center;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        color: var(--title);
        cursor: pointer;
        span { 
            position: absolute;
            right: 8px;
            top: 50%;
            transform: translateY(-50%) scale(1.3);
            svg{
                color: var(--title);
            }
        }
    }
    .sortBox{
        position: absolute;
        top: 20px;
        width: 200px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 20px;
        z-index: 999999;
        background-color: var(--box2);
        font-size: 20px;
        border: 1px solid var(--title);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        p{
            cursor: pointer;
            transition: all .1s ease-in-out;
            :hover{
                color: var(--point);
            }
        }
    }
    .inputBox{
        position: absolute;
        width: calc(100% - 500px);
        height: 100%;
        max-width: 500px;
        left: 240px;
        height: 100%;
        input {
            width: 100%;
            height: 100%;
            text-align: left;
            padding: 16px 50px 16px 18px;
            font-size: 20px;
            outline: none;
            background-color: var(--box2);
            color: var(--title);
            border: none;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
            ::placeholder{
                color: var(--title);
            }
        }
        svg{
            position: absolute;
            right: 14px;
            color: var(--title);
            top: 50%;
            transform: translateY(-50%) scale(1.2);
        }
    }
    .listArray{
        position: absolute;
        right: 20px;
        display: flex;
        align-items: center;
        font-size: 20px;
        cursor: pointer;
        svg{
            fill: var(--title);
            transform: scale(1.2);
            margin-right: 4px;
        }
        .listSort{
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            background-color: var(--box2);
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
            padding: 12px;
            z-index: 999999;
            top: 12px;
            right: 0;
            gap: 14px;
            width: 135px;
            font-size: 18px;
            border-radius: 4px;
            p{
                cursor: pointer;
                :hover{
                    color: var(--point);
                }
                svg{
                    color: var(--title);
                    left: 4px;
                    margin-bottom: -4px;
                    transform: scale(0.96);
                }
            }
        }
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        .inputBox{
            position: relative;
            left: 0;
            margin-top: 12px;
            width: 100%;
            max-width: none;
        }
        .listArray{
            top: 8px;
        }
    }
`
const ListBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  padding: 0 20px;
  .listHead{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--box2);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        @media screen and (max-width: 1024px) {
        display: none !important;
        }
        div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        }
        .left{
            div{
                width: 100%;
                padding: 12px 8px;
            }
            div:nth-child(1){
                width: 80px;
            }
            div:nth-child(2){
                width: 185px;
            }
        }
        .center{
            p{
                width:100%;
                padding: 12px 8px;
            }
            p:nth-child(1){
                width: 120px;
            }
            p:nth-child(2){
                width: 120px;
            }
        }
        .right{
            width: 120%;
            div{
                width:100%;
                padding: 12px 8px;
            }
            div:nth-child(1){
                width: 90px;
            }
            div:nth-child(2){
                width: 50px;
            }
            div:nth-child(3){
                width: 70px;
            }
        }
        .btn{
            width: 120px;
            div{
                width: 120px;
                padding: 12px 8px;
            }
            }
            @media screen and (min-width: 1200px) {
            .left{
                justify-content: space-between;
                div:nth-child(2){
                width: 80%;
                }
            }
            .center{
                width: 120%;
                div:nth-child(1){
                width: 100%;
                }
                div:nth-child(2){
                width: 100%;
                }
            }
        }
        @media screen and (min-width: 1024px) {
            .right{
                width: 80%;
                div:nth-child(1){
                    width: 120px;
                }
                div:nth-child(2){
                    width: 60px;
                }
                div:nth-child(3){
                    width: 80px;
                }
            }
        }
    }
    .contentLine{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--box2);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        margin-top: 12px;
        padding: 4px 0;
        @media screen and (max-width: 1024px) {
        flex-direction: column;
        padding: 12px 20px;
            .left{
                justify-content: space-between;
                font-size: 20px;
                color: var(--title);
                div{
                    padding: 0px 0px !important;
                }
                div:nth-child(1){
                    justify-content: flex-start;
                }
                div:nth-child(2){
                    justify-content: flex-end;
                }
            }
            .center{
                flex-direction: column;
                justify-content: space-between;
                font-size: 20px;
                color: var(--title);
                margin-top: 12px !important;
                p{
                    width: 100% !important;
                    padding: 0px 0px !important;
                }
                .pc{
                    display: none;
                }
                .mobile{
                    display: block !important;
                    margin-top: 8px;
                    text-align: right;
                    .head{
                        position: absolute;
                        left: 0px;
                    }
                }
            }
            .right{
                width: 100% !important;
                flex-direction: column;
                justify-content: space-between;
                margin-top: 0px !important;
                font-size: 20px;
                p{
                    width: 100%;
                }
                .pc{
                    display: none;
                }
                .mobile{
                    display: block !important;
                    margin-top: 8px;
                    text-align: right;
                    padding: 0px;
                    .head{
                        position: absolute;
                        left: 0px;
                    }
                }
            }
            .btn{
                width: 100% !important;
                div{
                    width: 100% !important;
                    padding: 0px !important;
                    margin-top: 12px;
                    .classBtn{
                        width: 100% !important;
                        border-radius: 4px;
                        font-size: 20px;
                        padding: 8px 0;
                        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                    }
                }
            }
        }
        div{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .left{
            div{
                width: 100%;
                padding: 12px 8px;
            }
            div:nth-child(1){
                width: 80px;
            }
            div:nth-child(2){
                width: 185px;
            }
            }
            .center{
            p{
                width:100%;
                padding: 12px 8px;
                text-align: center;
            }
            p:nth-child(1){
                width: 100%;
            }
            p:nth-child(3){
                width: 100%;
            }
            .mobile{
                display: none;
            }
            }
            .right{
            width: 120%;
            p{
                padding: 12px 8px;
            }
            p:nth-child(1){
                text-align: center;
                width: 120px;
            }
            p:nth-child(3){
                width: 60px;
                text-align: center;
            }
            p:nth-child(5){
                width: 80px;
                text-align: center;
            }
            .mobile{
                display: none;
            }
            }
            .btn{
            width: 120px;
            div{
                width:120px;
                padding: 12px 8px;
                button{
                padding: 4.5px 40px;
                background-color: var(--box1);
                color: var(--title);
                outline: none;
                border: none;
                font-size: 16px;
                border-radius: 24px;
                cursor: pointer;
                transition: all ease-in-out 0.1s;
                :hover{
                    background-color: var(--point);
                }
                }
            }
            }
            @media screen and (min-width: 1200px) {
            .left{
                justify-content: space-between;
                div:nth-child(2){
                width: 80%;
                }
            }
            .center{
                width: 120%;
                div:nth-child(1){
                width: 100%;
                }
                div:nth-child(2){
                width: 100%;
                }
            }
            }
            @media screen and (min-width: 1024px) {
            .right{
                width: 80%;
                div:nth-child(1){
                width: 120px;
                }
                div:nth-child(2){
                width: 60px;
                }
                div:nth-child(3){
                width: 80px;
                }
            }
            .classBtn{
                padding: 4.5px 28px !important;
            }
        }
    }
`