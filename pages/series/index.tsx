import * as React from 'react';
import styled from 'styled-components';
import "aos/dist/aos.css";
import UseToriCash from 'components/popup/use-tori-cash';
import axios from 'axios';
import { EpisodeType } from 'enum/data-type';
import { useRouter } from 'next/router'
import moment from 'moment';

export default function Series({routerIdx}:any) {
    const tabTitle = ["대여하기 1TC", "소장하기 2TC", "NFT IP 구매"];
    const ListSort = ["인기순", "업데이트순", "조회순", "별점순"];
    const [tabState, setTabState] = React.useState<number>(0);
    const [listOn, setListOn] = React.useState<boolean>(false);
    const [sort, setSort] = React.useState<string>("업데이트순");
    const [moreView, setMoreview] = React.useState<boolean>(false);
    const slideRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
    const [otherState, setOtherState] = React.useState<any>(0);
    const [hideReceipt, setHideReceipt] = React.useState<boolean>(false);
    const [mark, setMark] = React.useState(false);

    const router = useRouter();
    // 에피소드 정보
    const [episode, setEpisode] = React.useState<EpisodeType[] | null>(null);

    // 결제 모달 보기
    const [paymentWindow, setPaymentWindow] = React.useState<boolean>(false);

    const OtherMoveLeft = () => {
        if ((-(otherData.length - 1) * 170) !== otherState) {
            slideRef.current.style.transform = `translateX(${otherState - 170}px)`;
            setOtherState(otherState - 170);
        }
    }
    const OtherMoveRight = () => {
        if (otherState !== 0) {
        slideRef.current.style.transform = `translateX(${otherState + 170}px)`;
        setOtherState(otherState + 170);
        }
    }
    // 체크 아이템 배열
    const [checkItems, setCheckItems] = React.useState<Array<number>>([]);
    // 체크박스 전체 선택
    const handleAllCheck = (checked: boolean) => {
        if (checked) {
            const idArray: any = [];
            data.forEach((el) => idArray.push(el.idx));
            setCheckItems(idArray);
        } else {
            setCheckItems([]);
        }
    }
    // 체크박스 단일 선택
    const handleSingleCheck = (checked: any, idx: any) => {
        if (checked) {
        // 단일 선택 시 체크된 아이템을 배열에 추가
        setCheckItems([...checkItems, idx]);
        } else {
        // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
        setCheckItems(checkItems.filter((el) => el !== idx));
        }
    };
    const SortSelect = (content: string) => {
        setListOn((e) => !e);
        setSort(content);
    }
    const data = [
        { idx: "e1894d49-8483-4dcf-8436-aefb3449f9ce", episode: 1, title: "어느 겨울, 운명의 밤", score: 4.8, date: "22.06.22", free: true },
        { idx: "189bccc4-1845-45b0-a596-6b12e4786b4d", episode: 2, title: "개막의 시각", score: 4.8, date: "22.06.22", free: true },
        { idx: "710d58f5-948f-414f-9775-ba27be29399a", episode: 3, title: "전의의 소재", score: 4.8, date: "22.06.22", free: false },
        { idx: "74a3edf5-13db-43ed-8210-74c5393c054c", episode: 4, title: "방과 후에 추는 춤", score: 4.8, date: "22.06.22", free: false },
        { idx: "e9d9e6b7-66ff-46e2-81c8-a2bdc73afd24", episode: 5, title: "어느 겨울날, 마음이 머무는 곳", score: 4.8, date: "22.06.22", free: false },
        { idx: "f1f426cb-32af-4d49-96d4-c72e352dedd3", episode: 6, title: "두 사람의 거리", score: 4.8, date: "22.06.22", free: false },
        { idx: "b1ce70a8-986e-4ea4-b883-2f5d8a0a0ca5", episode: 7, title: "살며시 다가온 방문자", score: 4.8, date: "22.06.22", free: false },
        { idx: "c680891e-2c65-4287-944a-595f5c5617d8", episode: 8, title: "어느 겨울날, 소원의 형태", score: 4.8, date: "22.06.22", free: false },
        { idx: "6539a18a-5705-4f64-bb39-06925c9f63c4", episode: 9, title: "그 운명의 시작으로", score: 4.8, date: "22.06.22", free: false },
        { idx: "4f310282-584f-4718-92ce-f3f56cf3eee0", episode: 10, title: "어느 겨울 날, 머나먼 귀로", score: 4.8, date: "22.06.22", free: false },
    ]
    const otherData = [
        { image: "09a7e223ee6ee40139b06ce506270868ac257d27.gif", title: "천재 뱀파이어 1", genre: "판타지, 멜로" },
        { image: "09a7e223ee6ee40139b06ce506270868ac257d27.gif", title: "천재 뱀파이어 2", genre: "판타지, 멜로" },
        { image: "09a7e223ee6ee40139b06ce506270868ac257d27.gif", title: "천재 뱀파이어 3", genre: "판타지, 멜로" },
        { image: "09a7e223ee6ee40139b06ce506270868ac257d27.gif", title: "천재 뱀파이어 4", genre: "판타지, 멜로" },
        { image: "09a7e223ee6ee40139b06ce506270868ac257d27.gif", title: "천재 뱀파이어 5", genre: "판타지, 멜로" },
        { image: "09a7e223ee6ee40139b06ce506270868ac257d27.gif", title: "천재 뱀파이어 6", genre: "판타지, 멜로" },
        { image: "09a7e223ee6ee40139b06ce506270868ac257d27.gif", title: "천재 뱀파이어 7", genre: "판타지, 멜로" },
        { image: "09a7e223ee6ee40139b06ce506270868ac257d27.gif", title: "천재 뱀파이어 8", genre: "판타지, 멜로" },
        { image: "09a7e223ee6ee40139b06ce506270868ac257d27.gif", title: "천재 뱀파이어 9", genre: "판타지, 멜로" },
        { image: "09a7e223ee6ee40139b06ce506270868ac257d27.gif", title: "천재 뱀파이어 10", genre: "판타지, 멜로" },
    ]
    const listBoxRef = React.useRef<Array<HTMLDivElement | null>>([]);
    const handleClickOutside = () => {
        !listBoxRef.current[0] && setListOn(false);
    }

    // bookmark-check
    const markCheck = () => {
      mark ? alert("북마크 해제되었습니다") : alert("북마크 되었습니다");
      setMark((e) => !e);
    }

    // view-modal
    const viewModal = () => {
      setPaymentWindow(false);
    }
    // get-series-episode
    const getSeriseData = (idx:any) => {
        axios({
            method: 'GET',
            url: `https://api-v2.storicha.in/api/cashseries/episode?series_idx=${idx}&page_no=1`,
            headers: {
                "Content-Type": "multipart/form-data"
            },
            withCredentials: true,
        })
        .then((response):any => {
            setEpisode(response.data.response_data);
        })
    }
    // page router info
    React.useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        // get Idx
        const idx = router.asPath.substring(router.asPath.indexOf('idx=')+4);
        getSeriseData(idx);
    }, []);
    return (
        <Container>
            <TopupBox>
                <p>양과 여우들의 밤</p>
            </TopupBox>
            <Box>
            <Left>
                <TitleImg>
                  <img src="/images/test/4beab4b1b4486f76581b8b75d8041717a030eff8.gif" alt="" />
                  <div className='mobileHead'>
                      <p className='mobileTitle'>양과 여우들의 밤</p>
                      <p className='moblieSubTitle'>
                      <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                          4.3
                      </span>
                      <span className='moblieMarkIcon'>
                          {mark ?
                              <svg xmlns="http://www.w3.org/2000/svg" onClick={markCheck} viewBox="0 0 24 24" fill="currentColor" className="bookMark">
                                  <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                              </svg> 
                              :
                              <svg xmlns="http://www.w3.org/2000/svg" onClick={markCheck} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bookMark">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                              </svg>
                          }
                          10,262
                      </span>
                      </p>
                  </div>
                </TitleImg>
                <SubBox onClick={()=> console.log(episode)}>
                    <p className='firstEpisode'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                        첫화 보기
                    </p>
                </SubBox>
                <TitleHead>줄거리</TitleHead>
                <TitleSubText>「패왕을 보았다」의 작가 추공. 이번에는 레이드의 진수를 보여준다! 『나 혼자만 레벨업』 재능 없는 만년 E급의 헌터, 성진우. 기이한 던전에서 죽음을 목전에 두지만 위기는 언제나 기회와 함께 찾아오는 법! [플레이어가 되실 자격을 획득하셨습니다.] “플레이어? 내가 레벨업을 할 수 있다고?” 전 세계 헌터 중 유일무이, 전무후무 시스템과 레벨업 능력을 각성한 진우. 세상을 향해 자유를 선포한다!</TitleSubText>
                <SubBox style={{ paddingTop: "176px" }}>
                    <WriterImg>
                        <img src="/images/test/4beab4b1b4486f76581b8b75d8041717a030eff8.gif" alt="" />
                    </WriterImg>
                    <WriteInfo>
                        <p className='title'>Richard Ottemant</p>
                        <p className='tag'>@Illustrator</p>
                        <WriteFollow>Follow</WriteFollow>
                        <WriteSupport>Staking Support</WriteSupport>
                    </WriteInfo>
                </SubBox>
                <SubBox style={{ flexDirection: "column" }}>
                <p className='publicTitle'>작가의 공지</p>
                <p className='public'>이전 주 연재가 조금 늦었습니다.<br />많은 양해 바랍니다.</p>
                </SubBox>
            </Left>
            <Right>
                <BookMark>
                    {mark ?
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={markCheck} viewBox="0 0 24 24" fill="currentColor" className="bookMark">
                            <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                        </svg> 
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={markCheck} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bookMark">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                    }
                    북마크하기
                </BookMark>
                <InfoBox>
                <div>
                    <p>장르</p>
                    <p>액션, 판타지</p>
                </div>
                <div>
                    <p>에피소드</p>
                    <p>148</p>
                </div>
                <div>
                    <p>포멧라벨</p>
                    <p>웹소설, 시나리오, 드라마대본</p>
                </div>
                </InfoBox>
                <MoblieStory>
                <p>「패왕을 보았다」의 작가 추공. 이번에는 레이드의 진수를 보여준다! 『나 혼자만 레벨업』 재능 없는 만년 E급의 헌터, 성진우. 기이한 던전에서 죽음을 목전에 두지만 위기는 언제나 기회와 함께 찾아오는 법! [플레이어가 되실 자격을 획득하셨습니다.] “플레이어? 내가 레벨업을 할 수 있다고?” 전 세계 헌터 중 유일무이, 전무후무 시스템과 레벨업 능력을 각성한 진우. 세상을 향해 자유를 선포한다!</p>
                </MoblieStory>
                <MobileFirstView>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                        첫화보기
                    </button>
                </MobileFirstView>
                <SelectTab>
                    {tabTitle.map((title, i) => (
                        <p key={i} className={tabState === Number(i) ? "tabChoice" : ""} onClick={() => setTabState(i)}>{title}</p>
                    ))}
                </SelectTab>
                <ListTop>
                    <label htmlFor="allSelect">
                        <div className='checkbox'>
                          {checkItems.length === data.length ? 
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                          : 
                              "" 
                          }
                        </div>
                        <input
                            id='allSelect'
                            type="checkbox"
                            onChange={(e) => handleAllCheck(e.target.checked)}
                            checked={checkItems.length === data.length ? true : false}
                        />
                        전체선택
                    </label>
                    <p className='sortList' onClick={() => setListOn((e) => !e)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                        </svg>
                        <span>{sort}</span>
                    </p>
                    <SortBox className={listOn ? "sortListView" : ""} ref={el => (listBoxRef.current[0] = el)}>
                        {listOn &&
                            ListSort.map((content, i) => (
                                <p className='sortValue' key={i} onClick={() => {
                                SortSelect(content);
                                }}>{content}</p>
                            ))
                        }
                    </SortBox>
                </ListTop>
                <ContentBox className={moreView ? "moreView" : ""}>
                    {(episode !== null && episode.length > 0) ? episode.map((content, i) => (
                        <ContentLine key={i}>
                            <label htmlFor={`selectBox${i}`}>
                                <div className='checkbox'>
                                    {checkItems.includes(content.event_idx) ? 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    : 
                                        "" 
                                    }
                                </div>
                            </label>
                            <input
                                id={`selectBox${i}`}
                                type="checkbox"
                                onChange={(e) => handleSingleCheck(e.target.checked, content.event_idx)}
                                checked={checkItems.includes(content.event_idx) ? true : false}
                            />
                            <ContentImageBox>
                                <img src="/images/test/4beab4b1b4486f76581b8b75d8041717a030eff8.gif" alt="" />
                            </ContentImageBox>
                            <ContentTextLine className='mobileBoxCon'>
                                <p className='ep'><b>EP</b>{content.sort_order}</p>
                                <p className='epTitle'>{content.supply_name.length < 10 ? content.supply_name : content.supply_name}</p>
                                <p className='scoreDate'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                </svg>
                                {'4.8'}&nbsp;&nbsp;&nbsp;&nbsp;{moment(content.create_date).format('YYYY-MM-DD')}
                                </p>
                                <button
                                  className={content.keep_price === 0 ? "freeBtn" : ""}
                                  onClick={() => console.log(checkItems)}
                                >
                                    {content.keep_price === 0 ? "무료보기" :
                                        tabState === 0 ? `대여하기 ${content.rental_price}TC` : `소장하기 ${content.keep_price}TC`
                                    }
                                </button>
                            </ContentTextLine>
                        </ContentLine>
                    )) : (
                      <h1>데이터가 존재하지 않습니다.</h1>
                    )}
                </ContentBox>
                <MoreViewBtn
                    className={moreView ? "moreViewHide" : ""}
                    onClick={() => setMoreview((e) => !e)}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    더보기
                </MoreViewBtn>
            </Right>
            <OtherBox>
                <p className='title' onClick={() => console.log(otherState)}>이 작가의 다른 작품 보기</p>
                <OtherContentBox>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={OtherMoveLeft} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mr-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={OtherMoveRight} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <OtherLine>
                        <OtherWrapper className='slideRef' ref={slideRef} style={listStyled}>
                        {otherData.map((content, i) => (
                            <OtherContent key={i}>
                            <OtherImage>
                                <img src={`/images/test/${content.image}`} alt="" />
                            </OtherImage>
                            <OtherTitle>{content.title.length < 10 ? content.title : content.title.slice(0, 10) + "..."}</OtherTitle>
                            <OtherGenre>{content.genre}</OtherGenre>
                            </OtherContent>
                        ))}
                        </OtherWrapper>
                    </OtherLine>
                </OtherContentBox>
                <ListBackBtn>
                <button><img src="/images/icons/backListBtn.svg" alt="" /> 목록으로</button>
                </ListBackBtn>
            </OtherBox>
            </Box>
            <ResultBox
                className={checkItems[0] ?
                    hideReceipt ? "hideShowResult" : "" : "showResult"
                }
                >
                <div className='top'>
                    <p>총 주문 금액</p>
                    <p>{checkItems.length * 3} TC</p>
                    <p>총 {checkItems.length}건</p>
                </div>
                <button onClick={()=> setPaymentWindow(true)}>선택 구매</button>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={()=> setHideReceipt((e) => !e)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="menuOutline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </ResultBox>
            {paymentWindow && (
              <UseToriCash item={checkItems} viewModal={viewModal}/>
            )}
        </Container>
    )
}

const Container = styled.div`
    padding: 0px 20px 30px 20px;
    max-width: 1500px;
    min-width: 1024px;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    z-index: 5;
    color: var(--title);
    @media screen and (max-width: 1000px) {
        min-width: 400px;
        padding: 0px 0px 30px 0px;
        gap: 0;
    }
`
const TopupBox = styled.div`
    width: 100%;
    padding: 24px 0;
    font-family: 'NEXON Lv1 Gothic OTF';
    background-color: var(--box1);
    border-radius: 8px;
    p{
        text-align: center;
        color: var(--title);
        font-size: 24px;
        font-weight: bold;
    }
    @media screen and (max-width: 1000px) {
        display: none;
    }
`
const Box = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    padding: 20px 30px 370px 350px;
    background-color: var(--box1);
    border-radius: 8px;
    @media screen and (max-width: 1000px) {
        width: 100%;
        flex-direction: column;
        justify-content: center;
        border-radius: 0px;
        padding: 0;
    }
    @media screen and (max-width: 500px) {
        padding: 0px;
    }
`

const Left = styled.div`
    position: absolute;
    left: 30px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1000px) {
        position: relative;
        width: 100%;
        left: 0;
    }
`

const TitleImg = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 8px;
    img{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .mobileHead{
        display: none;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: transparent;
        background-image: linear-gradient(
            180deg, 
            transparent 0%, 
            var(--box1) 100%
        );
        p{
            left: 20px;
        }
        .mobileTitle{
            position: absolute;
            bottom: 50px;
            font-size: 36px;
            letter-spacing: -.8px;
        }
        .moblieSubTitle{
            position: absolute;
            bottom: 12px;
            font-size: 24px;
            display: flex;
            gap: 16px;
            span{
                display: flex;
                align-items: center;
            }
            svg{
                width: 20px;
                height: 20px;
                color: var(--point);
                cursor: pointer;
            }
        }
    }
  @media screen and (max-width: 1000px) {
    border-radius: 0;
    height: 540px;
    .mobileHead{
      display: flex;
    }
  }
`

const SubBox = styled.div`
    width: 100%;
    padding: 9.5px 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 18px;
    color: var(--title);
    background-color: var(--box2);
    border-radius: 9px;
    .firstEpisode{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        svg{
            color: var(--title);
            margin-right: 6px;
        }
    }
    .publicTitle{
        width: 100%;
        text-align: left;
        font-size: 18px;
        margin-top: 12px;
    }
    .public{
        width: 100%;
        text-align: left;
        font-size: 16px;
        margin-top: 12px;
        color: #6C6C6C;
        line-height: 22px;
    }
    @media screen and (max-width: 1000px) {
        display: none;
    }
`
const TitleHead = styled.p`
  width: 100%;
  margin-top: 32px;
  font-size: 18px;
  font-weight: bold;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`
const TitleSubText = styled.p`
  width: 100%;
  font-size: 16px;
  margin-top: 18px;
  line-height: 26px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`

const WriterImg = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 64px;
  height: 64px;
  border-radius: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const WriteInfo = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: calc(100% - 130px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  .title{
    font-size: 16px;
    font-weight: bold;
  }
  .tag{
    margin-top: 8px;
    color: var(--sub);
  }
`

const WriteFollow = styled.button`
  width: 100%;
  border-radius: 28px;
  border: 2px solid var(--point);
  color: var(--point);
  padding: 6.5px 0;
  font-size: 16px;
  margin-top: 24px;
  background-color: transparent;
  cursor: pointer;
`
const WriteSupport = styled.button`
  width: 100%;
  border-radius: 28px;
  border: 2px solid var(--point);
  color: white;
  padding: 6.5px 0;
  font-size: 16px;
  margin-top: 12px;
  background-color: var(--point);
  cursor: pointer;
`
const Right = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .moreView{
    height: auto;
  }
  .moreViewHide{
    display: none;
  }
`
const BookMark = styled.p`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  padding-right: 12px;
  padding-bottom: 6px;
  border-bottom: 2px solid var(--box2);
  font-size: 18px;
  font-weight: bold;
  color: var(--title);
  cursor: pointer;
  svg{
      width: 24px;
      height: 24px;
      color: var(--point);
      margin-right: 4px;
  }
  @media screen and (max-width: 1000px) {
      display: none;
  }
`
const InfoBox = styled.div`
  width: 100%;
  padding: 20px 0;
  margin-top: 18px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--box2);
  border-radius: 6px;
  div{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;

  }
  div :nth-child(1){
    font-size: 18px;
    color: var(--sub);
  }
  div :nth-child(2){
    font-size: 16px;
  }
  @media screen and (max-width: 1000px) {
    margin-top: 8px;
    width: calc(100% - 24px);
    padding: 20px;
  }
  @media screen and (max-width: 500px) {
    padding: 12px;
  }
`
const MoblieStory = styled.div`
  width: calc(100% - 32px);
  display: none;
  p{
    width: 100%;
    color: var(--title);
    font-size: 20px;
    margin-top: 12px;
    line-height: 26px;
  }
  @media screen and (max-width: 1000px) {
    display: flex;
  }
`
const MobileFirstView = styled.div`
    display: none;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 36px;
    button{
        width: 400px;
        background-color: var(--box2);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8.5px 0;
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 28px;
        svg{
            color: var(--title);
            margin-right: 8px;
        }
        color: var(--title);
        font-size: 20px;
    }
    @media screen and (max-width: 1000px) {
        display: flex;
    }
`
const SelectTab = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    p{
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px 0;
        border-bottom: 3px solid transparent;
        font-size: 20px;
        font-weight: bold;
        color: var(--title);
        cursor: pointer;
        letter-spacing: -.2px;
        word-spacing: -1px;
    }
    .tabChoice{
        border-bottom: 3px solid var(--point);
        font-size: 22px;
    }
    @media screen and (max-width: 1000px) {
        margin-top: 14px;
        p{
            font-size: 16px;
        }
    }
`
const ListTop = styled.div`
    width: 100%;
    padding: 4.5px 0;
    background-color: var(--box2);
    margin-top: 18px;
    border-radius: 6px;
    #allSelect{
        display: none;
    }
    label{
        left: 12px;
        width: 200px;
        font-size: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
        @media screen and (max-width: 500px) {
            font-size: 18px;
            padding-left: 4px;
        }
        svg{
            margin-right: 6px;
        }
    }
    .ckbox{
        width: 32px;
        height: 32px;
        color: var(--unchecked);
    }
    .checkbox{
      width: 24px;
      height: 24px;
      margin-right: 8px;
      border: 2px solid var(--unchecked);
      border-radius: 4px;
      svg {
        color: var(--unchecked);
      }
    }
    .sortList{
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 18px;
        svg {
            color: var(--title);
            margin-right: 4px;
            @media screen and (max-width: 500px) {
              width: 20px;
              margin-right: 2px;
            }
        }
        span {
            @media screen and (max-width: 500px) {
              font-size: 16px;
            }
        }
    }
    @media screen and (max-width: 1024px) {
      width: calc(100% - 12px);
      padding: 6px 0;
    }
`
const SortBox = styled.div`
  position: absolute;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: var(--box2);
  color: var(--title);
  border-radius: 6px;
  z-index: 999999;
  p{
    padding: 14.5px 18px;
    cursor: pointer;
    transition: all .1s ease-in-out;
  }
  p:hover{
    color: var(--pink);
  }
  &.sortListView{
    border: 2px solid var(--title);
  }
`
const ContentBox = styled.div`
  width: 100%;
  height: 888px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  div{
    border-bottom: 2px solid var(--box2);
  }
  div:last-child{
    border: none;
  }
  @media screen and (max-width: 1000px) {
    height: auto;
    div{
      border-bottom: 1.4px solid var(--sub);
    }
  }
  @media screen and (max-width: 500px) {
    .mobileBoxCon{
      width: calc(100% - 100px);
    }
  }
`
const ContentLine = styled.div`
    width: 100%;
    height: 222px;
    padding: 20px 0 20px 54px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    input[type="checkbox"]{
      display: none;
    }
    label{
        position: absolute;
        left: 4px;
        width: 32px;
        height: 100%;
        .checkbox{
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            width: 24px;
            height: 24px;
            color: var(--unchecked);
            border: 2px solid var(--unchecked);
            border-radius: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            svg{
              margin: 0;
            }
        }
    }
    @media screen and (max-width: 500px) {
      height: 160px;
      padding: 12px 0 12px 54px;
    }
`
const ContentTextLine = styled.div`
  width: calc(100% - 140px);
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  .ep{
    font-size: 22px;
    color: var(--placeholder);
    b{
      color: var(--placeholder);
      font-weight: bold;
      margin-right: 4px;
    }
    @media screen and (max-width: 1000px) {
      position: relative;
      left: auto;
      top: auto;
      margin-left: 12px;
    }
    @media screen and (max-width: 500px) {
      font-size: 18px;
    }
  }
  .epTitle{
    font-size: 24px;
    font-weight: bold;
    line-height: 24px;
    margin-top: 8px;
    @media screen and (max-width: 1000px) {
      position: relative;
      left: auto;
      top: auto;
      margin-left: 12px;
    }
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
    @media screen and (max-width: 500px) {
      margin-top: 4px;
      font-size: 16px;
    }
  }
  .scoreDate{
    position: absolute;
    bottom: 0;
    font-size: 20px;
    display: flex;
    align-items: center;
    color: var(--sub);
    svg {
      color: var(--title);
      fill: var(--sub);
      margin-right: 4px;
    }
    @media screen and (max-width: 1000px) {
      position: relative;
      left: auto;
      bottom: auto;
      margin-left: 12px;
      margin-top: 8px;
    }
    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
    @media screen and (max-width: 500px) {
      margin-top: 0px;
      font-size: 14px;
    }
  }
  button{
    position: absolute;
    padding: 5px 24px;
    right: 8px;
    bottom: 0px;
    border-radius: 28px;
    outline: none;
    font-size: 16px;
    /* font-weight: bold; */
    width: 170px;
    border: 2px solid var(--box2);
    background-color: var(--box2);
    color: var(--title);
    cursor: pointer;
    transition: all .15s ease-in-out;
    @media screen and (max-width: 500px) {
      padding: 4px 14px;
      font-size: 14px;
    }
  }
  .freeBtn{
    border: 2px solid var(--point);
    background-color: var(--point);
    color: #FFFFFF;
    /* font-weight: bold; */
  }
  .freeBtn:hover{
    color: var(--point);
    background-color: transparent;

  }
`

const ContentImageBox = styled.div`
  width: 135px;
  height: 180px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 500px) {
    height: 140px;
    width: 104px;
  }
