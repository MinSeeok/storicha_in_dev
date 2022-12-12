import styled from "styled-components";
import AddPolicyBox from "./AddPolicyBox";
import * as React from 'react';

const BasicPolicyBox = () => {
    const [addOn, setAddon] = React.useState<boolean>(false);
    const [modal, setModal] = React.useState<boolean>(false);
    const [addPolicy, setAddPolicy] = React.useState<string>('');
    const setAddContent = () => {
        setModal(false);
        setAddon(true);
    }
    return (
        <Box style={{maxWidth: '1200px'}}> 
            <AddPolicy>
                판매 정책 추가
                <svg onClick={()=> { addOn ? setAddon(false) : setModal(true) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </AddPolicy>
            {addOn  && (<AddPolicyBox title={addPolicy}/>)}
            <PolicyBox>
                <div className='boxline'>
                    디폴트 가격
                </div>
                <div className='line'></div>
                <div className='boxline mobile_column'>
                        <p className='title'>판매 정책 제목</p>
                        <div className='box'>
                            <p>{`사랑과악마`}</p>
                        </div>
                    </div>
                <div className='boxline'>
                    대여 정상가
                    <div className='box'>
                        <input 
                            type="text" 
                            className='rightUnit'  
                            readOnly={false}
                            value={'0'}
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
                            readOnly={true}
                            value={'123'}
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
                            readOnly={true}
                            value={'123'}
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
                            readOnly={true}
                            value={'123'}
                        />
                        <span className='unit'>TC</span>
                    </div>
                </div>
            </PolicyBox>
            {modal && (
                <AddPolicyTitle>
                    <div className="dark-back"/>
                    <div className="add-container">
                        <h2>추가할 정책 제목 입력</h2>
                        <input 
                            type="text" 
                            placeholder="정책 제목 입력" 
                            value={addPolicy}
                            onChange={e => setAddPolicy(e.target.value)}
                        />
                        <div className="line"></div>
                        <button onClick={setAddContent}>추가하기</button>
                    </div>
                </AddPolicyTitle>
            )}
        </Box>
    )
}

export default BasicPolicyBox;

const Box = styled.div`
    width: 100%;
    margin-top: 42px;
    color: var(--title);
    .exceptionBox{
        display: flex;
    }
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
    svg{
        margin-left: 6px;
        width: 24px;
        height: 24px;
        cursor: pointer;
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

const AddPolicyTitle = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 999999;
    .dark-back{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 100vh;
        background-color: #000000;
        opacity: 0.4;
    }
    .add-container{
        min-width: 420px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        padding-bottom: 64px;
        background-color: var(--box1);
        border-radius: 8px;
        h2{
            font-size: 18px;
            color: var(--title);
        }
        input {
            padding: 8px 4px;
            font-size: 18px;
            margin-top: 48px;
            width: 100%;
            background-color: transparent;
            border-bottom: 1.4px solid #EDEDED;
            &+.line{
                content: '';
                width: 0px;
                height: 1.4px;
                position: relative;
                left: 0;
                bottom: 0px;
                background-color: #7b7b7b;
                transition: all .2s ease-in-out;
            }
            :active, :hover, :focus{
                &+.line{
                    width: 100%;
                }
            }
        }
        button{
            position: absolute;
            right: 20px;
            bottom: 20px;
            padding: 6px 12px;
            font-size: 16px;
            background-color: var(--icon1);
            border-radius: 4px;
            color: #FFFFFF;
        }
    }
`