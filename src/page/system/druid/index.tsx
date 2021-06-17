import * as React from "react";
import { mozt } from "../../../utils/domain";
interface IDruidProps {}

const Druid: React.FunctionComponent<IDruidProps> = (props) => {
  return (
    <iframe
      title="resg"
      src={`${mozt}/druid/login.html`}
      style={{ width: "100%", border: "0px", height: "1100px" }}
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      scrolling="auto"
    />
  );
};

export default Druid;
