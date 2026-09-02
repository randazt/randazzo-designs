import './styles.css'
import Header from './components/Header'
import Hero from './sections/Hero'
import Ecosystem from './sections/Ecosystem'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Ecosystem />
      </main>
    </>
  )
}

export default App