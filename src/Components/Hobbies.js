import React from 'react'
import '../styles/Hobbies.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Player } from '@lottiefiles/react-lottie-player';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { useSelector } from 'react-redux'


export default function Hobbies() {
  const darkState = useSelector(state => state.darkmode.value);
  return (
    <div id='hobbies-container' className={`hobbies-container ${darkState ? "dark" : ""}`}>
      <div className="hobbies-head">
        <h1>Hobbies</h1>
        <div id='hobbies-anim'>
          <Player
            autoplay={true}
            loop={true}
            controls={false}
            src="/lotties/KRlMkQlJWU.json"
            style={{ height: 'auto', width: '15vw' }}
          ></Player>
        </div>
      </div>
      <div className='hobbies-icons'>
        <div className='hover-icon'>
          <FontAwesomeIcon className='icons' icon={solid('code')} />
          <div className='hover-text'><h3>Coding</h3><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt voluptatibus nesciunt laboriosam eaque illum minus.</p></div>
        </div>
        <div className='hover-icon'>
          <FontAwesomeIcon className='icons' icon={solid('person-running')} />
          <div className='hover-text'><h3>Playing Sports</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, fuga vitae? Iste distinctio facere vero?</p></div>
        </div>
        <div className='hover-icon'>
          <FontAwesomeIcon className='icons' icon={solid('person-biking')} />
          <div className='hover-text'><h3>Cycling</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel libero blanditiis quod, quis sunt ab.</p></div>
        </div>
        <div className='hover-icon'>
          <FontAwesomeIcon className='icons' icon={solid('tv')} />
          <div className='hover-text'><h3>Watching Movies</h3><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure dicta veniam blanditiis debitis, totam hic.</p></div>
        </div>
        <div className='hover-icon'>
          <FontAwesomeIcon className='icons' icon={solid('music')} />
          <div className='hover-text'><h3>Listening to Music</h3><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet iusto nulla vero quam dolores esse.</p></div>
        </div>
      </div>
    </div>
  )
}
