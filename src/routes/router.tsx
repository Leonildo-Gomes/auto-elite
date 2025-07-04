
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout';
import { DetailCar } from '../pages/car';
import { NewCar } from '../pages/car/new';
import { Dashboard } from '../pages/dashboard';
import { Home } from '../pages/home';
import { Login } from '../pages/login';
import { ManageCar } from '../pages/manageCar';
import { NotFound } from '../pages/notFound';
import { Register } from '../pages/register';
import { Private } from './Private';

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
                path: '/managecar',
                element: <Private> <ManageCar/> </Private> 
            },
            {
                path: '/detail-car/:id',
                element:  <DetailCar/> 
            },
            {
                path: '/new-car',
                element:  <NewCar isEdit={false}/> 
            },
            {
                path: '/edit-car/:id',
                element:  <NewCar isEdit={true}/> 
            },
            {
                path: '*',
                element: <NotFound />
            }
        ] 

    }
   
])

export { router };
