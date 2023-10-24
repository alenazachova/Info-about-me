import React from "react";
import { FacebookIcon } from "../../icons/FacebookIcon";
import { InstagramIcon } from "../../icons/InstagramIcon";
import { GithubIcon } from "../../icons/GithubIcon";
import { LinkIcon } from "../../components/LinkIcon";

export const FooterIcons = () => {
  return (
    <>
      <LinkIcon
        url={"https://www.facebook.com/alca.k.zachova"}
        title="Facebook"
        Icon={FacebookIcon}
      />
      <LinkIcon
        url={"https://www.instagram.com/allinecka/"}
        title="Instagram"
        Icon={InstagramIcon}
      />
      <LinkIcon
        url={"https://github.com/alenazachova"}
        title="GitHub"
        Icon={GithubIcon}
      />
    </>
  );
};
