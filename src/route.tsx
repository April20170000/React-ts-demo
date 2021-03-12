import WifiPage from "./pages/WifiPage";
import OtherPage from "./pages/otherPage";
import QueryParamsExample from "./pages/accountPage";

export interface menuItem {
  path: string,
  exact?: boolean,
  left: JSX.Element,
  right: JSX.Element,
  title: string,
}
export const menu:menuItem[] = [
    {
      path: "/wifi",
      exact: false,
      left: <WifiPage />,
      right: <h2>wifi page right view</h2>,
      title: 'pageTitle',
    },
    {
      path: "/other",
      exact: true,
      left: <OtherPage />,
      right: <h2>other page right view</h2>,
      title: 'otherPageTitle',
    },
    {
      path: "/account",
      exact: true,
      left: <QueryParamsExample />,
      right: <h2>account page right view</h2>,
      title: 'accountPageTitle',
    }
];