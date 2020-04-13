import React from "react";
import Home from "../components/templates/Home/index.js";
import HeaderContainer from "../containers/HeaderContainer";
import ViewerRepoList from "../containers/ViewerRepoList";

const Index = () => (
  <Home header={<HeaderContainer />} content={<ViewerRepoList />} />
);

export default Index;

// export default function App() {
//   return <div>Hello, SSR PWA with Next.js!</div>;
// }
