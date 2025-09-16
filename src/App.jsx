import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Join from './components/Join'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Join />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
