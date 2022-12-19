import * as React from 'react';
import { ThemeNavigation } from 'components/index/ThemeChangeBtn';
import styled from 'styled-components';
import HelmetProvier from 'components/Helmet';
import axios from 'axios';
import MainContentLine from 'components/index/Main-Content-line';
import "aos/dist/aos.css";
import Aos from 'aos';

export default function Home(){
    const [innerWidth, setInnerWidth] = React.useState(0);
    const array = ['지금 뜨는 콘텐츠', '새로 올라온 콘텐츠', '다시보기 추천 콘텐츠', '오직 IP Studio에서', 'IP Studio 인기 콘텐츠'];
    React.useEffect(()=>{
        Aos.init({
            duration: 600,
        })
        axios({
            method: 'POST',
            url: `https://api-v2.storicha.in/api/Event/GetListsForDiscover?page=1&page_rows=24&me_user_idx=0&search_text&event_content_type_idx=2&stage_labeling_type_idx=0&scope_type_idx=0&topic_idxs&sort_type_name=date&genres_type_idxs`,
            withCredentials: true,
        }).then((response):any => {
        }).catch((error)=> {
            console.log(error);
        });
        const handleResize = () => {
            setInnerWidth(window.innerWidth);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[]);
    return (
        <>
            <HelmetProvier title='IP Manager'/>
            <ThemeNavigation/>
            <Box 
                className = { 
                    innerWidth >= 1320 ? 'pc-medium' : 
                    innerWidth >= 1068 ? 'pc-small' : 
                    innerWidth >= 826  ? 'tablet' : 
                    innerWidth >= 640  ? 'mobile-big' : 
                    innerWidth <= 500  ? 'mobile-small' :
                    ''
                }
            >
                {array.map((content, i)=> (
                    <MainContentLine title={content} width={innerWidth} key={`main-container-${i}`}/>
                ))}
            </Box>
        </>
    )
}

const Box = styled.div`
    width: 100vw;
    margin-top: 40px;
    margin-bottom: 40px;
    min-height: calc(100vh - 252px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 32px;
    &.pc-medium{
        min-width: 1200px;
        max-width: 1200px;
    }
    &.pc-small{
        min-width: 1000px;
        max-width: 1000px;
    }
    &.tablet {
        min-width: 786px;
        max-width: 786px;
    }
    &.mobile-big {
        min-width: 580px;
        max-width: 580px;
    }
    &.mobile-medium {
        min-width: 340px;
        width: calc(100vw - 40px);
        max-width: 500px;
    }
    &.mobile-small{
        min-width: 280px;
        width: calc(100vw -  80px);
        max-width: 500px;
    }
`