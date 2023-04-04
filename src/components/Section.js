import React from 'react';
import '../styles/Section.css';
import { LoremIpsum } from 'react-lorem-ipsum';
import Avatar from '../img/Avatar.svg';
import commaUp from '../img/commaUp.svg';
import quotes from '../img/quotes.svg';
import Accordion from './Accordion';

const Section = () => {
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
                    <Accordion img={require('../img/first.svg')}/>
                    <Accordion img={require('../img/second.svg')}/>
                    <Accordion img={require('../img/third.svg')}/>
                    <Accordion img={require('../img/fourth.svg')}/>
                    <Accordion img={require('../img/fifth.svg')}/>
                </ul>
            </section>
        </div>
    );
};

export default Section;