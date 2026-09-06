import { Routes, Route } from 'react-router-dom'
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
import SystemInPractice from './sections/SystemInPractice'
import SocialNetwork from './sections/SocialNetwork'
import SiteFooter from './sections/SiteFooter'

import DaisyCaseStudy from './case-studies/DaisyCaseStudy'
import StudioOneCaseStudy from './case-studies/StudioOneCaseStudy'
import AIAssistantsCaseStudy from './case-studies/AIAssistantsCaseStudy'
import RandazzoDesignsCaseStudy from './case-studies/RandazzoDesignsCaseStudy'
import AwesomeverseCaseStudy from './case-studies/AwesomeverseCaseStudy'

function HomePage() {
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
        <SystemInPractice />
        <SocialNetwork />
      </main>
      <SiteFooter />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work/daisy" element={<DaisyCaseStudy />} />
      <Route path="/work/studio-one" element={<StudioOneCaseStudy />} />
      <Route
        path="/work/ai-assistants"
        element={<AIAssistantsCaseStudy />}
      />
      <Route
        path="/work/randazzo-designs"
        element={<RandazzoDesignsCaseStudy />}
      />
      <Route
        path="/work/awesomeverse"
        element={<AwesomeverseCaseStudy />}
      />
    </Routes>
  )
}

export default App