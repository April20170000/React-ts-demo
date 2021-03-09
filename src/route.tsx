import WifiPage from "./pages/WifiPage";
import OtherPage from "./pages/otherPage";
import QueryParamsExample from "./pages/routeExample";

export interface RouteType {
  path: string,
  exact?: boolean,
  left: JSX.Element,
  right: () => JSX.Element | JSX.Element
}
export const routes:RouteType[] = [
    {
      path: "/wifi",
      exact: false,
      left: <WifiPage />,
      right: () => <h2>wifi page right view</h2>,
    },
    {
      path: "/other",
      exact: false,
      left: <OtherPage />,
      right: () => <h2>other page right view</h2>
    },
    {
      path: "/account",
      exact: false,
      left: <QueryParamsExample />,
      right: () => <h2>Shoelaces</h2>
    }
];