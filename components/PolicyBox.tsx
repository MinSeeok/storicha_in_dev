import moment from 'moment';
import Image from 'next/image';
import * as React from 'react';
import { AddCircleOutline } from 'react-ionicons';
import styled from 'styled-components';
import PriceSalePolicyData from '../json/sale/pricepolicy.json';

interface kind{
    kind: string;
}

export default function SalePolicyBox({kind}:kind){
    const [exception, setException] = React.useState(false);
    const [onModify, setOnModify] = React.useState(false);
    function onlyNumber(e: React.ChangeEvent<HTMLInputElement>){
        return e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    }
    const priceSalePolicy = PriceSalePolicyData;
    React.useEffect(()=>{
        console.log(priceSalePolicy.response_data && moment(priceSalePolicy.response_data[0].wait_free_date).diff(moment(), 'days'));
    },[]);
    return(
        <>
            <Box>
                <Title>
                    <Image
                        width={'24px'}
                        height={'24px'}
                        src={'/images/icons/basicCost.svg'}
                    />
                    <p>기본 가격 판매정책</p>
                </Title>
                <SubTitle>본 세트에 포함 되는 모든 에피소드를 단일한 가격으 로 설정 합니다. 예외로 가격을 달리하고 싶은 에피소드가 있을 경우 아래 예외 가격 판매 정책에서 설정 하실 수 있습니다.</SubTitle>
                <BoundaryLine/>
                <AddPolicy>
                    판매 정책 추가
                    <AddCircleOutline
                        width={"26px"}
                        height={"26px"}
                    />
                </AddPolicy>
                <PolicyBox>
                    <div className='boxline'>
                        사용여부
                        <label className='toggler-wrapper style-1' style={{position: "absolute", right: "12px"}}>
                            <input type="checkbox"/>
                            <div className="toggler-slider">
                            <div className="toggler-knob"></div>
                            </div>
                        </label>
                    </div>
                    <div className='boxline'>
                        판매 정책 제목
                        <div className='box'>
                            <input 
                            type="text" 
                            placeholder={"사랑과 악마"} 
                            readOnly={onModify ? false : true}
                            />
                        </div>
                    </div>
                    <div className='line'></div>
                    <div className='boxline'>
                        대여 정상가
                        <div className='box'>
                            <input 
                            type="text" 
                            className='rightUnit' 
                            placeholder={`${priceSalePolicy.response_data && priceSalePolicy.response_data[0].rental_price}`} 
                            readOnly={onModify ? false : true}
                            onChange={(event)=> onlyNumber(event)}
                            />
                            <span className='unit'>TC</span>
                        </div>
                    </div>
                    <div className='boxline hot'>
                        대여 할인가
                        <div className='box'>
                            <input 
                            type="text" 
                            className='rightUnit' 
                            placeholder={`${priceSalePolicy.response_data && priceSalePolicy.response_data[0].rental_dc_price}`} 
                            readOnly={onModify ? false : true}
                            onChange={(event)=> onlyNumber(event)}
                            />
                            <span className='unit'>TC</span>
                        </div>
                    </div>
                    <div className='boxline'>
                        소장 정상가
                        <div className='box'>
                            <input 
                            type="text" 
                            className='rightUnit' 
                            placeholder={`${priceSalePolicy.response_data && priceSalePolicy.response_data[0].keep_price}`} 
                            readOnly={onModify ? false : true}
                            onChange={(event)=> onlyNumber(event)}
                            />
                            <span className='unit'>TC</span>
                        </div>
                    </div>
                    <div className='boxline hot'>
                        소장 할인가
                        <div className='box'>
                            <input 
                            type="text" 
                            className='rightUnit' 
                            placeholder={`${priceSalePolicy.response_data && priceSalePolicy.response_data[0].keep_dc_price}`} 
                            readOnly={onModify ? false : true}
                            onChange={(event)=> onlyNumber(event)}
                            />
                            <span className='unit'>TC</span>
                        </div>
                    </div>
                    <div className='boxline'>
                        기다리면 무료
                        <div className='box'>
                            <label className='toggler-wrapper style-1' style={{marginLeft: "-20px"}}>
                            <input type="checkbox"/>
                            <div className="toggler-slider">
                                <div className="toggler-knob"></div>
                            </div>
                            </label>
                            <p>{`${priceSalePolicy.response_data && moment(priceSalePolicy.response_data[0].wait_free_date).diff(moment(), 'days')}일 후 무료`}</p>
                        </div>
                    </div>
                    <div className='boxline'>
                        사용시작
                        <div className='box'>
                            <p>{priceSalePolicy.response_data && moment(String(priceSalePolicy.response_data[0].start_date)).format('YYYY-MM-DD')}</p>
                        </div>
                    </div>
                    <div className='boxline'>
                        사용종료
                        <div className='box'>
                            <p>{priceSalePolicy.response_data && moment(String(priceSalePolicy.response_data[0].end_date)).format('YYYY-MM-DD')}</p>
                        </div>
                    </div>
                    <BtnLine>
                        <button onClick={()=>{
                            setOnModify((e)=>!e);
                            if(!onModify){
                                alert("이제부터 수정하실 수 있습니다.");
                            }else{
                                alert("수정완료 되었습니다.");
                            }
                        }}>
                            {!onModify ? "수정하기" : "수정완료"}
                        </button>
                        <button>삭제하기</button>
                    </BtnLine>
                </PolicyBox>
                {kind === "basic" ? (
                    <ExceptionSelect>
                    <p>특정 에피소드만 예외가격으로 적용하고 싶나요?</p>
                    <label className='toggler-wrapper style-1'>
                        <input type="checkbox" onChange={()=> setException((e) => !e)} />
                        <div className="toggler-slider">
                            <div className="toggler-knob"></div>
                        </div>
                    </label>
                    </ExceptionSelect>
                ) : ""}
                <ExceptionBox className={exception ? 'exceptionBox' : ''}>
                    <Title style={{marginTop: "36px"}}>
                        <Image
                            width={'24px'}
                            height={'24px'}
                            src={'/images/icons/exceptionCost.svg'}
                        />
                        <p>예외 가격 판매 정책</p>
                    </Title>
                    <SubTitle>기본 가격 판매정책 보다 더 높거나 낮게 판매하고 싶은 에피소드가 있을 경우 이곳에서 설정합니다.</SubTitle>
                    <BoundaryLine/>
                    <AddPolicy>
                        판매 정책 추가
                        <AddCircleOutline
                            width={"26px"}
                            height={"26px"}
                        />
                    </AddPolicy>
                    <PolicyBox>
                    <div className='boxline'>
                        사용여부
                        <label className='toggler-wrapper style-1' style={{position: "absolute", right: "12px"}}>
                        <input type="checkbox"/>
                        <div className="toggler-slider">
                            <div className="toggler-knob"></div>
                        </div>
                        </label>
                    </div>
                    <div className='boxline'>
                        판매 정책 제목
                        <div className='box'>
                        <input 
                            type="text" 
                            placeholder={"사랑과 악마"} 
                            readOnly={onModify ? false : true}
                        />
                        </div>
                    </div>
                    <div className='line'></div>
                    <div className='boxline'>
                        대여 정상가
                        <div className='box'>
                        <input 
                            type="text" 
                            className='rightUnit' 
                            placeholder={"10"} 
                            readOnly={onModify ? false : true}
                            onChange={(event)=> onlyNumber(event)}
                        />
                        <span className='unit'>TC</span>
                        </div>
                    </div>
                    <div className='boxline hot'>
                        대여 할인가
                        <div className='box'>
                        <input 
                            type="text" 
                            className='rightUnit' 
                            placeholder={"8"} 
                            readOnly={onModify ? false : true}
                            onChange={(event)=> onlyNumber(event)}
                        />
                        <span className='unit'>TC</span>
                        </div>
                    </div>
                    <div className='boxline'>
                        소장 정상가
                        <div className='box'>
                        <input 
                            type="text" 
                            placeholder={"10"} 
                            className='rightUnit' 
                            readOnly={onModify ? false : true}
                            onChange={(event)=> onlyNumber(event)}
                        />
                        <span className='unit'>TC</span>
                        </div>
                    </div>
                    <div className='boxline hot'>
                        소장 할인가
                        <div className='box'>
                        <input 
                            type="text"
                            className='rightUnit' 
                            placeholder={"8"} 
                            readOnly={onModify ? false : true}
                            onChange={(event)=> onlyNumber(event)}
                        />
                        <span className='unit'>TC</span>
                        </div>
                    </div>
                    <div className='boxline'>
                        기다리면 무료
                        <div className='box'>
                        <label className='toggler-wrapper style-1' style={{marginLeft: "-20px"}}>
                            <input type="checkbox"/>
                            <div className="toggler-slider">
                            <div className="toggler-knob"></div>
                            </div>
                        </label>
                        <p>조회 후 2일 뒤</p>
                        </div>
                    </div>
                    <div className='boxline'>
                        사용시작
                        <div className='box'>
                        <p>2022-06-31</p>
                        </div>
                    </div>
                    <div className='boxline'>
                        사용종료
                        <div className='box'>
                        <p>2022-06-31</p>
                        </div>
                    </div>
                    <BtnLine>
                        <button onClick={()=>{
                            setOnModify((e)=>!e);
                            if(!onModify){
                                alert("이제부터 수정하실 수 있습니다.");
                            }else{
                                alert("수정완료 되었습니다.");
                            }
                            }}>
                            {!onModify ? "수정하기" : "수정완료"}
                            </button>
                        <button>삭제하기</button>
                        </BtnLine>
                    </PolicyBox>
                </ExceptionBox>
                <BottomBtnBox>
                    <button>변경저장</button>
                    <button>판매요청</button>
                </BottomBtnBox>
            </Box>
        </>
    )
}

