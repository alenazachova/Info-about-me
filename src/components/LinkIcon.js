import React from "react";

export const LinkIcon = (props) => {
  const { url, title, children, Icon, className } = props;
  return (
    <a href={url} title={title} className={className}>
      <Icon />
      {children}
    </a>
  );
};
