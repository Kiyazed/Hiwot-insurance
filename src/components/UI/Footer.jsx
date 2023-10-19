import React from 'react';
import '../../styles/footer.css';

const links =[
    {
        path:'#',
        display:'policy'
    },
    {
        path:'#',
        display:'Agents'
    },
    {
        path:'#',
        display:'Company'
    },
];

const links2 =[
    {
        path:'#',
        display:'pricing'
    },
    {
        path:'#',
        display:'Documentation'
    },
    {
        path:'#',
        display:'Contact us'
    },
];

const links3 =[
    {
        path:'#about',
        display:'About',
    },
    {
        path:'#',
        display:'Location',
    },
    {
        path:'#blog',
        display:'Blog',
    },
];

const Footer = () => {

    const year = new Date().getFullYear()
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer_wrapper">
                <div className="footer_logo">
                    <h2>Hiwot Insurance</h2>
                    <p className="description">Grow with us!</p>
                    <p className="small_text description">
                      When you choose <span className='highlight'>Hiwot Insurance</span>, you can have peace of mind knowing that your financial future is in good hands.
                      We are proud to have earned the trust of our policyholders and have been recognized for our financial strength and stability.
                    </p>
                </div>

                <div className="footer_links">
                    <h3 className="links-title">Solutions </h3>
                    <ul className='quick-links'>
                        {
                            links.map((item,index)=>(
                                <li className="links-item" key={index}>
                                    <a href={item.path}>{item.display}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="footer_links">
                    <h3 className="links-title">Solutions </h3>
                    <ul className='quick-links'>
                        {
                            links2.map((item,index)=>(
                                <li className="links-item" key={index}>
                                    <a href={item.path}>{item.display}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="footer_links">
                    <h3 className="links-title">Solutions </h3>
                    <ul className='quick-links'>
                        {
                            links3.map((item,index)=>(
                                <li className="links-item" key={index}>
                                    <a href={item.path}>{item.display}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
               
            </div>
            <p className="copyright">&copy; Copyrights {year}, developed by Kiya. All rights reserved.</p>
        </div>

    </footer>
  )
}

export default Footer
