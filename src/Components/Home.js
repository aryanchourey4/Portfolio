import React from 'react'
import '../styles/Home.css'
import MyPic from '../Mypic2.jpg'
import { Player } from '@lottiefiles/react-lottie-player';
import { useSelector } from 'react-redux'


export default function Home() {
	const darkState = useSelector(state => state.darkmode.value);
	return (
		<>
			<div className={`home-out-container ${darkState ? "dark" : ""}`}>
				<div className='home-in-container' >
					<div className="box" id='hi-box'>
						<div className='hi-anim'>
							<Player
								autoplay={true}
								loop={true}
								controls={false}
								src="/lotties/91598-hi-hand.json"
								style={{ height: '50px', width: '50px' }}
							></Player>
						</div>
						<h1 id='HomeHeading'>Hi, I'm <span className='highlight'>Aryan Chourey</span></h1>
					</div>
					<hr />
					<div className='box' id='box1'>
						<p>I am a sophomore at NSUT pursuing Computer Science and Engineereing with specialization in Big Data Analytics.</p>
					</div>
				</div>
				<div className="box" id='box2'>
					<img src={MyPic} alt="My Pic" />
				</div>
			</div>
		</>
	)
}
