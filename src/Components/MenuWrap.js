import React from 'react';
import { useState } from 'react';
import '../styles/MenuWrap.css'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import OutsideAlerter from '../Hooks/ClickOutside';



const MenuWrap = () => {
    const [menuState, setMenuState] = useState(false);
    const darkState = useSelector(state => state.darkmode.value);


    return (
        <OutsideAlerter callback={() => {setMenuState(prev => !prev)}}>

            <div className={`menuWrap ${darkState ? "dark" : ""}`} onClick={() => {
                setMenuState((menuState) => {
                    return !menuState;
                })
            }}>
                <div className={`menuIcon ${menuState ? "active" : ""}`} >
                    <div className="line"></div>
                    <div className='cross'>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="listWrap">
                    <ul className="listWrapList">
                        <li className='menuWrapContents'><Link to="/">Home</Link></li>
                        <li className='menuWrapContents'><Link to="about">About Me</Link></li>
                        <li className='menuWrapContents'><Link to="skills">Skills</Link></li>
                        <li className='menuWrapContents'><Link to="hobbies">Hobbies</Link></li>
                        <li className='menuWrapContents'><Link to="contact">Contact Me</Link></li>
                    </ul>
                </div>
            </div>
        </OutsideAlerter>
    )
}


export default MenuWrap;