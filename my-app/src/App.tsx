import Container from 'react-bootstrap/Container'

import { Routes, Route } from 'react-router'
// pages
import { HomeFeed } from './views/HomeFeed'
import { LoginRegister } from './views/LoginRegister'
import { MovieDetails } from './views/MovieDetails'
import { UserAccount } from './views/UserAccount'
import { WriteAReview } from './views/WriteAReview'
// components
import { Header } from './components/Header'
import { Footer } from './components/Footer'
// logo
import logo from './assets/hero.png'

function App() {
  return (
    <>
      <Header title="Verdictly" image={logo} />
      <Container fluid>
        <Routes>
          <Route path="/" element={<HomeFeed />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/account" element={<UserAccount />} />
          <Route path="/review" element={<WriteAReview />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App
