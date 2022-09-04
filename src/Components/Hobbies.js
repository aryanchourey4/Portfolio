import React from 'react'
import '../styles/Hobbies.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Player } from '@lottiefiles/react-lottie-player';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
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
          <div className='hover-text'><h4>Coding</h4><p>I got in interesterd in coding recently and have been trying to get better. I want to explore various fields starting with web development.</p></div>
        </div>
        <div className='hover-icon'>
          <FontAwesomeIcon className='icons' icon={solid('person-running')} />
          <div className='hover-text'><h4>Playing Sports</h4><p>I enjoy playing different sports, especially badminton. It helps me stay fit and fresh.</p></div>
        </div>
        <div className='hover-icon'>
          <FontAwesomeIcon className='icons' icon={solid('person-biking')} />
          <div className='hover-text'><h4>Cycling</h4><p>Cycling is not only good for physical but also our mental health. I am also able to explore new things in my locality while cycling.</p></div>
        </div>
        <div className='hover-icon'>
          <FontAwesomeIcon className='icons' icon={solid('tv')} />
          <div className='hover-text'><h4>Watching Movies and Shows</h4><p>Everybody loves watching movies and shows. They are a great source of entertainment.</p></div>
        </div>
        <div className='hover-icon'>
          <FontAwesomeIcon className='icons' icon={solid('music')} />
          <div className='hover-text'><h4>Listening to Music</h4><p>Listening to music helps me clear and soothen my mind.</p></div>
        </div>
      </div>
    </div>
  )
}
