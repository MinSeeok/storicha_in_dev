import * as React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { isPointThemeAtom } from 'recoil/theme';
import Image from 'next/image';
import ProfileImage from '../../assets/images/img1.daumcdn.jpg';
import Logo from '../../assets/icon/appstore-anticon.svg';
import LogoSS from '../../assets/icon/ssymbol.svg';
import userImage from '../../assets/images/IMG_1835.jpg';
import { LoginState } from 'recoil/user';

const Navigation = () => {
    const isPointTheme = useRecoilValue(isPointThemeAtom);
    const [claim, setClaim] = React.useState<boolean>(false);
    const [more, setMore] = React.useState<boolean>(false);
    const login = useRecoilValue(LoginState);
    const [leftView, setLeftView] = React.useState<boolean>(true);
    const [topMore, setTopMore] = React.useState<boolean>(false);
    return(
        <>
            <TopContainer>
                <div className="left">
                    <div className="logo">
                        <Image
                            src={Logo}
                            layout="fill"
                            objectFit="cover"
                            alt="logo"
                            onClick={()=> setLeftView(e => !e)}
                        />
                    </div>
                    <div className="logo-two">
                        <Image
                            src={LogoSS}
                            layout="fill"
                            objectFit="cover"
                            alt="logo"
                        />
                    </div>
                    <span className="title">IP Manager</span>
                    <div className="search">
                        <input type="text" placeholder="search.."/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                </div>
                <div className="right">
                    {/* {login ? (
                        <div className="right-container">
                            <div className="image">
                                <Image
                                    src={userImage}
                                    layout="fill"
                                    objectFit="cover"
                                    alt='user'
                                />
                            </div>
                            <span onClick={()=> setTopMore(e => !e)}>
                                {login.data && login.data.response_data[0].email}
                                <svg className="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                            <div className="right-more" style={topMore ? {maxHeight: '100vh'} : {maxHeight: '0px'}}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    나의 프로필
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                                    </svg>
                                    나의 캐시 지갑
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5l.415-.207a.75.75 0 011.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 005.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    캐시 충전
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                    </svg>
                                    롤체인지
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    설정
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                    부가 정보
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className="login">로그인</p>
                    )} */}
                </div>
            </TopContainer>
            <Container color={isPointTheme} style={leftView ? {left: '0px'} : {left: '-300px'}}>
                <ProfileBox 
                    color={isPointTheme}
                >
                    <div>
                        <div className='back'/>
                        <div className='profileImage'>
                            <Image
                                width={'50px'}
                                height={'50px'}
                                src={ProfileImage}
                            />
                        </div>
                        <h4><b>BONGS LEE</b><br/>ADMIN</h4>
                    </div>
                </ProfileBox>
                <MenuBox color={isPointTheme}>
                    <div className='wrapper no-sub'>
                        <div className='background'/>
                        <div className='box'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                            </svg>
                            <p className='head'>나의 저작재산권</p>
                        </div>
                    </div>
                    <div className='wrapper' id='issuance-of-copyright'>
                        <div className='background'/>
                        <div className='box'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            <p className='head'>저작재산권 발행</p>
                        </div>
                        <div className='sub-text'>
                            <p>NFT 기반 IP를 발행 하세요</p>
                        </div>
                    </div>
                    <div className='wrapper'>
                        <div className='background'/>
                        <div className='box'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                            </svg>
                            <p className='head'>발행된 저작재산권</p>
                        </div>
                        <div className='sub-text'>
                            <p>발행된 NFT를 확인, 계약, 기능 실행</p>
                        </div>
                    </div>
                    <div className='wrapper'>
                        <div className='background'/>
                        <div className='box'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className='head'>공개된 저작재산권</p>
                        </div>
                        <div className='sub-text'>
                            <p>타인이 공개한 저작재산권을 확인햐세요</p>
                        </div>
                    </div>
                    <PlusMenu color={isPointTheme}>
                        <div 
                            className={`head ${claim ? 'focus' : ''}`} 
                            onClick={()=> setClaim(e => !e)}
                        >
                            <div className='background'/>
                            <p>권리관계</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <div className='content-box' style={claim ? {maxHeight: '100vh'} : {}}>
                            <div className='content'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                                </svg>
                                <p>촌수관리</p>
                            </div>
                            <div className='content'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p>재산권</p>
                            </div>
                            <div className='content'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p>전시권</p>
                            </div>
                            <div className='content'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p>공연권</p>
                            </div>
                            <div className='content'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p>공중 송신권</p>
                            </div>
                            <div className='content'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p>2차적 저작물 작성권</p>
                            </div>
                            <div className='content'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p>라이센스</p>
                            </div>
                        </div>
                        <div 
                            className={`head ${more ? 'focus' : ''}`} 
                            onClick={()=> setMore(e => !e)}
                            style={{marginTop: '24px'}}
                        >
                            <div className='background'/>
                            <p>More</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <div className='content-box' style={more ? {maxHeight: '100vh'} : {}}>
                            <div className='content'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                                </svg>
                                <p>스토리체인 홈</p>
                            </div>
                            <div className='content'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                </svg>
                                <p>시리즈</p>
                            </div>
                        </div>
                    </PlusMenu>
                </MenuBox>
            </Container>
        </>
    )
}

const TopContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 52px;
    padding: 8px 8px 8px 24px;
    background-color: #000000;
    z-index: 999999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left, .right{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }
    .left {
        justify-content: flex-start;
    }
    .right {
        justify-content: flex-end;
        padding-right: 20px;
        .right-container{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            cursor: pointer;
            .image{
                width: 32px;
                height: 32px;
                border-radius: 50%;
                overflow: hidden;
            }
            span{
                margin-left: 8px;
                font-size: 16px;
                color: #FFFFFF;
                font-weight: 300;
                display: flex;
                align-items: center;
            }
            svg.arrow{
                width: 22px;
                height: 22px;
                color: #FFFFFF;
                margin-left: 4px;
                margin-top: 2px;
            }
        }
        .right-more{
            position: absolute;
            width: calc(100% + 8px);
            top: calc(100% + 8px);
            right: -4px;
            background-color: var(--boxColor);
            border-radius: 8px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            overflow: hidden;
            transition: all .2s ease-in-out;
            div{
                color: var(--title);
                font-size: 16px;
                padding: 11.5px 16px;
                transition: all .1s ease-in-out;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 4px;
                svg{
                    width: 22px;
                    height: 22px;
                }
                :hover{
                    color: var(--point);
                }
            }
        }
    }
    .logo{
        position: absolute;
        top: 50%;
        left: 0px;
        width: 34px;
        height: 34px;
        transform: translateY(calc(-50% + 3px));
        cursor: pointer;
    }
    .logo-two{
        position: absolute;
        top: 50%;
        left: 40px;
        width: 28px;
        height: 28px;
        transform: translateY(calc(-50%));
        pointer-events: none;
    }
    .title{
        margin-left: 74px;
        color: #FFFFFF;
        font-size: 24px;
        font-weight: bold;
    }
    .search{
        width: 300px;
        height: 34px;
        margin-left: 12px;
        input{
            width: 100%;
            height: 100%;
            padding: 0px 28px 0 20px;
            font-size: 16px;
            border-radius: 28px;
        }
        svg{
            position: absolute;
            right: 12px;
            width: 22px;
            height: 22px;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    p.login {
        background-color: #FFFFFF;
        font-size: 16px;
        font-weight: bold;
        padding: 6px 14px;
        border-radius: 18px;
        transition: all .15s ease-in-out;
        cursor: pointer;
        :hover{
            background-color: #dedede;
        }
    }
`

const Container = styled.div`
    position: fixed;
    left: 0;
    width: 280px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    z-index: 999999;
    color: var(--title);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-color: var(--box1);
    padding: 24px 0;
    transition: all .2s ease-in-out;
    @media (max-width: 1280px) {
        display: none;
    }
    .logoHead{
        width: 100%;
        padding: 30px 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 12px;
        h1 {
            font-size: 26px;
            color: var(--title);
            font-family: 'NanumBarunGothic';
        }
    }
`

const ProfileBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    div{
        width: 100%;
        height: 80px;
        border-radius: 8.5px;
        padding: 0 14px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;
        div.back{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: all .15s ease-in-out;
            background-color: var(--icon1);
            opacity: 0.1;
        }
        .profileImage{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 54px;
            height: 54px;
            border-radius: 50%;
            padding: 0;
            overflow: hidden;
            background-color: #ffffff;
            img{
                border-radius: 50%;
            }
        }
        h4{
            font-size: 14px;
            line-height: 18px;
            font-weight: 300;
            color: var(--textColor2);
            b{
                font-size: 16.5px;
                line-height: 20px;
                color: var(--textColor);
            }
        }
    }
`

const MenuBox = styled.div`
    width: 100%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    padding: 8px;
    .wrapper{
        top: 0;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 44px;
        :hover{
            .background{
                background-color: ${props=>props.color};
                opacity: 0.4;
            }
            .box{
                background-color: transparent;
                ::after{
                    transform: translateX(110%);
                }
                svg {
                    animation: shakeIcon 1s linear infinite;
                }
            }
            .sub-text{
                display: block;
            }
        }
        .box{
            position: absolute;
            top: 0;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 6px;
            padding: 12px;
            cursor: pointer;
            overflow: hidden;
            border-radius: 8px;
            
            svg{
                width: 22px;
                height: 22px;
            }
            .head{
                font-size: 16px;
            }
            ::after{
                content: '';
                position: absolute;
                left: 0;
                bottom: 1px;
                width: 100%;
                height: 2px;
                background-color: ${props=>props.color};
                transition: all .5s ease-in-out;
                transform: translateX(-110%);
            }
        }
        .background{
            position: absolute;
            top: 0;
            width: 100%;
            height: 44px;
            transition: all .3s ease-in-out;
            border-radius: 8px;
            background-color: var(--box1);
        }
        .sub-text{
            position: absolute;
            right: 0;
            padding: 8px;
            background-color: ${props=>props.color};
            color: #FFFFFF;
            font-size: 15px;
            transform: translateX(calc(100% - 12px));
            border-radius: 6px;
            display: none;
            transition: all .15s ease-in-out;
            ::after{
                content: '';
                position: absolute;
                top: 8px;
                left: -4px;
                width: 8px;
                height: 8px;
                transform: rotate(45deg);
                background-color: ${props=>props.color};
                border-bottom-left-radius: 2px;
            }
        }
        @keyframes shakeIcon {
            0%{
                transform: rotate(-20deg);
            }
            12%{
                transform: rotate(0deg);
            }
            25%{
                transform: rotate(10deg);
            }
            38%{
                transform: rotate(0deg);
            }
            50%{
                transform: rotate(-10deg);
            }
            62%{
                transform: rotate(0deg);
            }
            70%{
                transform: rotate(20deg);
            }
            85%{
                transform: rotate(-10deg);
            }
            95%{
                transform: rotate(10deg);
            }
            100%{
                transform: rotate(0deg);
            }
        }
    }
`

const PlusMenu = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    .head {
        width: 100%;
        padding: 12px;
        border-radius: 8px;
        color: #FFFFFF;
        font-size: 18px;
        overflow: hidden;
        cursor: pointer;
        .background{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: ${props => props.color};
            opacity: 0.825;
            transition: all .15s ease-in-out;
        }
        svg{
            position: absolute;
            top: 50%;
            right: 12px;
            color: #FFFFFF;
            width: 20px;
            height: 20px;
            transform: translateY(-50%);
            transition: all .15s ease-in-out;
        }
        &.focus{
            .background{
                opacity: 1;
            }
            svg{
                transform: translateY(-50%) rotate(180deg);
            }
        }
        :hover{
            .background{
                opacity: 1;
            }
        }
    }
    .content-box{
        width: 100%;
        margin-top: 12px;
        max-height: 0px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 4px;
        transition: all .3s ease-in-out;
        .content{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            gap: 8px;
            padding: 8px 12px;
            font-size: 18px;
            color: var(--textColor2);
            cursor: pointer;
            transition: all .15s ease-in-out;
            svg{
                width: 18px;
                height: 18px;
            }
            :hover{
                color: var(--title);
            }
        }
    }
`

export default Navigation;