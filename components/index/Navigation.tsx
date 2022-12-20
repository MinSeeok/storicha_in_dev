import * as React from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isPointThemeAtom } from 'recoil/theme';
import Image from 'next/image';
import ProfileImage from '../../assets/images/img1.daumcdn.jpg';
import NoneUserIcon from '../../assets/images/icons8nouser96.png';
import Logo from '../../assets/icon/appstore-anticon.svg';
import LogoSS from '../../assets/icon/ssymbol.svg';
import userImage from '../../assets/images/IMG_1835.jpg';
import { LoginState } from 'recoil/user';
import LoginBox from './Login';
import axios from 'axios';
import { LoadingState } from 'recoil/loading';
import Router, { useRouter } from 'next/router';
import { LoginMadalState } from 'recoil/loginModal';
import { ThemeChangeState } from 'recoil/themeChange';
import { LoginMenuState } from 'recoil/loginMenu';

const Navigation = () => {
    const isPointTheme = useRecoilValue(isPointThemeAtom);
    const [myCopy, setMyCopy] = React.useState<boolean>(true);
    const [claim, setClaim] = React.useState<boolean>(false);
    const [more, setMore] = React.useState<boolean>(false);
    const login = useRecoilValue(LoginState);
    const [leftView, setLeftView] = React.useState<boolean>(false);

    const loginMenuState = useRecoilValue(LoginMenuState);
    const setLoginMenuState = useSetRecoilState(LoginMenuState);

    const [loginState, setLoginState] = React.useState<any | null>([]);

    const setLogin = useSetRecoilState(LoginState);
    const setLoadState = useSetRecoilState(LoadingState);

    // login-modal
    const loginModal = useRecoilValue(LoginMadalState);
    const setLoginModal = useSetRecoilState(LoginMadalState);

    const router = useRouter();
    // Enable idx presence
    const idx = router.asPath.substring(router.asPath.indexOf('idx=')+4);

    function useOutsideClick(ref: any, ){
        React.useEffect(()=>{
            function handleClickOutSide(event:any){
                if (((ref.current[0] && !ref.current[0].contains(event.target)) && ref.current[1] && !ref.current[1].contains(event.target))) {
                    if(window.innerWidth < 1280){
                        setLeftView(false);
                    }
                }
                setLoginMenuState(false);
            }
    
            // Bind the event listner
            document.addEventListener('mousedown', handleClickOutSide);
            return () => {
                // Unbind the event listner on clean up
                document.removeEventListener('mousedown', handleClickOutSide);
            };
        },[ref]);
    }

    let [windowWidth, setWindowWidth] = React.useState<number>(0);;
    const wrapperRef = React.useRef<any>([]);
    useOutsideClick(wrapperRef);

    const doLogout = () => {
        setLoadState(true);
        axios({
            method: 'GET',
            url: 'https://api-v2.storicha.in/api/User/Logout',
            withCredentials: true,
        })
        .then((response):any => {
            setLogin(null);
        }) 
        setLoadState(false);
    }
    React.useEffect(()=>{
        login === null ? setLoginState(false) : setLoginState(true);
        setLoginMenuState(false);
        setWindowWidth(window.innerWidth);
        if(window.innerWidth >= 1280){
            setLeftView(true);
        }
    },[]);
    React.useEffect(()=>{
        login === null ? setLoginState(false) : setLoginState(true);
        setLoginMenuState(false);
        if(window.innerWidth >= 1280){
            setLeftView(true);
        }
    },[login]);

    const routerPathChange = (path: string) => {
        setLoginMenuState(false);
        if(router.asPath.indexOf('/series') === 0){
            axios({
                method: 'POST',
                url: `https://api-v2.storicha.in/api/cash-popup/cancel`,
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                data: {
                    series_idx: idx,
                },
                withCredentials: true,
            }).then((response):any => {
                console.log(response);
                console.log('Post Cart End.');
            }).catch((error)=> {
                console.log(error);
            })
        }
        if(path === '/'){
            return Router.push(`/`);
        }
        Router.push(`/${path}`);
    }
    const setThemeState = useSetRecoilState(ThemeChangeState);

    const seeLoginMenuState = () => {
        setLoginMenuState(loginMenuState === 'true' ? false: true);
        if(windowWidth <= 1280){
            setLeftView(false);
        }
    }

    const seeTheme = () => {
        setThemeState(true);
        setLoginMenuState(false);
        if(windowWidth <= 1280){
            setLeftView(false);
        }
    }
    const seeNavigation = () => {
        setLeftView((e:any)=>!e);
        loginMenuState && setLoginMenuState(false);
    }
    return(
        <>
            {leftView && <DarkBox/>}
            <TopContainer ref={elem => (wrapperRef.current[0] = elem)}>
                <div className="left">
                    <div className="logo">
                        <Image
                            src={Logo}
                            layout="fill"
                            objectFit="cover"
                            alt="logo"
                            onClick={seeNavigation}
                        />
                    </div>
                    <div className="logo-two">
                        <Image
                            src={LogoSS}
                            layout="fill"
                            objectFit="cover"
                            alt="logo"
                            onClick={seeNavigation}
                        />
                    </div>
                    <div className="search">
                        <input type="text" placeholder={`search...${''}`}/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                </div>
                <div className="right">
                    {loginState === true ? (
                        <div className="right-container" onClick={seeLoginMenuState}>
                            <div className="image">
                                <Image
                                    src={userImage}
                                    layout="fill"
                                    objectFit="cover"
                                    alt='user'
                                />
                            </div>
                            <span className='email'>
                                {loginState !== null && login?.nick_name}
                                <svg className="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                            <div className="right-more" style={loginMenuState ? {maxHeight: '100vh'} : {maxHeight: '0px'}}>
                                <div onClick={() => routerPathChange('/')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    나의 프로필
                                </div>
                                <div onClick={() => routerPathChange('/cash/cashwallet')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                                    </svg>
                                    나의 캐시 지갑
                                </div>
                                <div onClick={() => routerPathChange('/cash/topup')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5l.415-.207a.75.75 0 011.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 005.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    캐시 충전
                                </div>
                                <div onClick={() => routerPathChange('/')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                    </svg>
                                    롤체인지
                                </div>
                                <div onClick={() => router.push('https://storicha.in/profile/setting')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    설정
                                </div>
                                <div onClick={() => seeTheme()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                                    </svg>

                                    테마설정
                                </div>
                                <div onClick={() => routerPathChange('/')}>
                                    　
                                </div>
                                <div style={{borderTop: '1px solid #c8c8c8', justifyContent: 'center'}} onClick={doLogout}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                    </svg>
                                    로그아웃
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className="login" onClick={()=> setLoginModal(true)}>로그인</p>
                    )}
                </div>
                <span className="title" onClick={()=> router.push('/')}>IP Studio</span>
            </TopContainer>
            <Container ref={elem => (wrapperRef.current[1] = elem)} color={isPointTheme} style={leftView ? {left: '0px'} : {left: '-100%'}}>
                <MenuBox color={isPointTheme}>
                    <div className='wrapper' style={{marginTop: '4px'}} onClick={()=> router.push('/')}>
                        <div className='background'/>
                        <div className='box'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className='head'>콘텐츠</p>
                        </div>
                    </div>
                    <PlusMenu color={isPointTheme}>
                        <div 
                            className={`head ${myCopy ? 'focus' : ''}`} 
                            onClick={()=> setMyCopy(e => !e)}
                            style={{marginTop:'4px'}}
                        >
                            <div className='background'/>
                            <svg style={{marginRight: '6px'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                            </svg>
                            <p>나의 저작재산권</p>
                            <svg className='right' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <div className='content-box' style={myCopy ? {maxHeight: '100vh', display: 'flex', padding: '8px'} : {}}>
                            <div className='content'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                                </svg>
                                <p>저작재산권 발행</p>
                                <div className='sub-text'>
                                    <p>NFT 기반 IP를 발행 하세요</p>
                                </div>
                            </div>
                            <div className='content'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p>발행된 저작재산권</p>
                                <div className='sub-text'>
                                    <p>발행된 NFT를 확인, 계약, 기능 실행</p>
                                </div>
                            </div>
                        </div>
                        <div 
                            className={`head ${claim ? 'focus' : ''}`} 
                            onClick={()=> setClaim(e => !e)}
                            style={{marginTop: '8px'}}
                        >
                            <div className='background'/>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="left">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                            </svg>
                            <p>권리관계</p>
                            <svg className='right' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <div className='content-box' style={claim ? {maxHeight: '100vh', display: 'flex', padding: '8px'} : {}}>
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
                            style={{marginTop: '8px'}}
                        >
                            <div className='background'/>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="left">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p>More</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='right'>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <div className={`content-box ${more && 'open'}`} style={more ? {display:'flex', maxHeight: '100vh'}: {}}>
                            <div className='content' onClick={() => window.open('https://storicha.in/home')}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                                </svg>
                                <p>스토리체인 홈</p>
                            </div>
                            <div className='content' onClick={()=> Router.push('/')}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                </svg>
                                <p>시리즈</p>
                            </div>
                        </div>
                    </PlusMenu>
                </MenuBox>
                <ProfileBox 
                    color={isPointTheme}
                    onClick={()=>console.log(login)}
                >
                    <div>
                        <div className='back'/>
                        <div className='profileImage'>
                            {login === null ? (
                                <Image
                                    width={'50px'}
                                    height={'50px'}
                                    src={NoneUserIcon}
                                />
                            ) : (
                                <Image
                                    width={'50px'}
                                    height={'50px'}
                                    src={ProfileImage}
                                />
                            )}
                        </div>
                        <h4><b>{login === null ? "please, Login" : (login.nick_name === undefined || login.nick_name === '') ? 'None-Name' : login.nick_name}</b><br/>{login === null  ?  'Basic-type' : login.user_id}</h4>
                    </div>
                </ProfileBox>
            </Container>
            {loginModal && <LoginBox/>}
        </>
    )
}

const DarkBox = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.8;
    display: none;
    @media (max-width: 1280px) {
        display: block;
    }
`

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
            @media screen and (max-width: 500px) {
                .image{
                    width: 26px;
                    height: 26px;
                }
                span {
                    font-size: 14px;
                }
            }
        }
        @media screen and (max-width: 500px) {
            .mobileBoxCon{
                width: calc(100% - 100px);
            }
        }
        .right-more{
            position: absolute;
            width: 180px;
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
            z-index: 999999;
            div{
                width: 100%;
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
        width: 28px;
        height: 28px;
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
    }
    .title{
        position: absolute;
        color: #FFFFFF;
        font-size: 24px;
        font-weight: bold;
        left: 50%;
        transform: translateX(-50%);
        @media screen and (max-width: 1000px) {
            left: 0%;
            transform: translateX(85%);
        }
    }
    .search{
        width: 176px;
        height: 34px;
        margin-left: 78px;
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
        @media screen and (max-width: 1060px) {
            display: none;
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
    @media screen and (max-width: 500px) {
        padding-left: 8px;
        .right{
            padding: 0;
        }
    }
`

const Container = styled.div`
    position: fixed;
    left: 0px;
    width: 280px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    z-index: 999999;
    color: var(--title);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-color: var(--box1);
    transition: all .2s ease-in-out;
    @media (max-width: 1280px) {
        width: 100vw;
        max-width: 300px;
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
    position: relative;
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
    @media (min-width: 1280px) {
        position: absolute;
        bottom: 70px;
    }
`

const MenuBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4px;
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
            border-radius: 8px;
            svg{
                width: 22px;
                height: 22px;
            }
            .head{
                width: 100%;
                font-size: 16px;
                @media (max-width: 1280px) {
                    justify-content: center;
                }
            }
            /* ::after{
                content: '';
                position: absolute;
                left: 0;
                bottom: 1px;
                width: 100%;
                height: 2px;
                background-color: ${props=>props.color};
                transition: all .5s ease-in-out;
                transform: translateX(-110%);
            } */
        }
        .background{
            position: absolute;
            top: 0;
            width: 100%;
            height: 44px;
            transition: all .3s ease-in-out;
            border-radius: 8px;
            background-color: var(--box1);
            @media (max-width: 1280px) {
                /* height: 36px !important; */
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
        &.sub{
            height: 40px;
            .background{
                height: 40px;
            }
            .box{
                padding: 8px 20px;
                height: 40px;
                svg{
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }
    @media (max-width: 1280px) {
        width: 100%;
        justify-content: flex-start;
        gap: 0;
        .box{
            svg{
                width: 26px !important;
                height: 26px !important;
            }
            .head{
                font-size: 18px !important;
            }
        }
    }
    @media (max-width: 500px) {
        .box{
            padding: 6px !important;
            svg{
                width: 20px !important;
                height: 20px !important;
            }
            .head{
                font-size: 16px !important;
            }
        }
    }
`

const PlusMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    .head {
        width: 100%;
        padding: 12px;
        border-radius: 8px;
        color: var(--title);
        font-size: 16px;
        overflow: hidden;
        cursor: pointer;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .background{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.825;
            transition: all .15s ease-in-out;
        }
        svg{
            position: relative;
            color: var(--title);
            width: 20px;
            height: 20px;
            transform: translateY(0%);
            transition: all .15s ease-in-out;
            &.left{
                margin-right: 6px;
            }
            &.right{
                position: absolute;
                right: 12px;
            }
        }
        &.focus{
            .background{
                opacity: 0.4;
                background: ${props => props.color};
            }
            svg.right{
                transform: rotate(180deg);
            }
        }
        :hover{
            .background{
                opacity: 0.4;
                background: ${props => props.color};
            }
            svg.left{
                top: 0;
                animation: shakeIcon 1s linear infinite;
            }
        }
    }
    .content-box{
        width: 100%;
        max-height: 0px;
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 6px;
        transition: all .3s ease-in-out;
        padding: 0px 8px;
        &.open{
            .content{
                margin-top: 8px;
            }
        }
        .content{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            gap: 8px;
            padding: 8px 12px;
            font-size: 16px;
            color: var(--textColor2);
            cursor: pointer;
            transition: all .15s ease-in-out;
            svg{
                width: 18px;
                height: 18px;
            }
            :hover{
                color: var(--title);
                .sub-text{
                    display: block;
                }
            }
        }
        .sub-text{
            position: absolute;
            right: 0px;
            bottom: 0;
            padding: 8px;
            background-color: ${props=>props.color};
            color: #FFFFFF;
            font-size: 15px;
            border-radius: 6px;
            display: none;
            transition: all .15s ease-in-out;
            z-index: 999999;
            transform: translateX(100%);
            ::after{
                content: '';
                position: absolute;
                top: 30%;
                left: -4px;
                width: 8px;
                height: 8px;
                transform: rotate(45deg);
                background-color: ${props=>props.color};
                border-bottom-left-radius: 2px;
            }
        }
    }
    @media (max-width: 1280px) {
        width: 100%;
        .head{
            svg{
                width: 22px;
                height: 22px;
            }
            font-size: 18px !important;
            
        }
        .content{
            svg{
                width: 20px !important;
                height: 20px !important;
            }
            font-size: 16px !important;
        }
        .sub-text{
            transform: translateX(0%) !important;
        }
    }
    @media (max-width: 500px) {
        .head{
            padding: 6px !important;
            svg{
                width: 20px;
                height: 20px;
            }
            font-size: 16px !important;
            
        }
        .content-box{
            padding: 4px 8px !important;
            svg{
                width: 18px !important;
                height: 18px !important;
            }
            .content{
                font-size: 16px !important;
                gap: 4px;
                padding: 6px 6px;
            }
        }
    }
`
export default Navigation;

