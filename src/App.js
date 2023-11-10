import './App.css';
import { MdOutlineMenu } from "react-icons/md"
import HorizonalLine from './component/horizonalLine';
import Header from './component/Header';
import Welcome from './component/Welcome';
import Education from './component/Education';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Footer from './component/Footer';
import { useState } from 'react';




function App() {
  const [openMenu,setOpenMenu] = useState(false)
  return (
    <>
      {
        openMenu && <div className='menu_container'>
                <button onClick={()=>setOpenMenu(false)} className="close">Close</button>
                <a href='#home'>Home</a>
                <a href='#education'>Education</a>
                <a href='#contact'>Contact</a>
                <a href='#welcome'>About</a>
        </div>
      }
      
      <header>
        <div className='top'>
          <div className="logo">Nishant</div>
          <MdOutlineMenu  onClick={()=>setOpenMenu(true)}/>
        </div>
        <Header />
      </header>
      <main>
        <HorizonalLine />
        <Welcome />
        <div className='horizontal_reverse'>
          <HorizonalLine />
        </div>
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
