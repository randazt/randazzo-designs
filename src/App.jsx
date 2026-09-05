import './styles.css'
import Header from './components/Header'
import Hero from './sections/Hero'
import Ecosystem from './sections/Ecosystem'
import DaisyFeature from './sections/DaisyFeature'
import WorkingTechnology from './sections/WorkingTechnology'
import AIExperiences from './sections/AIExperiences'
import Awesomeverse from './sections/Awesomeverse'
import SelectedWork from './sections/SelectedWork'
import ServicesPackages from './sections/ServicesPackages'
import HowWeWork from './sections/HowWeWork'
import ServicesLearn from './sections/ServicesLearn'
import About from './sections/About'
import FAQ from './sections/FAQ'
import ProjectNavigator from './sections/ProjectNavigator'
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
        <SelectedWork />
        <ServicesPackages />
        <HowWeWork />
        <ServicesLearn />
        <About />
        <FAQ />
        <ProjectNavigator />
      </main>

      <SiteFooter />
    </>
  )
}

export default App