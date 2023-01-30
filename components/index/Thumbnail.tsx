import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import devImage1 from '@image/img_3183.jpg'
import devImage2 from '@image/img_3888.jpg'

function DevThumbnail({title}:any) {
    return (
        <Container className=''>
            <Image
                src={title === 'title-1' ? devImage1 : devImage2}
                layout='fill'
                alt={'dev-image'}
                className={'image'}
                onClick={()=>console.log(title)}
            />
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    height: 220px;
    min-width: 170px;
    cursor: pointer;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 200ms;
    scroll-snap-align: start;

    .image {
        border-radius: 0.125rem/* 2px */;
        object-fit: cover;
        @media (min-width: 768px){
            border-radius: 0.25rem/* 4px */;
        }
    }
`

export default DevThumbnail;