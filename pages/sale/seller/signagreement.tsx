import Area from 'components/Area';
import React, { useState } from 'react';
import styled from 'styled-components';

export default function SignAgreement(){
    const [infoCheck, setInfoCheck] = useState(false);
    const [contractCheck, setContractCheck] = useState(false);
    return (
        <Area>
            <InputBox>
                <input type="text" placeholder='오늘도날씨가좋아' required={true}/>
                <span>판매자계정 <b>*</b></span>
                <div className='underline'></div>
            </InputBox>
            <InputBox>
                <input type="text" placeholder='오늘도날씨가좋아'required={true}/>
                <span>사업자명 <b>*</b></span>
                <div className='underline'></div>
            </InputBox>
            <InputBox>
                <input type="text" placeholder='오늘도날씨가좋아'required={true}/>
                <span>사업자등록번호 <b>*</b></span>
                <div className='underline'></div>
            </InputBox>
            <InputBox>
                <input type="text" placeholder='오늘도날씨가좋아'required={false}/>
                <span>사업자 주소<b></b></span>
                <div className='underline'></div>
            </InputBox>
            <InputBox>
                <input type="text" placeholder='오늘도날씨가좋아'required={false}/>
                <span>상세 주소<b></b></span>
                <div className='underline'></div>
            </InputBox>
            <InputBox>
                <input type="text" placeholder='오늘도날씨가좋아'required={true}/>
                <span>사업자등록증 첨부<b>*</b></span>
                <div className='underline'></div>
            </InputBox>
            <InputBox style={{marginTop: "60px"}}>
                <input type="text" placeholder='오늘도날씨가좋아'required={false}/>
                <span>계약 담당자 성명<b>*</b></span>
                <div className='underline'></div>
            </InputBox>
            <InputBox>
                <input type="text" placeholder='오늘도날씨가좋아'required={false}/>
                <span>계약 담당자 이메일<b>*</b></span>
                <div className='underline'></div>
            </InputBox>
            <InputBox>
                <input type="text" placeholder='오늘도날씨가좋아'required={false}/>
                <span>계약 담당자 전화번호<b>*</b></span>
                <div className='underline'></div>
            </InputBox>
            <InputBox>
                <input type="text" placeholder='오늘도날씨가좋아'required={false}/>
                <span>계약 담당자 휴대전화번호<b></b></span>
                <div className='underline'></div>
            </InputBox>
            <Title>콘텐츠 판매 수익 정산을 위한 계좌정보를 입력 해 주세요</Title>
            <InputBox className='nonInput' style={{marginTop: "20px"}}>
                <select name="" id="">
                    <option value="KEB하나은행">KEB하나은행</option>
                    <option value="SC제일은행">SC제일은행</option>
                    <option value="국민은행">국민은행</option>
                    <option value="신한은행">신한은행</option>
                    <option value="외환은행">외환은행</option>
                    <option value="우리은행">우리은행</option>
                    <option value="농협">농협</option>
                    <option value="수협">수협</option>
                    <option value="한국산업은행">한국산업은행</option>
                    <option value="한국수출입은행">한국수출입은행</option>
                    <option value="한국시티은행">한국시티은행</option>
                    <option value="경남은행">경남은행</option>
                    <option value="광주은행">광주은행</option>
                    <option value="대구은행">대구은행</option>
                    <option value="부산은행">부산은행</option>
                    <option value="전북은행">전북은행</option>
                    <option value="제주은행">제주은행</option>
                    <option value="기업은행">기업은행</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svgClass">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </InputBox>
            <InputBox>
                <input type="text" placeholder='오늘도날씨가좋아'required={false}/>
                <span>계좌번호<b></b></span>
                <div className='underline'></div>
            </InputBox>
            <InputBox>
                <input type="text" placeholder='오늘도날씨가좋아'required={false}/>
                <span>예금주<b></b></span>
                <div className='underline'></div>
            </InputBox>
            <Title>개인정보 이용 정책 동의</Title>
            <TextAreaBox readOnly={true} defaultValue='안녕하세요'/>
            <AgreeBox>
                <div>
                    <input type="checkbox" defaultChecked={infoCheck ? true: false} id="checkbox123" onClick={()=> setInfoCheck((e) => !e)}/>
                    <label htmlFor="checkbox123"><span>동의</span></label>
                </div>
                <div>
                    <input type="checkbox" defaultChecked={infoCheck ? false: true} id="checkbox123" onClick={()=> setInfoCheck((e) => !e)}/>
                    <label htmlFor="checkbox123" style={{left: 'calc(50% - 40px)'}}><span>비동의</span></label>
                </div>
            </AgreeBox>
            <Title>콘텐츠 판매 계약 약관</Title>
            <TextAreaBox readOnly={true} defaultValue='안녕하세요'/>
            <TitleH2>파트너 티어란? Tier 별로 정산주기와 수익정산 요율이 다르게 됩니다.<br/>위 계약을 읽은 후 알맞게 선택 해 주세요</TitleH2>
            <TierSelectBox>
                <p>신청 파트너 티어<b>*</b></p>
                <select name="" id="">
                    <option value="1">Partner Tier 1</option>
                    <option value="2">Partner Tier 2</option>
                    <option value="3">Partner Tier 3</option>
                    <option value="4">Partner Tier 4</option>
                    <option value="5">Partner Tier 5</option>
                    <option value="6">Partner Tier 6</option>
                    <option value="7">Partner Tier 7</option>
                    <option value="8">Partner Tier 8</option>
                    <option value="9">Partner Tier 9</option>
                    <option value="10">Partner Tier 10</option>
                    <option value="11">Partner Tier 11</option>
                    <option value="12">Partner Tier 12</option>
                    <option value="13">Partner Tier 13</option>
                    <option value="14">Partner Tier 14</option>
                    <option value="15">Partner Tier 15</option>
                    <option value="16">Partner Tier 16</option>
                    <option value="17">Partner Tier 17</option>
                    <option value="18">Partner Tier 18</option>
                    <option value="19">Partner Tier 19</option>
                    <option value="20">Partner Tier 20</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svgClass">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </TierSelectBox>
            <AgreeBox>
                <div>
                    <input type="checkbox" defaultChecked={contractCheck ? true: false} id="checkbox12345" onChange={()=> setContractCheck((e) => !e)}/>
                    <label htmlFor="checkbox12345"><span>동의</span></label>
                </div>
                <div>
                    <input type="checkbox" defaultChecked={contractCheck ? false: true} id="checkbox12345" onChange={()=> setContractCheck((e) => !e)}/>
                    <label htmlFor="checkbox12345" style={{left: 'calc(50% - 40px)'}}><span>비동의</span></label>
                </div>
            </AgreeBox> 
            <ButtonBox>
                <div>
                    <button className='left' onChange={()=> alert("저장")}>저장</button>
                </div>
                <div>
                    <button className='right' onChange={()=> alert("입점 신청")}>콘텐츠 판매자 입점 신청</button>
                </div>
            </ButtonBox>
        </Area>
    )
}

