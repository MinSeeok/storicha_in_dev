import axios from 'axios';
import Box from 'components/Box';
import * as React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import styled from 'styled-components';

interface title {
    title: string;
}
export default function Checkout(title:title){
    const [ meansChange, setMeansChange ] = React.useState<boolean>(false);
    const ClickMeansTab = () => {
        setMeansChange((e) => !e);
    }
    const [means, setMeans] = React.useState('means1'); 
    const [fetchData, setFetchData] = React.useState<any>(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<any>(null);
    const fetchDatas = async () => {
        try {
            // error, data 초기화
            setError(null);
            setFetchData(null);
            // loading state true
            setLoading(true);
            const getData = await axios.get(
                'https://dev-nft.storicha.in/api/payment/method?display_yn=y&product_id=0',{withCredentials:true}
            )
            setFetchData(getData.data);
        } catch(e) {
            setError(e);
            console.log(error);
        }
        setLoading(false);
    };
    React.useEffect(()=> {
        fetchDatas();
    },[]);
    const regex = /[^0-9]/gi;
    return(
        <> 
          {loading ? (
            <h1>로딩 중 입니다.</h1>
          ): (
            <>
              <HelmetProvider>
                  <Helmet title={title.title}/>
              </HelmetProvider>
              <Box>
                  <TopTitle onClick={()=>console.log(fetchData.data)}>구매 상품명</TopTitle>
                  <TopTitleLine/>
                  <PaymentTitle>결제</PaymentTitle>
                  <PaymentInfo>
                      <p><span>TC</span> 100</p>
                      <p>11,000원</p>
                  </PaymentInfo>
                  <MeansSelect onClick={ClickMeansTab}>
                      <p>{fetchData !== null && fetchData.response_data[Number(means.replace(regex, ""))].code_name}</p>
                      {!meansChange ? 
                          <p>
                            변경
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" color='#E9446C' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                          </p> 
                          :
                          <p>
                            닫기
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" color='#E9446C' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                          </p>
                      }
                  </MeansSelect>
                  <MeansBox meansChange={meansChange}>
                      {fetchData && fetchData.response_data.map((content: { code_name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, i: string)=>(
                        <div key={'means'+i} className={'means'+i} id={means === 'means'+i ? "focusMean" : ""} onClick={()=> setMeans('means'+i)}>{content.code_name}</div>
                      ))}
                  </MeansBox>
                  <ButtonBox>
                      <button>결제하기</button>
                      <button>취소하기</button>
                  </ButtonBox>
                  <SubulTitle>구매 전 필수 유의사항</SubulTitle>
                  <Subul>
                      <li>구매한 캐시의 유효기간은 구입일로부터 5년간 입니다.</li>
                      <li>캐시 구매/ 이용내역은 마이 페이지 토리캐시 지갑에서 확인이 가능합니다.</li>
                      <li>150개 이상 구매시 결제 방법에 따라 보너스 캐시를 제공할 수 있습니다. <br/>(신용카드1%,계좌이체2%,가상계좌2%,무통장입금3%)</li>
                      <li>캐시구매 한도가 초과한 경우 구매 불가 합니다. (일 :10,000개 / 월 : 400,000개)</li>
                      <li>캐시구매 한도가 초과한 경우 선물이 불가합니다. (일 : 95,000개 / 월 : 300,000개)당일 한도는 23시59분59초 / 당월 한도는 매월 말일까지 적용 됩니다.</li>
                      <li>미성년자 가입자는 캐시 및 유료 아이템을 구매할 수 없습니다.</li>
                      <li>법정 대리인의 동의 없이 미성년자 명의로 결제한 캐시는 환불이 가능합니다.</li>
                      <li>사용하지 않은 캐시에 한에 구매 후 7일 이내 청약철회가 가능하며, 1:1문의 게시판에 신청해 주시기 바랍니다.</li>
                      <li>유료아이템의 내용 표시. 광고의 내용과 다르거나 계약 내용과 다게 이행된 경우에는 해당 유료 아이템을 공급받은 날부터 3개월 이내, 그 사실을 안 날 또는 알수 있었던 날부터 30일 이내 청약 철회가 가능 합니다.</li>
                  </Subul>
              </Box>
            </>
          )}
        </>
    )
}

const TopTitle = styled.span`
    font-size: 18px;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    position: absolute;
    top: 24px;
    left: 30px;
    background-color: var(--box1);
    z-index: 9999;
    padding-right: 8px;
    color: var(--title);
    @media screen and (max-width: 500px) {
        left: 12px;
    }
`
const TopTitleLine = styled.div`
  border-top: var(--line);
  position: absolute;
  width: calc(100% - 60px);
  top: 33px;
  @media screen and (max-width: 500px) {
    width: calc(100% - 32px);
  }
`
const PaymentTitle = styled.p`
  width: 100%;
  text-align: left;
  color: var(--title);
  font-size: 24px;
  margin-top: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const PaymentInfo = styled.div`
  padding: 16px 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  span{
    font-size: 14px;
    color: var(--point);
  }
`
const MeansSelect = styled.div`
  padding: 8px 12px;
  width: 100%;
  border: 1px solid var(--sub);
  background-color: var(--box1);
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  font-size: 16px;
  cursor: pointer;
  p:nth-child(2){
    display: flex;
    align-items: center;
    color: var(--point);
  }
  svg {
    margin-left: 2px;
  }
`
const MeansBox = styled.div<{meansChange: boolean}>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  row-gap: 8px;
  overflow: hidden;
  height: ${(props) => (props.meansChange ? "auto" : "0px")};
  div {
    width: 32%;
    padding: 16px 0;
    font-size: 16px;
    color: var(--textColor);
    border: 1px solid var(--unchecked);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--box1);
    cursor: pointer;
    @media screen and (max-width: 400px) {
      font-size: 14px;
    }
  }
  #focusMean{
    border-color: var(--point);
  }
`
const SubulTitle = styled.p`
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: var(--title);
  margin-top: 32px;
`
const Subul = styled.ul`
  font-size: 14px;
  line-height: 19px;
  list-style-type: disc;
  padding-left: 18px;
  li:nth-child(1){
    margin-top: 16px;
  }
  li {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    color: var(--title);
  }
`
const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  button{
    width: 49%;
    padding: 10.5px 12px;
    border-radius: 32px;
    border: none;
    outline: none;
    color: var(--box2);
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }
  button:nth-child(1){
    background-color: var(--title);
  }
  button:nth-child(2){
    background-color: var(--buttonSecondary);
    color: var(--title);
  }
`