import React, { useState, FormEvent } from 'react'
import emailjs from 'emailjs-com'

const Contact: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [subject, setSubject] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    emailjs
      .sendForm(import.meta.env.VITE_CONTACT_SERVICE_ID!, import.meta.env.VITE_CONTACT_TEMPLATE_ID!, e.target as HTMLFormElement, import.meta.env.VITE_CONTACT_USER_ID!)
      .then(() => {
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
      })
      .catch((error) => {
        console.error('Error sending email:', error.text)
      });
  };

  return (
    <>
      <h1 className='text-center text-3xl text-gray-500'>Contact</h1>
      <form className="contact flex flex-col mx-3 md:m-auto w-auto md:w-[450px]" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
        />
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          required
        />
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          required
          className='min-h-[130px]'
        ></textarea>
        <button type="submit" className=' bg-slate-100 font-medium'>Send</button>
      </form>
    </>
  );
};

export default Contact
