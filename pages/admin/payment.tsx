import * as React from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import Moment from 'react-moment';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';

interface getDataInterface {
    number: number,
    email: string,
    name: string,
    tag: string,
    startDate: string,
    endDate: string,
    withdrawal: number,
    remittance: number,
    discount:number,
    vat: number,
    cycle: number,
    state: number
}
interface requestInterface{
    state: string,
    className: string,
}
export default function PaymentList(){
    const [beginView, setBeginView] = React.useState(false);
    const [beginDate, setBeginDate] = React.useState(new Date());

    const [endView, setEndView] = React.useState(false);
    const [endDate, setEndDate] = React.useState(new Date());
    
    const handleChange1 = (value:any) => {
        if(value > endDate) return alert("잘못된 입력입니다");
        setBeginDate(value);
        setBeginView(false);                                                                                                                                                                                                                      
    }
    const handleChange2 = (value:any) => {
        if(value < endDate) return alert("잘못된 입력입니다");
        setEndDate(value);
        setEndView(false);
    }
    const dataCount = 12345;
    const requestState:requestInterface[] = [
        {
        state: '출금신청',
        className: 'state1'
        },
        {
        state: '송금진행중',
        className: 'state2'
        },
        {
        state: '송금완료',
        className: 'state3'
        },
        {
        state: '고객응대중',
        className: 'state4'
        },
        {
        state: '시스템오류',
        className: 'state5'
        },
        {
        state: '출금신청거부',
        className: 'state6'
        },
    ];
    const getData:getDataInterface[] = [
        {
        number: 200,
        email: 'onyeol.hwang@naver.com',
        name: '황온열',
        tag: 'onyeolpapa',
        startDate: '2022-01-05',
        endDate: '2022-01-09',
        withdrawal: 10000,
        remittance: 90000,
        discount: 0,
        vat: 10000,
        cycle: 1,
        state: 0
        },
        {
        number: 199,
        email: 'ironsoo.kim@gmail.com',
        name: '김철수',
        tag: 'ironsoo',
        startDate: '2022-01-05',
        endDate: '2022-01-09',
        withdrawal: 18000,
        remittance: 90000,
        discount: 0,
        vat: 10000,
        cycle: 3,
        state: 1
        },
        {
        number: 198,
        email: 'jihoon_yoo@daum.net',
        name: '유지훈',
        tag: 'ranedie',
        startDate: '2022-01-05',
        endDate: '',
        withdrawal: 5000,
        remittance: 90000,
        discount: 3.3,
        vat: 33000,
        cycle: 2,
        state: 2
        },
        {
        number: 197,
        email: 'parkhere@kakao.com',
        name: '박희열',
        tag: 'redehkdeed',
        startDate: '2022-01-05',
        endDate: '',
        withdrawal: 6000,
        remittance: 90000,
        discount: 3.3,
        vat: 33000,
        cycle: 1,
        state: 3
        },
        {
        number: 196,
        email: 'hongsoo@hotmail.com',
        name: '홍수진',
        tag: 'missHong',
        startDate: '2022-01-05',
        endDate: '',
        withdrawal: 1250,
        remittance: 90000,
        discount: 3.3,
        vat: 33000,
        cycle: 1,
        state: 4
        },
        {
        number: 195,
        email: 'msangkook@gmail.com',
        name: '문상국',
        tag: 'red_dotkingman',
        startDate: '2022-01-05',
        endDate: '',
        withdrawal: 8589595,
        remittance: 90000,
        discount: 3.3,
        vat: 33000,
        cycle: 3,
        state: 5
        },
    ]
  const commaNumber = (number:number) => {
        const parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
  }
    return (
        <>
            <Box>
                <TopLine>
                <span className='title'>출금통계</span>
                <div className='selectBox'>
                    <select name="" id="">
                    <option value="">이번달</option>
                    <option value="">전체누적</option>
                    <option value="">오늘</option>
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                    </svg>
                </div>
                <div>
                    <div className='calBox' onClick={()=> {
                        setEndView(false);
                        setBeginView((e) => !e);
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <Moment format='YYYY/MM/DD'>
                        {beginDate}
                    </Moment>
                    </div>
                    <div className='calContentBox'>
                    {beginView &&
                        <Calendar 
                        onChange={handleChange1} 
                        formatDay={(locale: any, date: any) => moment(date).format("DD")}
                        value={beginDate}
                        minDetail='month'
                        maxDetail='month'
                        showNeighboringMonth={false}
                        className={'reactCalendar startDate'}
                        />
                    }
                    </div>
                </div>
                <span className='or'>부터</span>
                <div>
                    <div className='calBox' onClick={()=> {
                        setBeginView(false);
                        setEndView((e) => !e);
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <Moment format='YYYY/MM/DD'>
                        {endDate}
                    </Moment>
                    </div>
                    <div className='calContentBox'>
                    {endView &&
                        <Calendar 
                        onChange={handleChange2} 
                        formatDay={(locale: any, date: any) => moment(date).format("DD")}
                        value={beginDate}
                        minDetail='month'
                        maxDetail='month'
                        showNeighboringMonth={false}
                        className={'reactCalendar startDate'}
                        />
                    }
                    </div>
                </div>
                <DownButton>회계 및 세무용 엑셀 다운로드</DownButton>
                </TopLine>
                <ContentBox>
                <Top>
                    <div className='line'>
                    <div>
                        <p className='subColor'>지난 달 출금완료 액</p>
                        <p>{commaNumber(59394)} KRW</p>
                    </div>
                    <div>
                        <p className='subColor'>이번 달 출금완료 액</p>
                        <p>{commaNumber(1859394)} KRW</p>
                    </div>
                    <div className='third'>
                        <p className='subColor'>오늘 송금할 금액</p>
                        <p>{commaNumber(15242)} KRW</p>
                    </div>
                    <div className='fourth'>
                        <p className='subColor'>오늘 송금 처리할 건수</p>
                        <p>12건</p>
                    </div>
                    <div className='fifth'>
                        <p className='subColor'>남은 미처리 건수</p>
                        <p>5건</p>
                    </div>
                    </div>
                    <div className='line'>
                    <div>
                        <p className='subColor'>송금완료 액</p>
                        <p>{commaNumber(59394)}KRW</p>
                    </div>
                    <div>
                        <p className='subColor'>송금 완료 액</p>
                        <p>{commaNumber(95159394)} KRW</p>
                    </div>
                    <div className='thirdnormal'>
                        <p className='subColor'>출금 신청 예정액</p>
                        <p>{commaNumber(1859394)} KRW</p>
                    </div>
                    <div>
                        <p className='subColor'>법인 출금 요청 수</p>
                        <p>12건</p>
                    </div>
                    <div>
                        <p className='subColor'>개인 출금 요청 수</p>
                        <p>245건</p>
                    </div>
                    </div>
                </Top>
                <Center>
                    <div className='topLine'>
                    <div className='selectBox'>
                        <select name="" id="">
                        <option value="email">이메일 계정</option>
                        <option value="nickname">닉네임</option>
                        <option value="idx">회원IDX</option>
                        <option value="name">실명</option>
                        <option value="productReview">상품평</option>
                        </select>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className='inputBox'>
                        <input type="text" placeholder='검색'/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                    <div className='rightBox'>
                        <span>선택 기간 내 <b>{dataCount}</b> 개</span>
                        <div className='selectBox left'>
                        <select name="" id="">
                            <option value="">전체 출금 신청 일순</option>
                            <option value="">출금 신청만 보기</option>
                            <option value="">송금 진행 중</option>
                            <option value="">송금 완료 일 순</option>
                            <option value="">고객 응대 중</option>
                            <option value="">시스템 오류</option>
                            <option value="">출금 신청 거부</option>
                            <option value="">출금 요청 금액 크기 순</option>
                            <option value="">출금 요청 금액 적은 순</option>
                        </select>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                        </svg>
                        </div>
                    </div>
                    </div>
                    <div className='contentLine head'>
                    <div className='no'>No</div>
                    <div className='email'>이메일 계정</div>
                    <div className='name'>실명</div>
                    <div className='date'>날짜</div>
                    <div className='withdrawal'>출금요청액</div>
                    <div className='remittance'>송금완료액</div>
                    <div className='cycle'>포함된주기</div>
                    <div className='state'>상태</div>
                    <div className='datail'>상세보기</div>
                    </div>
                    {getData.map((content, i) => (
                        <div className='contentLine' key={i}>
                            <div className='no'>{content.number}</div>
                            <div className='email'><p>{content.email}</p></div>
                            <div className='name'><p>{content.name}<br/>(@{content.tag})</p></div>
                            <div className='date'>
                            <p>(출금요청) {content.startDate === '' ? '--' : content.startDate}</p>
                            <p>(송금완료) {content.endDate === '' ? '--' : content.endDate}</p>
                            </div>
                            <div className='withdrawal'><p>{commaNumber(content.withdrawal)}</p></div>
                            <div className='remittance'>
                            <p>
                                {content.remittance}<br/>
                                ({content.discount === 0 ? "VAT" : content.discount+'%'} {commaNumber(content.vat)})
                            </p>
                            </div>
                            <div className='cycle'><p>{content.cycle}</p></div>
                            <div className='state'><p className={requestState[content.state].className}>{requestState[content.state].state}</p></div>
                            <div className='datail'><button>상세보기</button></div>
                        </div>
                    ))}
                </Center>
                </ContentBox>
            </Box>
        </>
    )
}

const Box = styled.div`
    width: 100%;
    max-width: 1200px;
    /* 나중에 삭제 */
    min-height: 300px;
    padding: 24px;
    background-color: var(--box1);
    border-radius: 8px;
    z-index: 999;
    h1{
        margin-top: 20px;
    }
`
const TopLine = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 12px;
    border-bottom: 1.4px solid var(--buttonSecondary);
    color: var(--title);
    .title{
        font-size: 22px;
        font-weight: bold;
    }
    .selectBox{
        select{
            width: auto;
            width: 120px;
            padding: 6px 8px;
            border-radius: 4px;
            font-size: 16px;
            margin-left: 36px;
            font-weight: bold;
            color: var(--title);
            background-color: var(--buttonSecondary);
            outline: none;
            border: none;
            -webkit-appearance: none;
            -moz-appearance: none; 
            appearance: none;
        }
        svg{
            position: absolute;
            font-size: 16px;
            top: 50%;
            right: 2px;
            transform: translateY(-50%);
            color: var(--title);
        }
    }
    .or{
        font-size: 18px;
        margin-left: 8px;
    }
    .calBox{
        color: var(--title);
        background-color: var(--buttonSecondary);
        padding: 5px 12px;
        font-size: 18px;
        border-radius: 4px;
        margin-left: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 150px;
        cursor: pointer;
        svg{
            font-size: 20px;
            margin-right: 8px;
        }
    }
    .calContentBox{
        position: absolute;
        left: 0;
        width: 100vw;
        z-index: 9999;
        .react-calendar{
            width: auto;
            max-width: 500px;
            position: absolute !important;
            top: 10px;
            left: 0px;
            background-color: var(--box1);
            color: var(--title);
            border: 1px solid var(--title);
            .react-calendar__navigation{
                div, button{
                    background-color: var(--box1);
                    color: var(--title);
                    font-size: 22px;
                }
                .react-calendar__navigation__arrow{
                    &:hover{
                        background-color: var(--box2);
                    }
                }
                .react-calendar__navigation__label{
                    font-size: 16px;
                }
            }
            .react-calendar__month-view__weekdays{
                abbr{
                text-decoration: none;
                font-size: 16px;
                font-weight: 500;
                }
            }
            .react-calendar__tile {
                color: var(--title);
                font-size: 16px;
                &:hover{
                background-color: var(--box2);
                }
            }
            .react-calendar__month-view__days__day--weekend{
                color: rgb(235, 59, 90);
            }
            .react-calendar__tile--now{
                background-color: var(--pointText);
            }
            .react-calendar__tile--active{
                background-color: transparent;
            }
            .dot{
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
            }
            &::before{
                position: absolute;
                content: '';
                top: -10px;
                left: 40px;
                width: 20px;
                height: 20px;
                transform: rotate(45deg);
                background-color: var(--box1);
                border: 1px solid var(--title);
                border-top-left-radius: 8px;
            }
        }
    }
`
const DownButton = styled.button`
    position: absolute;
    right: 0;
    padding: 5px 12px;
    background-color: var(--buttonSecondary);
    color: var(--title);
    border: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
`
const ContentBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .line{
        width: 100%;
        max-width: 460px;
        padding: 28px 0;
        gap: 18px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        p:nth-child(1){
            text-align: left;
        }
        p{
            width: 100%;
            text-align: right;
            font-size: 20px;
            color: var(--title);
        }
        }
        .third{
        margin-top: 18px;
        color: rgb(254, 211, 48);
        }
        .fourth{
        color: #E9446C;
        }
        .fifth{
        color: rgb(69, 170, 242);
        }
        .thirdnormal{
        margin-top: 18px;
        }
    }
    .subColor{
        color: var(--sub);
    }
`
const Center = styled.div`
    width: 100%;
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .topLine{ 
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        select{
        width: 120px;
        font-size: 16px;
        padding: 6px 8px;
        background-color: var(--buttonSecondary);
        color: var(--title);
        border: none;
        outline: none;
        border-radius: 4px;
        -webkit-appearance: none;
        -moz-appearance: none; 
        appearance: none;
        }
        .selectBox{
            svg{
                position: absolute;
                font-size: 16px;
                top: 50%;
                right: 2px;
                transform: translateY(-50%);
                color: var(--title);
            }
        }
        .selectBox.left{
            select{
                width: auto;
                padding-left: 24px;
                padding-right: 4px;
                background-color: transparent;
                font-size: 18px;
            }
            svg{
                position: absolute;
                font-size: 20px;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
            }
        }
        .inputBox{
            input{
                width: 200px;
                font-size: 16px;
                padding: 6px 36px 6px 8px;
                border: none;
                outline: none;
                margin-left: 18px;
                background-color: var(--buttonSecondary);
                color: var(--title);
                border-radius: 4px;
            }
            svg{
                position: absolute;
                right: 4px;
                top: 50%;
                transform: translateY(-50%);
                color: var(--title);
            }
        }
        .rightBox{
            position: absolute;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 28px;
            font-size: 18px;
            color: var(--title);
            b{
                color: var(--point);
            }
        }
    }
    .contentLine{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 0 12px 0;
            background-color: var(--box2);
            margin-top: 4px;
            font-size: 14px;
            color: var(--title);
        div{
            display: flex;
            justify-content: center;
            align-items: center;
            word-break:break-all;
        p{
            width: 100%;
        }
        }
        .no{
            width: 60px;
        }
        .email{
            width: 120px;
        p{
            width: 100%;
        }
        }
        .name{
                width: 100px;
        }
        .date{
            width: 140px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 8px;
        }
        .withdrawal{
            width: 100px;
        p{
            text-align: center;
        }
        }
        .remittance{
            width: 90px;
        p{
            text-align: left;
        }
        }
        .cycle{
            width: 80px;
        p{
            text-align: center;
        }
        }
        .state{
            width: 80px;
        p{
            text-align: center;
        }
        .state1{
            color: #F47575;
        }
        .state2{
            color: #08A98C;
        }
        .state3{
            color: #889AF8;
        }
        .state4{
            color: #FAA97C;
        }
        .state5{
            color: #D74848;
        }
        .state6{
            color: #979797;
        }
        }
        .datail{
            width: 120px;
        }
        button{
            padding: 4px 0;
            width: calc(100% - 16px);
            border-radius: 4px;
            border: none;
            outline: none;
            background-color: var(--box3);
            color: var(--title);
            cursor: pointer;
            font-size: 14px;
            transition: all .125s ease-in-out;
            &:hover{
                background-color: var(--buttonSecondary);
                color: var(--buttonSecondaryFont);
            }
        }
    }
    .contentLine.head{
        margin: 8px 0 4px 0;
    }
`