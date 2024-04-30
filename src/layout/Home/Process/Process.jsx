import "./Process.scss";
import { processImage, videoIconBlack, videoIconWhite } from "@/utils/images";

const Process = () => {
  return (
    <section className="processSection">
      <div className="wrapper">
        <div className="flex1">
          <h3 className="processHeading">
            How we ensure you're in good hands.
          </h3>
          <p className="processParagraph">
            With our comprehensive screening process, we hand-pick highly
            skilled candidates so you can onboard them in a matter of days.
          </p>
          <div className="collection">
            <div className="collectionItem">
              <div className="collectionHeading">
                <div className="imageContainer">
                    <img src={videoIconBlack} alt="" />
                </div>
                <p>
                  <span>Step 1:</span>Resume Screening
                </p>
              </div>
            </div>
            <div className="collectionItem active">
              <div className="collectionHeading">
                <div className="imageContainer active">
                    <img src={videoIconWhite} alt="" />
                </div>
                <p>
                  <span>Step 2:</span>Video Interview
                </p>
              </div>
              <p>
                Candidates are assessed through skill based questions in a
                virtual setting. Allowing you to gauge personality and cultural
                fit.
              </p>
            </div>
            <div className="collectionItem">
              <div className="collectionHeading">
              <div className="imageContainer">
                    <img src={videoIconBlack} alt="" />
                </div>
                <p>
                  <span>Step 3:</span>Technical Evaluation
                </p>
              </div>
            </div>
            <div className="collectionItem">
              <div className="collectionHeading">
              <div className="imageContainer">
                    <img src={videoIconBlack} alt="" />
                </div>
                <p>
                  <span>Step 4:</span>Application Review
                </p>
              </div>
            </div>
            <div className="collectionItem">
              <div className="collectionHeading">
              <div className="imageContainer">
                    <img src={videoIconBlack} alt="" />
                </div>
                <p>
                  <span>Step 5:</span>Let's get to work
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex2">
          <img src={processImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Process;
