import './Home.scss'
import SearchBar from '@/components/SearchBar/SearchBar';
import TabComponent from '@/components/TabComponent/TabComponent';
import services from '@/data/services.json';
import StripImage from '@/assets/Union.svg';
import Header from '@/layout/Header/Header';
import FAQ from '@/layout/Home/FAQ/FAQ';
import Explore from '@/layout/Home/Explore/Explore';
import Section3 from '@/layout/Home/Section3/Section3';
import Footer from '@/layout/Footer/Footer';
import Process from '@/layout/Home/Process/Process';
import JoinUs from '@/layout/Home/JoinUs/JoinUs';
import Perks from '@/layout/Home/Perks/Perks';
import { jasonImage } from '@/utils/images';


const Home = () => {
    return (
        <>
            <section className='landingViewPort'>
                <Header />
                
                <div>
                    <h1 className='introHeading'>Finding the right fit <img src={jasonImage} alt=''/> has<br/> never been easier.</h1>
                    <p className='introParagraph'>
                        With our rigorous pre-vetting process, you'll never have to<br /> worry About
                        finding the ideal candidate ever again.
                    </p>
                    <SearchBar placeholder='design |' onSubmit={() => {}}/>
                    <TabComponent>
                        <div tabLabel="IT & Development" className='itTab'>
                            {services?.IT ? 
                                services?.IT.map((item, index) => {
                                    return <p className='paneItem' key={index}>
                                        {item}
                                    </p>
                                })
                                :
                                <p>Tab 1</p>
                            }
                            <p className='paneItem'>Explore More</p>
                        </div>
                        <div tabLabel="Design & Creative" className='designTab'>
                            {services?.DESIGN ? 
                                services?.DESIGN.map((item, index) => {
                                    return <p className='paneItem' key={index}>
                                        {item}
                                    </p>
                                })
                                :
                                <p>Tab 2</p>
                            }
                            <p className='paneItem'>Explore More</p>
                        </div>
                    </TabComponent>
                </div>
            </section>
            <main>
                <div>
                    <img src={StripImage} alt=''/>
                </div>
                <Explore />
                <Section3 />
                <Process />
                <JoinUs />
                <Perks />
                <FAQ />
            </main>
            <Footer />
        </>
    )
}

export default Home;