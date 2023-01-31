import styled from "styled-components";
import { ChevronLeft, ChevronRight } from 'heroicons-react'
import DevThumbnail from "./Thumbnail";
import * as React from "react";

interface Props {
    title: string
    key: string
}

function DevContentLine (Props:Props) {
    const [device, setDevice] = React.useState<string>('pc');
    const rowRef = React.useRef<HTMLDivElement>(null);
    const [isMoved, setIsMoved] = React.useState<boolean>(false);
    const [isMovedRight, setIsMovedRight] = React.useState<boolean>(false);

    const handleClick = (direction: string) => {
        setIsMoved(true);

        if(rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    }
    const scrollEvent = () => {
        // rowRef.current?.scrollLeft === 0 && setIsMoved(false);
        rowRef.current?.scrollLeft === 0 ? setIsMoved(false) : setIsMoved(true);
        device === 'pc' && Number(rowRef.current?.scrollWidth) - Number(rowRef.current?.scrollLeft) === 1024 ? setIsMovedRight(true) : setIsMovedRight(false);
    }
    React.useEffect(()=> {
        window.innerWidth < 1024 && setDevice('mobile');
    },[]);
    return (
        <ContentLine>
            <h2 className="duration">
                {Props?.title}
            </h2>
            <div className="group">
                <ChevronLeft className={`chevron ${!isMoved && 'hidden'}`} onClick={() => handleClick('left')}/>

                <div 
                    className="ref"
                    ref={rowRef}
                    onScroll={scrollEvent}
                >
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map((thumbnail) => (
                        <DevThumbnail title={`title-${thumbnail % 2 === 0 ? '1' : '2'}`} key={`devThunbnail-${thumbnail}`}/>
                    ))}
                </div>

                <ChevronRight  className={`chevron right ${isMovedRight && 'hidden'}`}  onClick={() => handleClick('right')}/>
            </div>
        </ContentLine>
    )
}

const ContentLine = styled.div`
    height: 272px;
    margin-top: calc(0.125rem * calc(1 - 0.5));
    margin-bottom: calc(0.125rem * 0.5);
    margin-left: 20px;
    h2 {
        width: 400px;
        color: var(--sub);
        cursor: pointer;
        font-size: 20px/* 14px */;
        line-height: 24px/* 20px */;
        font-weight: 600;
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 200ms;
    }
    .group {
        position: relative;
        max-width: 1024px;
        .chevron {
            position: absolute;
            top: 0;
            bottom: 0;
            left: -24px;
            z-index: 40;
            margin: auto;
            width: 46px/* 36px */;
            height: 46px/* 36px */;
            cursor: pointer;
            opacity: 0;
            color: var(--title);
            transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
            border-radius: 50%;
            background-color: var(--box1);
            &.right{
                left: auto;
                right: -24px;
                /* margin: 0;
                margin-top: auto;
                margin-bottom: auto; */
            }
            &:hover {
                scale: 1.25;
            }
            @media (max-width: 768px){
                display: none;
            }
        }
        &:hover {
            .chevron {
                opacity: 1;
            }
        }
    }
    .ref {
        display: flex;
        align-items: center;
        margin-right: calc(0.125rem * 0.5);
        margin-left: calc(0.125rem * 0.5);
        overflow-x: scroll;
        scrollbar-width: none;
        gap: 8px;
        scroll-snap-type: y mandatory;
        margin-top: 8px;
        &::-webkit-scrollbar {
            display: none;  
        }
        @media (min-width: 768px){
            /* margin-right: calc(0.625rem * 2.5);
            margin-left: calc(0.625rem * 2.5); */
            padding: 0.5rem 0/* 8px */;
        }
    }
    &:hover{
        h2 {
            color: var(--title);
        }
    } 
    @media (min-width: 768px){
        margin-top: calc(0.125rem * calc(1 - 2));
        margin-bottom: calc(0.125rem * 2);
        max-width: calc(100vw - 60px);
    }
    @media (max-width: 768px){
        width: 100%;
    }
`

export default DevContentLine;