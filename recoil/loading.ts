import { atom } from "recoil";
import uuid from 'react-uuid'

export const LoadingState = atom<boolean>({
    key: `isLoading/${uuid()}`,
    default: false,
});