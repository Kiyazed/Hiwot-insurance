import React from 'react';
import '../../styles/service.css';

const serviceData = [
    {
        icon:'ri-hand-heart-line',
        title:'life and health insurance',
        desc:' our Insurance guarantees your wellbeing and flows with you towards a future that is peaceful and full of life.'
    },
    {
        icon:'ri-car-line',
        title:'travel insurance',
        desc:'Wherever your journey takes you, our Insurance is there to secure you every step of the way.'
    },
    {
        icon:'ri-home-heart-line',
        title:'General insurance',
        desc:'We support your everyday flow of business towards profitability, wellness and comfortable flow of your life.'
    },
]

const Service = () => {
  return (
    <section id='service'>
        <div className='container'>
            <div className="service_top">
                <h6 className='subtitle'>Our Services</h6>
                <h2>Insurance that empowers you to live with confidence and peace of mind</h2>
                <h2 className='highlight'>our best services</h2>
            </div>

            <div className='service_item_wrapper' >
                {
                    serviceData.map((item,index)=>(
                        <div className="service_item" key={index}>
                    <span className='service_icon'><i class={item.icon}></i>
                    </span>
                    <h3 className='service_title'>{item.title}</h3>
                    <p className='description'>{item.desc}</p>

                </div>
                    ))
                }
            </div>

        </div>

    </section>
  )
}

export default Service
