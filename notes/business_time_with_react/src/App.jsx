import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const body = document.querySelector('body');
        const scanLine = document.createElement('div');
        scanLine.style.position = 'absolute';
        scanLine.style.top = '0';
        scanLine.style.left = '0';
        scanLine.style.width = '100%';
        scanLine.style.height = '5px';
        scanLine.style.background = 'rgba(0, 240, 255, 0.1)';
        scanLine.style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.5)';
        scanLine.style.zIndex = '99';
        scanLine.style.pointerEvents = 'none';
        body.appendChild(scanLine);
        
        let scanPosition = 0;
        const animateScanLine = () => {
            scanPosition += 2;
            if (scanPosition > window.innerHeight) {
                scanPosition = 0;
            }
            
            scanLine.style.top = `${scanPosition}px`;
            requestAnimationFrame(animateScanLine);
        };
        
        requestAnimationFrame(animateScanLine);

function App() {

  return (
    <div className='app'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
