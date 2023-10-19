import React from 'react';
import '../../styles/blog.css';
import videoImg from '../../images/video_play.mp4';
import imageBlog from '../../images/blogphoto3.jpg';
import articleImg from '../../images/blogphoto2.jpg';
import image2 from '../../images/intro-img.jpg';

const blogData = [
    {
       imgurl: imageBlog,
       title:'House insurance',
       desc:'Do you know about the house insurance we provide for you...',
       linkUrl:'#'
    },
    {
        imgurl: articleImg,
        title:'General insurance',
        desc:'We are here to protect you against the risk of financial loss or property damage',
        linkUrl:'#'
     },
     {
        imgurl: image2,
        title:'Travel insurance',
        desc:'Millions of use travel insurance to protect their trips across the g... ',
        linkUrl:'#'
     },
   
   

]

const Blog = () => {
  return (
    <section id='blog'>
        <div className='container'>
        <div className='blog_top'>
                <h6 className='subtitle'>Our blog</h6>
                <h2>Let's have a look from our<span className='highlight'> recent blog</span></h2>
            </div>
        <div class="card_wrapper" > 

    <div class="card">
      <img src='https://images.unsplash.com/photo-1637763723578-79a4ca9225f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80' alt=''/>

     <div className="info">
        <h1>Policy </h1>
        <p>A company insurance policy is a contract between an insurance company and a company or its subsidiaries,
             which provides financial protection or reimbursement..</p>
     <button>Read More</button>
     </div>
    </div>

    <div className="card">
        <img src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80' alt=''/>
        <div className="info">
            <h1>Life</h1>
            <p>life insurance policies are a major expense and commitment, it's critical to do proper due diligence to make sure the company you choose has a solid track 
            </p>
            <button>Read More</button>
        </div>
    </div>

    <div className="card">
        <img src='https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt=''/>
        <div className="info">
            <h1>Travel</h1>
            <p>Travel insurance can provide a safety net allowing you to book a long-awaited trip with ease. Travel insurance is designed to cover many of the top concerns and financial risks of …
            </p>
            <button>Read More</button>
        </div>
    </div>

    

  </div>
        </div>
    </section>
  )}


export default Blog
