import { atom } from "recoil";

export const isUserAtom = atom<any | null>({
    key: `isUser`,
    default: null,
})