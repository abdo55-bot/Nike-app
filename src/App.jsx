import React from 'react'
import Hero from './components/Hero'
import { footerAPI, heroapi,popularsales,story,toprateslaes } from './data/data.js'
import Sails from './components/Sails.jsx'
import Storys from './components/Storis.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div className='flex flex-col gap-16 relative'>
      <Hero api={heroapi} />
      <Sails endpoint= {popularsales} ifExists />
      <Sails endpoint={toprateslaes}/>
      <Storys story={story} />
      <Footer footerApi={footerAPI}/>
    </div>
    
  )
}

export default App
