import React from "react";

import { textCapitalize } from "../../utils/helper";

const Icon = ({ content, onHandleButtonClick, link, className }) => {
  const getContent = (content) => textCapitalize(content);
  return (
    <span className={className} onClick={onHandleButtonClick.bind(this, link)}>
      {require(`../../utils/icons/${getContent(content)}.js`).default()}
    </span>
  );
};

export default Icon;
