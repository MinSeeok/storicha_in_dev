import dynamic from "next/dynamic";
import Head from "next/head";
import * as React from 'react';
import styled from "styled-components";

const Header = dynamic(() => import ('./Header'),{
    ssr: false
});

const Container = ({children}:any) => {
    return (
        <>
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </Head>
            <Wrapper className="w-full box-border flex flex-col justify-start items-center bg-[#FAFAFA] dark:bg-[#242528] transition-colors mt-[52px]">
                <Header/>
                {children}
            </Wrapper>
        </>
    )    
}

const Wrapper = styled.div`
    width: 100vw;
    min-height: calc(100vh);
`


export default Container;

