import React from 'react';
import '../../styles/news.css';

const News = () => {
  return (
   <section className='news'>
    <div className="container">
        <div className="news_wrapper">
            <div className="news_content">
                <h6 className="subtitle">Let's Work</h6>
                <h2>Explore the <span className='highlight'>hidden</span> ideas and subscribe !</h2>
            </div>

            <div className="news_form">
                <input type='email' placeholder='Enter your Email'/>
                <button className='secondary_btn'> subscribe now</button>
            </div>
        </div>
    </div>

   </section>
  )
}

export default News
