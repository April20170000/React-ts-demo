import Typography from "@material-ui/core/Typography";
import React from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

export default function QueryParamsExample() {
  return (
    <Router>
      <QueryParamsDemo />
    </Router>
  );
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function QueryParamsDemo() {
  let query: URLSearchParams = useQuery();

  return (
    <div>
        <h2>Fruits</h2>
        <ul>
          <li>
            <Link to="/account?name=apple">Apple</Link>
          </li>
          <li>
            <Link to="/account?name=pear">Pear</Link>
          </li>
          <li>
            <Link to="/account?name=banana">Banana</Link>
          </li>
          <li>
            <Link to="/account?name=strawberry">Strawberry</Link>
          </li>
        </ul>

        <Child name={query.get("name")} />
    </div>
  );
}

function Child({ name }: {name: string | null}) {
  return (
    <div>
      {name ? (
        <Typography variant="h6" noWrap>
          The <code>name</code> in the query string is &quot;{name}
          &quot;
        </Typography>
      ) : (
        <Typography variant="h6" noWrap>There is no name in the query string</Typography>
      )}
    </div>
  );
}
