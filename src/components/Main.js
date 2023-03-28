import React from 'react';
import '../styles/Main.css';
import Berry from '../img/box 2.png';
import HeadPhones from '../img/Headphones.svg';
import Square from '../img/Square.svg';
import Tablet from '../img/Tablet.svg';
import Oval from '../img/Oval.svg';

const Main = () => {
    return (
        <div>
            <main>
                <div>
                    <div className='line'/>
                    <p className='mainHeader'>
                        LOREM IPSUM, DOLOR SIT AMET CONSECTETUR  
                    </p>
                </div>
                <div>
                    <figure>
                        <img src={HeadPhones} alt="HeadPhones"/>
                        <figcaption>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</figcaption>
                    </figure>
                    <figure>
                        <img src={Square} alt="Square"/>
                        <figcaption>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</figcaption>
                    </figure>  
                </div>
                <div className='secondStr'>
                    <figure>
                        <img src={Tablet} alt="Tablet"/>
                        <figcaption>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</figcaption>
                    </figure>
                    <img className='pic' src={Berry} alt='berry'/>
                    <figure>
                        <img src={Oval} alt="Oval"/>
                        <figcaption>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</figcaption>
                    </figure>
                </div>    
                <div>
                    <figure>
                        <img src={HeadPhones} alt="HeadPhones"/>
                        <figcaption>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</figcaption>
                    </figure>
                    <figure>
                        <img src={Square} alt="Square"/>
                        <figcaption>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</figcaption>
                    </figure>
                </div>    
            </main>
        </div>
    );
};

export default Main;