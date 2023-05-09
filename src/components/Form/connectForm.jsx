import React from 'react'
import './form.css'

import { FaRegEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function ConnectForm() {
    return (
        <>
            <div className=' m-auto flex flex-col w-1/1 h-1/1'>
                <div className='title-form p-4'>
                    <h2>Se connecter</h2>
                </div>
                <form className=" flex flex-col p-2 bg-slate-200 rounded-xl bg-form-radient" action="submit" method="post">
                    <input className='border rounded-lg justify-center mx-auto my-2 p-1' placeholder='Saisissez votre email' type="email" name="email" id="" />
                    <input className='border rounded-lg justify-center m-auto p-1' placeholder='Saisissez un mot de passe' type="password" name="password" id="" icon={<FaRegEye />} />
                    <div className=' flex justify-center'>
                        <button className=' flex flex-row w-1/3 h-full justify-center m-2 p-2 bg-form-radient hover:bg-form-radient-invert rounded text-white' type="submit" value="Envoyer">
                            <span>Valider</span>
                        </button>
                    </div>
                    <div className='link-redirect text-blue-400 text-sm m-2'>
                        <Link to="/inscription"><span>Créer un compte</span></Link>
                    </div>
                </form>
            </div>
        </>
    )
}
