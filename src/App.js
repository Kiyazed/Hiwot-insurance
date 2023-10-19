import React, {useState,useEffect} from 'react';

import './App.css';
import Header from './components/Header/Header';
import Intro from './components/UI/Intro';
import Counter from './components/UI/Counter';
import Service from './components/UI/Service';
import About from './components/UI/About';
import Blog from './components/UI/Blog';
import News from './components/UI/News';
import Footer from './components/UI/Footer';

function App() {

  const {theme, setTheme} = useState('')

  const toggleTheme = ()=>{
    theme ==='' ? setTheme('light-theme') : setTheme('')

  }

  useEffect(()=>{
     document.body.className = theme
  },[theme])
  return (
    <>
        <Header theme={theme} toggleTheme={toggleTheme}/>
        <Intro theme={theme}/>
        <Counter/>
        <Service/>
        <About/>
        <Blog/>
        <News/>
        <Footer/>
     </>
    
  );
}

export default App;
