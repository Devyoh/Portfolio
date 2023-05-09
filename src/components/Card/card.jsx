import React from 'react'
import './card.css'

export default function Card() {
    return (
        <>
            <div className='m-4'>
                <div className='header_card'>
                    <h2>titre</h2>
                </div>
                <div className='body_card'>
                    <p>Contenu</p>
                </div>
                <div className='footer_card'>
                </div>
            </div>

        </>
    )
}
