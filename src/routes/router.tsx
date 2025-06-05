
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout';
import { Dashboard } from '../pages/dashboard';
import { Home } from '../pages/home';
import { Login } from '../pages/login';
import { NotFound } from '../pages/notFound';
import { Register } from '../pages/register';

const router = createBrowserRouter([
    {  
        element: <Layout/>, 
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '*',
                element: <NotFound />
            }
        ] 

    }
   
])

export { router };
