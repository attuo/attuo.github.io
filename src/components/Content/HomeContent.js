import React, { useState } from "react";
import Typewriter from 'typewriter-effect';
import Content from "./Content";
import NextLink from "../Shared/NextLink";
import mainData from "../../data/Main.yml";

const HomeContent = () => {
  const [linkVisible, setLinkVisible] = useState(false);
  const data = mainData.home;

  return (
    <Content>
      
      <h4>{data.greeting} {data.nameIntro}</h4>
      <h1>{data.name}</h1>
      <h5>{data.description}</h5>
      <NextLink route={"/expertise"} text={data.next}/>

      {/* <Typewriter 
        options={{
          delay: 50,
          cursorClassName: "cursor"
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(500)
            .typeString(`<h4>${data.greeting}</h4>`)
            .pauseFor(1000)
            .typeString(`<h4>${data.nameIntro}</h4>`)
            .pauseFor(500)
            .typeString(`<h1>${data.name}</h1>`)
            .pauseFor(500)
            .typeString(`<h5>${data.description}</h5>`)
            .pauseFor(500)
            .callFunction(() => {
              setLinkVisible(true);
            })
            .start();
        }}
      />
      { linkVisible &&
        <Link className="nav-link reveal-animation" to="/about">{data.next}</Link>
      } */}
    </Content>
  );
};

export default HomeContent;
