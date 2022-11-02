import React from 'react';
import HelmetProvier from 'components/Helmet';
import Container from 'components/Container';
import { useQuery } from 'react-query';
import { fetchTopupData } from './api/getDataApi';

export default function Home(){
    fetch('https://dev-nft.storicha.in/api/cash/product?display_yn=y&amp;product_id=0')
      .then(response => console.log(response.json()));
    return (
        <>
            <HelmetProvier title='STORICHAIN'/>
            <Container/>
        </>
    )
}