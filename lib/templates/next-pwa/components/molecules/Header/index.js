import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "../../atoms/Appbar/index.js";
import IconButton from "../../atoms/IconButton/index.js";
import Typography from "../../atoms/Typography/index.js";
import Menu from "@material-ui/icons/Menu";
import Toolbar from "../../atoms/Toolbar/index.js";
import Button from "../../atoms/Button/index.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const { swipableMenu, handleClick } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        {swipableMenu}
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClick(true)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  swipableMenu: PropTypes.nodes,
  handleClick: PropTypes.func.isRequired,
};

Header.defaulProps = {
  swipableMenu: null,
  handleClick: () => {},
};

export default Header;
