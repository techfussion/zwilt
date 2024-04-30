import "./Section3.scss";
import { 
    grooveLogoWhite,
    quote,
    grooveLogoPurple,
    jasonImage,
    arrowLeftBlue,
    arrowRightBlue,
 } from '@/utils/images.js'

const Section3 = () => {
  return (
    <section className="section3">
        <img src={quote} alt=""/>
      <div>
        <div className="flex1">
          <h3>
            How it worked for Jason<img className="jason" src={jasonImage} alt=""/> at
            <br/><img className="groove" src={grooveLogoPurple} alt=""/> 
          </h3>
          <p>
            Zwilt enabled us to deliver on time and they’ve been heavy hitters
            in our corner since.
          </p>
          <div>
            <img src={arrowLeftBlue} alt=""/> 
            <img src={arrowRightBlue} alt=""/> 
          </div>
        </div>
        <div className="flex2">
          <div>
            <img src={grooveLogoWhite} alt=""/>
            <div>
              <h4>Jason Makki</h4>
              <h5>Engineer at GROOVE</h5>
              <h5>San Francisco</h5>
            </div>
          </div>
          <p>
            Zwilt enabled us to deliver on time and they've been heavy hitters
            in our corner since. Zwilt enabled us to deliver on time and they’ve
            been heavy hitters in our corner since.Zwilt enabled us to deliver
            on time and they’ve been heavy hitters.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section3;
