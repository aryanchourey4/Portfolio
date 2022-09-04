import React from 'react'
import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useSelector } from 'react-redux'


export default function Footer() {
  const darkState = useSelector(state => state.darkmode.value);
  return (
    <>
      <div className={`footGrow ${darkState ? "dark" : ""}`}></div>
      <footer className={`footer ${darkState ? "dark" : ""}`}>
        <div className='footer-container'>
          <div className='footer-icons'>
            <a href="https://github.com/aryanchourey4" target={'_blank'}><FontAwesomeIcon className='icons' icon={brands('github')} /></a>
            <a href="https://www.linkedin.com/in/aryan-chourey/" target={'_blank'}><FontAwesomeIcon className='icons' icon={brands('linkedin')} /></a>
            <a href="mailto: aryanchourey4@gmail.com"><FontAwesomeIcon className='icons' icon={solid('envelope')} /></a>
          </div>
          <div className='footer-text'>
            Made with &lt;3 by Aryan Chourey.
          </div>
        </div>
      </footer>
    </>
  )
}
