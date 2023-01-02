import { GlobalStyle } from '@src/styles/global-styled';
import BackLogoImage from 'components/BackLogoImage';
import Container from 'components/Container';
import FooterContainer from 'components/index/Bottom';
import Navigation from 'components/index/Navigation';
import LoadingContainer from 'components/LoadingBox';
import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import '../src/styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
    React.useEffect(()=> {
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
    },[]);
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
                        {/* <Devtools/> */}
                    </Container>
                    <FooterContainer/>
                </QueryClientProvider>
            </RecoilRoot>
        </>
    )
}

export default MyApp
