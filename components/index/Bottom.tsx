import Image from "next/image";
import styled from "styled-components";
import companyLogo from '../../assets/images/logo/companyLogo.svg'

const FooterContainer = () => {
    return (
        <Footer>
            <div className="left">
                <div className="company-logo">
                    <Image
                        src={companyLogo}
                        layout='fill'
                        objectFit="cover"
                        alt='company-logo'
                    />
                </div>
                <p className="address">2F, 59-1, Gangnam-daero 6-gil, Seocho-gu, Seoul, Korea<br/>SCOWORK, Inc | 162-88-01168 </p>
                <p className="copyright"> ⓒ SCOWORKS Inc. ALL RIGHTS RESERVED. Privacy policy | Terms of Platform | Contact</p>
            </div>
            <div className="right">
                <div className="wrapper">
                    <span className="title">Support Center</span>
                    <span className="top">Email contact@storicha.in</span>
                    <span>Go to Support Center</span>
                </div>
                <div className="wrapper">
                    <span className="title">Company</span>
                    <span className="top">What We do</span>
                </div>
                <div className="wrapper">
                    <span className="title">Pricing Plan</span>
                    <span className="top">For Freelancer</span>
                    <span>For Team & Enterprise</span>
                    <span>For  Reader Cash Topup</span>
                </div>
                <div className="wrapper">
                    <span className="title">Product</span>
                    <span className="top">Story Creation</span>
                    <span>Story Viewer</span>
                    <span>Story Co-Work</span>
                    <span>NFT manager IPMS</span>
                </div>
            </div>
        </Footer>
    )
}
const Footer = styled.div`
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100vw;
    min-height: 200px;
    background-color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* z-index: 99; */
    .left, .right{
        width: 100%;
        height: 100%;
        padding: 20px 40px;
    }
    .left {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        height: 200px;
        .company-logo{
            width: 188px;
            height: 27px;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .address{
            margin-top: 18px;
            color: #FFFFFF;
            font-size: 16px;
            line-height: 20px;
        }
        .copyright{
            position: absolute;
            left: 40px;
            bottom: 20px;
            color: #FFFFFF;
            font-size: 16px;
        }
    }
    .right {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 52px;
        .wrapper {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            color: #FFFFFF;
            font-size: 16px;
            font-weight: bold;
            .title {
                font-size: 20px;
                margin: 0;
            }
            .top {
                margin-top: 24px;
            }
            span {
                margin-top: 12px;
            }
        }
    }
`

export default FooterContainer;