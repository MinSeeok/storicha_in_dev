import axios from "axios";
import { BalanceType } from "enum/data-type";
import Image from "next/image";
import Router from "next/router";
import * as React from "react";
import { useSetRecoilState } from "recoil";
import { LoginMadalState } from "recoil/loginModal";
import styled from "styled-components";
import ContentImage from '../../assets/images/4beab4b1b4486f76581b8b75d8041717a030eff8.gif';

const UseToriCash = ({idx, check, kind, price, sale, item, viewModal}:any) => {
    // login-modal
    const setLoginModal = useSetRecoilState(LoginMadalState);
    const [balance, setBalance] = React.useState<BalanceType | null>({
        balance: 0,
        balance_by_bonus: 0,
        balance_by_subscription: 0,
        balance_by_topup: 0,
    });
    const [useAmount, setUseAmount] = React.useState<number>(0);
    const postCart = () => {
        console.log('Post Cart Start...');
        console.log(idx, check.join(), kind);
        axios({
            method: 'POST',
            url: `https://api-v2.storicha.in/api/cash-popup`,
            headers: {
                "Content-Type": "multipart/form-data"
            },
            data: {
                series_idx: idx,
                event_for_sale_idxs: check.join(),
                purchase_type: kind === '소장' ? 'keep' : 'rental'
            },
            withCredentials: true,
        }).then((response):any => {
            console.log(response.data.response_data);
            if(response.data.response_data === undefined){
                alert('데이터를 불러오는데 문제가 발생하셨습니다.');
                setLoginModal(true);
            }
            setBalance({
                balance: Number(response.data.response_data.userWallet.bonus)+Number(response.data.response_data.userWallet.subscription)+Number(response.data.response_data.userWallet.topup),
                balance_by_bonus: Number(response.data.response_data.userWallet.bonus),
                balance_by_subscription: Number(response.data.response_data.userWallet.subscription),
                balance_by_topup: Number(response.data.response_data.userWallet.topup),
            });
            setUseAmount(Number(response.data.response_data.userWallet.topup));
            console.log('Post Cart End.');
        }).catch((error)=> {
            console.log(error);
        })
    }
    const balanceChange = (event: any) => {
        event.target.value === 'subscription' && setUseAmount(balance ? balance?.balance_by_subscription : 0);
        event.target.value === 'topup' && setUseAmount(balance ? balance?.balance_by_topup : 0);
        event.target.value === 'bonus' && setUseAmount(balance ? balance?.balance_by_bonus : 0);
    }
    const modalClose = () => {
        viewModal(false);
        axios({
            method: 'POST',
            url: `https://api-v2.storicha.in/api/cash-popup/cancel`,
            headers: {
                "Content-Type": "multipart/form-data"
            },
            data: {
                series_idx: idx,
            },
            withCredentials: true,
        }).then((response):any => {
            console.log(response);
            console.log('Post Cart End.');
        }).catch((error)=> {
            console.log(error);
        })
    }
    React.useEffect(()=>{
        // getBalance();
        postCart();
    },[])
    return (
        <Container>
            <DarkBackground/>
            <Wrapper>
                <TitleHead>
                    <h1>토리캐시(TC) 사용하기</h1>
                    <svg onClick={modalClose} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </TitleHead>
                <SelectBox>
                    <select onChange={balanceChange} name="" className="select" defaultValue="1">
                        <option value="topup">충전액 보유잔고 {balance ? balance.balance_by_topup : 0}TC</option>
                        <option value="subscription">월구독액 보유잔고 {balance ? balance.balance_by_subscription : 0}TC</option>
                        <option value="bonus">적립액 보유잔고 {balance ? balance.balance_by_bonus : 0}TC</option>
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </SelectBox>
                <ContentBox>
                    <h1 onClick={()=>console.log(balance)}>사용처</h1>
                    <div className="content">
                        <div className="img">
                            <Image
                                layout="fill"
                                objectFit="cover"
                                src={ContentImage}
                                alt={'TITLE-IMAGE'}
                            />
                        </div>
                        <div className="content-text">
                            <p>양과 여우들의 밤 ({kind})</p>
                            <p className="content-price">EP <span>{item.length}</span> 개</p>
                        </div>
                    </div>
                    <ul>
                        <li>나의 캐시 지갑에 충전된 잔액에서 아래 캐시만큼 소진 됩니다.</li>
                        <li>사용하기를 누르면 열람한 것으로  간주 됩니다.</li>
                    </ul>
                    <div className="priceBox">
                        <p className="basis">
                            <span>가격</span>
                            <span>{price} TC</span>
                        </p>
                        <p className="discount">
                            <span>할인가</span>
                            <span>{sale} TC</span>
                        </p>
                    </div>
                    {useAmount >= sale ? (
                        <button>사용하기</button>
                    ) : (
                        <>
                            <p className="chage-message">잔고가 부족합니다.<br/>다른 보유잔고를 선택하세요.</p>
                            <button className="charging" onClick={()=> Router.push(`/cash/topup/?idx=${idx}`)}>충전하기</button>
                        </>
                    )}
                </ContentBox>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 999999;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`
const DarkBackground = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.6;
    position: absolute;
`

const Wrapper = styled.div`
    min-width: 400px;
    padding: 16px;
    background-color: var(--bgColor);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 8px;
    transition: all .15s ease-in-out;
    color: var(--title);
    @media screen and (max-width: 500px) {
       min-width: auto;
       margin: 12px;
    }
`
const TitleHead = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        font-size: 20px;
        font-weight: bold;
        pointer-events: none;
    }
    svg {
        position: absolute;
        right: 0;
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
`

const SelectBox = styled.div`
    margin-top: 36px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .select{
        width: 100%;
        border: 1.4px solid #000000;
        -webkit-appearance: none; 
        appearance: none;
        padding: 8px 8px;
        font-size: 16px;
        border-radius: 6px;
        background: var(--boxColor2);
    }
    svg{
        position: absolute;
        right: 10px;
        color: var(--point);
        z-index: 999999;
    }
`
const ContentBox = styled.div`
    margin-top: 42px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-bottom: 12px;
    h1{
        font-size: 18px;
        font-weight: bold;
    }
    .content{
        margin-top: 8px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        .img{
            width: 80px;
            height: 100px;
            border-radius: 8px;
            overflow: hidden;
        }
    }
    .content-text{
        width: calc(100% - 80px);
        height: 100px;
        padding: 4px 8px 0px 10.5px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        p{
            font-size: 18px;
            &.content-price{
                position: absolute;
                left: 10.5px;
                bottom: 4px;
                span {
                    margin: 0px 4px;
                }
            }
        }
    }
    ul {
        width: 100%;
        margin-top: 12px;
        border-top: 1.8px solid #cccccc;
        padding: 12px 14px;
        gap: 4px;
        list-style: disc;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        li{
            font-size: 14px;
            letter-spacing: -.3px;
        }
    }
    .priceBox{
        margin-top: 12px;
        width: 100%;
        display: flex ;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
        p{
            width: 124px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
                font-size: 18px;
                font-weight: bold;
            }
            &.discount{
                color: var(--point);
            }
        }
    }
    button{
        width: 100%;
        margin-top: 18px;
        font-size: 18px;
        padding: 10px;
        background-color: var(--lineColor);
        color: var(--textColor);
        border-radius: 28px;
        font-weight: bold;
        &.charging{
            background-color: var(--point);
            color: var(--bgColor);
            margin-top: 8px;
        }
    }
    .chage-message{
        margin-top: 24px;
        width: 100%;
        font-size: 16px;
        color: var(--point);
        line-height: 18px;
    }
`
export default UseToriCash;