import * as React from 'react';
import { ThemeNavigation } from 'components/index/ThemeChangeBtn';
import styled from 'styled-components';
import HelmetProvier from 'components/Helmet';
import axios from 'axios';
import MainContentLine from 'components/index/Main-Content-line';

export default function Home(){
    const array = ['지금 뜨는 콘텐츠', '새로 올라온 콘텐츠', '다시보기 추천 콘텐츠', '오직 IP Studio에서', 'IP Studio 인기 콘텐츠'];
    React.useEffect(()=>{
        axios({
            method: 'POST',
            url: `https://api-v2.storicha.in/api/Event/GetListsForDiscover?page=1&page_rows=24&me_user_idx=0&search_text&event_content_type_idx=2&stage_labeling_type_idx=0&scope_type_idx=0&topic_idxs&sort_type_name=date&genres_type_idxs`,
            withCredentials: true,
        }).then((response):any => {
            console.log(response);
        }).catch((error)=> {
            console.log(error);
        })
    },[]);
    return (
        <>
            <HelmetProvier title='IP Manager'/>
            <ThemeNavigation/>
            <Box>
                {array.map((content, i)=> (
                    <MainContentLine title={content}/>
                ))}
            </Box>
        </>
    )
}

const Box = styled.div`
    width: 100vw;
    max-width: 1200px;
    margin-top: 40px;
    margin-bottom: 40px;
    min-height: calc(100vh - 252px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 32px;
`