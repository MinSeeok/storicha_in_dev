import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

export default function BackLogoImage(){
  return(
    <BackImage>
        <Image
            src={'/images/logo/backgroundLogo.png'}
            layout='fill'
            objectFit='contain'
        />
    </BackImage>
  )
}

const BackImage = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    transform: translateY(0%) translateX(40%);
    filter: blur(2px);
    z-index: 5;
`