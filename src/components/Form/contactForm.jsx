import React from 'react'

export default function ContactForm() {
    return (
        <>
            <div>
                <form className='rounded-xl bg-form-radient flex flex-col space-y-2 m-auto text-center py-5' action="submit" method="post">
                    <label  htmlFor="Entrez votre email">
                        <input className='border rounded-sm p-1' type="email" placeholder='Saisissez votre Email' name="email" id="" />
                    </label>
                    <label htmlFor="">
                        <input className='border rounded-sm p-1' type="text" placeholder='Saisissez votre Nom' name="nom" id="" />
                    </label>
                    <label htmlFor="">
                        <input className='border rounded-sm p-1' type="text" placeholder='Saisissez votre Prénom' name="prénom" id="" />
                    </label>
                    <label htmlFor="tel">
                        <input className="border rounded-sm p-1" type="tel" placeholder='ex: 0565656565' name="tel" id="" />
                    </label>
                    <label htmlFor="png">
                            <input type="file" name="png" id="" aria-errormessage="Veuillez sélectionner un fichier au format 'PNG','JPEG' ou 'JPG'" />                    
                    </label>
                    <button className='bg-form-radient w-1/3 p-1 m-auto rounded-md text-white hover:bg-slate-900'>
                        <span>Envoyer</span>
                    </button>
                </form>
            </div>

        </>
    )
}
