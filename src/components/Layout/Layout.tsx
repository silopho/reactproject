import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'

import'./Layout.css'

export function Layout() {
    return (
        <div id='layout'>
            <Header></Header>
            <div id='layoutCont'>
                <Outlet></Outlet>
            </div>
        </div>
    )
}