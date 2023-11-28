import common from '@/app/styles/common.module.css'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const MovieCard = (curElem) => {
    const { id, type, title, synopsis } = curElem.jawSummary;
    return (
        <>
            <div className={common.card}>
                <div className={common.card_image}>
                    <Image key={curElem.jawSummary.id} src={curElem.jawSummary.backgroundImage.url} alt={title} width={260} height={200} />
                </div>
                <div className={common.card_data}>
                    <h2>{title.substring(0, 18)}</h2>
                    <p>{`${synopsis.substring(0, 65)} ...`}</p>
                    <Link href={`/movie/${id}`}>
                        <button>Read More</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MovieCard