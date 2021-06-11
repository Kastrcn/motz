import styled from "styled-components";



export const Action=styled.a`
   display: flex;
    align-items: center;
    height: 100%;
    padding: 0 12px;
    cursor: pointer;
    transition: all 0.3s;
    > span {
      vertical-align: middle;
    }
    &:hover {
      background:rgba(0, 0, 0, 0.025);
    }
    &:global(.opened) {
      background: rgba(0, 0, 0, 0.025);
    }
`
export const ActionDiv=styled.div`
   display: flex;
    align-items: center;
    height: 100%;
    padding: 0 12px;
    cursor: pointer;
    transition: all 0.3s;
    > span {
      vertical-align: middle;
    }
    &:hover {
      background:rgba(0, 0, 0, 0.025);
    }
    &:global(.opened) {
      background: rgba(0, 0, 0, 0.025);
    }
`
