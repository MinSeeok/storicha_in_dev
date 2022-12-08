import axios from 'axios';
import Area from 'components/Area';
import SalePolicyBox from 'components/sale/PolicyBox';
import { SalePolicyEnum } from 'enum/data-type';
import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { LoginState } from 'recoil/user';
import styled from "styled-components";

type IProgress = {
    state: string, 
    complete: number, // 시작전: 0, 진행중: 1, 완료: 2
    request: number // 요청완료: true, 요청진행중: false  
};

export default function SalePolicy(){
    // get Idx
    const router = useRouter();
    const idx = router.asPath.substring(router.asPath.indexOf('idx=') !== -1 ? router.asPath.indexOf('idx=')+4 : router.asPath.length);

    // get-login
    const login = useRecoilValue(LoginState);
    const [contentData, setContentData] = React.useState<SalePolicyEnum | null>(null);

    // exception-set
    const [exception, setException] = React.useState<boolean>(false);

    // exception-data
    const [getException, setGetException] = React.useState<number>(0);

    const Progress: IProgress[] = [
        {state: "작성중", complete: 2, request: 1},
        {state: "검수중", complete: 2, request: 1},
        {state: "수정요청", complete: 2, request: 2},
        {state: "검수완료", complete: 1, request: 0},
        {state: "판매시작", complete: 0, request: 0},
        {state: "판매중지", complete: 0, request: 0},
    ]
    React.useEffect(()=>{
        // a wrong approach
        if(idx === ''){
            alert('올바르지 않은 접근입니다.')
            router.push('/');
        }
        if(login === null || login === undefined){
            alert('올바르지 않은 접근입니다.')
            router.push('/');
        }
        axios({
            method: 'GET',
            url:`https://api-v2.storicha.in/api/saleset?series_idx=${idx}`,
            withCredentials: true,
        })
        .then((response):any => {
            setContentData(response.data.response_data);
        })
        .catch((error) => {
            console.log(error);
        });
    },[]);
    // login-change => main
    React.useEffect(()=> {
        if(login === null || login === undefined){
            router.push('/')
        }
    },[login])
    // get-exception
    React.useEffect(()=> {
        if(contentData !== null){
            axios({
                method: 'GET',
                url: `https://api-v2.storicha.in/api/sale-pricepolicy?set_idx=2&type_idx=3&delete_yn=N`,
                withCredentials: true,
            })
            .then((response):any => {
                setGetException(response.data.response_data_count);
            })
            .catch((error) => {
                console.log(error);
            })
        } 
    },[contentData])
    const renderException = () => {
        let array = [];
        for(let i = 0; i < getException; i++){
            array.push(
                <SalePolicyBox 
                    kind={"exception"} 
                    idx={contentData?.set_idx ? contentData?.set_idx - 1 : 0}
                    count={i}
                />
            )
        }
        return array;
    }
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
                    <h2>{contentData?.series_title ? contentData?.series_title : 'None-Title'}</h2>
                    <p>
                        최종 임시 저장일 &nbsp;&nbsp;{contentData?.selling_start_date ? moment(contentData.selling_start_date).format('YYYY-MM-DD HH:SS') : 'NONE-DATE'}<br/>
                        최종 판매 승인일 &nbsp;&nbsp;{contentData?.update_date ? moment(contentData.update_date).format('YYYY-MM-DD HH:SS') : 'NONE-DATE'}
                    </p>
                </TitleTextBox>
                <TopLightBox>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                        </svg>
                        내 책상
                    </button>
                    <p onClick={()=>console.log(getException)}><span>배급사</span> 씨엠닉스</p>
                    <p onClick={()=>console.log(login)}><span>진행현황</span> 진행중</p>
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
                                <BarLine key={'bar'+i} id={i === 2 ? 'center' : ''}>
                                    <div className={`line${progress.complete}`}/>
                                </BarLine>
                            )
                        }
                    </>
                ))}
            </ProgressBarBox>
            {contentData?.set_idx ? (
                <SalePolicyBox 
                    kind={"basic"} 
                    idx={contentData?.set_idx ? contentData?.set_idx - 1 : 0}
                    count={0}
                />
            ) : ('')}            
            <ExceptionSelect>
                <p onClick={()=> console.log(getException)}>특정 에피소드만 예외가격으로 적용하고 싶나요?</p>
                <label className='toggler-wrapper style-1'>
                    <input type="checkbox" onChange={()=> setException((e) => !e)} />
                    <div className="toggler-slider">
                        <div className="toggler-knob"></div>
                    </div>
                </label>
            </ExceptionSelect>
            {exception && renderException()}
            <BottomBtnBox>
                <button onClick={()=> renderException()}>변경저장</button>
                <button className='request'>판매요청</button>
            </BottomBtnBox>
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
    @media screen and (max-width: 768px) {
        width: 300px;
        height: 435px;
    }
    @media screen and (max-width: 500px) {
        width: 100%;
        height: 120vw;
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

const ExceptionSelect = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 24px;
    font-size: 22px;
    margin-left: 4px;
    color: var(--title);
    .toggler-wrapper {
        display: block;
        width: 40px;
        height: 20px;
        cursor: pointer;
        input[type="checkbox"] {
            display: none;
        }
        input[type="checkbox"]:checked+.toggler-slider {
            background-color: var(--point);
        }
        .toggler-slider{
            background-color: #282828;
            position: absolute;
            border-radius: 100px;
            top: 0;
            left: 10px;
            width: 100%;
            height: 100%;
            -webkit-transition: all 300ms ease;
            transition: all 300ms ease;
        }
    }
    .toggler-wrapper.style-1 {
        input[type="checkbox"]:checked+.toggler-slider .toggler-knob {
            left: calc(100% - 14px - 3px);
        }
        .toggler-knob {
            width: calc(20px - 6px);
            height: calc(20px - 6px);
            border-radius: 50%;
            left: 3px;
            top: 3px;
            background-color: #fff;
        }
    }
    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`

const BottomBtnBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    button {
        width: calc(50% - 12px);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        font-size: 20px;
        padding: 9px 0;
        outline: none;
        border: none;
        cursor: pointer;
        font-weight: 600;
        background-color: #D7D7D7;
        &.request{
            color: #000000;
        }
    }
    button:nth-child(1){
        background-color: var(--point);
        color: #FFFFFF;
    }
`