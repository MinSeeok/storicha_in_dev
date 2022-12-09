import styled from "styled-components";
import * as React from 'react';
import moment from "moment";

const AddPolicyBox = () => {
    const [title, setTitle] = React.useState<string>('');
    const [rental, setRental] = React.useState<string>('');
    const [dcRental, setDcRental] = React.useState<string>('');
    const [keep, setKeep] = React.useState<string>('');
    const [dcKeep, setDcKeep] = React.useState<string>('');
    const [waitFree, setWaitFree] = React.useState(moment().format('YYYY-MM-DD'));
    const [freeSet, setFreeSet] = React.useState<boolean>(true);
    const [start, setStart] = React.useState<any>(moment().format('YYYY-MM-DD'));
    const [end, setEnd] = React.useState<any>('0000-00-00');

    const onChange = (event:any) => {
        const {
            target: { name, value }
        } = event;
        if(name === 'title'){
            setTitle(value);
        }
        if(name === 'rental'){
            setRental(value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').replace(/(^0+)/, ""));
        }
        if(name === 'dcRental'){
            setDcRental(value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').replace(/(^0+)/, ""));
        }
        if(name === 'keep'){
            setKeep(value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').replace(/(^0+)/, ""));
        }
        if(name === 'dcKeep'){
            setDcKeep(value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').replace(/(^0+)/, ""));
        }
        if(name === 'start-date'){
            if(value < start){
                return alert('과거 날짜는 선택할 수 없습니다');
            }
            setStart(value);
        }
        if(name === 'end-date'){
            if(start === '0000-00-00'){
                return alert('시작일을 먼저 선택하신 후 지정할 수 있습니다')
            }
            if(value < start){
                return alert('시작일보다 과거 날짜는 선택할 수 없습니다');
            }
            setEnd(value);
        }
        if(name === 'wait-free'){
            if(value < moment().format('YYYY-MM-DD')){
                return alert('오늘보다 과거 날짜는 선택할 수 없습니다');
            }
            setWaitFree(value);
        }
    }

    return (
        <Box style={{maxWidth: '1200px'}}> 
            <PolicyBox>
                <div className='boxline'>
                    가격정책 추가하기
                </div>
                <div className='line'></div>
                <div className='boxline'>
                    판매정책 제목
                    <div className='box'>
                        <input 
                            type="text" 
                            className='' 
                            name="title"
                            value={title}
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div className='boxline'>
                    대여 정상가
                    <div className='box'>
                        <input 
                            type="text" 
                            className='rightUnit'
                            placeholder="0"
                            name='rental' 
                            value={rental}
                            onChange={onChange}
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
                            placeholder="0"
                            name="dcRental"
                            value={dcRental}
                            onChange={onChange}
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
                            placeholder="0"
                            name="keep"
                            value={keep}
                            onChange={onChange}
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
                            placeholder="0"
                            name="dcKeep"
                            value={dcKeep}
                            onChange={onChange}
                        />
                        <span className='unit'>TC</span>
                    </div>
                </div>
                <div className='boxline'>
                    기다리면 무료
                    <div className='box'>
                        <input 
                            type="date" 
                            className='date-type' 
                            name="wait-free"
                            value={waitFree}
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div className='boxline'>
                    기다리면 무료 세팅 여부
                    <div className="on-off" onClick={()=> setFreeSet(e=>!e)}>
                        <button className={`on ${freeSet ? 'free' : ''}`}>ON</button>
                        <button className={`off ${freeSet ? '' : 'free'}`}>OFF</button>
                    </div>
                </div>
                <div className='boxline'>
                    사용시작
                    <div className='box'>
                        <input 
                            type="date" 
                            className='date-type' 
                            name="start-date"
                            value={start}
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div className='boxline'>
                    사용종료
                    <div className='box'>
                        <input 
                            type="date" 
                            className='date-type' 
                            name="end-date"
                            value={end}
                            onChange={onChange}
                        />
                    </div>
                </div>
                <button className="add-policy-box">정책추가</button>
            </PolicyBox>
        </Box>
    )
}

const Box = styled.div`
    width: 100%;
    color: var(--title);
    .exceptionBox{
        display: flex;
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
                &.date-type{
                    letter-spacing: -.4px;
                    cursor: pointer;
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
        .on-off{
            position: absolute;
            right: 0px;
            height: 38.66px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--box1);
            border-radius: 4px;
            overflow: hidden;
            box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px;
            button {
                width: 68px;
                height: 100%;
                cursor: pointer;
                &.free{
                    background-color: var(--point);
                    color: #FFFFFF;
                }
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
    .add-policy-box{
        padding: 10.5px;
        width: 100%;
        background-color: var(--point);
        color: #FFFFFF;
        cursor: pointer;
        border-radius: 4px;
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

export default AddPolicyBox;