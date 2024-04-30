import "./Perks.scss";
import {
    onboardCardImg,
    messageImg,
    stayInLoopImg,
    arrowRightWhite,
} from "@/utils/images.js";

const Perks = () => {
  return (
    <section className="perkSection">
      <div>
        <div className="intro">
          <h3>Why choose<br/>Zwilt?</h3>
          <p>
            We take complex hiring<br/> processes - and simplify them.<br/> Connecting you
            to the world’s<br/> highly qualified talent pool.
          </p>
        </div>
        <div className="card">
            <div className="cardContent">
                <h3>Onboard without <br/> the risk.</h3>
                <ul className="onboardList">
                    <li>We pick the best for you to select.</li>
                    <li>Thousands of vetted candidates in dozens of Categories.</li>
                    <li>Risk-free resource swapping for the best fit.</li>
                </ul>
                <div className="icon">
                    <img src={arrowRightWhite} alt="" />
                    <span>Learn More</span>
                </div>
            </div>
            <img src={onboardCardImg} alt=""  loading='lazy'/>
        </div>
        <div className="card">
            <div className="cardContent">
                <h3>An open <br/> book.</h3>
                <ul className="messageList">
                    <li>Easy and transparent one-to-one chat with candidates.</li>
                    <li>Simple and convenient payment methods.</li>
                    <li>Review past ratings.</li>
                </ul>
                <div className="icon">
                    <img src={arrowRightWhite} alt="" />
                    <span>Learn More</span>
                </div>
            </div>
            <img src={messageImg} alt=""  loading='lazy'/>
        </div>
        <div className="card">
            <div className="cardContent">
                <h3>Stay in the <br/> loop.</h3>
                <ul className="trackList">
                    <li>Track your staff activity down to every minute with screenshots.</li>
                    <li>Comprehensive timesheet data to process payments.</li>
                    <li>Create projects to organize and assign tasks more effectively.</li>
                </ul>
                <div className="icon">
                    <img src={arrowRightWhite} alt="" />
                    <span>Learn More</span>
                </div>
            </div>
            <img src={stayInLoopImg} alt=""  loading='lazy'/>
        </div>
      </div>
    </section>
  );
};

export default Perks;
