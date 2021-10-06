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
    margin-top: 45px;
  }

  li {
    display: flex;
    flex-direction: column;
    margin: 5px;
    list-style: none;
    border: 1px solid black;
    width: 200px;
    height: 350px;
    justify-content: space-between;
    box-shadow: 1px 9px 12px 7px rgba(159, 45, 45, 0.75);
  }
`;
export const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #caefab;
  background: linear-gradient(to bottom, #77d42a 5%, #5cb811 100%);
  background-color: #77d42a;
  border-radius: 6px;
  border: 1px solid #268a16;
  display: inline-block;
  cursor: pointer;
  color: white;
  font-family: Arial;
  font-size: 10px;
  font-weight: bold;
  padding: 3px 18px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #aade7c;

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
