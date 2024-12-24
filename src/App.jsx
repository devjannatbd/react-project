
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './Main/Main'
import Home from './Components/Home/Home'
import Apply from './Components/Apply/Apply'
import Blog from './Components/Blog/Blog'

import JobDetails from './Components/Jobs/JobDetails'
import ErrorPage from './Components/ErrorPage/ErrorPage'


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
          loader:()=>fetch('https://next-level-two-ashen.vercel.app/jobs'),
          element: <Apply />
        },
        {
          path: '/blogs',
          element: <Blog />
        },
        { 
          path: "/jobs/:jobId",
          element: <JobDetails />,
          loader: async ({ params }) => {
            const response = await fetch(`https://next-level-two-ashen.vercel.app/jobs/${params.jobId}`);
            if (!response.ok) {
              throw new Error("Failed to fetch data");
            }
            return response.json();
          }
          
        }
        // {
        //   path: "/jobs/:jobId",
        //   loader: ({ params }) =>
        //     fetch(`https://next-level-two-ashen.vercel.app/jobs/${params.jobId}`),
        //   element: <JobDetails />,
        // }
        
        // {
        //   path:'/jobs/:jobId',
        //   // loader:async ({params})=>{
        //   //   return fetch(`https://next-level-two-ashen.vercel.app/jobs/${params.jobId}.json`)},
        //   element:<JobDetails />,
        //   loader:({params})=>fetch(`https://next-level-two-ashen.vercel.app/jobs/${params.jobId}`)
        // }
      ]
    }
  ])

  return <div>
    <RouterProvider router={router} />
  </div>


}

export default App
