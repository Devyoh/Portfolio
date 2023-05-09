import React from 'react'

export default function ContactForm() {
    return (
        <>
            <form className=' border' action="submit" method="post">
                <label htmlFor="Entrez votre email">
                    <input type="email" placeholder='Entrez votre Email' name="" id="" />
                </label>
                <label htmlFor="">
                    <input type="text" name="" id="" />
                </label>
                <label htmlFor="Vous souhaitez être recontacté par téléphone ?">
                    <input type="tel" name="tel" id="" />
                </label>
            </form>
        </>
    )
}
