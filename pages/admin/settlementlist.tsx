import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { HiSortDescending } from '@react-icons/all-files/hi/HiSortDescending';
import AOS from 'aos';
import "aos/dist/aos.css";

interface title {
    title: string;
}

// 정산 정책
interface calcCycle {
    cycle : string;
    lowestRate: number;
    highestRate: number;
    partnerTier: string;
    minimumAmount: number;
}
// 정산 통계
interface  calcStats {
    currentlyAvailable: number;
    cumulativeAvailable: number;
    currentApplication: number;
    cumulativeCompletion: number;
}

interface listData {
    appDate: string;
    seller: string;
    episodeCount: number;
    salesAmount: number;
    appAmount: number;
    salesAppStatus: boolean;
}

export default function AdminSettlementList({title}:title){
    // 정산정책
    const calcPolicy:calcCycle = {
        cycle : '매월 1일',
        lowestRate: 5,
        highestRate: 100,
        partnerTier: 'Partner 50',
        minimumAmount: 10
    }
    // 정산 통계
    const calcStats:calcStats = {
        currentlyAvailable: 1200,
        cumulativeAvailable: 12500,
        currentApplication: 150,
        cumulativeCompletion: 150,
    }
    // 리스트데이터
    const listData:listData[] = [
        {
        appDate:'2022-10-11',
        seller: 'Partner',
        episodeCount: 50,
        salesAmount: 2237000,
        appAmount: 237000,
        salesAppStatus: true,
        },
        {
        appDate:'2022-10-11',
        seller: 'Partner',
        episodeCount: 50,
        salesAmount: 2137000,
        appAmount: 237000,
        salesAppStatus: true,
        },
        {
        appDate:'2022-10-11',
        seller: 'Partner',
        episodeCount: 50,
        salesAmount: 2100000,
        appAmount: 237000,
        salesAppStatus: true,
        },
        {
        appDate:'2022-10-11',
        seller: 'Partner',
        episodeCount: 50,
        salesAmount: 237000,
        appAmount: 237000,
        salesAppStatus: true,
        },
    ]
    const commaNumber = (number:Number) => {
        const parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    }
    const [viewSort, setViewSort] = useState<Boolean>(false);
    const [criterion, setCriterion] = useState<String>("정산신청일순")
    const listViewOn = (event:any) => {
        event.preventDefault();
        setViewSort((e) => !e);
    }
    function sortCriterion(text:string){
        setViewSort((e) => !e);
        setCriterion(text);
    }
    const listBoxRef : MutableRefObject<never[]> = useRef([]);
    const handleClickOutside = (e:MouseEvent)=> {
        // 리스트정렬버튼 never타입 오류
        // !listBoxRef.current[0].contains(e.target) && setViewSort(false);
    }
    useEffect(()=>{
        document.addEventListener("mousedown", handleClickOutside);
        AOS.init();
    },[]);
    return (
        <>
        <TopBar>
            <p>판매 정산 관리</p>
        </TopBar>
        <Box>
            <CalcBox>
                <h4 className='title'>정산 정책</h4>
                <p><span>정산 주기</span>{calcPolicy.cycle}</p>
                <p><span>정산 요율</span>{calcPolicy.lowestRate}% ~ {calcPolicy.highestRate}%</p>
                <p><span>파트너 티어</span>{calcPolicy.partnerTier}</p>
                <p><span>정산 가능 최소 금액</span>{calcPolicy.minimumAmount}만원 ({commaNumber(calcPolicy.minimumAmount * 100)}TC)</p>
            </CalcBox>
            <CalcBox style={{marginTop: "72px"}}>
                <h4 className='title'>정산 통계</h4>
                <p><span>현재 정산가능 판매자</span>{commaNumber(calcStats.currentlyAvailable)}</p>
                <p><span>누적 정산가능 판매자</span>{commaNumber(calcStats.cumulativeAvailable)}</p>
                <p><span>현재 정산신청 판매자</span>{commaNumber(calcStats.currentApplication)}</p>
                <p><span>누적 정산 완료자</span>{commaNumber(calcStats.currentApplication)}</p>
            </CalcBox>
            <ListBox>
            <List style={{
                marginTop: '48px',
            }}>
                <div className='number head'>No</div>
                <div className='head'>정산신청일</div>
                <div className='head'>판매자</div>
                <div className='head'>판매 EP수</div>
                <div className='head'>판매한 금액</div>
                <div className='head'>정산신청금액</div>
                <div className='head'>정산신청여부</div>
            </List>
            {/* 리스트정렬버튼 */}
            {/* <div className='sort' ref={el => (listBoxRef.current[0] = el)}>
                <p onClick={listViewOn}>
                    <HiSortDescending/>
                    <span>{criterion}</span>
                </p>
                <div className="sortSelectBox" style={!viewSort ? {display:"none"} : {display: "flex"}}>
                    <p onClick={()=> sortCriterion("정산신청일순")}>정산신청일순</p>
                    <p onClick={()=> sortCriterion("정산 완료만")}>정산 완료만</p>
                    <p onClick={()=> sortCriterion("정산 신청만")}>정산 신청만</p>
                    <p onClick={()=> sortCriterion("판매 금액순")}>판매 금액순</p>
                    <p onClick={()=> sortCriterion("파트너레벨 순")}>파트너레벨 순</p>
                </div>
            </div> */}
            {listData.map((data, i) => (
                <List className={i === 0 ? "firstList" : ""} key={i}>
                    <div className='number'><span>정산번호</span>{i+1}</div>
                    <div><span>정산신청일</span>{data.appDate}</div>
                    <div><span>판매자</span>{data.seller}</div>
                    <div><span>판매 EP수</span>{data.episodeCount}</div>
                    <div><span>판매한 금액</span>{commaNumber(data.salesAmount)}</div>
                    <div><span>정산신청금액</span>{commaNumber(data.appAmount)}</div>
                    <div><span>정산신청여부</span>{data.salesAppStatus ? "가능" : "불가능"}</div>
                </List>
            ))}
            </ListBox>
        </Box>
        </>
    )
}
const TopBar = styled.div`
    width: 100%;
    background-color: var(--box1);
    color: var(--title);
    padding: 32px 42px;
    p{
        font-family: 'Pretendard-SemiBold';
        width: 100%;
        font-size: 24px;
    }
    @media screen and (max-width: 1024px) {
        padding: 20px;
        border-radius: 0px;
    }
`
const Box = styled.div`
    width: 100%;
    padding: 32px 42px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: var(--box1);
    @media screen and (max-width: 1024px) {
        padding: 20px;
        border-radius: 0px;
    }
`
const CalcBox = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    .title{
        width: 100%;
        font-size: 22px;
        padding-bottom: 12px;
        font-weight: bold;
        border-bottom: 2px solid var(--box2);
        font-family: 'Pretendard-Medium';
        margin-bottom: 14px;
        color: var(--title);
    }
    p{
        width: calc(50% - 2px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8.5px 0;
        padding-left: 205px;
        font-size: 20px;
        color: var(--title);
        span{
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            color: var(--sub);
        }
    }
    @media screen and (max-width: 768px) {
        p {
            width: 100%;
        }
    }
`
const ListBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 64px;
    div{
        background-color: var(--box2);
        color: var(--title);
    }
    .sort{
        position: absolute;
        right: 6px;
        top: 12px;
        background-color: transparent;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        z-index: 9999;
        cursor: pointer;
        p {
            display: flex;
            align-items: center;
        }
        span{
            margin-top: -4px;
            font-size: 20px;
            margin-left: -2px;
        }
        div {
            width: auto;
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            border: 1.4px solid var(--sub);
            top: 12px;
            padding: 8px 0;
            border-radius: 12px;
            p{
                padding: 10px 14.5px;
                font-size: 18px;
                transition: all .1s ease-in-out;
            }
            p:hover{
                color: #DD4C4C;
            }
        }
        @media screen and (max-width: 1024px) {
        p{
            position: absolute;
            top: -50px;
            right: 0px;
        }
        .sortSelectBox{
            width: auto;
            height: 200px;
            top: -35px;
            p{
                position: relative;
                top: 0;
            }
        }
        }
    }
    svg{
        width: 32px;
        height: 32px;
    }
`
const List = styled.div`
    width: 100%;
    background-color: var(--box2);
    padding: 18px 0 12.5px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
    font-family: 'Pretendard-Medium';
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        z-index: 99;
    }
    .number{
        width: 50%;
    }
    .head{
        font-size: 20px;
    }
    span{
        margin-right: 24px;
        display: none;
    }
    @media screen and (max-width: 1024px) {
        :nth-child(1){
        display: none;
        }
    }
    @media screen and (max-width: 768px) {
        padding: 20px 18px;
        gap: 18px;
        min-width: 320px;
        margin-top: 8px;
        &.firstList{
            margin-top: 0;
        }
        div{
            font-size: 22px;
            justify-content: flex-end;
            &.number{
                width: 100%;
            }
        }
        span{
            position: absolute;
            left: 0px;
            display: block;
            color: #9a9a9a;
        }
        flex-direction: column;
        align-items: flex-start;
    }
`