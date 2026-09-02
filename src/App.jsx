import './styles.css'
import Header from './components/Header'
import Hero from './sections/Hero'
import Ecosystem from './sections/Ecosystem'
import DaisyFeature from './sections/DaisyFeature'
import WorkingTechnology from './sections/WorkingTechnology'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Ecosystem />
        <DaisyFeature />
        <WorkingTechnology />
      </main>
    </>
  )
}

export default App