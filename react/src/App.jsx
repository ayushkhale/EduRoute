import './App.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Paths from './components/Paths'
function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <Hero/>
        <Paths/>
        <div className="material">
          
        </div>
      </div>
    </>
  )
}

export default App
