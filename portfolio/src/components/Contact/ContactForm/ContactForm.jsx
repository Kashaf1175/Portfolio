import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='contact-form-content'>
        <form action="">
            <div className='name-container'>
                <input type="text" name='firstname' placeholder='firstname' />
                <input type="text" name='lastname' placeholder='lastname' />

            </div>
            <input type="text" name='email' placeholder='email' />
            <textarea type="text" name="message"  placeholder="message" id="" rows={3}></textarea>
            <button>Send</button>

        </form>
    </div>
  )
}

export default ContactForm