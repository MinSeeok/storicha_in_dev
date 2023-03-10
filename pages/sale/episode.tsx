import AddContentBox from 'components/AddContentBox';
import Area from 'components/Area';
import SaleTop from 'components/sale/SaleTop';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { LoginState } from 'recoil/user';
import styled from 'styled-components';

interface StoryDataInterface{
    img: string; 
    idx: string; 
    number: number; 
    title: string; 
    policy: number; 
    rent: number; 
    rentSale: number; 
    own: number; 
    ownSale: number; 
    textCount: number; 
    artworkCount: number; 
    sceneCount: number; 
    characterCount: number;
}

export default function SaleEpisode(){

    // get Idx
    const router = useRouter();
    const idx = router.asPath.substring(router.asPath.indexOf('idx=') !== -1 ? router.asPath.indexOf('idx=')+4 : router.asPath.length);
    const addStory:StoryDataInterface[] = [
        // number: 에피소드 번호, title: 제목, policy: 판매정책, rent: 대여가, rentSale: 대여할인가, own: 소장가, ownSale: 소장할인가
        {img: "4beab4b1b4486f76581b8b75d8041717a030eff8.gif", idx: "f4e8fc25-7601-4846-8644-21bdbf17be3f", number: 0, title: "재니와의 만남", policy: 0, rent: 8, rentSale: 18, own: 18, ownSale: 18 ,textCount: 25112, artworkCount: 5, sceneCount: 2, characterCount: 10},
        {img: "4beab4b1b4486f76581b8b75d8041717a030eff8.gif", idx: "d6e58a26-e7bc-4b34-9372-21771f590c9e", number: 2, title: "스승의 가르침", policy: 0, rent: 8, rentSale: 18, own: 18, ownSale: 18 ,textCount: 25112, artworkCount: 5, sceneCount: 2, characterCount: 10},
        {img: "4beab4b1b4486f76581b8b75d8041717a030eff8.gif", idx: "61ef7a72-795b-4ef8-8e79-b2ff7c43f7e6", number: 3, title: "엄마가 적이 되다", policy: 0, rent: 8, rentSale: 18, own: 18, ownSale: 18 ,textCount: 25112, artworkCount: 5, sceneCount: 2, characterCount: 10},
        {img: "4beab4b1b4486f76581b8b75d8041717a030eff8.gif", idx: "6c875b05-9717-4d18-83fc-6eb6a49f776d", number: 4, title: "아이러니 - 착오가 곧 성공 ...", policy: 0, rent: 8, rentSale: 18, own: 18, ownSale: 18 ,textCount: 25112, artworkCount: 5, sceneCount: 2, characterCount: 10},
    ]

    // get-login
    const login = useRecoilValue(LoginState);
    const sortKind = ["최신순","가나다순","공개순","비공개순","팔로워 공개 순","초대된 사람만 순"];
    const [sort, setSort] = useState<string>("최신 순");
    const [sortOn, setSortOn] = useState<boolean>(false);

    const storyList = [
        // public: 0-공개 / 1-비공개 / 2-팔로워에게만공개 / 3-초대된사람만
        {
            idx: "fae83f3e-5499-402e-af52-f24c30264f4a",
            img: "4beab4b1b4486f76581b8b75d8041717a030eff8.gif",
            title: "맨홀 구멍",
            link: "https://storicha.in/stori/view/SKoIcN04xKW",
            public: 0,
        },
        {
            idx: "76f4fe58-da03-4387-85ba-9b13a5b9784e",
            img: "4beab4b1b4486f76581b8b75d8041717a030eff8.gif",
            title: "검의 무게를 견뎌내는 자, 욕망을 다스리는 자",
            link: "https://storicha.in/stori/view/dkeodkfediehe",
            public: 1,
        },
        {
            idx: "f3a50e3b-5bbd-4c54-b6da-9f3db95495a9",
            img: "4beab4b1b4486f76581b8b75d8041717a030eff8.gif",
            title: "용의 눈물을 다시 머금고서",
            link: "https://storicha.in/stori/view/FdieEiemdika8",
            public: 2,
        },
        {
            idx: "81f166e1-5fbb-40d1-b1f7-feea25d9f2d1",
            img: "4beab4b1b4486f76581b8b75d8041717a030eff8.gif",
            title: "사선의 끝에서 찾아낸 아내의 시체",
            link: "https://storicha.in/stori/view/UdieUneleiJel",
            public: 3,
        },
        {
            idx: "d10980db-779d-45f0-b573-fbbcb7a3e843",
            img: "4beab4b1b4486f76581b8b75d8041717a030eff8.gif",
            title: "사랑과 악마",
            link: "https://storicha.in/stori/view/FdieEiemdika8",
            public: 0,
        },
        {
            idx: "16ad3af8-c3b0-4886-ac4a-51587593098a",
            img: "4beab4b1b4486f76581b8b75d8041717a030eff8.gif",
            title: "검의 무게를 견뎌내는 자, 욕망을 다스리는 자 ",
            link: "https://storicha.in/stori/view/rSelKes93ke3",
            public: 0,
        },
        {
            idx: "60b94b25-8c36-43ab-abdd-1fd9ecd0c03f",
            img: "4beab4b1b4486f76581b8b75d8041717a030eff8.gif",
            title: "용의 눈물을 다시 머금고서 ",
            link: "https://storicha.in/stori/view/dkeo7630sawQ",
            public: 0,
        },
        {
            idx: "d684eba1-4304-4926-9cad-c7d98b916f0c",
            img: "4beab4b1b4486f76581b8b75d8041717a030eff8.gif",
            title: "사선의 끝에서 찾아낸 아내의 시체 ",
            link: "https://storicha.in/stori/view/FdieEiemdika8",
            public: 0,
        },
    ]
    const copyLink = () => {
        alert("복사되었습니다");
    }
    const listBoxRef = useRef<Array<HTMLDivElement | null>>([]);
    useEffect(()=>{
        // a wrong approach
        if(idx === ''){
            alert('올바르지 않은 접근입니다.')
            router.push('/');
        }
        if(login === null || login === undefined){
            alert('올바르지 않은 접근입니다.')
            router.push('/');
        }
        document.addEventListener("mousedown", handleClickOutside);
    },[]);
    const handleClickOutside =(e:any)=>{
        if(listBoxRef.current[0] !== null){
            if(!listBoxRef.current[0].contains(e.target)){
                setSortOn(false);
            } else {
                if(e.target.className === 'kindValue'){
                setSort(e.target.innerText);
                }
                setSortOn(false);
            }
        }
    }
    return(
        <>
            <SaleTop/>
            <Area>
                <TopBox>
                    <p className='title'>판매 할 에피소드로 추가한 스토리 ( {addStory.length} )</p>
                    <p className='subtitle'>에피소드 번호를 입력 해 주세요. 미 입력시 맨 마지막에 노출 됩니다.</p>
                    {addStory.map((content, i) => (
                        <AddContentBox {...content} key={i}/>
                    ))}
                    <p className='pagingList'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                      <b onClick={()=> alert("페이징처리")}>1</b>
                      <b onClick={()=> alert("페이징처리")}>2</b>
                      <b onClick={()=> alert("페이징처리")}>3</b>
                      <b onClick={()=> alert("페이징처리")}>4</b>
                      <b onClick={()=> alert("페이징처리")}>5</b>
                      <b onClick={()=> alert("페이징처리")}>6</b>
                      <b onClick={()=> alert("페이징처리")}>7</b>
                      <b onClick={()=> alert("페이징처리")}>8</b>
                      <b onClick={()=> alert("페이징처리")}>9</b>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </p>
                </TopBox>
                <ContentBox>
                    <p className='title'>내 책상의 스토리 전체목록</p>
                    <p className='subtitle'>에피소드로써 판매할 스토리를 이 시리즈에 추가 하세요. 추가(플러스 버튼)을 누르면 판매할 에피소드로 추가 됩니다.</p>
                    <div className='topLine'>
                    <span className='left'>
                        <b>전체 스토리</b> ( {storyList.length * 10 + 1} )
                    </span>
                    <div className='center'>
                        <input type="text" placeholder='스토리 찾기'/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                    <div className='right' onClick={()=>setSortOn((e) => !e)} ref={el => (listBoxRef.current[0] = el)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                      </svg>
                        {sort}
                        {sortOn && (
                        <div className='sortBox'>
                            {sortKind.map((content, i)=>(
                            <p 
                                key={i}
                                className={'kindValue'}
                            >{content}
                            </p>
                            ))}
                        </div>
                        )}
                    </div>
                    </div>
                    {storyList.map((content, i) => (
                        <ContentLine key={i}>
                            <ContentLineBox>
                                <ContentImg>
                                    <Image
                                        src={`/images/test/${content.img}`}
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </ContentImg>
                                <p className='title'>
                                    {content.title.length > 9 ? content.title.slice(0,9)+"..." : content.title}&nbsp;
                                    <span>
                                    {/* public: 0-공개 / 1-비공개 / 2-팔로워에게만공개 / 3-초대된사람만 */}
                                    {
                                        content.public === 0 ? "( 공개 )" :
                                        content.public === 1 ? "( 비공개 )" :
                                        content.public === 2 ? "( 팔로워 공개 )" :
                                        content.public === 3 && "( 초대된 사람 )"
                                    }
                                    </span>
                                </p>
                            </ContentLineBox>
                            <ContentLineBox className='secondBox'>
                                <span className='link'>{content.link}</span>
                                <div className='svg-box'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="copyOutline" onClick={copyLink}>
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="AddCircleOutline">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </ContentLineBox>
                        </ContentLine>
                    ))}
                    <p className='pagingList'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                      <b onClick={()=> alert("페이징처리")}>1</b>
                      <b onClick={()=> alert("페이징처리")}>2</b>
                      <b onClick={()=> alert("페이징처리")}>3</b>
                      <b onClick={()=> alert("페이징처리")}>4</b>
                      <b onClick={()=> alert("페이징처리")}>5</b>
                      <b onClick={()=> alert("페이징처리")}>6</b>
                      <b onClick={()=> alert("페이징처리")}>7</b>
                      <b onClick={()=> alert("페이징처리")}>8</b>
                      <b onClick={()=> alert("페이징처리")}>9</b>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </p>
                </ContentBox>
                <BottomBtnBox>
                    <button>가격 정책 관리로 가기</button>
                    <button>나의 책상으로 돌아가기</button>
                </BottomBtnBox>
            </Area>
        </>
    )
}

const TopBox = styled.div`
    padding: 12px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: var(--title);
    .title {
        font-size: 22px;
    }
    .subtitle {
        margin-top: 12px;
        font-size: 18px;
    }
    .pagingList{
        width: 100%;
        text-align: center;
        margin-top: 48px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 8px;
        font-size: 20px;
        span, svg ,b{
            color: var(--title);
        cursor: pointer;
        }
    }
  @media screen and (max-width: 1024px) {
    .pagingList{
      margin-top: 38px;
    }
  }
  @media screen and (max-width: 500px) {
    .title {
      font-size: 18px;
    }
    .subtitle{
      font-size: 16px;
    }
  }
`
const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 64px;
  .title {
    color: var(--title);
    font-size: 24px;
  }
  .subtitle {
    margin-top: 12px;
    font-size: 20px;
    color: var(--sub);
  }
  .topLine{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0 20px 0;
    margin-top: 24px;
    border-bottom: 2px solid var(--sub);
    color: var(--title);
    .left {
      font-size: 20px;
      color: var(--title);
      b {
        font-size: 22px;
        font-weight: bold;
      }
    }
    .center{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px 0;
      input {
        min-width: 300px;
        max-height: 500px;
        padding: 5.5px 60px 5.5px 20px;
        font-size: 20px;
        border-radius: 28px;
        border: 2px solid var(--title);
        color: var(--title);
        background-color: transparent;
        outline: none;
      }
      svg {
        position: absolute;
        right: 16px;
        color: var(--title);
        width: 26px;
        height: 26px;
        fill: none;
      }
    }
    .right {
      font-size: 20px;
      color: var(--title);
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
    }
    span, svg{
      fill: var(--title);
      color: var(--title);
    }
    .sortBox{
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      right: 0;
      top: 26px;
      padding: 12px;
      border: 1.4px solid var(--borderLine);
      background-color: var(--box1);
      z-index: 999999;
      gap: 12.5px;
      border-radius: 8px;
      width: 160px;
      p{
        font-size: 20px;
        transition: all .1s ease-in-out;
        color: var(--title);
        &:hover{
          color: var(--point);
          cursor: pointer;
        }
      }
    }
    @media screen and (max-width:1024px) {
        padding-bottom: 80px;
        display: flex;
        .center{
            bottom: 0;
            input{
              font-size: 16px;
              left: 0px;
              transform: translateX(0%);
            }
        }
        .AddCircleOutline{
            width: 20px;
            height: 20px;
        }
    }
  }
  .pagingList{
    width: 100%;
    text-align: center;
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 20px;
    span, svg ,b{
      fill: var(--title);
      color: var(--title);
      cursor: pointer;
    }
  }
  @media screen and (max-width:1024px) {
    margin-top: 24px;
    padding: 12px;
    .subtitle{
      font-size: 16px;
      line-height: 20px;
    }
    .pagingList{
      margin-top: 18px;
    }
  }
`
const ContentLine = styled.div`
  width: 100%;
  padding: 16px 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--boxColor2);
  .secondBox{
    justify-content: flex-end;
  }
  @media screen and (max-width:769px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
    .secondBox{
      justify-content: flex-start;
    }
  }
