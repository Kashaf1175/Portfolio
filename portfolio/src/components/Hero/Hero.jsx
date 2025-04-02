import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <>
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Building Digital Experience That Inspires</h2>
            <p>Passionate Frontened Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions</p>
        </div>
        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                    <img src="./react.png" alt="" />
                </div>
                <img src="./gir.webp" alt="" className='girl'/>
            </div>
            <div>
                <div className='tech-icon'>
                    <img src="./html.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./css.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./js.png" alt="" />
                </div>
                
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero