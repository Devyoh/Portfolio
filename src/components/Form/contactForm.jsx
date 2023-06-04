import React, { useState } from "react";



export default function ContactForm() {
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [message, setMessage] = useState('')
  const [fake_field, setFakeField] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();    
  }

  return (
    <>
      <div className="w-4/5">
        <form
          className="rounded-xl bg-cyan-radient flex flex-col space-y-2 m-auto py-10"
          action="submit"
          method="post"
        >
          <h1 className="text-center">Contactez moi directement</h1>
          <div className="flex flex-row w-4/5 m-auto justify-around" >
         
            <div className="flex flex-col p-5">
              <label className="text-left" htmlFor="lastName">Nom*</label>
              <input
                required
                className="border rounded-sm p-1"
                placeholder="Votre nom"
                type="text"
                id="lastName"
                name="lastName"
                autoFocus
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>
            <div className="flex flex-col p-5">
              <label className="text-left" htmlFor="firstName">Prénom*</label>
              <input
                required
                className="border rounded-sm p-1"
                placeholder="Votre prénom"
                type="text"
                id="firstName"
                name="firstName"
                
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-row w-4/5 m-auto justify-around">
            <div className="flex flex-col p-5">
              <label className="text-left" htmlFor="email">Email*</label>
              <input
                className="border rounded-sm p-1"
                placeholder="Votre adresse e-mail"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col p-5">
              <label className="text-left" htmlFor="tel">Téléphone*</label>
              <input
                required
                className="border rounded-sm p-1"
                type="tel"
                placeholder="Fixe ou portable"
                name="tel"
                onChange={e => setTel(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col p-5 w-4/5 m-auto">
            <label className="text-left" htmlFor="message">Votre message</label>
            <textarea
              maxLength={1200}
              className="w-full h-32 max-h-72 m-auto p-1"
              id="message"
              name="message"
              value={message}
              placeholder="Merci de bien vouloir détailler votre demande"
              onChange={e => setMessage(e.target.value)}
            />
          </div>
          <input type="hidden" name="fake_field" value={fake_field} onChange={e => setFakeField(e.target.value)} />
          <button
            className="bg-cyan-radient w-1/3 p-1 m-auto rounded-md text-white hover:bg-slate-900"
            type="submit">
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
}
