import React, {useRef, useEffect} from 'react';
import './header.css';
import Emoji from 'react-emoji-render';

const nav_links =[
  {
    path:'#home',
    display:'Home'
  },
  {
    path:'#about',
    display:'About'
  },
  {
    path:'#service',
    display:'Service'
  },
  {
    path:'#blog',
    display:'Blog'
  },

]

const Header = () => {

  const headerRef = useRef(null)

  const menuRef = useRef(null);

  const headerFunc = ()=>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
      headerRef.current.classList.add('header_shrink')
    } else {
      headerRef.current.classList.remove('header_shrink')
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', headerFunc)

    return ()=> window.removeEventListener('scroll', headerFunc)
  },[]);

  const handleClick = e =>{
    e.preventDefault()

    const targetAttr = e.target.getAttribute('href')

    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left:0,
      top: location - 80,
    });
  };

  const toggleMenu = ()=> menuRef.current.classList.toggle('menu_active')

  return (
    <div>
      <header className="header" ref={headerRef}> 
        <div className="conatiner">
            <div className="nav_wrapper">
                <div className="logo">
                 <h2>Hiwot <Emoji text=':heart:' />  Insurance</h2>
                </div>
                {/*nav*/}
                <div className='nav' ref={menuRef} onClick={toggleMenu}>
                <ul className="menu">
                  {
                    nav_links.map((item,index)=>(
                      <li className='menu_item' key={index}><a href={item.path} onClick={handleClick} className='menu_link'>
                        {item.display}</a></li>
                    ))
                    }
                </ul>
                </div>
                {/* --- light mode ---*/}
                <div className="light_mode">
                 
                        <span>
                        <i class="ri-customer-service-2-line"></i> +251-999-999-999
                        </span>
                      

                   
                </div>

                <span className='mobile_menu' onClick={toggleMenu}>
                <i class="ri-menu-line"></i>
                </span>

            </div>
        </div>
      </header>
    </div>
  )
}

export default Header
