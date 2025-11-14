import { createRoot } from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home'
import Error from './components/Error'
import CountryDetail from './components/CountryDetail'
import TestState from './components/TestState'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/:country',
        element: <CountryDetail />,
      },
    ],
  },
  {
    path:'/test',
    element : <TestState prudhvi={{a:1 , b:2}}/>
  }
])

const root = createRoot(document.querySelector('#root'))

root.render(<RouterProvider router={router} />)