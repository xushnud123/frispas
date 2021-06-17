import React from 'react'
import { Link } from 'react-router-dom';
import '../sass/FooterOne.scss';

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="One">
                    <li className="fris">
                        <Link to="/">Frispes</Link>
                    </li>
                    <h3>
                    We offer comfortable spaces, 
                    cozy cafe, high-speed internet, 
                    spacious parking area and many 
                    more for your best workspaces 
                    and meetings
                    </h3>
                    <ul>
                        <li>
                            <Link to="/"><img src="/img/ins.svg" alt="rasm topilmadi"/></Link>
                        </li>
                        <li>
                            <Link to="/"><img src="/img/YouTube.svg" alt="rasm topilmadi"/></Link>
                        </li>
                        <li>
                            <Link to="/"><img src="/img/Facebook.svg" alt="rasm topilmadi"/></Link>
                        </li>
                    </ul>
                </div>
                <div className="Two">
                    <h2>
                    Spaces
                    </h2>
                    <p>
                    Co-working spaces
                    </p>
                    <p>
                    Meeting rooms
                    </p>
                    <p>
                    Event spaces
                    </p>
                    <p>
                    Child playground
                    </p>
                    <p>
                    Cafe & resto
                    </p>
                </div>
                <div className="Two">
                    <h2>
                    Company
                    </h2>
                    <p>
                    About Us
                    </p>
                    <p>
                    Pricing
                    </p>
                    <p>
                    Careers
                    </p>
                    <p>
                    Press
                    </p>
                </div>
                <div className="Two">
                    <h2>
                    Support
                    </h2>
                    <p>
                    FAQs
                    </p>
                    <p>
                    Privacy Policy
                    </p>
                    <p>
                    Privacy Policy
                    </p>
                </div>
                <div className="Two">
                    <h2>
                    Contact Us
                    </h2>
                    <p>
                    E.  Hello@frispes.com
                    </p>
                    <p>
                    A.  Jalan Jayakatwang  No.301
                    Ngasem, Kediri
                    </p>
                    <p>
                    P.  (+62) 82334670000
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
