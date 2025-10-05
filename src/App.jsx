import Navbar from './sections/Navbar'
import About from './sections/About'
import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import Work from './sections/Work'
import Contact from './sections/Contact'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Marquee/>
      <Work/>
      <Contact/>
      </main>
  )
}

export default App