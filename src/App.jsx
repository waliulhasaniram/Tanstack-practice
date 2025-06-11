import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import MainLayout from './layout/MianLayout';

import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import FetchData from './pages/FetchData';

// Create the router configuration
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/fetch_data',
        element: <FetchData />
      }
    ]
  }
]);

function App() {

  const queryClient = new QueryClient()
  return <QueryClientProvider client={queryClient}>
           <RouterProvider router={router} />
         </QueryClientProvider>
}

export default App;
