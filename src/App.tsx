import { BrowserRouter } from 'react-router-dom'
import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'
import Main from './components/layout/main/Main'
import { Layout } from './components/layout/Layout.styles'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Main />
        <Footer />
      </Layout>
    </BrowserRouter>
  )
}

export default App
