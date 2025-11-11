import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

export default function Contact(){
  const form = useRef()
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    // TODO: Replace the following placeholders with your EmailJS values
    const SERVICE_ID = 'service_gjo96cv'
    const TEMPLATE_ID = 'template_hdcxt38'
    const PUBLIC_KEY = 'COvIyhFKR47o1oJhz'

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text)
        setSent(true)
        setSending(false)
        form.current.reset()
      }, (error) => {
        console.log(error.text)
        alert('Failed to send message — check console for details.')
        setSending(false)
      })
  }

  return (
    <section id="contact" className="section alt">
      <div className="container">
        <h2 className='h2'>Contact</h2>
        <div className="contact-grid">
          <form ref={form} onSubmit={handleSubmit} className="contact-form">
            <input name="from_name" placeholder="Your name" required />
            <input name="reply_to" type="email" placeholder="Your email" required />
            <textarea name="message" rows="6" placeholder="Your message" required />
            <button className="btn" type="submit" disabled={sending}>
              {sending ? 'Sending...' : 'Send Message'}
            </button>
            {sent && <p className="success">Message sent — thank you!</p>}
          </form>

          <div className="contact-info">
            <h3 className='h3'>Get in touch</h3>
            <p>Email: <a href="mailto:patelrahul3501@gmail.com">patelrahul3501@gmail.com</a></p>
            <p>Location: India</p>
            <div className="socials">
              <a href="https://github.com/patelrahul01131" aria-label="github">GitHub</a><br />
              <a href="https://www.linkedin.com/in/rahul-patel-90861a279/" aria-label="linkedin">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
