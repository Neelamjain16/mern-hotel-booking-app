import Layout from "./layouts/Layout"
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom'
import Register from "./pages/Register"
import SignIn from "./pages/SignIn"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout> <p>Home page</p>  </Layout>} />
          <Route path='/search' element={<Layout> <p>search page</p> </Layout>} />
          <Route path="/register" element={<Layout><Register /></Layout>} />
           <Route path='/sign-in' element={<Layout><SignIn/></Layout>}/>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
