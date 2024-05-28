import { Router, Route } from "@solidjs/router";
import { Suspense } from "solid-js";
import Home from "./routes/home"
import NotFound from "./routes/notfound"
import Nav from "./components/Nav"
import "./app.css";

export default function App() {
    return (
    <Router
      root={props => (
        <>
          <Nav />
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <Route path={["/"]} component={Home} />
      <Route path={["*"]} component={NotFound} />
    </Router>
  );
}
