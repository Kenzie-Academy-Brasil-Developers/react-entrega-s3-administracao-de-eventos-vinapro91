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
