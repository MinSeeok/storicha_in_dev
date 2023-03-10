import Image from 'next/image';
import * as React from 'react';
import styled from "styled-components";
interface Title {
    title: string;
    width: number;
}

const MainContentLine = (props:Title) => {
    const controlBox = React.useRef<any>(null);
    const controlLine = React.useRef<any>(null);
    const [lineCount, setLineCount] = React.useState<number>(0);
    const handleLineLeft = () => {
        setLineCount(lineCount - 1);
        if(props.width >= 1320){
            controlLine.current.style.transform = `translateX(-${(controlBox.current.offsetWidth * (lineCount - 1))}px)`;
            return;
        }
        if(props.width >= 1068){
            controlLine.current.style.transform = `translateX(-${(970 * (lineCount - 1))}px)`;
            return;
        }
        if(props.width >= 826){
            controlLine.current.style.transform = `translateX(-${(607.5 * (lineCount - 1))}px)`;
            return;
        }
        if(props.width >= 640){
            controlLine.current.style.transform = `translateX(-${(547.5 * (lineCount - 1))}px)`;
            return;
        } else {
            controlLine.current.style.transform = `translateX(-${(285 * (lineCount - 1))}px)`;
            return;
        }
    }
    const handleLineRight = () => {
        setLineCount(lineCount + 1);
        if(props.width >= 1320){
            controlLine.current.style.transform = `translateX(-${(controlBox.current.offsetWidth * (lineCount + 1))}px)`;
            return;
        }
        if(props.width >= 1068){
            controlLine.current.style.transform = `translateX(-${(970 * (lineCount + 1))}px)`;
            return;
        }
        if(props.width >= 826){
            controlLine.current.style.transform = `translateX(-${(607.5 * (lineCount + 1))}px)`;
            return;
        }
        if(props.width >= 640){
            controlLine.current.style.transform = `translateX(-${(547.5 * (lineCount + 1))}px)`;
            return;
        }
        if(props.width >= 399){
            controlLine.current.style.transform = `translateX(-${(547.5 * (lineCount + 1))}px)`;
            return;
        } else {
            controlLine.current.style.transform = `translateX(-${(285 * (lineCount + 1))}px)`;
            return;
        }
    }
    return (
        <ContentLine ref={controlBox} className={`content ${(props.width >= 401 && props.width <= 640) ? 'mobile-medium' : (props.width <= 400) && 'mobile-mini'}`}>
            <p 
                className='line-title'
            >
                {props.title !== '' ? `${props.title}` : 'None-Title'}
            </p>
            <div className={`line-line ${props.width}`}>
                <div className='line-inline' ref={controlLine}>
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].map((content, i) => (
                        <div className={`content ${(props.width >= 1320 && content % 5 === 0) ? 'five' : (props.width >= 401 && props.width <= 640) ? 'mobile-medium' : (props.width <= 400) && 'mobile-mini'}`} key={i}>
                            <div className='image'>
                                <Image
                                    src={'/images/KakaoTalk_Photo_2022-10-07-12-18-26.gif'}
                                    layout='fill'
                                    objectFit='cover'
                                    alt={`content-image-${content}`}
                                />
                                <div className='image-dark'/>
                            </div>
                            <div className='info'>
                                <div className='dark'></div>
                                <div className='info-content'>
                                    <p className='plot'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quos doloremque aut deleniti dolor, unde temporibus quibusdam ut error quia in tempore, illum ducimus vero sed facere repudiandae quisquam odit.</p>
                                </div>
                            </div>
                            <div className='series-info'>
                                <h4>Pokemon</h4>
                                <div className='second-line'>
                                    @Animation-{content}
                                </div>
                                <div className='thrid-line'>
                                    {[0,1,2,3,4].map((content,i)=>{
                                        if(content !== 4){
                                            return (
                                                <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="star on">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                            )
                                        } else {
                                            return (
                                                <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="star off">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                            )
                                        }
                                    })}
                                </div>
                                <div className='last-line'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                    </svg>
                                    <span>{'25'}</span>
                                    <button>Follow</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {lineCount !== 0 &&
                (
                    <div className={`left-button ${props.width <= 519 ? 'mobile-small' : ''}`} onClick={handleLineLeft}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                )
            }
            {
                ((props.width >= 1068) && lineCount !== 4) ?
                (
                    <div className={`right-button ${props.width <= 519 ? 'mobile-small' : ''}`} onClick={handleLineRight}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                ) :
                ((props.width >= 826) && lineCount !== 8) ?
                (
                    <div className='right-button' onClick={handleLineRight}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                ) :
                ((props.width <= 825 && props.width >= 641) && lineCount !== 8) ?
                (
                    <div className='right-button' onClick={handleLineRight}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                ) :
                ((props.width <= 640) && lineCount !== 12) ?
                (
                    <div className={`right-button ${(props.width <= 519 && props.width >= 401) ? 'mobile-small' : props.width <= 400 && 'mobile-mini'}`} onClick={handleLineRight}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                ) :
                ''
                    
            }
            {/* <ProgressStatus 
                inlist={lineCount}
            >
                <div 
                />
            </ProgressStatus> */}
        </ContentLine>
    )
}

const ContentLine = styled.div`
    width: 100%;
    color: var(--title);
    margin-top: 36px;
    &.mobile-medium{
        margin-top: 16px;
        .line-line{
            width: auto;
            height: 220px !important;
        }
        .plot {
            height: 100px !important;
        }
    }
    &.mobile-mini{
        margin-top: 16px;
        .line-line{
            height: 200px !important;
        }
        .plot {
            height: 80px !important;
        }
        .last-line{
            margin-top: 10px !important;
        }
    }
    .line-title{
        width: 100%;
        font-size: 22px;
    }
    .line-line{
        width: 100%;
        height: 240px;
        margin-top: 12px;
        overflow: hidden;
        &.pc-small{
            height: 320px;
            .line-inline{
                width: 625%;
            }
        }
        &.tablet{
            .line-inline{
                width: 725%;
            }
        }
        .line-inline{
            height: 100%;
            transition: all .5s ease-in-out;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
    }
    .left-button{
        position: absolute;
        top: 50%;
        left: -24px;
        width: 40px;
        height: 40px;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: var(--box1);
        color: var(--title);
        cursor: pointer;
        svg{
            position: absolute;
            margin-left: -3px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 32px;
            height: 32px;
        }
        &.mobile-small{
            width: 32px;
            height: 32px;
            left: -16px;
            svg {
                width: 24px;
                height: 24px;
            }
        }
    }
    .right-button{
        position: absolute;
        top: 50%;
        right: -24px;
        width: 40px;
        height: 40px;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: var(--box1);
        color: var(--title);
        cursor: pointer;
        svg{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 32px;
            height: 32px;
        }
        &.mobile-small{
            width: 32px;
            height: 32px;
            right: -14px;
            svg {
                width: 24px;
                height: 24px;
            }
        }
        &.mobile-mini{
            right: -8px;
            width: 32px;
            height: 32px;
            svg {
                width: 24px;
                height: 24px;
            }
        }
    }
    .content{
        min-width: 190px;
        width: 190px;
        height: 100%;
        border-radius: 6px;
        overflow: hidden;
        cursor: pointer;
        margin-right: 12.5px;
        &.five{
            margin-right: 0px;
        }
        &.mobile{
            min-width: 170px;
            button {
                font-size: 12px !important;
            }
        }
        &.mobile-medium{
            min-width: 150px;
        }
        &.mobile-mini{
            min-width: 130px;
            h4{
                font-size: 16px !important;
            }
            .series-info{
                font-size: 12px;
            }
        }
        .image{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
            .image-dark{
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0px;
                left: 0px;
                background: linear-gradient(
                    to bottom,
                    rgba(20, 20, 20, 0) 10%,
                    rgba(20, 20, 20, 0.15) 25%,
                    rgba(20, 20, 20, 0.25) 50%,
                    rgba(20, 20, 20, 0.3) 75%,
                    rgba(20, 20, 20, 1) 100%
                );
            }
        }
        .info{
            position: absolute;
            width: 0;
            height: 0;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: all .3s ease-in-out;
            .dark{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: #000000;
                opacity: 0.6;
            }
            .info-content{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0;
                color: #FFFFFF;
                padding: 16px 12px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                .plot{
                    width: 100%;
                    height: 120px;
                    font-size: 14px;
                    line-height: 16px;
                    opacity: 0;
                    transition: opacity .6s .23s ease; 
                    overflow: hidden;
                }
            }
        }
        &:hover, &:focus{
            .info{
                width: 100%;
                height: 100%;
                .info-content{
                    opacity: 1;
                    .plot{
                        opacity: 1;
                    }
                }
            }
        }
        .series-info{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 110px;
            padding: 12px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            color: #FFFFFF;
            h4{
                font-size: 20px;
            }
            .second-line{
                margin-top: 4px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
            .thrid-line{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 2px;
                margin-top: 6px;
                .star{
                    width: 18px;
                    height: 18px;
                    &.on{
                        fill: yellow;
                        color: yellow;
                    }
                    &.off{
                        fill: #FFFFFF;
                        color: #FFFFFF;
                    }
                }
            }
            .last-line{
                width: 100%;
                margin-top: 6px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                svg{
                    width: 18px;
                    height: 18px;
                    fill: #FFFFFF;
                    color: #FFFFFF;
                    margin-right: 2px;
                    margin-top: -1px;
                }
                span{
                    font-size: 16px;
                }
                button{
                    position: absolute;
                    right: 0px;
                    padding: 2.4px 10.5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #FFFFFF;
                    color: #000000;
                    font-size: 14px;
                    border-radius: 28px;
                }
            }
        }
    }
`
const ProgressStatus = styled.div`
    width: 300px;
    height: 4px;
    position: absolute;
    bottom: -24px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--icon1);
    margin-top: 16px;
    div{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 20%;
        height: 100%;
        background-color: var(--point);
        transition: all .3s ease-in-out;
        &.pc-medium{
            transform: translateX(0px);
        }
    }
`
export default MainContentLine;