import './dropdown.css'
import arrow from '../../../assets/Others/arrow.png';
import { useState } from 'react';

export default function Dropdown({title, content}) {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="w-10/12 mx-auto p-4" >
                <h3 className='flex items-center justify-between text-white p-5 bg-cyan-radient'  >
                    {title}
                    <img 
                        onClick={() => setToggle(!toggle)}
                        className={toggle ? 'arrow rotate-0 transition duration-1000 ease-in-out cursor-pointer p-1 w-8 h-5' : 'rotate-180 transition duration-1000 ease-in-out cursor-pointer p-1 w-8 h-5'} 
                        src={arrow} 
                        alt="show content" 
                    />
                </h3>
                <div className={toggle ? 'opacity-100 duration-1000 p-5 text-xl rounded-b-lg bg-cyan-radient-inverse' : 'opacity-0'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p className='' key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div> 
            </div>
        </>
    )
}
