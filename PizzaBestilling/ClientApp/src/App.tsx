import { FC } from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Counter from "./components/Counter";

import "./custom.css";

const App: FC = () => {
  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
    </Layout>
  );
};

export default App;
