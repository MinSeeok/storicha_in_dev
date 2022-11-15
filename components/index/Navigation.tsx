import * as React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { isPointThemeAtom } from 'recoil/theme';
import Image from 'next/image';
import HeadLogo from '../../assets/images/img1.daumcdn.jpg';
import ProfileImage from '../../assets/images/img1.daumcdn.jpg';

export const Navigation = () => {
    const isPointTheme = useRecoilValue(isPointThemeAtom);
    React.useEffect(()=>{
        console.log(isPointTheme)
    },[]);
    return(
        <>
            <Container color={isPointTheme}>
                <div className='logoHead'>
                    <Image
                        width={'40px'}
                        height={'40px'}
                        src={HeadLogo}
                    />
                    <h1>STORICHAIN</h1>
                </div>
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
                        <h4><b>MINSEOK KIM</b><br/>ADMIN</h4>
                    </div>
                </ProfileBox>
                <MenuBox color={isPointTheme}>
                    <div className='box'>
                        <div className='home'>
                            <div className='back'/>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <p>Home</p>
                            <div className='underline'/>
                        </div>
                    </div>
                    <div className='home'>
                        <div className='back'/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                        <p>Farm</p>
                        <div className='underline'/>
                    </div>
                    <div className='home'>
                        <div className='back'/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                        </svg>
                        <p>Swap</p>
                        <div className='underline'/>
                    </div>
                    <div className='home'>
                        <div className='back'/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>Liquidty</p>
                        <div className='underline'/>
                    </div>
                    <div className='home'>
                        <div className='back'/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>Create NFT</p>
                        <div className='underline'/>
                    </div>
                    <div className='home'>
                        <div className='back'/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                        </svg>
                        <p>NFT Details</p>
                        <div className='underline'/>
                    </div>
                    <div className='home'>
                        <div className='back'/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                        </svg>
                        <p>Vote</p>
                        <div className='underline'/>
                    </div>
                </MenuBox>
            </Container>
        </>
    )
}

const Container = styled.div`
    position: fixed;
    left: 0;
    width: 280px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    z-index: 999999;
    color: var(--title);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-color: var(--box1);
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
    padding: 0 12px;
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
            background-color: #2c3e50;
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
            b{
                font-size: 16.5px;
                line-height: 20px;
            }
        }
    }
`

const MenuBox = styled.div`
    width: 100%;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    .color{
        font-size: 26px;
        margin-left: 24px;
        color: ${props=>props.color};
    }
    .box{
        width: 100%;
        height: auto;
        padding: 0;
        max-height: 44px;
        display: block;
        overflow: hidden;
        transition: max-height 0.75s ease-in-out;
    }
    div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 44px;
        gap: 8px;
        padding: 12px 8px;
        border-radius: 8px;
        transition: all .25s ease-in-out;
        overflow: hidden;
        .back {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.3;
        }
        #moreBtn{
            position: absolute;
            color: #000000;
            right: 8px;
            animation: none !important;
            width: 20px;
            height: 20px;
            transition: all .25s ease-in-out;
        }
        .underline{
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 1.8px;
            padding: 0;
            background-color: ${props=>props.color};
            transition: all .5s ease-in-out;
            transform: translateX(-110%);
        }
        cursor: pointer;
        svg {
            width: 20px;
            height: 20px;
        }
        p{
            margin-top: 2px;
            font-size: 16px;
            font-family: 'NanumBarunGothic';
            font-weight: 400;
        }
        &:hover{
            .back{
                background-color: ${props=>props.color};
            }
            .underline{
                transform: translateX(110%);
            }
            color: var(--title);
            svg{
                animation: shakeIcon 1s linear infinite;
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
    .moreBox{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
`