`

const MoreViewBtn = styled.div`
  width: 100%;
  height: 38px;
  background-color: var(--box2);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 36px;
  font-size: 18px;
  border-radius: 24px;
  z-index: 999;
  cursor: pointer;
  svg {
    color: var(--title);
    margin-right: 4px;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`
const ResultBox = styled.div`
    position: fixed;
    left: 0;
    bottom: 0px;
    padding: 24px 20px 22px 20px;
    background-color: var(--modalSlideBg);
    width: 100%;
    border: 2px solid var(--borderLine);
    border-bottom: none;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999 !important;
    transition: all .45s ease-in-out;
    .top{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        width: 100%;
        font-size: 22px;
        text-align: center;
      }
      p:nth-child(1){
        text-align: left;
      }
      p:nth-child(3){
        text-align: right;
      }
    }
    button{
      padding: 12px 150px;
      font-size: 22px;
      font-weight: bold;
      background-color: var(--point);
      border-radius: 28px;
      margin-top: 24px;
      border: none;
      outline: none;
      color: #FFFFFF;
      cursor: pointer;
      @media screen and (max-width: 500px) {
        width: 100%;
        padding: 12px 0;
      }
    }
    &::after{
        position: absolute;
        content: "";
        top: -40px;
        width: 200px;
        height: 40px;
        background-color: var(--modalSlideBg);
        border: 2px solid var(--borderLine);
        border-bottom: none;
        border-top-left-radius: 18px;
        border-top-right-radius: 18px;
        border-bottom: none;
        z-index: 999 !important;
        left: 50%;
        transform: translateX(-50%);
        @media screen and (max-width: 400px) {
            width: 100px;
            top: -30px;
            height: 30px;
        }
    }
    .menuOutline {
        position: absolute;
        top: -36px;
        left: 50%;
        transform: translateX(-50%);
        color: var(--sub);
        z-index: 99999;
        cursor: pointer;
        width: 28px;
        height: 28px;
        @media screen and (max-width: 400px) {
            top: -26px;
        }
    }
    &.showResult{
      bottom: -500px;
    }
    &.hideShowResult{
      bottom: -146px;
    }
    @media screen and (max-width: 1000px) {
      padding: 24px 20px;
      &.hideShowResult{
        bottom: -138px;
      }
      .menuOutline{
        bottom: 116px;
      }
      button{
        padding: 8px 120px;
        font-size: 20px;
      }
    }
