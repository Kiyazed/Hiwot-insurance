import React from 'react';
import '../../styles/intro.css';
import introDarkImg from '../../images/freepik.jpg';
import lightImg from '../../images/intro-img.jpg';
import { Link } from "react-router-dom"; 
import Typewriter from "typewriter-effect";

const Intro = ({theme}) => {
  return <section id='home'>
    <div className="container">
        <div className="intro_wrapper">
            <div className="intro_content">
                <div>
                <h2>We are your </h2>
                <h2>safety net </h2>
                <div className='type'>

                <Typewriter 
 
 onInit={(typewriter) => {
     typewriter
         .typeString("in times of uncertainty")
         .pauseFor(1000)
         .deleteAll()
         .typeString("Hiwot Insurance ")
         .start();
 }}
/>
</div>
               {/* <h2 className='highlight'>times of uncertainty</h2>*/}
                </div>
                <p className='description'>putting your worries to rest with reliable and affordable insurance.</p>
                 
                 
                 <div className='intro_btns'>
                   <button className='primary_btn'>Get started</button>
                    <button className='secondary_btn'>Read more</button>
                 </div>
            </div>

            <div className="intro_img">
                <img src={ theme==='light-theme' ? lightImg : introDarkImg} alt='intro'/>

            </div>
        </div>
    </div>
  </section>
}

export default Intro
