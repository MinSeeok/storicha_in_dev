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
    const [boxWidth, setBoxWidth] = React.useState<string>('pc-medium');
    const array = ['지금 뜨는 콘텐츠', '새로 올라온 콘텐츠', '다시보기 추천 콘텐츠', '오직 IP Studio에서', 'IP Studio 인기 콘텐츠'];
    const boxWidthRef = React.useRef<any>(null);
    React.useEffect(()=>{
        Aos.init({
            duration: 600,
        })
        axios({
            method: 'POST',
            url: `https://api-v2.storicha.in/api/Event/GetListsForDiscover?page=1&page_rows=24&me_user_idx=0&search_text&event_content_type_idx=2&stage_labeling_type_idx=0&scope_type_idx=0&topic_idxs&sort_type_name=date&genres_type_idxs`,
            withCredentials: true,
        }).then((response):any => {
            console.log(response);
        }).catch((error)=> {
            console.log(error);
        });
        setInnerWidth(window.innerWidth);
        const handleResize = () => {
            setInnerWidth(window.innerWidth);
            if(boxWidthRef.current.offsetWidth >= 984){
                setBoxWidth('pc-medium');  
            }
            else if(boxWidthRef.current.offsetWidth >= 824){
                setBoxWidth('pc-small');  
            }
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[]);
    return (
        <>
            <HelmetProvier title='IP Manager'/>
            <ThemeNavigation/>
            <h1 style={{fontSize: '35px'}}>{boxWidth}</h1>
            <Box ref={boxWidthRef}>
                {array.map((content, i)=> (
                    <MainContentLine title={content} width={innerWidth} box={boxWidth} key={`main-container-${i}`}/>
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
    @media screen and (max-width: 1320px) {
        max-width: calc(100vw - 40px);
    }
`