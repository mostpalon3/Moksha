import React from 'react'
import Background from './components/Background'
import Gallery from './pages/Gallery'
import FAQ from './pages/FAQ'
import Timeline from './pages/Timeline'
import Contacts from './pages/Contacts'

function App() {
  return (
    <div className="scroll-smooth">
      <Background>
        <div className="text-[200px] text-white">Scroll Vertical</div>
        <Gallery />
        <FAQ />
        <Timeline/>
        <Contacts/>
      </Background>
      
    </div>
  )
}

export default App
