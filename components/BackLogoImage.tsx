import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

export default function BackLogoImage(){
  return(
    <BackImage>
        <img src="images/logo/LOGO_for_BG.svg" alt="" />
    </BackImage>
  )
}

const BackImage = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    filter: blur(0px);
    pointer-events: none;
    img{
      position: absolute;
      right: 0;
      height: 45vh;
      top: 50%;
      transform: translate(-30px, calc(-50% + 10px));
    }
    @media screen and (max-width: 1024px) {
        display: none;
    }
`