import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/Login"
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import New from "./pages/new/New"
function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={ <Home/> } />
            <Route path="login" element={ <Login /> } />
            <Route path="users">
              <Route index element={ <List/> } />
              <Route path=":userId" element={ <Single/> } />
              <Route path="new" element={ <New/> } />
            </Route>
            <Route path="counselors">
              <Route index element={ <List/> } />
              <Route path=":counselorId" element={ <Single/> } />
              <Route path="new" element={ <New/> } />
            </Route>
            <Route path="courses">
              <Route index element={ <List/> } />
              <Route path=":courseId" element={ <Single/> } />
              <Route path="new" element={ <New/> } />
            </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
