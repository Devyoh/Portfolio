import React from 'react'

import { FaRegEye, FaCheck } from 'react-icons/fa'

export default function ConnectForm() {
    return (
        <>
            <div className='bg-slate-200 drop-shadow rounded-2xl'>
                <div className='title-form'>
                    <h2>Formulaire de connexion</h2>
                </div>
                <form className=" flex flex-col p-2" action="submit" method="post">
                    <input className='border rounded-lg justify-center mx-auto my-2 p-1' placeholder='Saisissez votre email' type="email" name="email" id="" />
                    <input className='border rounded-lg justify-center m-auto p-1' placeholder='Saisissez un mot de passe' type="password" name="password" id="" icon={<FaRegEye />} />
                    <div className=' flex justify-center'>
                        <button className=' flex flex-row w-1/2 h-full justify-center m-2 p-2' type="submit" value="Valider">
                            <FaCheck />
                            <span>Valider</span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
