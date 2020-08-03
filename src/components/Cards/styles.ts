import styled from 'styled-components';

export const Container = styled.View`
  position: relative;
  justify-content: center;
  align-items: center;
  top: 40px;
`;

export const ContainerCard = styled.View`
  width: 95%;
  height: 200px;
  background: #fff;
  border-radius: 6px;
`;

export const CardtextContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardText = styled.Text`
  color: #363f5f;
  margin-top: 23px;
  padding: 0 23px;
`;
export const CardIcon = styled.Text`
  margin-top: 23px;
  padding-right: 23px;
`;

export const CardTotalContent = styled.View`
  margin-top: 30px;
  padding: 0 23px;
`;

export const CardTotal = styled.Text`
  font-size: 30px;
`;

export const CardTotalText = styled.Text`
  margin-top: 4px;
  color: #969cb2;
`;

export const ListagemTitle = styled.Text`
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 20px;
  margin-top: 70px;
`;
