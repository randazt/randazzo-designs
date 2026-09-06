import { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './styles.css'

import Header from './components/Header'
import DaisyConcierge from './components/DaisyConcierge'
import Seo from './components/Seo'

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

const DaisyCaseStudy = lazy(() => import('./case-studies/DaisyCaseStudy'))
const StudioOneCaseStudy = lazy(
  () => import('./case-studies/StudioOneCaseStudy'),
)
const AIAssistantsCaseStudy = lazy(
  () => import('./case-studies/AIAssistantsCaseStudy'),
)
const RandazzoDesignsCaseStudy = lazy(
  () => import('./case-studies/RandazzoDesignsCaseStudy'),
)
const AwesomeverseCaseStudy = lazy(
  () => import('./case-studies/AwesomeverseCaseStudy'),
)

const seoByPath = {
  '/': {
    title: 'Randazzo Designs | Design, Technology & Creative Systems',
    description:
      'Randazzo Designs is an independent creative and technology practice spanning design, AI and creative systems, digital media, storytelling, education, and original creative worlds.',
  },

  '/work/daisy': {
    title: 'D.AI.SY — Daily AI Systems',
    description:
      'A human-centered AI case study exploring cognitive clarity, adaptive guidance, permission-based memory, bounded agentic execution, and meaningful human control.',
  },

  '/work/studio-one': {
    title: 'STUDIO//ONE',
    description:
      'A creative technology case study exploring studio-scale coordination, persistent production memory, governed workflows, and human authority for the one-person creative team.',
  },

  '/work/ai-assistants': {
    title: 'AI Assistants & Specialized GPT Experiences',
    description:
      'A case study in specialized AI assistant design, interaction models, human-directed behavior, and purpose-built AI experiences for distinct workflows and audiences.',
  },

  '/work/randazzo-designs': {
    title: 'Randazzo Designs — The System Behind the Practice',
    description:
      'A case study showing how Randazzo Designs connects human-centered design, creative technology, AI-assisted workflows, portfolio evidence, and practical implementation.',
  },

  '/work/awesomeverse': {
    title: 'The Awesomeverse',
    description:
      'An original storyworld and creative production case study connecting visual storytelling, worldbuilding, digital media, creative systems, and human-directed AI workflows.',
  },
}

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
      <DaisyConcierge />
    </>
  )
}

function App() {
  const location = useLocation()

  const seo = seoByPath[location.pathname] ?? seoByPath['/']

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        path={location.pathname}
      />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/work/daisy"
            element={<DaisyCaseStudy />}
          />

          <Route
            path="/work/studio-one"
            element={<StudioOneCaseStudy />}
          />

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
      </Suspense>
    </>
  )
}

export default App