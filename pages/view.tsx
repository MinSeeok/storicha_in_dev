import LoginModalComp from "components/auth/index/login";
import { useRouter } from "next/router";
import * as React from 'react'

export default function View(){
    const router = useRouter();
    const windowOpen = () => {
        window.open('https://api-v2.storicha.in/user/login?ReturnUrl=dev-ipstudio')
    }

    return (
        <>
            {/* <LoginModalComp/> */}
            <button onClick={windowOpen}>테스트</button>
        </>
    )
}
