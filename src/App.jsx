
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './Main/Main'
import Home from './Components/Home/Home'
import Apply from './Components/Apply/Apply'
import Blog from './Components/Blog/Blog'

//import JobDetails from './Components/Jobs/JobDetails'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import JobDetail from './Components/Jobs/JobDetail'
// import JobDetails2 from './Components/Jobs/JobDetails2'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/apply',
          loader: () => fetch('https://next-level-two-ashen.vercel.app/jobs'),
          element: <Apply />
        },
        {
          path: '/blogs',
          element: <Blog />
        },
        {
          path: '/jobs/:jobId',
          element: <JobDetail />,
          loader:({params})=>fetch(`https://next-level-two-ashen.vercel.app/jobs/${params.jobId}`)
        }
      ]
    }
  ])

  return <div>
    <RouterProvider router={router} />
  </div>


}

export default App
