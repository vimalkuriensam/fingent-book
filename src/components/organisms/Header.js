import React from "react";
import {
  headerSubtitle,
  headerSubtitleColor,
  headerTitle,
  headerTitleColor,
} from "../../utils/static";
import Title from "../atoms/Title";

const Header = () => {
  return (
    <div className="header">
      <div className="header__main">
        <Title
          className="header__text"
          content={headerTitle}
          variant="primary-1"
          color={headerTitleColor}
        />
        <Title
          className="header__text"
          content={headerSubtitle}
          variant="primary-1"
          color={headerSubtitleColor}
        />
      </div>
    </div>
  );
};

export default Header;
