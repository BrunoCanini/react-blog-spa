import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TheHome from './pages/TheHome';
import Posts from './pages/Posts';
import DefaultLayout from './pages/DefaultLayout';
import SinglePost from './pages/SinglePost';

function App() {

  return (
      <BrowserRouter>
        <Routes>

          <Route element={<DefaultLayout />}>
            <Route path='/' element={<TheHome />}></Route>
            <Route path='/posts' element={<Posts />}></Route>
            <Route path='/posts/:slug' element={<SinglePost />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
  )
}

export default App
