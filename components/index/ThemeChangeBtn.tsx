import { useRecoilValue, useSetRecoilState } from "recoil"
import { isPointThemeAtom } from "recoil/theme"
import styled from "styled-components"
import * as React from 'react'
import { ThemeChangeState } from "recoil/themeChange"
import { LoginMenuState } from "recoil/loginMenu"

export const ThemeNavigation = () => {
    const setPointAtom = useSetRecoilState(isPointThemeAtom);
    const isPointTheme = useRecoilValue(isPointThemeAtom);


    const setLoginMenuState = useSetRecoilState(LoginMenuState);

    const themeChange = (color: string) => {
        setPointAtom(color);
        setThemeState(false)
        setLoginMenuState(false);
    }
    const themeHandler = (value:string) => {
        if(value === 'light'){
            localStorage.theme = 'light';
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            setThemeState(false);
            setLoginMenuState(false);
            return;
        }
        localStorage.theme = 'dark';
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        setThemeState(false);
        setLoginMenuState(false);
        return;
    };
    React.useEffect(()=> {
        setThemeState(false);
        setLoginMenuState(false);
    },[]);
    const themeState = useRecoilValue(ThemeChangeState);
    const setThemeState = useSetRecoilState(ThemeChangeState);
    return (
        <>
            <Container color={isPointTheme} style={themeState ? { right: '0px' } : { right: '-303px' }}>
                <div className="head">
                    <h1>테마 설정</h1>
                    <svg onClick={() => setThemeState(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="mode">
                    <h2>MODE</h2>
                    <div>
                        <div onClick={()=>themeHandler('light')}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                            <p>RIGHT</p>
                        </div>
                        <div onClick={()=>themeHandler('dark')}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                            <p>DARK</p>
                        </div>
                    </div> 
                </div>
                <div className="color">
                    <h2>COLOR</h2>
                    <div>
                        <div onClick={()=> themeChange('#f53b57')} style={{ backgroundColor:'#f53b57' }}/>
                        <div onClick={()=> themeChange('#575fcf')} style={{ backgroundColor:'#575fcf' }}/>
                        <div onClick={()=> themeChange('#0fbcf9')} style={{ backgroundColor:'#0fbcf9' }}/>
                        <div onClick={()=> themeChange('#4bcffa')} style={{ backgroundColor:'#4bcffa' }}/>
                        <div onClick={()=> themeChange('#0be881')} style={{ backgroundColor:'#0be881' }}/>
                    </div>
                    <div>
                        <div onClick={()=> themeChange('#ffa801')} style={{ backgroundColor:'#ffa801' }}/>
                        <div onClick={()=> themeChange('#ffd32a')} style={{ backgroundColor:'#ffd32a' }}/>
                        <div onClick={()=> themeChange('#ff3f34')} style={{ backgroundColor:'#ff3f34' }}/>
                        <div onClick={()=> themeChange('#808e9b')} style={{ backgroundColor:'#808e9b' }}/>
                        <div onClick={()=> themeChange('#1e272e')} style={{ backgroundColor:'#1e272e' }}/>
                    </div>
                </div>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 300px;
    height: 100vh;
    right: 0;
    z-index: 9999999;
    background-color: var(--box1);
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    transition: all .15s ease-in-out;
    
    button{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -43px;
        background-color: #FFFFFF;
        z-index: 9999999;
        padding: 7.2px 8px;
        border-radius: 8px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        transition: all .15s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--box1);
        color: var(--title);
        svg{
            margin-top: 2px;
            width: 24px;
            height: 24px;
            margin-bottom: -2px;
        }
        &:hover{
            color: ${props => props.color};
        }
        &::after{
            content: '';
            width: 8px;
            height: 8px;
            position: absolute;
            top: 4px;
            right: 4px;
            border-radius: 50%;
            background-color: ${props => props.color};
        }
    }
    
    .head {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        font-weight: 700;
        border-bottom: 1px solid #e3e3e3;
        color: var(--title);
        h1{
            font-size: 20px;
        }
        svg{
            width: 30px;
            height: 30px;
            cursor: pointer;
            border-radius: 50%;
            &:hover{
                animation: shaking .4s linear infinite;
            }
            @keyframes  shaking{
                0%
                {
                    transform: rotate(0deg);
                }
                25%
                {
                    transform: rotate(15deg);
                }
                50%
                {
                    transform: rotate(0deg);
                }
                75%
                {
                    transform: rotate(-10deg);
                }
                100%
                {
                    transform: rotate(0deg);
                }
            }
        }
    }
    .mode{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 20px;
        color: var(--title);
        h2{
          font-size: 20px;
          font-weight: 500;
        }
        div {
            margin-top: 18px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
            div {
                width: 100%;
                /* box-shadow: var(--title) 0px 2px 6px, var(--icon1) 0px 1px 2px; */
                border: var(--title) 1.4px solid;
                border-radius: 12px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 14px 0;
                gap: 8px;
                transition: all .15s ease-in-out;
                cursor: pointer;
                svg{
                    width: 26px;
                    height: 26px;
                }
                &:hover{
                    box-shadow: var(--title) 0px 3px 8px;
                }
                p{
                    font-family: 'Pretendard-Regular';
                    font-size: 14px;
                    font-weight: 500;
                }
            }
        }
    }
    .color{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 20px;
        margin-top: 24px;
        color: var(--title);
        h2{
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 12px;
        }
        div{
            width: 100%;
            display: flex;
            justify-content: space-between;
            div{
                width: 100%;
                padding-bottom: 20%;
                cursor: pointer;
            }
        }
    }
`