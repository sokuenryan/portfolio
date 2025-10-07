import { createBrowserRouter, RouterProvider } from 'react-router-dom';


//pages
import Portfolio from './components/portolio.jsx';

const router = createBrowserRouter([
    {
        path:'/',
        element: (
            <div className='m-0 p-0 box-border'>
                <Portfolio />
            </div>
        ),
    },
]);

function App() {
    return (
            <div className='App'>
                <RouterProvider router={router} />
            </div>
    );
}

export default App;