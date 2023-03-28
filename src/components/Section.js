import React, { useState, useEffect, useRef } from 'react';
import '../styles/Section.css';
import { LoremIpsum } from 'react-lorem-ipsum';
import Avatar from '../img/Avatar.svg';
import commaUp from '../img/commaUp.svg';
import quotes from '../img/quotes.svg';
import first from '../img/first.svg';
import second from '../img/second.svg';
import third from '../img/third.svg';
import fourth from '../img/fourth.svg';
import fifth from '../img/fifth.svg';
import arrow from '../img/arrow.svg';

const Section = () => {
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
        <div className='frame'>
            <section>
                <div>
                    <div className='line'/>
                    <p className='headerSec'>
                        Lorem ipsum, dolor sit amet consectetur <br/> adipisicing elit. 
                    </p>
                </div>
                <div className='blockSection'>
                    <img className='avatar' src={Avatar} alt="Avatar"/>
                    <div className='commaUp1'>    
                        <img className='commaUp2' src={commaUp} alt="CommaUp"/>
                        <img className='commaUp2' src={commaUp} alt="CommaUp"/>
                    </div>
                        <div className='txtSig'>
                            <LoremIpsum random={false} avgSentencesPerParagraph={12}/>
                            <div className='commaDown1'>
                                <p className='signature'>Jane Doe</p>
                                <img className='commaDown2' src={quotes} alt="quotes"/>
                            </div>
                        </div>
                </div>
                <div className='blockSection'>
                    <div className='txtSig'>
                        <LoremIpsum random={false} avgSentencesPerParagraph={3}/>
                        <p className='signature'>Jane Doe</p>
                    </div>
                        <img className='avatarSmall' src={Avatar} alt="Avatar"/>
                        <img className='avatarSmall' src={Avatar} alt="Avatar"/>
                    <div className='txtSig'>
                        <LoremIpsum random={false} avgSentencesPerParagraph={3}/>
                        <p className='signature'>Jane Doe</p>
                    </div>
                </div>
            </section>
            <section className='anotherSec'>
                <div>
                    <div className='line'/>
                    <p className='mainHeader'>
                        Lorem ipsum, dolor sit <br/> adipisicing elit 
                    </p>
                    <p>
                        Porro ab rerum omnis magnam eligendi error nobis dolore?
                    </p>
                </div>
                <ul className='list'>
                    <li className='liStyle'>
                        <img className='marker' src={first} alt='stability'/>
                        <p className='textList'>Lorem ipsum, dolor sit amet adipisicing elit.</p>
                        <img className='arrow' src={arrow} alt='accordion'/>
                    </li>
                    <li className='liStyle'>
                        <img className='marker' src={second} alt='LED'/>
                        <p className='textList'>Lorem ipsum, dolor sit amet adipisicing elit.</p>
                        <img className='arrow' src={arrow} alt='accordion'/>
                    </li>
                    <li className='liStyle' onClick={toggleState}>
                        <img className='marker' src={third} alt='ligths off'/>
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
                    <li className='liStyle' onClick={toggleState}>
                        <img className='marker' src={fourth} alt='splitter'/>
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
                    
                    <li className='liStyle'>
                        <img className='marker' src={fifth} alt='power off'/>
                        <p className='textList'>Lorem ipsum, dolor sit amet adipisicing elit.</p>
                        <img className='arrow' src={arrow} alt='accordion'/>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Section;