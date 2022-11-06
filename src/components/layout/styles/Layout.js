import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  justify-content: center;
  width: 94%;
  margin: 30px auto;
  user-select:none;
`;

export const Item = styled.div`
  display: flex;
  user-select:none;
  flex-direction: column;
  border: 1px solid black;
  padding: 24px 12px;
  margin: 4px;
  background-color: #ffe3b3;
  border-radius: 4px;
`;

export const Title = styled.h2`
  cursor: pointer;
  margin-top: 2px;
  font-weight: 400;
  // margin-2px;
  user-select:none;
`;

export const Option = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  padding: 2px 12px;
  margin: 2px 5px 5px 2px;
  font-weight: 500;
  cursor: pointer;
  user-select:none;
`;

export const FlexRowContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    ${Option} {
      padding: 2px 5px;
      width: 90%;
      text-align: center;
      justify-content: center;
    }
    ${Item} {
      padding: 2px;
      width: 90%;
      text-align: center;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 4px;
`;

export const ResultContainer = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  border: 1px dashed black;
  padding: 4px;
  box-sizing: border-box;
  background-color: white;
`;

export const Button = styled.button`
  padding: 4px 24px;
  margin: 12px 24px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
`;

export const Header = styled.h1`
  background-color: white;
  padding: 0px 14px;
  padding-left: 2px;
  text-align: center;
  margin-top: 0;
  margin: 0 10px;
  color: #30a0e0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  border-bottom: 1px solid black;
  padding:2px 6px;
  position:sticky;
  top:0;
  background-color:white;
`;

export const Avatar = styled.img`
  width:40px;
  height:40px;
`

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // margin:auto;
  height: 100vh;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  // background-image:linear-gradient(to right,#84fab0,#8fd4f4);
  margin: 20px;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    ${Button} {
      margin: 6px;
      font-size: 16px;
      padding: 2px 8px;
    }
  }
`;

export const FixedContainer = styled.div`
  display: block;
  width: 98vw;
  background-color: white;
  position: fixed;
`;

export const ScoreCard = styled.h3`
  border: 1px solid black;
  border-radius: 4px;
  font-weight: 400;
  padding: 2px 16px;
  margin: auto 0px;
  margin-right: 10px;
  color: white;
  background-color: black;
  box-shadow: 2px 2px 0px 0px cyan;
  cursor: pointer;
  letter-spacing: 1.4px;
  user-select:none;

  &:hover {
    transform: translateY(1px);
    box-shadow: none;
  }
 
    
  }
`;
