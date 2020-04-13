import React from "react";
import PropTypes from "prop-types";
import SwipableDrawer from "../../atoms/SwipableDrawer/index.js";
import List from "../../atoms/List/index.js";
import ListItem from "../../atoms/ListItem/index.js";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const SwipableMenu = (props) => {
  const { isOpen = true, closeMenu, openMenu } = props;
  return (
    <SwipableDrawer open={isOpen} onClose={closeMenu} onOpen={openMenu}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </SwipableDrawer>
  );
};

SwipableMenu.propTypes = {
  isOpen: PropTypes.bool,
  closeMenu: PropTypes.func.isRequired,
  openMenu: PropTypes.func.isRequired,
};

SwipableMenu.defaultProps = {
  isOpen: false,
  closeMenu: () => {},
  openMenu: () => {},
};

export default SwipableMenu;
