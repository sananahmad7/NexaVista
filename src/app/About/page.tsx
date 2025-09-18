import React from "react";

const AboutUs = () => {
  return (
    <div>
      <p>This should show in small screen</p>
      <p className="hidden md:flex">
        This should show in medium and above screen
      </p>
      <p className="hidden lg:flex">
        This should show in large and above screen
      </p>
      <p className="hidden xl:flex">This should show in xl and above screen</p>
      <p className="hidden 2xl:flex">
        This should show in 2xl and above screen{" "}
      </p>
      <p className="hidden 3xl:flex">
        This should show in 3xl and above screen{" "}
      </p>
      <p className="hidden 4xl:flex">
        This should show in 4xl and above screen{" "}
      </p>
    </div>
  );
};

export default AboutUs;
