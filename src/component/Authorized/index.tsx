// import { connect } from 'react-redux';

// function Authorized(props:any) {
//   const { children, userInfo, authority, noMatch } = props;
//   const { currentAuthority } = userInfo || {};
//   if (!authority) return children;
//   const _authority = Array.isArray(authority) ? authority : [authority];
//   if (_authority.includes(currentAuthority)) return children;
//   return noMatch;
// }

// export default connect(store => ({ userInfo: store.common.userInfo }))(Authorized);

import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../features/user/userSlice";
interface IAuthorizedProps {}

const Authorized: React.FunctionComponent<IAuthorizedProps> = (props) => {
  const status = useSelector((state: any) => state.user.status);
  const dispatch = useDispatch();
  let history = useHistory();
  if (status === false) {
    let s = localStorage.getItem("status");
    if (s === "1") {
      // dispatch(login());
    } else {
      history.push("/login");
    }
  }
  return <>{props.children}</>;
};

export default Authorized;
