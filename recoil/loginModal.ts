import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

// 페이지 변경시에도 상태 유지
const { persistAtom } = recoilPersist();

export const LoginMadalState = atom<any | null>({
    key: `isLoginModal`,
    default: false,
    effects_UNSTABLE: [persistAtom],
})