import './Footer.css'

export function Footer() {
    return (
        <div id="footerCont">
            <a id='footerLogo' href=""><p>F</p></a>
            <div id='footerLinks'>
                <a className='footerLink' href=""><img src="images/icons/home.png" alt="" /></a>
                <a className='footerLink' href=""><img src="images/icons/search.png" alt="" /></a>
            </div>
            <div id='footerProfile'>
                <a id='footerProfileLink' href=""><img src="images/icons/person.png" alt="" /></a>
            </div>
        </div>
    )
}