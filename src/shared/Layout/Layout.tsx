import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'

import'./Layout.css'

export function Layout() {
    return (
        <div id='layout'>
            <Header></Header>
            <div id='pageCont'>
                <Outlet></Outlet>
            </div>
        </div>
    )
}