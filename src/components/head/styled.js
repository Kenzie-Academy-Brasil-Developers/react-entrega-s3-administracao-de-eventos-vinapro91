import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: auto;
  background-color: white;

  box-shadow: 0px 0px 3px 0px #000000;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
export const RedBall = styled.div`
  border-radius: 10px;
  width: 15px;
  height: 15px;
  background-color: red;
  color: white;
  text-align: center;
  margin-left: 2px;
  cursor: pointer;
  font-size: 9px;
  text-align: center;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;
