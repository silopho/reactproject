import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'

import'./Layout.css'

export function Layout() {
    return (
        <div id='layout'>
            <Header></Header>
            {/* Лучше конечно сделать компонент Main и использовать в нем стили для pageCont. */}
            {/* pageContent дописывай в данном случае */}
            <div id='pageCont'>
                <Outlet></Outlet>
            </div>
            {/* Footer нету */}
        </div>
    )
}