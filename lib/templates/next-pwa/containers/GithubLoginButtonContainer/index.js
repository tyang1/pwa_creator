import React from "react";
import Router from "next/router";
import Button from "../../components/atoms/Button/index.js";
import Loader from "../../components/atoms/Loader/index.js";
import getConfig from "next/config";
import Cookies from "js-cookie";

class GithubLoginButtonContainer extends React.Component {
  handleSignIn = () => {
    const {
      publicRuntimeConfig: { githubClientId },
    } = getConfig();
    // Router.push(url, as , options)
    Router.push({
      pathname: "https://github.com/login/oauth/authorize",
      query: {
        client_id: githubClientId,
      },
    });
  };
  render() {
    return (
      <Button color="secondary" onClick={this.handleSignIn}>
        Sign In
      </Button>
    );
  }
}

export default GithubLoginButtonContainer;