`

const OtherBox = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 60px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    .title{
        font-size: 20px;
        font-weight: bold;
    }
    @media screen and (max-width: 1000px) {
        position: relative;
        margin-top: 54px;
        width: 100%;
        .title{
            font-size: 24px;
        }
    }
`
const OtherContentBox = styled.div`
  width: 100%;
  border-radius: 8px;
  height: 250px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  padding: 24px 78px;
  background-color: var(--box2);
  margin-top: 24px;
  overflow: hidden;
  svg{
    position: absolute;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    color: var(--title);
  }
  svg:nth-child(1){
    left: 18px;
  }
  svg:nth-child(2){
    right: 18px;
  }
  @media screen and (max-width: 1024px) {
    position: relative;
    margin-top: 16px;
    padding: 0;
    justify-content: center;
    flex-wrap: wrap;
    height: auto;
    border-radius: 0;
    background-color: var(--container);
    svg{
      display: none;
    }
  }
`
const OtherLine = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  height: auto;
  @media screen and (max-width: 1024px) {
    width: calc(100% - 16px);
    background-color: var(--box1);
  }
`
const OtherWrapper = styled.div`
  width: 999%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  transition: all .3s ease-in-out;
  row-gap: 8px;
  @media screen and (max-width: 1024px) {
    width: 100% !important;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow-y: hidden;
    height: auto !important;
    background-color: var(--box1);
  }
