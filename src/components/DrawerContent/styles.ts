import styled from 'styled-components';

export const ButtomClosed = styled.View`
  justify-content: space-between;
  align-items: flex-end;
  padding: 8px 16px;
`;

export const Container = styled.View`
  padding: 0 4px;
`;

export const AvatarContainer = styled.View`
  flex-direction: row;
  padding: 0 16px;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 100px;
  margin-right: 4px;
`;

export const AvatarContent = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AvatarUser = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-left: 16px;
`;

export const AvatarMail = styled.Text`
  font-size: 15px;
  color: #d3d3d3;
  margin-top: 4px;
`;

export const ContainerItems = styled.View`
  margin-top: 50px;
  padding: 0 16px;
`;

export const LogOut = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
