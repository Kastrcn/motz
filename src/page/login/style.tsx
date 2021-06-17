import styled from "styled-components";

export const Wrap = styled.div`
  height: 100vh;
  background: #ebeff2;
`;
export const Logind = styled.div`
  width: 900px;
  height: 600px;
  background-color: #fff;
  position: absolute;
  top: 47%;
  left: 50%;
  margin-left: -450px;
  margin-top: -300px;
  border-radius: 8px;
`;
export const Left = styled.div`
  width: 390px;
  height: 600px;
  background-color: #393939;
  float: left;
  border-radius: 8px 0 0 8px;
`;

export const Right = styled.div`
  width: 510px;
  height: 600px;
  float: left;
  padding: 50px 70px 50px 80px;
`;

export const Form = styled.div`
  margin-top: 50px;
  background: #fff;
  border-radius: 8px;
  h1 {
    text-align: center;
  }

  > img {
    height: 24px;
    margin-right: 16px;
  }
`;
export const Logo = styled.img`
  height: 44px;
  margin-right: 16px;
`;

export const Captcha = styled.img`
  height: 37px;
  margin-right: 16px;
`;

export const Subtitle = styled.div`
  margin-top: 12px;
  margin-bottom: 40px;
`;

export const Copyright = styled.div`
  position: absolute;
  bottom: -40px;
  text-align: center;
  width: 100%;
  color: #666;
`;
