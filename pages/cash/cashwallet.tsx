import * as React from 'react';
import styled from 'styled-components';
import "aos/dist/aos.css";
import Box from 'components/Box';
import moment from "moment";
import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { LoginState } from 'recoil/user';
import { LoginMadalState } from 'recoil/loginModal';
import { BalanceType } from 'enum/data-type';
import { useRouter } from 'next/router';

export default function CashWallet(){
    const [selectTab, setSelectTab] = React.useState("payment");
    const [fetchData, setFetchData] = React.useState<any>(null);
    const [usageDetails, setUsageDetails] = React.useState<any>(null);
    const [error, setError] = React.useState<any>(null);
    const setLoginModal = useSetRecoilState(LoginMadalState);
    const [balance, setBalance] = React.useState<BalanceType | null>({
        balance: 0,
        balance_by_bonus: 0,
        balance_by_subscription: 0,
        balance_by_topup: 0,
    });
    const [useAmount, setUseAmount] = React.useState<number>(0);

    // get Idx
    const router = useRouter();
    const postCart = () => {
        if(login === null){
            return;
        }
        console.log('Get Cash...');
        axios({
            method: 'GET',
            url: `https://api-v2.storicha.in/api/cash-wallet?InfoType=2`,
            headers: {
                "Content-Type": "multipart/form-data"
            },
            withCredentials: true,
        }).then((response):any => {
            console.log('response-data');
            console.log(response.data.response_data);
            if(response.data.response_data === undefined){
                alert('데이터를 불러오는데 문제가 발생하셨습니다.');
                setLoginModal(true);
            }
            console.log(response.data.response_data.Topup);
            console.log(response.data.response_data.Subscription);
            console.log(response.data.response_data.Bonus);
            setBalance({
                balance: Number(response.data.response_data.Topup)+Number(response.data.response_data.Subscription)+Number(response.data.response_data.Bonus),
                balance_by_bonus: Number(response.data.response_data.Bonus),
                balance_by_subscription: Number(response.data.response_data.Subscription),
                balance_by_topup: Number(response.data.response_data.Topup),
            });
        }).catch((error)=> {
            console.log(error);
        })
    }
    const fetchDatas = async () => {
        try {
            // error, data 초기화
            setError(null);
            setFetchData(null);
            // loading state true
            const getData = await axios.get(
                'https://api-v2.storicha.in/api/payment/history/1?display_yn=y&product_id=0',{withCredentials:true}
            )
            setFetchData(getData.data);
            const getDataSecond = await axios.get(
                'https://api-v2.storicha.in/api/wallet-history/1?display_yn=y&product_id=0',{withCredentials:true}
            )
            setUsageDetails(getDataSecond.data);
        } catch(e) {
            setError(e);
            console.log(error);
        }
    };
    const NoneData = () => {
        setFetchData(null);
        setUsageDetails(null);
        setSelectTab('payment');
    }
    const login = useRecoilValue(LoginState);
    React.useEffect(()=> {
        console.log('cashWallet ReWrite..!!');
        login === null && setLoginModal(true);
        login !== null ? fetchDatas() : NoneData()
        login !== null && postCart();
    },[login]);
    React.useEffect(()=> {
        login !== null ? fetchDatas() : NoneData()
        login !== null && postCart();
    },[]);
    const commaNumber = (number:number) => {
        const parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    }
    return(
        <Box>
            <TopTitle>보유 CASH</TopTitle>
            <TopTitleLine/>
            <HaveCash>{balance?.balance} TC</HaveCash>
            <PaymentDetail>
                <Detail>
                    <img src="/images/icons/won.svg" alt=""/>
                    <p>충전액 &gt;</p>
                    <p><b>{balance?.balance_by_topup}</b>TC</p>
                </Detail>
                <Detail>
                    <img id="cash_icon" src="/images/icons/coinplus.svg" alt=""/>
                    <p>월구독액 &gt;</p>
                    <p><b>{balance?.balance_by_subscription}</b>TC</p>
                    <span>소멸예정 D30</span>
                </Detail>
                <Detail>
                    <img id="cash_icon2" src="/images/icons/CoinPlus2.svg" alt=""/>
                    <p>적립액 &gt;</p>
                    <p><b>{balance?.balance_by_bonus}</b>TC</p>
                </Detail>
            </PaymentDetail>
            <Tab className={selectTab === "payment" ? "payment" : "use"}>
                <TabBox className={selectTab === "payment" ? "active" : ""} onClick={()=>setSelectTab("payment")}>결제내역</TabBox>
                <TabBox className={selectTab === "payment" ? "" : "active"} onClick={()=>setSelectTab("use")}>사용내역</TabBox>
            </Tab>
            <List className={selectTab === "payment" ? "" : "hide"}>
            {(fetchData && fetchData.response_data[0]) ? fetchData.response_data.map((content: { approval_date: null; canceled_date: null; payment_method: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; pay_amt_krw: number; cash_topup_amt: number; }, i: React.Key | null | undefined) => {
              if((content.approval_date !== null || content.canceled_date !== null))
                return (
                  <ListItem key={i}>
                      <ItemBox>
                          <p className='time'>{content.approval_date ? moment(String(content.approval_date)).format('YYYY-MM-DD-HH:SS') : moment(String(content.canceled_date)).format('YYYY-MM-DD-HH:SS')}</p>
                          <p className='method'>{content.approval_date ? content.payment_method : content.payment_method+'(결제취소)'}</p>
                          <span className='amount'>{content.pay_amt_krw && commaNumber(content.pay_amt_krw)}원</span>
                          <div>
                              <p className='charge'>+{content.cash_topup_amt && commaNumber(content.cash_topup_amt)} TC</p>
                              <button>상세보기</button>
                          </div>
                      </ItemBox>
                  </ListItem>
                )
            }) : (
                <p style={{marginTop: '36px', fontSize: '22px'}}>결제내역이 존재하지 않습니다</p> 
            )}
            </List>
            <List className={selectTab === "payment" ? "hide" : ""}>
            {(usageDetails && usageDetails.response_data[0]) ? usageDetails.response_data.map((content:any, i:any ) => (
                <ListItem key={i}>
                    <ItemBox>
                        <p className='time'>{moment(String(content.create_date)).format('YYYY-MM-DD-HH:SS')}</p>
                        <p className='useMethod' style={{ color: '#000000' }}>{content.purpose_category}</p>
                        <p className='useAmount'>{content.purpose_detail.length < 11 ? content.purpose_detail : content.purpose_detail.slice(0,11)+"..."}</p>                       
                        <div>
                            <p className='balancecount'style={content.spend_earn_type.includes('earn_by') ? {color: '#E9446C'} : {color:'#889AF8'}} >{content.spend_earn_type.includes('earn_by') ? '충전' : '사용'}</p>
                            <p className='balance'>잔액: 999TC</p>
                        </div>
                    </ItemBox>
                </ListItem>
            )): (
                <p style={{marginTop: '36px', fontSize: '22px'}}>사용내역이 존재하지 않습니다</p> 
            )}
            </List>
        </Box>
    )
}
const TopTitle = styled.span`
    font-size: 24px;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    position: absolute;
    top: 24px;
    left: 30px;
    background-color: var(--box1);
    z-index: 9999;
    padding-right: 8px;
    padding-left: 8px;
    color: var(--title);
    font-weight: 700;
    letter-spacing: -.6px;
`
const TopTitleLine = styled.div`
    border-top: 1.8px solid var(--line);
    position: absolute;
    width: calc(100% - 60px);
    top: 34px;
    @media screen and (max-width: 500px) {
        width: 100%;
    }
`
const HaveCash = styled.p`
    font-size: 36px;
    margin-top: 64px;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    letter-spacing: -.4px;
    text-align: center;
    color: var(--title);
`
const PaymentDetail = styled.div`
    position: relative;
    padding-top: 20px;
    padding-bottom: 12px;
    width: 100%;
    height: auto;
    background-color: #3B3B3B;
    margin-top: 24px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border-radius: 6px;
`
const Detail = styled.div`
    width: 100%;
    display: flex;
    height: 96px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: #FFFFFF;
    gap: 6px;
    p{
        font-size: 18px;
    }
    b{
        letter-spacing: -0.8px;
        font-size: 20px;
        margin-right: 2px;
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        font-weight: 600;
    }
    span{
        font-size: 16px;
        margin-top: 4px;
        color: #D7D7D7;
    }
`
const Tab = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
    margin-top: 16px;
    padding-bottom: 8px;
    &::after{
        content: '';
        position: absolute;
        bottom:4px;
        left: 0;
        width: 50%;
        height: 4px;
        background-color: var(--point);
        transition: all .1s ease-in-out;
    }
    &.use::after{
        transform: translateX(100%);
    }
