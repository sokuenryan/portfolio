import { createBrowserRouter, RouterProvider } from 'react-router-dom';


//pages
import Home from './pages/home.jsx';
import Header from './components/header.jsx';

const router = createBrowserRouter([
    {
        path:'/',
        element: (
            <div className='m-0 p-0 box-border'>
                <Header />
                <Home />
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