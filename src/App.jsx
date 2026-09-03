import './styles.css'
import Header from './components/Header'
import Hero from './sections/Hero'
import Ecosystem from './sections/Ecosystem'
import DaisyFeature from './sections/DaisyFeature'
import WorkingTechnology from './sections/WorkingTechnology'
import AIExperiences from './sections/AIExperiences'
import Awesomeverse from './sections/Awesomeverse'
import ServicesLearn from './sections/ServicesLearn'
import About from './sections/About'
import SiteFooter from './sections/SiteFooter'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Ecosystem />
        <DaisyFeature />
        <WorkingTechnology />
        <AIExperiences />
        <Awesomeverse />
        <ServicesLearn />
        <About />
      </main>

      <SiteFooter />
    </>
  )
}

export default App