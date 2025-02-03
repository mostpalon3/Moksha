import React from 'react'
import Background from './components/Background'
import Gallery from './pages/Gallery'
import FAQ from './pages/FAQ'
import Timeline from './pages/Timeline'

function App() {
  return (
    <>
      <Background>
        <div className="text-[200px] text-white">Scroll Vertical</div>
        {/* <img src="/src/assets/images/relic.svg" alt="" /> */}
        <Gallery />
        <FAQ />
        <Timeline/>
      </Background>
      
    </>
  )
}

export default App
