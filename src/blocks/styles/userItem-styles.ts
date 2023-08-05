import styled from "styled-components";

// стили для главной страницы
export const DivMain = styled.div`
  background-color: #52313e;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivMainControls = styled.div`
  margin-top: 10vh;
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 16px;
  border: none;
  color: #703b51;
  outline-color: #701a3c;
`;

export const Buttons = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  color: #703b51;
  background-color: #ffffff;
`;

export const DivMainItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivMainOrder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  gap: 12px;
`;

export const DivMainOrderButtons = styled.div`
  display: flex;
  gap: 14px;
`;

export const DivMainUsers = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;
export const UsersTitleText = styled.p`
  font-size: 26px;
  font-weight: 600;
  color: #ffffff;
`;

export const UsersText = styled.p`
  font-size: 22px;
  color: #ffffff;
`;

export const DivPageButtons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  gap: 22px;
`;

export const DivMainItemsUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vh;
  gap: 14px;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
`;

export const UserLink = styled.a`
  font-size: 22px;
  color: #ffffff;
  text-decoration: none;
`;

export const ErrorText = styled.p`
  font-size: 24px;
  color: #000000;
`;
