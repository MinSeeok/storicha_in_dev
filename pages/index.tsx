import React from 'react';
import HelmetProvier from 'components/Helmet';
import Container from 'components/Container';
import { Navigation } from 'components/index/Navigation';
import { ThemeNavigation } from 'components/index/ThemeChangeBtn';
import { fetchTopupData } from './api/getDataApi';
import { useQuery } from 'react-query';
import styled from 'styled-components';

export default function Home(){
    const { isLoading, data } = useQuery('getTopData', fetchTopupData);
    return (
        <>
            <HelmetProvier title='STORICHAIN'/>
            <Navigation/>
            <ThemeNavigation/>
            <Box>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <div onClick={() => console.log(data)}>Load Data End!!</div>
                )}
            </Box>
            <Container/>
        </>
    )
}

const Box = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999;
`