`
const ContentLineBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .title{
        display:flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
        color: var(--title);
        letter-spacing: -.7px;
        span {
            font-size: 16px;
            color: var(--sub);
            fill:  var(--title);
            letter-spacing: -.35px;
        }
    }
    .link {
        font-size: 16px;
        color: var(--sub);
        text-decoration: underline;
        cursor: pointer;
    }
    .svg-box{
        position: relative;
        display: flex;
        align-items: center;
        gap: 4px;
        margin-left: 14px;
        svg{
          width: 28px;
          height: 28px;
        }
        .copyOutline{
          color: var(--title);
        }
        .AddCircleOutline{
          color: var(--point);
        }
    }
    @media screen and (max-width:768px) {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        .title{
            position: absolute;
            top: 0;
            left: 80px;
        }
        .svg-box{
            position: absolute;
            right: 0;
        }
      
    }
    @media screen and (max-width:500px) {
        .title{
            position: absolute;
            top: 4px;
            font-size: 16px;
            left: 72px;
        }
        .link{
            font-size: 12px;
        }
        svg{
            width: 26px;
        }
    }
`
const ContentImg = styled.div`
  width: 60px;
  height: 80px;
  border-radius: 6px;
  overflow: hidden;
  margin-right: 16px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const BottomBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 36px;
  button {
    padding: 8.5px 48px;
    font-size: 22px;
    color: white;
    background-color: #7D7D7D;
    font-weight: 500;
    border-radius: 28px;
    border: none;
    outline: none;
    cursor: pointer;
  }
  @media screen and (max-width:1024px) {
    button{
      padding: 6.5px 28px;
      font-size: 20px;
    }
  }
  @media screen and (max-width:500px) {
    button{
      padding: 5.5px 18px;
      font-size: 16px;
    }
  }
  @media screen and (max-width:390px) {
    button{
      padding: 4px 12px;
      font-size: 14px;
    }
  }
`