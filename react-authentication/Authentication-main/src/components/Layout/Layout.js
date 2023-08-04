import { Fragment } from "react";

import MainNavigation from "./MainNavigation";
import UserProvider from "../../store/UserProvider";

const Layout = (props) => {
  return (
    <UserProvider>
      <Fragment>
        <MainNavigation />
        <main>{props.children}</main>
      </Fragment>
    </UserProvider>
  );
};

export default Layout;
