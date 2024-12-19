import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'
import { Layout } from './components/layout/Layout.styles'
import Game from './pages/game/Game'
import Rule from './pages/rule/Rule'
import PrivacyPolicy from './pages/legal/PrivacyPolicy'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route path='/' element={<Game />} />
          <Route path='/rule' element={<Rule />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  )
}

export default App
