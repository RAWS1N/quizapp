import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  flex-direction: column;
  position: fixed;
  //   justify-content:center;
  gap: 12px;
  top: 10%;
  left: 12%;
  width: 80%;
  height: 50%;
  align-items: center;
  background: white;
  border-radius: 4px;
  border: 1px solid black;

  @media screen and (min-width: 680px) {
    width: 50%;
    left: 30%;
    height: 60%;
  }
`;

export const Greet = styled.h3`
  margin: 0;
  margin-top: 10px;
  color: tomato;
`;

export const Exit = styled.img`
  height: 24px;
  width: 24px;
  justify-self: flex-end;
  align-self: flex-end;
  cursor: pointer;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  user-select: none;
`;

export const Select = styled.select`
  padding: 2px 12px;
  font-size: 17px;
  text-transform: uppercase;
  border-radius: 6px;
`;

export const Option = styled.option``;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
`;
export const Edit = styled.img`
  height: 16px;
  width: 16px;
`;

export const UserName = styled.h3`
  color: cyan;
  margin: 0px;
`;

export const Score = styled.h4`
  margin: 0;
  font-weight: 400;
  font-size: 18px;
`;

export const Reset = styled.button`
  background-color: black;
  border: none;
  color: white;
  margin:50px 0px;
  padding: 4px 76px;
  font-size:20px;
  border-radius: 4px;
  cursor: pointer;
 
`;
