import React, {useState} from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import Lottie from "react-lottie";
import productivity from "../assets/animations/Productivity illustartion.json";
import Anxiety from "../assets/animations/Anxiety illustration.json";
import Marketing from "../assets/animations/Marketing illsutartion.json";
import Motivation from "../assets/animations/Motivation illustration.json";
import body from "../assets/animations/Body Language illsutration.json";
const Selection = () => {
  const [isProductivity, setIsProductivity] = useState(true);
  const [isAnxiety, setIsAnxiety] = useState(true);
  const [isMarketing, setIsMarketing] = useState(true);
  const [isMotivation, setIsMotivation] = useState(true);
  const [isBody, setIsBody] = useState(true);

  return (
    <div className="wrapper-selection">
      <div className="container">
        <div className="cards-selection-wrapper">
          <Link to={`/selection/productivity`}>
            <div
              className="selection-card"
              onMouseOver={() => setIsProductivity(false)}
              onMouseLeave={() => setIsProductivity(true)}
            >
              <div>
                <Lottie
                  options={{
                    loop: true,
                    autoplay: false,
                    animationData: productivity,
                  }}
                  height={191}
                  width={200}
                  isStopped={isProductivity}
                />
                <h1>Productivity</h1>
              </div>
            </div>
          </Link>
          <Link to={`/selection/anxiety`}>
            <div className="selection-card">
              <div
                onMouseEnter={() => setIsAnxiety(false)}
                onMouseLeave={() => setIsAnxiety(true)}
              >
                <Lottie
                  options={{
                    loop: true,
                    autoplay: false,
                    animationData: Anxiety,
                  }}
                  height={191}
                  width={230}
                  isStopped={isAnxiety}
                />
                <h1>Anxiety</h1>
              </div>
            </div>
          </Link>
          <Link to={`/selection/marketing`}>
            <div className="selection-card">
              <div
                onMouseOver={() => setIsMarketing(false)}
                onMouseLeave={() => setIsMarketing(true)}
              >
                <Lottie
                  options={{
                    loop: true,
                    autoplay: false,
                    animationData: Marketing,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                  height={191}
                  width={160}
                  isStopped={isMarketing}
                />
                <h1>Marketing</h1>
              </div>
            </div>
          </Link>
          <Link to={`/selection/motivation`}>
            <div className="selection-card">
              <div
                onMouseOver={() => setIsMotivation(false)}
                onMouseLeave={() => setIsMotivation(true)}
              >
                <Lottie
                  options={{
                    loop: true,
                    autoplay: false,
                    animationData: Motivation,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                  height={191}
                  width={230}
                  isStopped={isMotivation}
                />
                <h1>Motivation</h1>
              </div>
            </div>
          </Link>
          <Link to={`/selection/body-language`}>
            <div className="selection-card">
              <div
                onMouseOver={() => setIsBody(false)}
                onMouseLeave={() => setIsBody(true)}
              >
                <Lottie
                  options={{
                    loop: true,
                    autoplay: false,
                    animationData: body,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                  height={191}
                  width={230}
                  isStopped={isBody}
                />
                <h1>Body Language</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Selection;
