import React from 'react';
import styled from "styled-components"
import BackLogoImage from '../components/BackLogoImage';
import HelmetProvier from 'components/Helmet';
import Image from 'next/image';
import Container from 'components/Container';

interface title {
  title: string;
}
export default function Home(title:title){
  return (
    <>
        <HelmetProvier title='STORICHAIN'/>
        <Container>
            
        </Container>
    </>
  )
}