`
const listStyled = {
  width: "200%",
  height: "100%",
}

const OtherContent = styled.div`
  width: 152px;
  height: 100%;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  background-color: var(--box1);
  cursor: pointer;
  margin-right: 18px;
  @media screen and (max-width: 1000px) {
    width: calc(33% - 4px);
    margin-right: 0px;
    border-radius: 0;
    background-color: var(--box2);
  }
  @media screen and (max-width: 500px) {
    width: calc(50% - 4px);
  }
`
const OtherImage = styled.div`
  width: 100%;
  height: 135px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const OtherTitle = styled.p`
  width: 100%;
  padding-left: 12px;
  margin-top: 12px;
  font-size: 16px;
  @media screen and (max-width: 1000px) {
    font-size: 18px;
  }
`
const OtherGenre = styled.p`
  font-size: 14px;
  width: 100%;
  padding-left: 12px;
  padding-bottom: 12px;
  margin-top: 8px;
  @media screen and (max-width: 1000px) {
    font-size: 16px;
    margin-bottom: 12px;
  }
`
const ListBackBtn = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
        padding: 8px;
        img{
        margin-right: 12px;
        width: 20px;
        }
        font-size: 20px;
        border-radius: 28px;
        background-color: var(--box2);
        outline: none;
        border: none;
        color: var(--title);
    }
    @media screen and (max-width: 1000px) {
        margin-top: 18px;
    }
`