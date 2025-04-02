import React from 'react'
import './Contact.css'
import ContactInfo from './ContactInfo/ContactInfo'
import ContactForm from './ContactForm/ContactForm'

const Contact = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>
        <div className='contact-content'>
            <div style={{ flex: 1 }}>
                <ContactInfo 
                iconUrl="./bkd.png"
                text="John@program.com"
                />
                <ContactInfo 
                iconUrl="./bkd.png"
                text="John@program.com"
                />
                
            </div>
            <div style={{ flex: 1 }}>
              <ContactForm 
              
              />
            </div>

        </div>
    </section>
  )
}

export default Contact