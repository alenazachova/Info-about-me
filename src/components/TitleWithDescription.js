import React from "react";

export const TitleWithDescription = (props) => {
  const { title, description } = props;
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  );
};
