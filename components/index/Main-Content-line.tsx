import * as React from 'react';
import styled from "styled-components";

interface Title {
    title: string;
}

const MainContentLine = (title:Title) => {
    const controlLine = React.useRef<any>(null);
    const [lineCount, setLineCount] = React.useState<number>(0);
    const handleLineLeft = () => {
        if(lineCount !== 0){
            setLineCount(lineCount - 1);
            controlLine.current.style.transform = `translateX(-${10 * (lineCount - 1)}%)`;
        }
    }
    const handleLineRight = () => {
        if(lineCount !== 9){
            setLineCount(lineCount + 1);
            controlLine.current.style.transform = `translateX(-${10 * (lineCount - 1)}%)`;
        }
    }
    return (
        <ContentLine>
            <p 
                className='line-title'
                onClick={()=> handleLineLeft()}
            >
                {title.title !== '' ? title.title+' 이전' : 'None-Title'}
            </p>
            <p 
                className='line-title'
                onClick={()=> handleLineRight()}
            >
                {title.title !== '' ? title.title+` 다음: ${lineCount}` : 'None-Title'}
            </p>
            <div className='line-line'>
                <div className='line-inline' ref={controlLine}>
                    {[0,1,2,3,4,5,6,7,8,9].map((content, i) => (
                        <ContentBox>
                            1233
                        </ContentBox>
                    ))}
                </div>
            </div>
        </ContentLine>
    )
}

const ContentLine = styled.div`
    width: 100%;
    .line-title{
        width: 100%;
        font-size: 22px;
    }
    .line-line{
        width: 100%;
        height: 300px;
        margin-top: 12px;
        border: 2px solid blue;
        .line-inline{
            width: 1000%;
            height: 100%;
            border: 2px solid red;
            transition: all 0.3s ease-in-out;
            display: flex;
        }
    }
`

const ContentBox = styled.div`
    width: 10%;
    height: 100%;
    border: 2px solid blue;
`

export default MainContentLine;