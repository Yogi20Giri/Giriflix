import React from 'react'
import common from '@/app/styles/common.module.css'

const Loading = () => {
    return (
        <>
            <section className={common.loading_section}>
                <div className={common.loading}>
                </div>
            </section>
        </>
    )
}

export default Loading;