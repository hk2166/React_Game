import Header from './components/Header'
import Footer from './components/Footer'
import Game from './components/Game'
import './index.css'

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Game />
      </main>
      <Footer />
    </>
  )
}

export default App
