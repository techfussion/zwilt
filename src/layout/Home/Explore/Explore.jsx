import {
    shopifyIcon,
    magentoIcon,
    dataIcon,
    dotnetIcon,
    webflowIcon,
    starBadge,
    arrowLeft,
    arrowRight,
    arrowRightWhite,
    figmaIcon,
    photoshopIcon,
    illustratorIcon,
    unrealEngineIcon,
    cinema4dIcon,
    profileIcon,
    windowIcon,
} from '@/utils/images.js';
import './Explore.scss';

const Explore = () => {
    return (
        <section className='exploreSection'>
            <div>
                <h2>
                    Your one-stop marketplace for finding the talent your business needs.
                </h2>
                <div className='wrapper'>
                    <div className='serviceStatsCont'>
                        <h4>Find Dev and IT professional to scale your business</h4>
                        <div>
                            <div>
                                <p><img src={starBadge} alt=""/>989 Skills</p>
                                <p><img src={windowIcon} alt=""/>45 Sub-Categories</p>
                            </div>
                            <p><img src={profileIcon} alt=""/>1011 Profiles</p>
                        </div>
                    </div>
                    <div className='serviceStack'>
                        <p>IT & Development</p>
                        <ul>
                            <li className='icon'><img src={shopifyIcon} alt='' loading='lazy'/><span>Shopify <br/> Developer</span></li>
                            <li className='icon'><img src={magentoIcon} alt='' loading='lazy'/><span>Shopify <br/> Developer</span></li>
                            <li className='icon'><img src={dataIcon} alt='' loading='lazy'/><span>Shopify <br/> Developer</span></li>
                            <li className='icon'><img src={webflowIcon} alt='' loading='lazy'/><span>Shopify <br/> Developer</span></li>
                            <li className='icon'><img src={dotnetIcon} alt='' loading='lazy'/><span>Shopify <br/> Developer</span></li>
                            <li className='icon rect'><img src={arrowRight} alt='' loading='lazy'/></li>
                        </ul>
                    </div>
                </div>
                <div className='wrapper'>
                    <div className='serviceStatsCont'>
                        <h4>Find Dev and IT professional to scale your business</h4>
                        <div>
                            <div>
                                <p><img src={starBadge} alt=""/>989 Skills</p>
                                <p><img src={windowIcon} alt=""/>45 Sub-Categories</p>
                            </div>
                            <p><img src={profileIcon} alt=""/>1011 Profiles</p>
                        </div>
                    </div>
                    <div className='serviceStack'>
                        <p>Design & Creative</p>
                        <ul>
                            <li className='icon rect'><img src={arrowLeft} alt=''/></li>
                            <li className='icon'><img src={figmaIcon} alt='' loading='lazy'/><span>Shopify <br/> Developer</span></li>
                            <li className='icon'><img src={photoshopIcon} alt='' loading='lazy'/><span>Shopify <br/> Developer</span></li>
                            <li className='icon'><img src={illustratorIcon} alt='' loading='lazy'/><span>Shopify <br/> Developer</span></li>
                            <li className='icon'><img src={unrealEngineIcon} alt='' loading='lazy'/><span>Shopify <br/> Developer</span></li>
                            <li className='icon'><img src={cinema4dIcon} alt='' loading='lazy'/><span>Shopify <br/> Developer</span></li>
                        </ul>
                    </div>
                </div>
                <div className='bottomControl'>
                    <ul>
                        <li className='icon rect'><img src={arrowRightWhite} alt='' loading='lazy'/><span>Explore more</span></li>
                        <li className='count'><span>30 more</span> to explore</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Explore;