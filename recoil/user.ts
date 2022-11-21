import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

/** 페이지가 변경되더라도 상태 유지 */
const { persistAtom } = recoilPersist();

export const LoginState = atom<any | null>({
    key: `isUser`,
    default: null,
    effects_UNSTABLE: [persistAtom],
});