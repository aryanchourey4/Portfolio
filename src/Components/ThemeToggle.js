import React from 'react';
import '../styles/ThemeToggle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { toggle } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux'


const ThemeToggle = () => {
    const darkState = useSelector(state => state.darkmode.value)
    const dispatch = useDispatch()

    return (
        <>
            <div className={`toggleBase ${darkState ? "dark" : ""}`} onClick={() => {
                dispatch(toggle())
            }}>
                <div className={`toggleSwitch ${darkState ? "dark" : ""}`} >
                    <FontAwesomeIcon className='icons' id='sun' icon={solid('sun')} />
                    <FontAwesomeIcon className='icons' id='moon' icon={solid('moon')} />
                </div>
            </div>
        </>
    )
}


export default ThemeToggle;