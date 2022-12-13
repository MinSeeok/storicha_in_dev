import { atom } from "recoil";
import uuid from 'react-uuid'

export const ThemeChangeState = atom<boolean>({
    key: `isThemeChange/${uuid()}`,
    default: false,
});