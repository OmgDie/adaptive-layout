import React, { useState, useEffect, useRef } from 'react';
import arrow from '../img/arrow.svg';
import '../styles/Section.css';


let useClickOutside = (handler) => {
    let domNode = useRef();
    useEffect(() => {
        let mayBeHandler = (e) => {
            if(!domNode.current.contains(e.target)) {
                handler();
            } 
        };

        document.addEventListener('mousedown', mayBeHandler);

        return () => {
            document.removeEventListener('mousedown', mayBeHandler)
        }
    });
    return domNode
}

const Accordion = (props) => {
    let [toggle, setToggle] = useState(false)
    let [heightEl, setHeightEl] = useState();

    let refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    let toggleState = () => {
        setToggle(!toggle)
    };

    let domNode = useClickOutside(() => {
        setToggle(false)
    })

    return (
        <div>
            <li className='liStyle' ref={domNode} onClick={toggleState}>
                <img className='marker' src= { props.img } alt='icons' />
                <p className={toggle ? 'textList-active' : 'textList'}>Lorem ipsum, dolor sit amet adipisicing elit.
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