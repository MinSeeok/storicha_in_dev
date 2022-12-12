import { GlobalStyle } from '@src/styles/global-styled';
import BackLogoImage from 'components/BackLogoImage';
import Container from 'components/Container';
import FooterContainer from 'components/index/Bottom';
import Navigation from 'components/index/Navigation';
import LoadingContainer from 'components/LoadingBox';
import type { AppProps } from 'next/app';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import { LoginMadalState } from 'recoil/loginModal';
import '../src/styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
    // testMessege **
    return (
        <>
            <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                    <GlobalStyle />
                    <Container>
                        <BackLogoImage/>
                        <Component {...pageProps}/>
                        <LoadingContainer/>
                        <Navigation/>
                    </Container>
                    <FooterContainer/>
                </QueryClientProvider>
            </RecoilRoot>
        </>
    )
}
export default MyApp
