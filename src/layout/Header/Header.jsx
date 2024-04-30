import Button from "@/components/button/Button";
import zwiltArrow from "@/assets/logo-yellow.svg";
import { menu } from "@/utils/images";
import './Header.scss';
import useWindowWidthObserver from "@/hooks/useWindowWidthObserver";

const Header = () => {
    const shouldShowHamburger = useWindowWidthObserver(800);

    return (
    <header>
        <nav className='navBar'>
            <ul className='navList'>
                <li className='navItem'><a href="#" className='company'>zwilt<img className='logo' src={zwiltArrow} alt=''/></a></li>
            </ul>
            {!shouldShowHamburger &&
                (<ul className='navList'>
                    <li className='navItem'><a href="#">Find Work</a></li>
                    <li className='navItem'><a href="#">Find Talent</a></li>
                    <li className='navItem'><a href="#">Articles</a></li>
                    <li className='navItem'><a href="#">About Us</a></li>
                    <li className='navItem'><a href="#">Contact Us</a></li>
                </ul>)
            }
            <ul className='navList'>
                <li className='navItem'><a href="#">Log In</a></li>
                <li className='navItem'><Button>Join Now</Button></li>
            </ul>

            {shouldShowHamburger && <img src={menu} alt='' className='hamburger'/>}
        </nav>
    </header>)
}

export default Header