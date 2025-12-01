'use client'

import Image from 'next/image'
import React, {useEffect, useRef} from 'react'


const Hero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2;
        }
    }, []);

    return (
        <section id='hero'>
            <div>
                <h1>MacBook Pro M4</h1>
                <Image src="/title.png" alt="MacBook Title" width={700} height={400} />
            </div>
            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline/>
            <button>Buy</button>
            <p>From $1599 or $133/mo for 12 months</p>
        </section>
    )
}

export default Hero