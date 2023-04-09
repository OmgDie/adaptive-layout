import React, { useState, useEffect, useRef } from 'react';
import arrow from '../img/arrow.svg';
import '../styles/Section.css';

const Accordion = (props) => {
    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef();
    const menuRef = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    useEffect(() => {
        let handler = (e) => {
            if(e.target) {
                setToggle(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return() => {
            document.removeEventListener('mousedown', handler);
        }
    });

    const toggleState = () => {
        setToggle(!toggle)
    }
    return (
        <div ref={menuRef}>
            <li className='liStyle' onClick={toggleState}>
                <img className='marker' src= { props.img } alt='icons' />
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