`
const TabBox = styled.div`
    width: 100%;
    padding: 12px 0;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .1s ease-in-out;
    color: var(--title);
    &.active{
        color: var(--point);
        cursor: auto;
    }
`

const List = styled.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: var(--title);
  background-color: var(--box1);
  gap: 8px;
  &.hide{
    display: none;
  }
`
const ListItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: var(--title);
    background-color: var(--box1);
    margin-bottom: 32px;
    .head{
        width: 100%;
        padding: 18px 8px;
        font-size: 20px;
        border-bottom: 1.8px solid var(--sub);
        display: flex;
        align-items: center;
        svg {
            position: absolute;
            right: 4px;
            cursor: pointer;
        }
    }
    div {
        margin-bottom: 24px;
    }
`
const ItemBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 12px 8px;
    gap: 4px;
    .time{
        font-size: 18px;
        color: #a7a7a7;
    }
    .method{
        font-size: 20px;
        font-weight: bold;
    }
    .useMethod{
        font-size: 20px;
        font-weight: bold;
        color: #a7a7a7;
    }
    .amount{
        font-size: 20px;
    }
    .useAmount{
        font-size: 20px;
        margin-top: 12px;
        /* color: #a7a7a7; */
    }
    div{
        position: absolute;
        right: 4px;
        bottom: -12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        gap: 6px;
        .charge{
            font-size: 18px;
            color: var(--poing);
        }
        button{
            border: 1.4px solid var(--sub);
            color: var(--title);
            outline: none;
            padding: 2px 6px;
            font-size: 16px;
            background-color: transparent;
            cursor: pointer;
            border-radius: 4px;
        }
        .balancecount{
            font-size: 20px;
            margin-top: 5px;
            letter-spacing: -.4px;
        }
        .balance{
            font-size: 20px;
            margin-top: 8px;
            letter-spacing: -.4px;
        }
    }
`