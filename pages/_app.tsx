import { GlobalStyle } from '@src/styles/global-styled';
import axios from 'axios';
import BackLogoImage from 'components/BackLogoImage';
import Container from 'components/Container';
import type { AppProps } from 'next/app';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import '../src/styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const fetchDatas = async () => {
        try{
            setError(null);
            setUser(null);
            setLoading(true);
            const request:any = await axios.post(
                'https://dev-nft.storicha.in/api/User/SiteSnsLogin?site_user_id=testkwy@test.com&pwd=1234QWER!'
            )
            setUser(request);
        } catch (e:any) {
            setError(e);
        }
        setLoading(false);
    }
    React.useEffect(()=> {
        fetchDatas();
    },[]);
    return (
        <>
            <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                    <GlobalStyle />
                    <Container>
                        <BackLogoImage/>
                        <Component {...pageProps}/>
                    </Container>
                </QueryClientProvider>
            </RecoilRoot>
        </>
    )
}

export default MyApp
