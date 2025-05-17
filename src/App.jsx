
import { createBrowserRouter } from 'react-router'
import './App.css'
import Main from './Layout/Main';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import MyList from './Pages/MyList';
import Login from './Pages/Login';
import { RouterProvider } from 'react-router';
import Error from './Pages/errors/Error';

export const router = createBrowserRouter([
  {
    path: "/", element: <Main />, children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "movies", element: <Movies /> },
      { path: "mylist", element: <MyList /> },
      { path: "login", element: <Login /> },
      { path: "errors", element: <Error /> },


    ]
  }

]);

function App() {

  return (
    <RouterProvider router={router} val />
  )
}

export default App
