import { atom } from "recoil";

export const LoadingState = atom<boolean>({
    key: `isLoading`,
    default: false,
});