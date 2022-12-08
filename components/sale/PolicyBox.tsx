import axios from 'axios';
import { GetExceptionPolicyData, GetPolicyData } from 'enum/data-type';
import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';
import styled from 'styled-components';

interface kind{
    kind: string;
    idx: number;
    count: number;
}

const SalePolicyBox = (props:kind) => {
    const [exception, setException] = React.useState(false);
    const [onModify, setOnModify] = React.useState(false);
    // getPolicy-data
    const [policyData, setPolicyData] = React.useState<GetPolicyData | GetExceptionPolicyData |null>(null);
    
    // router
    const router = useRouter();

    function onlyNumber(e: React.ChangeEvent<HTMLInputElement>){
        return e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    }
    React.useEffect(()=>{
        if(props.idx === 0){
            alert('잘못된 접근입니다.');
            router.push('/');
        }
        if(props.kind === 'basic'){
            axios({
                method: 'GET',
                url:`https://api-v2.storicha.in/api/sale-pricepolicy?set_idx=${props.idx}&type_idx=${props.kind === 'basic' ? 2 : 3}&delete_yn=N`,
                withCredentials: true,
            })
            .then((response):any => {
                setPolicyData(response.data.response_data[0]);
            })
            .catch((error) => {
                setPolicyData(null);
                console.log(error);
            })
        }
        if(props.kind === 'exception'){
            axios({
                method: 'GET',
                url: `https://api-v2.storicha.in/api/sale-pricepolicy?set_idx=2&type_idx=${props.kind === 'exception' ? 3 : 2}&delete_yn=N`,
                withCredentials: true,
            })
            .then((response):any => {
                console.log(`https://api-v2.storicha.in/api/sale-pricepolicy?set_idx=2&type_idx=${props.kind === 'exception' ? 3 : 2}&delete_yn=N`);
                setPolicyData(response.data.response_data[props.count]);
            })
            .catch((error) => {
                setPolicyData(null);
                console.log(error);
            })
        }
    },[]);
    return(
        <>
            <Box style={{maxWidth: '1200px'}}> 
                <Title>
                    <Image
                        width={'24px'}
                        height={'24px'}
                        src={props.kind === 'basic' ? '/images/icons/basicCost.svg' : '/images/icons/exceptionCost.svg'}
                    />
                    <p onClick={()=> console.log(policyData)}>{props.kind === 'basic' ? '기본 가격 판매정책' : '예외 가격 판매정책'}</p>
                </Title>
                <SubTitle>
                    {
                        props.kind === 'basic' ?
                        '본 세트에 포함 되는 모든 에피소드를 단일한 가격으 로 설정 합니다. 예외로 가격을 달리하고 싶은 에피소드가 있을 경우 아래 예외 가격 판매 정책에서 설정 하실 수 있습니다' :
                        '기본 가격 판매정책 보다 더 높거나 낮게 판매하고 싶은 에피소드가 있는 경우 이곳에서 설정합니다'
                    }
                </SubTitle>
                <BoundaryLine/>
                <AddPolicy>
                    판매 정책 추가
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
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
                            placeholder={(policyData?.code_name !== '') && (policyData?.code_name !== undefined)  ? policyData?.code_name : '제목이 존재하지 않습니다'} 
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
                            placeholder={`${(policyData?.rental_price !== 0) && (policyData?.rental_price !== undefined)  ? policyData?.rental_price : 0}`} 
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
                            placeholder={`${(policyData?.rental_dc_price !== 0) && (policyData?.rental_dc_price !== undefined) ? policyData?.rental_dc_price : 0}`} 
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
                            placeholder={`${(policyData?.keep_price !== 0) && (policyData?.keep_price !== undefined) ? policyData?.keep_price : 0}`} 
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
                            placeholder={`${(policyData?.keep_dc_price !== 0) && (policyData?.keep_dc_price !== undefined) ? policyData?.keep_dc_price : 0}`} 
                            readOnly={onModify ? false : true}
                            onChange={(event)=> onlyNumber(event)}
                            />
                            <span className='unit'>TC</span>
                        </div>
                    </div>
                    <div className='boxline mobile_column'>
                        <p className='title'>기다리면 무료</p>
                        <div className='box'>
                            <label className='toggler-wrapper style-1' style={{marginLeft: "-20px"}}>
                            <input type="checkbox"/>
                            <div className="toggler-slider">
                                <div className="toggler-knob"></div>
                            </div>
                            </label>
                            <p>{`${policyData?.wait_free_date ? moment(policyData?.wait_free_date).diff(moment(), 'days') : 0}일 후 무료`}</p>
                        </div>
                    </div>
                    <div className='boxline mobile_column'>
                        <p className='title'>사용시작</p>
                        <div className='box'>
                            <p>{policyData?.start_date ? moment(policyData?.start_date).format('YYYY-MM-DD') : '0000-00-00'}</p>
                        </div>
                    </div>
                    <div className='boxline mobile_column'>
                        <p className='title'>사용종료</p>
                        <div className='box'>
                            <p>{policyData?.end_date ? moment(policyData?.end_date).format('YYYY-MM-DD') : '0000-00-00'}</p>
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
            </Box>
        </>
    )
}

export default SalePolicyBox;

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
    font-size: 18px;
    line-height: 20px;
    margin-top: 24px;
    color: var(--sub);
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
    background-color: var(--boxColor);
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
            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
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
        @media screen and (max-width: 500px) {
            &.mobile_column{
                height: auto;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                .box{
                    position: relative;
                    top: none;
                    transform: none;
                    margin-top: 12px;
                    width: 100%;
                }
                p.title {
                    margin-top: 8px;
                }
            }
        }
    }
    .line{
        width: 100%;
        border-top: 4px solid var(--box1);
    }
    .hot {
        color: var(--point);
    }
    @media screen and (max-width: 500px) {
        padding: 16px;
        height: auto;
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
        background-color: var(--boxColor2);
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