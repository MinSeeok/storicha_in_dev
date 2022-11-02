import Area from 'components/Area';
import SalePolicyBox from 'components/PolicyBox';
import Image from 'next/image';
import * as React from 'react';
import { Ellipse, EllipseOutline, WalletOutline } from 'react-ionicons';
import styled from "styled-components";

type IProgress = {
    state: string, 
    complete: number, // 시작전: 0, 진행중: 1, 완료: 2
    request: number // 요청완료: true, 요청진행중: false  
};

export default function SalePolicy(){
    const [contentData, setContentData] = React.useState('');
    let Progress: IProgress[] = [
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
                        <WalletOutline
                        width={"22px"}
                        height={"22px"}
                        />
                        내 책상
                    </button>
                    <p><span>배급사</span> 씨엠닉스</p>
                    <p><span>진행현황</span> 진행중</p>
                </TopLightBox>
            </TopLine>
                <ProgressBarBox>
                    {Progress.map((progress, i) => {
                        if(progress.complete === 0){
                            return (
                            <Line  key={i}>
                                <ProgressBox>
                                    <EllipseOutline
                                    width={"64px"}
                                    height={"64px"}
                                    color={"#D7D7D7"}
                                    />
                                    <p>{progress.state}</p>
                                </ProgressBox>
                                {i !== 5 ?
                                (<BarLine className={i === 2 ? "opacityLine" : ""}>
                                    <Bar className={progress.request === 1 ? "ongoingMax" : progress.request === 2 ? "ongoing" : ""}/>
                                </BarLine>): ""
                                }
                            </Line>
                            )
                        } else if (progress.complete === 1){
                            return (
                            <Line  key={i}>
                                <ProgressBox>
                                <EllipseOutline
                                    width={"64px"}
                                    height={"64px"}
                                />
                                <p>{progress.state}</p>
                                </ProgressBox>
                                {i !== 5 ?
                                (<BarLine className={i === 2 ? "opacityLine" : ""}>
                                    <Bar className={progress.request === 1 ? "ongoingMax" : progress.request === 2 ? "ongoing" : ""}/>
                                </BarLine>): ""
                                }
                            </Line>
                            )
                        } else if (progress.complete === 2){
                            return (
                            <Line  key={i}>
                                <ProgressBox>
                                    <Ellipse
                                    width={"64px"}
                                    height={"64px"}
                                    />
                                    <p>{progress.state}</p>
                                </ProgressBox>
                                {i !== 5 ?
                                (<BarLine className={i === 2 ? "opacityLine" : ""}>
                                    <Bar className={progress.request === 1 ? "ongoingMax" : progress.request === 2 ? "ongoing" : ""}/>
                                </BarLine>): ""
                                }
                            </Line>
                            )
                        }
                    })}
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
        font-size: 16px;
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
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--buttonSecondary);
        border: none;
        outline: none;
        cursor: pointer;
        color: var(--title);
        border-radius: 24px;
        span{
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
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    @media screen and (max-width: 1024px) {
        max-width: 400px;
        flex-wrap: wrap;
        left: 50%;
        transform: translateX(-50%);
        gap: 16px;
        margin: 0;
        margin-top: 18px;
        div{
            margin-bottom: 4px;
            gap: 8px;
        }
        .opacityLine{
            display: none;
        }
    }
    @media screen and (max-width: 500px) {
        max-width: 350px;
        min-width: 350px;
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
    @media screen and (max-width: 1000px) {
    }
`
const ProgressBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100px;
    gap: 8px;
    @media screen and (max-width: 1000px) {
        min-width: auto;
    }
`

const BarLine = styled.div`
    width: 100%;
    height: 4px;
    margin-top: 30px;
    min-width: 42px;
    background-color: var(--sub);
    .ongoingMax{
        width: 100%;
    }
    .ongoing{
        width: 55%;
    }
    @media screen and (max-width: 500px) {
        min-width: 50px;
    }
`
const Bar = styled.div`
    width: 0;
    height: 100%;
    background-color: var(--point);
`