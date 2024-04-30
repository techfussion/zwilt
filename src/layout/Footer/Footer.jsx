import Button from '@/components/button/Button';
import './Footer.scss';
import { arrowRightWhite, arrowRightYellow } from '@/utils/images';

const Footer = () => {
    return (
        <footer>
            <section className='skewed'>
                <div>
                    <div>
                        <h3>Need a job done, and done well? Get started</h3>
                        <img src={arrowRightWhite} alt=''/>
                    </div>
                </div>
            </section>
            <section className='footerNav'>
                <div className='wrapper'>
                    <div className="flex1">
                        <h4>
                            zwilt<img className="logo" src={arrowRightYellow} alt=""/> 
                        </h4>
                        <p>
                            We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.
                        </p>
                        <h5>LINKS AND REDIRECTS</h5>
                        <div>
                            <Button>Hire now</Button>
                            <Button>Apply now</Button>
                        </div>
                    </div>
                    <div className='flex2'>
                        <h3>Connecting the right people to the right business</h3>
                        <nav className="container">
                            <div className="navGroup">
                                <h5 className="navHeading">PLATFORMS</h5>
                                <ul>
                                    <li className='active'><a className="nav" href='#'>Find Work</a></li>
                                    <li><a className="nav" href='#'>Find Talent</a></li>
                                    <li><a className="nav" href='#'>Articles</a></li>
                                    <li><a className="nav" href='#'>About Us</a></li>
                                </ul>
                            </div>
                            <div className="navGroup">
                                <h5 className="navHeading">CATEGORIES</h5>
                                <ul>
                                    <li><a className="nav" href='#'>Data Science</a></li>
                                    <li><a className="nav" href='#'>IT & Networking</a></li>
                                    <li><a className="nav" href='#'>Web & Mobile</a></li>
                                </ul>
                            </div>
                            <div className="navGroup">
                                <h5 className="navHeading">HELP</h5>
                                <ul>
                                    <li><a className="nav" href='#'>Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="navGroup">
                                <h5 className="navHeading">GET IN TOUCH @</h5>
                                <ul>
                                    <li><a className="nav" href='#'>Instagram</a></li>
                                    <li><a className="nav" href='#'>LinkedIn</a></li>
                                    <li><a className="nav" href='#'>Twitter</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
            <section className='footerBottom'>
                <div>
                    <p>All rights reserved by Zwilt</p>
                </div>
                <div className='wrapper'>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Terms and Condition</a>
                </div>
            </section>
        </footer>
    )
}

export default Footer;