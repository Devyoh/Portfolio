import React from 'react'
import { FaCheck } from 'react-icons/fa'

export default function RegisterForm() {
    return (
        <>
            <div className='bg-slate-200 drop-shadow rounded-2xl'>
                <div className='title-form'>
                    <h2>Formulaire d'inscription</h2>
                </div>
                <form action="">
                    <label htmlFor="Entrez votre email">
                        <input type="email" name="email" id="" />
                    </label>
                    <label htmlFor="">
                        <input type="password" name="password" id="" />

                    </label>
                    <label htmlFor="">
                        <input type="tel" name="tel" id="" />

                    </label>
                    <div>
                        <input type="submit" value="Valider" />
                        <FaCheck />
                    </div>
                </form>
            </div>
        </>
    )
}
