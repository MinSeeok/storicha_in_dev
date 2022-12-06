import Area from 'components/Area';
import SalePolicyBox from 'components/PolicyBox';
import Image from 'next/image';
import * as React from 'react';
import styled from "styled-components";

type IProgress = {
    state: string, 
    complete: number, // 시작전: 0, 진행중: 1, 완료: 2
    request: number // 요청완료: true, 요청진행중: false  
};

export default function SalePolicy(){
    const [contentData, setContentData] = React.useState('');
    const Progress: IProgress[] = [
        {state: "작성중", complete: 2, request: 1},
        {state: "검수중", complete: 2, request: 1},
        {state: "수정요청", complete: 2, request: 2},
        {state: "검수완료", complete: 1, request: 0},
        {state: "판매시작", complete: 0, request: 0},
        {state: "판매중지", complete: 0, request: 0},
    ]

    React.useEffect(()=>{
        setContentData('사랑과 악마');
    },[]);
    return(
        <Area>
            <TopLine>
                <TitleImgBox>
                    <Image
                        src={`/images/test/95ec9d3731d6eeef263b52761a6a12543f07cb8f.gif`}
                        layout='fill'
                        objectFit='cover'
                    />
                </TitleImgBox>
                <TitleTextBox>
                    <h2>{contentData}</h2>
                    <p onClick={()=>console.log(contentData)}>최종 임시 저장일 2022-06-31 11:00<br/>최종 판매 승인일 2022-06-31 11:00</p>
                </TitleTextBox>
                <TopLightBox>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                        </svg>
                        내 책상
                    </button>
                    <p><span>배급사</span> 씨엠닉스</p>
                    <p><span>진행현황</span> 진행중</p>
                </TopLightBox>
            </TopLine>
            <ProgressBarBox>
                {Progress.map((progress, i) => (
                    <>
                        {
                            progress.complete === 0 && (
                                <Line key={i}>
                                    <ProgressBox>
                                        <Empty/>
                                        <p>{progress.state}</p>
                                    </ProgressBox>
                                </Line>
                            )
                        }
                        {
                            progress.complete === 1 && (
                                <Line key={i}>
                                    <ProgressBox>
                                        <FullCircle/>
                                        <p>{progress.state}</p>
                                    </ProgressBox>
                                </Line>
                            )
                        }
                        {
                            progress.complete === 2 && (
                                <Line key={i}>
                                    <ProgressBox>
                                    <FullCircle>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </FullCircle>
                                        <p>{progress.state}</p>
                                    </ProgressBox>
                                </Line>
                            )
                        }
                        {
                            i !== 5 && (
                                <BarLine id={i === 2 ? 'center' : ''}>
                                    <div className={`line${progress.complete}`}/>
                                </BarLine>
                            )
                        }
                    </>
                ))}
            </ProgressBarBox>
            <SalePolicyBox kind={"basic"}/>
        </Area>
    )
}
const TopLine = styled.div`
    width: 100%;
    padding-right: 200px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 12px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
    }
`
const TitleImgBox = styled.div`
    width: 200px;
    height: 290px;
    border-radius: 12px;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const TitleTextBox = styled.div`
    width: calc(100% - 218px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 18px;
    padding-top: 8px;
    color: var(--title);
    h2 {
        font-size: 24px;
        font-weight: bold;
    }
    p {
        margin-top: 18px;
        line-height: 24px;
        font-size: 18px;
        color: var(--title2);
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0;
        justify-content: center;
        align-items: center;
        margin-top: 24px;
    }
    @media screen and (max-width: 500px) {

    }
`
const TopLightBox = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 12px 12px 0 0;
    button {
        padding: 6px 14px;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--buttonSecondary);
        border: none;
        outline: none;
        cursor: pointer;
        color: var(--title);
        border-radius: 24px;
        svg{
            color: var(--title);
            margin-right: 4px;
            svg{
                color: var(--title);
                fill: var(--title);
            }
        }
        margin-bottom: 18px;
    }
    p {
        font-size: 18px;
        color: var(--title);
        span {
            color: var(--sub);
        }
    }
    p:nth-child(3){
        margin-top: 6px;
    }
    @media screen and (max-width: 768px) {
        top: auto;
        right: auto;
        position: relative;
        justify-content: center;
        align-items: center;
        margin-top: 18px;
    }
`
const ProgressBarBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    padding: 20px;
    @media screen and (max-width: 1024px) {
        width: calc(100% - 40px);
        max-width: 700px;
        flex-wrap: wrap;
        left: 50%;
        row-gap: 28px;
        transform: translateX(-50%);
    }
    @media screen and (max-width: 500px) {
        width: calc(100% - 8px);
        padding: 8px 0;
    }
`
const Line = styled.div`
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    color: var(--title);
    svg{
        color: var(--point);
        fill: var(--point);
    }
`
const ProgressBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100px;
    gap: 8px;
    font-size: 18px;
    @media screen and (max-width: 500px) {
        min-width: 60px;
    }
    @media screen and (max-width: 300px) {
        min-width: 40px;
        font-size: 14px;
    }
`

const Empty = styled.div`
    width: 58px;
    height: 58px;
    border: 3px solid var(--point);
    border-radius: 50%;
    margin-bottom: 4px;
    @media screen and (max-width: 500px) {
        width: 48px;
        height: 48px;
    }
    @media screen and (max-width: 300px) {
        width: 34px;
        height: 34px;
    }
`
const FullCircle = styled.div`
    width: 58px;
    height: 58px;
    border: 3px solid var(--point);
    background-color: var(--point);
    border-radius: 50%;
    margin-bottom: 4px;
    svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: #FFFFFF;
    }
    @media screen and (max-width: 500px) {
        width: 48px;
        height: 48px;
    }
    @media screen and (max-width: 300px) {
        width: 34px;
        height: 34px;
    }
`

const BarLine = styled.div`
    margin-top: -28px;
    width: calc((100% - 600px) / 5);
    height: 4px;
    background-color: var(--unchecked);
    @media screen and (max-width: 1024px) {
        width: calc((100% - 300px) / 2);
        &#center{
            display: none;
        }
    }
    @media screen and (max-width: 500px) {
        width: calc((100% - 200px) / 2);
    }
    @media screen and (max-width: 300px) {
        width: calc((100% - 150px) / 2);
    }
    div{
        position: absolute;
        width: 0%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: var(--point);
        &.line0{
            width: 0%;
        }
        &.line1{
            width: 66%;
        }
        &.line2{
            width: 100%;
        }
    }
`