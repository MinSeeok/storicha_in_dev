import Image from 'next/image';
import React, { useState } from 'react';
import { ChevronDownOutline, RemoveCircleOutline } from 'react-ionicons';
import styled from 'styled-components';
import Swal from 'sweetalert2';

export default function AddContentBox(props:any){
    const [ selectPriceBoxView, useSelectPriceBoxView ] = useState(false);
    const RemoveStory = () => {
        Swal.fire({
            title: '스토리를 삭제하시겠습니까?',
            text: "삭제된 에피소드는 판매중지됩니다.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: '삭제하겠습니다',
            cancelButtonText: '취소합니다',
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                '삭제되었습니다',
                '삭제된 에피소드는 내 책상에서 확인할 수 있습니다.',
                'success'
                )
            }
        })
    }
    return(
        <AddContent>
        <div className='left'>
            <AddImageBox>
                <Image
                    src={`/images/test/${props.img}`}
                    layout='fill'
                    objectFit='contain'
                />
            </AddImageBox>
            <span className='epText'>EP</span>
            <input type="text" placeholder={props.number !== 0 ? String(props.number) : "에피소드 번호"}/>
            <p className='title'>{props.title.length < 10 ? props.title : props.title.slice(0,10)+"..."}</p>
            <p className='mobileTitle'>{props.title}</p>
            <p className='underText'>글자수 ({props.textCount})&nbsp;&nbsp;삽화수({props.artworkCount})&nbsp;&nbsp;장면수({props.sceneCount})&nbsp;&nbsp;캐릭터수({props.characterCount})</p>
            <p className='mobileUnderText'>글자수 ({props.textCount})&nbsp;&nbsp;삽화수({props.artworkCount})<br/>장면수({props.sceneCount})&nbsp;&nbsp;캐릭터수({props.characterCount})</p>
        </div>
        <div className='right'>
            <div className='selectPrice'>
            <span onClick={() => useSelectPriceBoxView((e) => !e)}>적용된 판매정책 : 기본가격<ChevronDownOutline width={"20px"} height={"20px"}/></span>
            <SelectPriceBox className={selectPriceBoxView ? "selectPriceBoxView" : ""}>
                <p>기본 가격정책 적용</p>
                <p>예외 가격정책 적용</p>
                <p>012 글자수 많은...</p>
                <p>010 단행 본 가격...</p>
                <p>009 드라마 대본...</p>
                <p>무료 가격정책 적용</p>
            </SelectPriceBox>
            </div>
            <div className='top'>
                <span><b>대여가: </b>&nbsp; {props.rent}TC</span>
                <span><b>대여할인가: </b>&nbsp; {props.rentSale}TC</span>
            </div>
            <div className='bottom'>
                <span><b>소장가: </b>&nbsp; {props.own} TC</span>
                <span><b>소장가: </b>&nbsp; {props.ownSale} TC</span>
            </div>
        </div>
        <AddCircle>
            <RemoveCircleOutline
                width={"36px"}
                height={"36px"}
                cssClasses={"removeBtn"}
                onClick={RemoveStory}
            />
        </AddCircle>
        </AddContent>
    )
}

const AddContent = styled.div`
  padding: 16px;
  width: 100%;
  height: 140px;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--bgColor);
  margin-top: 12px;
  .left{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    .epText{
      width: 50px;
      font-size: 22px;
      padding: 4px 11px;
    }
    input{
      width: 120px;
      background-color: transparent;
      color: var(--title);
      border: 1.4px solid var(--title);
      outline: none;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 16px;
      margin-top: 2px;
    }
    .title{
      font-size: 20px;
      padding: 6px 0 0 16px;
      font-weight: bold;
      letter-spacing: -.6px;
      @media screen and (max-width:1024px) {
        display: none;
      }
    }
    .mobileTitle{
      position: absolute;
      left: 100px;
      top: 50px;
      font-size: 22px;
      display: none;
      @media screen and (max-width:1024px) {
        display: block;
      }
      @media screen and (max-width:500px) {
        font-size: 18px;
      }
    }
    .underText{
      position: absolute;
      bottom: 4px;
      left: 105px;
      @media screen and (max-width:1024px) {
        display: none;
      }
    }
    .mobileUnderText{
      display: none;
      position: absolute;
      width: calc(100% - 100px);
      left: 100px;
      top: 90px;
      font-size: 16px;
      line-height: 18px;
      @media screen and (max-width:1024px) {
        display: block;
      }
    }
  }
  .right{
    width: 100%;
    height: 100%;
    padding: 6px 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    .selectPrice {
      width: 100%;
      display: flex;
      span{
        width: auto;
      }
    }
    .top{
      width: 100%;
      position: absolute;
      left: 00px;
      top: 38px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 17px;
      letter-spacing: -.4px;
      span{
        width: 100%;
        display: flex;
        justify-content: flex-start;
      }
      b{
        width: auto;
        color: #bababa;
      }
      .selectPrice {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
    .bottom{
      width: 100%;
      position: absolute;
      left: 0px;
      bottom: 4px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    span{
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
      svg{
        color: var(--title);
        margin-left: 4px;
      }
      b{
        color: #bababa;
      }
    }
  }
  @media screen and (max-width:1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto !important;
    margin-top: 18px;
    padding: 12px;
    gap: 12px;
    .left {
      width: 100%;
    }
    .underText{
      bottom: 0 !important;
      left: 100px !important;
    }
    .right{
      flex-direction: column;
      gap: 12px;
      font-size: 18px !important;
      .top {
        position: relative !important;
        top: 0 !important;
        right: 0 !important;
      }
      .bottom{
        position: relative !important;
        bottom: 0 !important;
        right: 0 !important;
      }
    }
  }
  @media screen and (max-width:500px) {
    font-size: 14px;
  }
`
const AddImageBox = styled.div`
  width: 90px !important; 
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  color: var(--title);
  @media screen and (max-width:1024px) {
    height: 130px;
  }
`
const SelectPriceBox = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50px;
  top: 12px;
  z-index: 999;
  background-color: var(--box1);
  border: 1.4px solid var(--title);
  border-radius: 8.5px;
  p {
    padding: 10.5px 14px;
    font-size: 16px;
    text-align: left;
  }
  &.selectPriceBoxView{
    display: flex;
  }
`

const AddCircle = styled.div`
  position: absolute;
  top: 0;
  width: 50px;
  right: 8px;
  height: 100%;
  span{
    position: absolute;
    transform: translateX(8px) translateY(-50%);
    top: 50%;
    cursor: pointer;
    svg{
      color: var(--accent);
    }
  }
  span{
    left: 0;
  }
  @media screen and (max-width:769px) {
    bottom: 30px !important;
  }
`