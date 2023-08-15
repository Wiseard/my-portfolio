import { useRef, useState } from 'react'
import { useGlobalContext } from '../../context/global_context'
import emailjs from '@emailjs/browser'
import './contact.css'

const Contact = () => {
  const { isScrolling } = useGlobalContext()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [formConfirmed, setFormConfirmed] = useState(false)

  const form = useRef()
  function handleSubmit(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_3kaqtft',
        'template_kflquki',
        form.current,
        `${import.meta.env.VITE_EMAIL_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          // console.log(result.text)
          setFormConfirmed(true)
          setName('')
          setEmail('')
          setMessage('')
          setTimeout(() => setFormConfirmed(false), 10000)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <section className="contact-container">
      <h2
        className={`contact-title ${isScrolling ? 'show-contact-title' : ''}`}
      >
        HELL0
      </h2>
      <div className="contact grid">
        {/* CONTACT SOCIALS */}
        <div className="contact-content">
          <p>
            Wether you're looking to collaborate, if you have a project in mind
            or are simply interested in finding out more, get in touch and let’s
            get things moving.
          </p>
          <div className="contact-reach">
            <p>
              Email:&nbsp;
              <a href="mailto:florentbaleinier@gmail.com">
                florentbaleinier@gmail.com
              </a>
            </p>
            <p>
              My socials:&nbsp;
              <a
                href="http://fr.linkedin.com/pub/florent-baleinier/9b/570/88b/"
                target="_blank"
              >
                Linkedin
              </a>
              &nbsp;/&nbsp;
              <a href="https://github.com/Wiseard" target="_blank">
                Github
              </a>
            </p>
          </div>
        </div>
        {/* CONTACT FORM */}
        <div className="contact-form-container">
          <h3>Let's talk</h3>
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="user_name"
              id="name"
              placeholder="Name*"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="Email*"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              name="message"
              id="message"
              placeholder="Message*"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="btn-contact-submit">
              send
            </button>
          </form>
          <div
            className={`form-message-confirmation ${
              formConfirmed ? 'show-form-message-confirmation' : ''
            }`}
          >
            <p>Thank you for your message!</p>
            <p>
              If your inquiry is urgent, please send me a request on Linkedin.
              Otherwise, i'll come back to you within 48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
