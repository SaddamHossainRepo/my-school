import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import TopNav from './TopNav';

export const TeacherContext = createContext([]);



const Main = () => {
    const  teachers  = useLoaderData()
    console.log('loader data', teachers);
    return (
        
            <TeacherContext.Provider value={teachers}>
                <div>
                <TopNav></TopNav>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
            </TeacherContext.Provider>
        


    );
};

export default Main;