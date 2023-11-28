import hero from '@/app/styles/hero.module.css'
import common from '@/app/styles/common.module.css'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mulish } from 'next/font/google'
const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
})
const Hero = ({ title, imageUrl }) => {
    return (
        <>
            <main className={hero.main_section}>
                <div className={common.container}>
                    <div className={common.grid_two_section}>
                        <div className={hero.hero_content}>
                            <h1>{title}</h1>
                            <p> From award-winning dramas to blockbuster action movies, we&apos;ve got you covered.
                                Browse our selection of the latest and greatest movies, and find your new favorite today.
                            </p>
                            <Link href="/movie"><button className={mulish.className}>Explore Movies</button></Link>
                        </div>
                        <div className={hero.hero_image}>
                            <Image src={imageUrl} width={450} height={350} alt="Let's waching movies" />
                        </div>
                    </div>
                    <div className={hero['custom-shape-divider-bottom-1681647578']}>
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                            preserveAspectRatio="none">
                            <path
                                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                                className={hero["shape-fill"]}></path>
                        </svg>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Hero;