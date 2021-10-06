import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  font-size: 12px;
  img {
    width: 40px;
    height: auto;
    margin: 0 auto;
  }
`;
export const DivBang = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const BangIcon = styled.div`
  border-radius: 10px;
  width: 15px;
  height: 15px;
  background-color: gray;
  color: white;
  text-align: center;
  margin-left: 2px;
  cursor: pointer;
`;

export const List = styled.ul`
  display: flex;
  margin-top: 150px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  @media screen and (min-width: 600px) {
    margin-top: 35px;
  }

  li {
    padding-top: 6px;
    display: flex;
    flex-direction: column;
    margin: 5px;
    list-style: none;
    border: 1px solid black;
    width: 200px;
    height: 350px;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #cf866c;
  background: linear-gradient(to bottom, #d0451b 5%, #bc3315 100%);
  background-color: #d0451b;
  border-radius: 3px;
  border: 1px solid #942911;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 13px;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #854629;

  ::hover {
    filter: brightness(0.5);
  }
  ::active {
    position: relative;
    top: 1px;
  }
`;

export const PositionButtons = styled.div`
  margin-bottom: 10px;
`;
