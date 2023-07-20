import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Container from './Components/Container/Container'
import Posts from './Pages/Posts/Posts'
import Layout from './Components/Layout/Layout'
import CreatePost from './Pages/CreatePost/CreatePost'

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route path={'/posts'} element={<Posts />} />
            <Route path={'/create__post'} element={<CreatePost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
