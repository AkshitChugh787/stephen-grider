import React from "react";
import ProfileCard from "./components/ProfileCard";
import "bulma/css/bulma.css";

const alexa =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Amazon_Alexa_blue_logo.svg/1200px-Amazon_Alexa_blue_logo.svg.png";
const cortana =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Microsoft_Cortana_transparent.svg/1200px-Microsoft_Cortana_transparent.svg.png";
const siri =
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/Siri_Logo_in_2022.png";

const App = () => {
  return (
    <div>
      <div>Personal Digital Assistant</div>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column-is4">
              <ProfileCard title="Alexa" handle="@alexa99" image={alexa} />
            </div>
            <div className="column-is4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={cortana}
              />
            </div>

            <div className="column-is4">
              <ProfileCard title="Siri" handle="@siri01" image={siri} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
