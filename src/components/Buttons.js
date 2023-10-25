import React from "react";
import { EmailIcon } from "../icons/EmailIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { LinkIcon } from "./LinkIcon";

export const ButtonWithIcon = (props) => {
  const { Icon, url, type, children } = props;
  const className = "button button-" + type;

  return (
    <LinkIcon Icon={Icon} className={className} url={url}>
      {children}
    </LinkIcon>
  );
};

export const Buttons = () => {
  return (
    <div className="buttons-container">
      <ButtonWithIcon
        type="email"
        url="mailto:ala.zachova@gmail.com"
        Icon={EmailIcon}
      >
        Email
      </ButtonWithIcon>
      <ButtonWithIcon
        type="linkedin"
        url="https://www.linkedin.com/in/fe-developer-alena-zachova/"
        Icon={LinkedinIcon}
      >
        Linkedin
      </ButtonWithIcon>
    </div>
  );
};
