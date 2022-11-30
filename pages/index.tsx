import React from 'react';
import { ThemeNavigation } from 'components/index/ThemeChangeBtn';
import styled from 'styled-components';
import HelmetProvier from 'components/Helmet';

export default function Home(){
    return (
        <>
            <HelmetProvier title='토리 캐시 결제'/>
            <ThemeNavigation/>
            <Box>
                <div>Loading...</div>
            </Box>
        </>
    )
}

const Box = styled.div`
    padding: 20px;
    width: 100vw;
    min-height: calc(100vh - 252px);
    display: flex;
    justify-content: center;
    align-items: center;
`