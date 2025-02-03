import React from 'react'
import Background from './components/Background'
import Gallery from './pages/Gallery'
import FAQ from './pages/FAQ'
import Timeline from './pages/Timeline'
import Contacts from './pages/Contacts'

function App() {
  return (
    <>
      <Background>
        <div className="text-[200px] text-white">Scroll Vertical</div>
        {/* <img src="/src/assets/images/relic.svg" alt="" /> */}
        <Gallery />
        <FAQ />
        <Timeline/>
        <Contacts/>
      </Background>
      
    </>
  )
}

export default App
