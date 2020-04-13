import React from "react";
import PropTypes from "prop-types";
import Header from "../../molecules/Header/index.js";
import SwipableMenu from "../../molecules/SwipableMenu/index.js";

const HeaderWithSwipableMenu = (props) => {
  const [state, setState] = React.useState({
    menuIsOpen: true,
  });
  const handleClick = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({
      menuIsOpen: open,
    });
  };
  return (
    <div>
      <Header
        handleClick={handleClick}
        swipableMenu={
          <SwipableMenu
            isOpen={state.menuIsOpen}
            closeMenu={handleClick(false)}
            openMenu={handleClick(true)}
          />
        }
      />
    </div>
  );
};

export default HeaderWithSwipableMenu;
