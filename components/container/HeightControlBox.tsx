import * as React from 'react'
import Layout from "components/Layout"
import styled from "styled-components"

export const HeightControlBox = () => {
    const [moreView, setMoreView] = React.useState<boolean>(false);  
    return (
        <Layout>
            <Container>
                <h1 className="title">ListBox</h1>
                <button style={moreView ? { display: 'none' } : {}} onClick={() => setMoreView(true)}>More</button>
                <ContentBox className={moreView ? 'heightAuto' : ''}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,19, 20].map((item, i)=>(
                        <p key={i}>{`item value is ${item}`}</p>
                    ))}
                </ContentBox>
            </Container>
        </Layout>
    )
}

const Container = styled.div`
    padding: 14px;
    width: calc(100% - 40px);
    height: auto;
    max-width: 620px;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 8px;
    z-index: 999999;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    background-color: #FFFFFF;
    .title{
        font-size: 18px;
    }
    button{
        position: absolute;
        top: 8px;
        right: 14px;
        padding: 6px 10.5px;
        background-color: #141414;
        color: #FFFFFF;
        cursor: pointer !important;
        border-radius: 8px;
        transition: all .15s ease-in;
        &:hover{
            background-color: #353b48;
            transform: scale(1.05);
        }
    }
`

const ContentBox = styled.div`
    width: 100%;
    max-height: 76px;
    padding: 14px;
    margin-top: 24px;
    background-color: #ecf0f1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    overflow: hidden;
    gap: 12px;
    transition: all 1.125s ease-in-out;
    &.heightAuto{
        max-height: 9999px;
    }
    p{
        width: 48%;
        font-size: 18px;
        line-height: 20px;
        background-color: transparent;
    }
`