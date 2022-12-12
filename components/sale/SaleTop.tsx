import axios from 'axios';
import { SalePolicyEnum } from 'enum/data-type';
import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';
import styled from 'styled-components';

const SaleTop = () => {

    // get Idx
    const router = useRouter();
    const idx = router.asPath.substring(router.asPath.indexOf('idx=') !== -1 ? router.asPath.indexOf('idx=')+4 : router.asPath.length);

    const [contentData, setContentData] = React.useState<SalePolicyEnum | null>(null);

    React.useEffect(()=>{
        axios({
            method: 'GET',
            url:`https://api-v2.storicha.in/api/saleset?series_idx=${idx}`,
            withCredentials: true,
        })
        .then((response):any => {
            setContentData(response.data.response_data);
        })
        .catch((error) => {
            console.log(error);
        });
    },[]);
    return (
        <Container>
            <div className='left-box'>
                <div className='image-box'>
                    <Image
                        src={`/images/test/95ec9d3731d6eeef263b52761a6a12543f07cb8f.gif`}
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
                <span className='series-name' onClick={()=> console.log(contentData)}>시리즈명</span>
                <span className='series-title'>{contentData?.series_title ? contentData?.series_title : 'None-Title'}</span>
                
            </div>
            <div className='right-box'>
                <div className='right-text-box'>
                    <div className='top-text-box'>
                        <p><span>배급사</span>씨엠닉스</p>
                        <p><span>최종 임시저장일</span>{contentData?.selling_start_date ? moment(contentData?.selling_start_date).format('YYYY-MM-DD HH:SS') : '0000-00-00 00:00' }</p>
                    </div>
                    <div className='bottom-text-box'>
                        <p><span>진행현황</span>판매중</p>
                        <p><span>최종 판매승인일</span>{contentData?.update_date ? moment(contentData?.update_date).format('YYYY-MM-DD HH:SS') : '0000-00-00 00:00' }</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 1024px;
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    background-color: var(--box1);
    margin: 24px 0;
    .left-box, .right-box{
        width: 100%;
        display: flex;
        align-items: center;
    }
    .left-box{
        justify-content: flex-start;
    }
    .right-box{
        justify-content: flex-end;
        .right-text-box{
            min-width: 500px;
            min-height: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 32px;
            .top-text-box ,.bottom-text-box{
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                font-size: 20px;
                p{
                    color: var(--title);
                    span{
                        color: var(--sub);
                        margin-right: 8px;
                    }
                }
            }
        }
    }
    .image-box{
        width: 80px;
        height: 100px;
    }
    .series-name{
        margin-left: 12px;
        font-size: 22px;
        color: var(--sub);
    }
    .series-title{
        margin-left: 18px;
        font-size: 22px;
        color: var(--title);
    }
    @media screen and (max-width: 880px) {
        .series-name, .series-title{
            font-size: 18px;
        }
        .top-text-box ,.bottom-text-box{
            font-size: 16px !important;
        }
    }
`

export default SaleTop;