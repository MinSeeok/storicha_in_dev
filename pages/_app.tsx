import { GlobalStyle } from '@src/styles/global-styled';
import BackLogoImage from 'components/BackLogoImage';
import Container from 'components/Container';
import Devtools from 'components/dev/devtools';
import FooterContainer from 'components/index/Bottom';
import Navigation from 'components/index/Navigation';
import LoadingContainer from 'components/LoadingBox';
import type { AppProps } from 'next/app';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import '../src/styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                    <GlobalStyle />
                    <Container>
                        <Devtools/>
                        <BackLogoImage/>
                        <Component {...pageProps}/>
                        <LoadingContainer/>
                        <FooterContainer/>
                        <Navigation/>
                    </Container>
                </QueryClientProvider>
            </RecoilRoot>
        </>
    )
}
export default MyApp
