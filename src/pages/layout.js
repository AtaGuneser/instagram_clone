import React from 'react'
import Header from '../components/Header';
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div>
            <Header />
            <div className='container mx-auto pt-4'>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout;