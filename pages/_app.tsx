import { GlobalStyle } from '@src/styles/global-styled';
import axios from 'axios';
import BackLogoImage from 'components/BackLogoImage';
import Container from 'components/Container';
import Devtools from 'components/dev/devtools';
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
                'https://api-v2.storicha.in/api/User/SiteSnsLogin?site_user_id=testkwy@test.com&pwd=1234QWER!'
            )
            // .then(response => console.info('headers:' , response.headers))
            setUser(request);
        } catch (e:any) {
            setError(e);
        }
        setLoading(false);
    }
    const getCookie = () => {
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
                        <h1 style={{zIndex: 999999}} onClick={getCookie}>테스트</h1>
                        <Devtools/>
                        <BackLogoImage/>
                        <Component {...pageProps}/>
                    </Container>
                </QueryClientProvider>
            </RecoilRoot>
        </>
    )
}
export default MyApp
