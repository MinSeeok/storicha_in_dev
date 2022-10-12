import { GlobalStyle } from '@src/styles/global-styled';
import Container from 'components/Container';
import Header from 'components/Header';
import type { AppProps } from 'next/app';
import * as React from 'react';
import { RecoilRoot } from 'recoil';
import '../src/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <RecoilRoot>
                <GlobalStyle />
                <Container>
                    <Component {...pageProps}/>
                </Container>
            </RecoilRoot>
        </>
    )
}

export default MyApp
