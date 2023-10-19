import React from 'react';
import '../../styles/about.css';
import aboutImg from '../../images/about.jpg';


const aboutData = [
    {
        icon:'ri-time-line',
        title:'Experiance',
        desc:'With years of experience in the insurance industry, we possess the knowledge and experiance necessary to providing our clients with reliable and effective insurance solutions'
    },
    {
        icon:'ri-hand-coin-line',
        title:'Trust and Integrity',
        desc:'Trust is the cornerstone of our business. we take pride in our ethical practices,transparent commnication and commitment to always acting in the best interests of our clients.'
    },
    {
        icon:'ri-shake-hands-line',
        title:'Personalized Service',
        desc:'We believe in building strong relationships with our clients.Our team of dedicated insurance professionals takes the time to understand your unique situation,providing personalized advice and tailored coverage options'
    },
]

const About = () => {
  return (
    <section id='about'>
        <div className="container">
            <div className="about_wrapper">
                <div className="about_content">
                <h6 className='subtitle'>Why choose us</h6>
                <h2>we look forward to serving you and becoming your trusted insurance partner for years to come</h2>
                <h2 className='highlight'> contact us today to get started!</h2>
                <p className='description about_desc'>We are dedicated to providing reliable insurance solutions and exceptional
                service to our valued clients. with over 10 years of experiance in the industry, we have established ourselves as a trusted partner for individuals and business alike.</p>
                  <div className='choose_item_wrapper'>
                    {
                        aboutData.map((item,index)=>(
                            <div className="choose_us_item" key={index}>
                    <span className='choose_icon'>
                    <i class={item.icon}></i>
                    </span>
                    <div>
                        <h4 className='choose_us_title'>{item.title}</h4>
                        <p className='description'>{item.desc}</p>
                    </div>
                 </div>
                        ))
                    }
                  </div>
                </div>

                <div className="about_img">
                    <img src={aboutImg} alt=''/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
