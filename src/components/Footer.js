import React from "react";

function Footer() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "Morning";
  } else if (hours > 12 && hours < 17) {
    timeOfDay = "Afternoon";
  } else {
    timeOfDay = "Night";
  }

  const styles = {
    color: "#FF8C00",
    backgroundColor: "blue",
    fontSize: 100
  };
  return <h3 style={styles}>Good {timeOfDay} </h3>;
}

export default Footer;
