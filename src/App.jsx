import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Container from './Components/Container/Container'
import Posts from './Pages/Posts/Posts'
import Layout from './Components/Layout/Layout'
import CreatePost from './Pages/CreatePost/CreatePost'
import { createContext, useState } from 'react'
import Checkbox from './Components/Mode/Mode'

export const MyContext = createContext(null)
export const ModeContext = createContext(null)

function App() {
  const [data, setData] = useState([])
  const [mode, setMode] = useState(false)

  return (
    <div className={mode ? 'dark' : ''}>
      <ModeContext.Provider value={[mode, setMode]}>
        <MyContext.Provider value={[data, setData]}>
          <Container>
            <BrowserRouter>
              <Routes>
                <Route path={'/'} element={<Layout />}>
                  <Route path={'/posts'} element={<Posts />} />
                  <Route path={'/create__post'} element={<CreatePost />} />
                </Route>
              </Routes>
            </BrowserRouter>
            <Checkbox />
          </Container>
        </MyContext.Provider>
      </ModeContext.Provider>
    </div>
  )
}

export default App
