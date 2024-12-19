import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'
import { Layout } from './components/layout/Layout.styles'
import Game from './pages/game/Game'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route path='/' element={<Game />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  )
}

export default App
