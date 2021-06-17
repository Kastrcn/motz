import * as React from "react";

interface ISwaggerProps {}

const Swagger: React.FunctionComponent<ISwaggerProps> = (props) => {
  return (
    <iframe
      title="resg"
      src={"http://47.106.251.106:8080/swagger-ui.html"}
      style={{ width: "100%", border: "0px", height: "1100px" }}
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      scrolling="auto"
    />
  );
};

export default Swagger;
