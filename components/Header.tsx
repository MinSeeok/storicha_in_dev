import * as React from 'react';
import styled from 'styled-components';

export default function Header(props:any){
    const themeModeHandle = (e:any) => {
        e.preventDefault();
        localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.classList.toggle('dark');
    };
    return(
        <>
            <Box className='hidden dark:block' onClick={themeModeHandle}>
                LIGHT
            </Box>
            <Box className='dark:hidden' onClick={themeModeHandle}>
                DARK
            </Box>
        </>
    )
}

const Box = styled.div`
    position: fixed;
    right: 30px;
    bottom: 20px;
    font-size: 12px;
    background-color: var(--title);
    color: var(--box1);
    font-family: 'GmarketSansMedium';
    padding: 6px 10px;
    border-radius: 28px;
    cursor: pointer;
    z-index: 999999;
`