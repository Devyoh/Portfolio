import React, { useState } from 'react'

import './Dropdown.css'

import arrow from './../../assets/arrow.png'

export default function Dropdown({title, content}) {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="dropdown" >
                <h3 className='dropdown_title'  >
                    Notifications 
                    <img 
                        onClick={() => setToggle(!toggle)}
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="show content" 
                    />
                </h3>
                <div className={toggle ? 'dropdown_content' : 'dropdown_content_hidden'}>
                   
                </div> 
            </div>
        </>
    )
}