const Box = styled.div`
    width: 100%;
    margin-top: 42px;
    color: var(--title);
    .exceptionBox{
        display: flex;
    }
`
const Title = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 22px;
    color: var(--title);
    p{
        margin-left: 12px;
    }
`
const SubTitle = styled.p`
    max-width: 780px;
    font-size: 16px;
    line-height: 20px;
    margin-top: 24px;
    color: var(--sub);
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
const BoundaryLine = styled.div`
    width: 100%;
    border-top: 4px solid var(--box2);
    margin-top: 16px;
`
const AddPolicy = styled.p`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
    margin-top: 12px;
    span{
        margin-left: 8px;
        svg {
            color: var(--title);
        }
    }
`
const PolicyBox = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: var(--box2);
    margin-top: 12px;
    border-radius: 8px;
    gap: 16px;
    font-size: 20px;
    font-weight: bold;
    .boxline {
        width: 100%;
        height: 36px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: var(--title);
        .box {
            width: calc(100% - 400px);
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            padding: 8.5px 14px 8.5px 14px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            background-color: var(--box1);
            border-radius: 4px;
            color: var(--title);
            font-weight: 500;
            font-size: 18px;
        .unit{
            position: absolute;
            right: 14px;
            bottom: 50%;
            transform: translateY(50%);
            color: var(--title);
        }
        .toggler-wrapper {
            display: block;
            width: 40px;
            height: 20px;
            margin-right: 20px;
            cursor: pointer;
            input[type="checkbox"] {
                display: none;
            }
            input[type="checkbox"]:checked+.toggler-slider {
                background-color: var(--point);
            }
            .toggler-slider{
                background-color: #7d7d7d;
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
        p {
            line-height: 20px;
            margin-top: 2px;
        }
        input {
            background-color: transparent;
            border: none;
            outline: none;
            text-align: right;
            color: var(--title);
            font-size: 18px;
            &.rightUnit{
            padding-right: 24px;
            }
            ::placeholder{
            color: var(--title);
            }
        }
        @media screen and (max-width: 768px) {
            width: calc(100% - 200px);
            font-size: 16px;
        }
        @media screen and (max-width: 500px) {
            width: calc(100% - 130px);
        }
        }
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
                background-color: #7d7d7d;
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
            font-size: 16px;
        }
    }
    .line{
        width: 100%;
        border-top: 4px solid var(--box1);
    }
    .hot {
        color: var(--point);
    }
`
const BtnLine = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;
    margin-top: 8px;
    padding-right: 6px;
    button{
        color: var(--title);
        cursor: pointer;
        font-size: 18px;
        padding: 6.5px 64px;
        border-radius: 6px;
        background-color: var(--box1);
        border: 1.8px solid var(--line);
        @media screen and (max-width: 500px) {
            padding: 4px 32px;
        }
        @media screen and (max-width: 380px) {
            padding: 4px 16px;
        }
    }
    svg {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
`
const ExceptionBox = styled.div`
    display: none;
    flex-direction: column;
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
        padding: 6px 0;
        outline: none;
        border: none;
        cursor: pointer;
        font-weight: 600;
        background-color: #D7D7D7;
    }
    button:nth-child(1){
        background-color: var(--point);
        color: #FFFFFF;
    }
`