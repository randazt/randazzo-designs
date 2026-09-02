import './styles.css'
import Header from './components/Header'
import Hero from './sections/Hero'
import Ecosystem from './sections/Ecosystem'
import DaisyFeature from './sections/DaisyFeature'
import WorkingTechnology from './sections/WorkingTechnology'
import Awesomeverse from './sections/Awesomeverse'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Ecosystem />
        <DaisyFeature />
        <WorkingTechnology />
        <Awesomeverse />
      </main>
    </>
  )
}

export default App