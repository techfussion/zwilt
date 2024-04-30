import "./JoinUs.scss";
import {
  groupImg1,
  groupImg2,
  groupImg3,
  Img1,
  Img2,
  Img3,
  arrowRightWhite,
} from "@/utils/images.js";

const JoinUs = () => {
  return (
    <section className="joinUsSection">
      <h1 className="joinUsHeading">Start your journey today.</h1>
      <div className="skewed skew1">
        <div>
          <img className="number" src={Img1} alt="" />
          <div>
            <h4>Find your next star performer.</h4>
            <p>
              Explore the vast Zwilt marketplace to find the candidate that
              meets your needs.
            </p>
            <div className="icon">
              <img src={arrowRightWhite} alt="" />
              <span>Join Now</span>
            </div>
          </div>
        </div>
        <img src={groupImg1} alt="" />
      </div>
      <div className="skewed skew2">
        <div>
          <img className="number" src={Img2} alt="" />
          <div>
            <h4>Evaluate to your heart's content.</h4>
            <p>
              Assess the candidate through work history, transparent tests and
              video interviews.
            </p>
            <div className="icon">
              <img src={arrowRightWhite} alt="" />
              <span>Browse More</span>
            </div>
          </div>
        </div>
        <img src={groupImg2} alt="" />
      </div>
      <div className="skewed skew3">
        <div>
          <img className="number" src={Img3} alt="" />
          <div>
            <h4>Start building your team.</h4>
            <p>
              Onboard your candidate right away and start creating the next big
              thing.
            </p>
            <div className="icon">
              <img src={arrowRightWhite} alt="" />
              <span>Join Now</span>
            </div>
          </div>
        </div>
        <img src={groupImg3} alt="" />
      </div>
    </section>
  );
};

export default JoinUs;
