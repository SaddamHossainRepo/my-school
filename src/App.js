import { createContext } from 'react';
import { createBrowserRouter, RouterProvider, useLoaderData } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Class from './components/Class';
import Home from './components/Home';
import Main from './components/Main';
import Success from './components/Success';
import TeacherDetails from './components/TeacherDetails';
import Teachers from './components/Teachers';


function App() {
  // const {teachers} =useLoaderData()
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      loader: () => fetch('teachers.json'),
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          // loader: fetch(''),
          element: <Home></Home>
        },
        {
          path: '/teachers',
          loader: () => fetch('teachers.json'),
          // loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
          element: <Teachers></Teachers>
        },
        {
          path: 'teacher/:teacherId',
          loader: async({params}) =>{
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.teacherId}`)
          },
          element: <TeacherDetails></TeacherDetails>
        },
        {
          path: '/classes',
          element: <Class></Class>
        },
        {
          path: '/success',
          element: <Success></Success>
        },
        {
          path: '/about',
          element: <About></About>
        },
      ]
    }
  ]);
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