const InputBox = styled.div`
    width: 100%;
    max-width: 800px;
    left: 50%;
    transform: translateX(calc(-50% - 150px));
    padding-top: 20px;
    padding-left: 300px;
    color: var(--title);
    @media screen and (max-width: 1024px) {
        width: 100%;
        max-width: 600px;
        left: 50% !important;
        transform: translateX(-50%);
        padding: 0px 20px;
        margin-top: 42px;
        span{
            left: 32px !important;
            top: calc(50% - 11px) !important;
        }
        .underline{
            left: 20px !important;
        }
        input:focus ~ .underline {
            width: calc(100% - 40px) !important;
        }
        input:not(:placeholder-shown) ~ .underline {
            width: calc(100% - 40px) !important;
        }
        input:not(:placeholder-shown) + span {
            top: -26px !important;
            transform: scale(0.85);
            left: 24px !important;
        }
        input:focus + span {
            transform: scale(0.85);
            top: -26px !important;
            left: 24px !important;
        }
    }
    input, select{
        width: 100%;
        background-color: var(--box2);
        color: var(--title);
        border: none;
        outline: none;
        font-size: 20px;
        padding: 10.5px 14px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        ::placeholder{
            color: transparent;
        }
    }
    span{
        position: absolute;
        left: 314px;
        top: calc(50%);
        font-size: 20px;
        padding-right: 14px;
        transition: all ease-in-out .3s;
        pointer-events: none;
        b{
            position: absolute;
            top: 50%;
            transform: translateY(calc(-50% + 2px));
            right: 0;
            color: var(--point);
        }
    }
    &.nonInput{
        select{
            appearance:none;
        }
        span{
            position: absolute;
            right: 0px;
            svg{
                position: absolute;
                right: 4px;
                color: var(--title);
            }
            @media screen and (max-width: 1024px) {
                svg{
                right: 24px;
                }
            }
        }
    }
    .underline{
        position: absolute;
        bottom: 0px;
        width: 0%;
        left: 300px;
        border-bottom: 1.4px solid var(--title);
        transition: all ease-in-out .3s;
    }
    /* input:not(:placeholder-shown) + span {
        left: -8px;
        top: 14px;
        transform: scale(0.8);
    }
    input:focus + span {
        left: -8px;
        top: 14px;
        transform: scale(0.8);
    } */
    input:focus ~ .underline {
        width: calc(100% - 300px);
    }
    input:focus::placeholder {
        color: #939393;
    }
    input:not(:placeholder-shown) ~ .underline {
        width: calc(100% - 300px);
    }
    input:not(:placeholder-shown) + span {
        left: 88px;
    }
    input:focus + span {
        left: 88px;
    }
    svg{
      width: 20px;
      height: 20px;
      position: absolute;
      top: 50%;
      right: 4px;
    }
`

