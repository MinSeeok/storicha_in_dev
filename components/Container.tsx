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
            <div className="w-full min-h-screen flex flex-col justify-start items-center bg-[#FAFAFA] dark:bg-[#242528] transition-colors">
                <Header/>
                {children}
            </div>
        </>
    )    
}


export default Container;