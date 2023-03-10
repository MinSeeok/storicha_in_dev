import { atom } from "recoil";
import uuid from 'react-uuid'

export const DarkState = atom({
    key: `dark/${uuid()}`,
    default: {
        bgColor: '#1F1F1F',
        boxColor: '#141414',
        boxColor2: '#505050',
        textColor: '#EFEFEF',
        textColor2: '#D7D7D7',
        accentColor: '#44bd32',
        lineColor: '#626262',
        pink: '#F06A6A',

        // projectColor
        background: '#242528',
        container: '#17171A',
        panel: '#242528',
        section: '#2F2F2F',
        opacityDivison: '#FFFFFF',
        box1: '#17171A',
        box2: '#242528',
        box3: '#1D2026',
        line: '#353535',
        borderLine: '#2F2F2F',
        title: '#FFFFFF',
        sub: '#979797',
        placeholder: '#5B5757',
        deactivatedButton: '#878788',
        buttonPrime: '#FCFCFC',
        buttonPrimeFont: '#1D2026',
        buttonSecondary: '#414147',
        buttonSecondaryFont: '#FFFFFF',
        point: '#E45059',
        pointContracst: '#FFFFFF',
        pointText: '#7882F5',
        accent: '#FFBE7C',
        icon1: '#4A4E53',
        icon2: '#878788',
        success: '#00C7C7',
        warning: '#BB1C12',
        transBorder: '#333333',
        unchecked: '#979797',
        checked: '#FE4659',
        layerPopBg: '#242528',
        modalSlideBg: '#242528',
        titleBold: '#1A1B1C',
        iconAccent: '#FFBE7C',
        loginLogo: 'images/logo/dark-logo.png',

        // stori-color
    },
})

export const LightState = atom({
    key: `light/${uuid()}`,
    default: {
        bgColor: '#F6F5F3',
        boxColor: '#EAEAEA',
        boxColor2: '#FAFAFA',
        textColor: '#141414',
        textColor2: '#626262',
        accentColor: '#44bd32',
        lineColor: '#D7D7D7',
        pink: '#F06A6A',

        // projectColor
        background: '#FAFAFA',
        container: '#FFFFFF',
        panel: '#25292F',
        section: '#F6F8FA',
        opacityDivison: '#F7F7F7',
        box1: '#FFFFFF',
        box2: '#F6F8FA',
        box3: '#FAFAFA',
        line: '#FAFAFA',
        borderLine: '#EEEEEE',
        title: '#1A1B1C',
        sub: '#869197',
        placeholder: '#C8C8C8',
        deactivatedButton: '#CDCDCD',
        buttonPrime: '#121212',
        buttonPrimeFont: '#FFFFFF',
        buttonSecondary: '#EBEBEB',
        buttonSecondaryFont: '#1D2026',
        point: '#E45059',
        pointContracst: '#FFFFFF',
        pointText: '#00D6D8',
        accent: '#00C7C7',
        icon1: '#878788',
        icon2: '#4A5E53',
        success: '#7070F8',
        warning: '#BB1C12',
        transBorder: 'transparent',
        unchecked: '#869197',
        checked: '#FE4659',
        layerPopBg: '#FAFAFA',
        modalSlideBg: '#F6F8FA',
        titleBold: '#1A1B1C',
        iconAccent: '#E45059',
        loginLogo: 'images/logo/dark-logo.png',
    },
})

export const isThemeAtom = atom<boolean>({
    key: `isTheme/${uuid()}`,
    default: true,
})

export const isPointThemeAtom = atom<string>({
    key: `isTheme/${uuid()}`,
    default: '#1e272e',
})

export const isMobileAtom = atom<Boolean | Boolean[] | undefined>({
    key: `isMobile/${uuid()}`,
    default: false,
})