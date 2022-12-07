import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }
    html{
        font-size: 14px;
        -webkit-text-size-adjust: none;
        font-family: 'Pretendard-Regular';       
        font-display: fallback;
        ${media.tablet}{
            font-size: 10px;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }

    .pc-tablet-only {
        display: block;
        ${media.mobile} {
            display: none;
        }
    }
    .tablet-mobile-only{
        display: none;
        ${media.tablet}{
            display:block;
        }
    }
    .mobile-only {
        display: none;
        ${media.mobile} {
            display: block;
        }
    }
    @media screen and (max-width: 500px) {
        .swal2-html-container{
            font-size: 14px !important;
        }
        .swal2-actions{
            padding: 8px 48px !important;
            width: 100% !important;
            display: flex !important;
            flex-direction: row !important;
            button {
                font-size: 14px !important;
                width: 100%;
                border: none;
                outline: none;
            }
        }
        .swal2-styled.swal2-confirm{
            background-color: var(--point) !important;
        }
    }
`;