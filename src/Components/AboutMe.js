import React from 'react'
import '../styles/AboutMe.css'
import { Player } from '@lottiefiles/react-lottie-player';
import { useSelector } from 'react-redux'


export default function AboutMe() {
  const darkState = useSelector(state=>state.darkmode.value);
  return (
    <>
      <div className={`aboutMe ${darkState ? "dark" : ""}`}>
        <div id="aboutMe-container">
          <h1>About Me</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, quidem! Reiciendis beatae placeat facere illo tenetur odit, a maxime expedita harum saepe? Et, velit non quidem, aliquam optio adipisci voluptate vel magni modi, nihil molestias sed doloremque laudantium. Animi a quasi cumque illo eius voluptatibus? Veritatis adipisci placeat in suscipit!</p>
        </div>
        <div id='aboutMe-lottie'>
          <Player
            autoplay={true}
            loop={true}
            controls={false}
            src="/lotties/7vzAhE6SPn.json"
            style={{ height: 'auto', width: '30vw' }}
          ></Player>
        </div>
      </div>
    </>
  )
}
