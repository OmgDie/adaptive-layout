import React, { useState, useEffect, useRef } from 'react';
import arrow from '../img/arrow.svg';
import '../styles/Section.css';

const Accordion = (props) => {
    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef()

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    const toggleState = () => {
        setToggle(!toggle)
    }
    return (
        <div>
            <li className='liStyle' onClick={toggleState}>
                    <img className='marker' src= { props.img } />
                    <p className={toggle? 'textList-active' : 'textList'}>Lorem ipsum, dolor sit amet adipisicing elit.
                        <div
                        className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
                        style={{height: toggle ? `${heightEl}` : '0px'}}
                        ref={refHeight}
                        >
                        <p>Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit</p>
                        </div>
                    </p>
                    <img className={toggle && "active"} src={arrow} alt='accordion'/>
            </li>
        </div>
    );
};

export default Accordion;