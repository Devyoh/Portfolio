import React from 'react'
import Card from '../Card/card'

export default function Gallery() {


    return (
        <>
            <div className='m-auto pt-4 container grid md:grid-cols-3 grid-cols-1'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}
