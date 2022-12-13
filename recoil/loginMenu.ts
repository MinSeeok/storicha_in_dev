import { atom } from 'recoil';
import uuid from 'react-uuid'


export const LoginMenuState = atom<any | null>({
    key: `isLoginMenu/${uuid()}`,
    default: false,
})