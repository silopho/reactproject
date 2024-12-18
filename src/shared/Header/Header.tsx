import './Header.css'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <div id="headerCont">
            <Link to={'/'} id='headerLogo'><p>F</p></Link>
            <div id='headerLinks'>
                <Link to={'/'} className='headerLink'><img src="images/icons/home.png" alt="" /></Link>
                <Link to={'/'} className='headerLink'><img src="images/icons/search.png" alt="" /></Link>
            </div>
            <div id='headerProfile'>
                <Link to={'/'} id='headerProfileLink'><img src="images/icons/person.png" alt="" /></Link>
            </div>
        </div>
    )
}