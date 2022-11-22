import Image from "next/image";
import { useRecoilValue } from "recoil";
import { LoadingState } from "recoil/loading";
import styled from "styled-components";
import LoadingIcon from '../assets/icon/loading.svg';

const LoadingContainer = () => {
    const loadState = useRecoilValue(LoadingState);
    return (
        <>
            {loadState ? (
                <LoadingBox>
                    <DarkBackground/>
                    <Image
                        src={LoadingIcon}
                        width={'80px'}
                        height={'80px'}
                        alt={'LOADING...'}
                    />
                </LoadingBox>
            ) : (
                <></>
            )}
        </>
    )
}

const LoadingBox = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999;
    transition: all ease-in-out .15s;
    pointer-events: none;
    img{
        opacity: 1;
    }
`

const DarkBackground = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.6;
    position: absolute;
`

export default LoadingContainer;