const Title = styled.h1`
  margin-top: 64px;
  width: 100%;
  text-align: center;
  font-size: 22px;
  color: var(--title);
  @media screen and (max-width: 768px) {
    width: calc(100% - 24px);
    left: 50%;
    transform: translateX(-50%);
  }
`

const TextAreaBox = styled.textarea`
  width: 100%;
  max-width: 600px;
  padding: 18px;
  resize: none;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 24px;
  border-radius: 8px;
  background-color: var(--box2);
  border: none;
  outline: none;
  font-size: 18px;
  color: var(--title);
  height: 400px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  @media screen and (max-width: 768px) {
    width: calc(100% - 24px);
  }
`
const AgreeBox = styled.div`
  width: 100%;
  max-width: 600px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
  div{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    input{
      transform: scale(2);
      border-radius: 24px;
    }
    label{
      background-color: #fff;
      border: 1px solid #a7a7a7;
      border-radius: 50%;
      cursor: pointer;
      height: 28px;
      left: calc(50% - 28px);
      transform: translateX(-50%);
      position: absolute;
      top: 0;
      width: 28px;
      span{
        position: absolute;
        left: 34px;
        width: 80px;
        font-size: 22px;
        top: 2px;
      }
    }
    label:after {
      border: 2px solid #fff;
      border-top: none;
      border-right: none;
      content: "";
      height: 6px;
      left: 6px;
      opacity: 0;
      position: absolute;
      top: 8px;
      transform: rotate(-45deg) scale(1.15);
      width: 12px;
    }
    input[type="checkbox"] {
      visibility: hidden;
    }
    input[type="checkbox"]:checked + label {
      background-color: var(--point);
      border-color: var(--point);
    }
    input[type="checkbox"]:checked + label:after {
      opacity: 1;
    }
  }
`
const TitleH2 = styled.h2`
  width: 100%;
  max-width: 600px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  margin-top: 18px;
  @media screen and (max-width: 768px) {
    width: calc(100% - 24px);
  }
`
const TierSelectBox = styled.div`
  width: 100%;
  max-width: 600px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 200px;
  margin-top: 18px;
  p{
    position: absolute;
    left: 0px;
    font-size: 20px;
    b{
      position: absolute;
      margin-top: 3px;
      right: -18px;
      color: var(--point);
    }
  }
  select{
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
    padding: 8.5px 30px 8.5px 12px;
    font-size: 18px;
    width: 100%;
    text-align: right;
    appearance:none;
    outline: none;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
  svg{
    position: absolute;
    right: 4px;
    top: 50%;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
    color: ${props => props.theme.textColor};
  }
  @media screen and (max-width: 768px) {
    width: calc(100% - 24px);
    padding: 0 !important;
    flex-direction: column;
    p{
      width: 100% !important;
      left: 0;
      position: relative;
      b{
        position: absolute;
        left: 136px;
      }
    }
    select{
      margin-top: 12px;
      text-align: left;
    }
    span{
      position: absolute;
      right: 0px;
      svg{
        margin-top: 16px;
      }
    }
  }
`
const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
  max-width: 600px;
  padding-bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  div{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
      padding: 10.5px 0;
      width: calc(100% - 30px);
      font-size: 18px;
      border: none;
      outline: none;
      border-radius: 6px;
      cursor: pointer;
      &.left{
        background-color: var(--box2);
        color: ${props => props.theme.textColor};
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      }
      &.right{
        background-color: var(--point);
        color: #FFFFFF;
      }
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 12px !important;
    button{
      border-radius: 4px !important;
      padding: 8px 0 !important;
      width: 100%;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
  }
`