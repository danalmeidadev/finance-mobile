import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  position: absolute;
  padding: 0 24px;
  bottom: 0;
  background: #fff;
  width: 100%;
  height: 56px;
  justify-content: center;
  align-items: center;
`;
export const TabsFooter = styled.View`
  flex-direction: row;
`;
export const TabsContent = styled.TouchableOpacity`
  flex-direction: row;
  margin-right: 40px;
  justify-content: center;
  align-items: center;
`;

export const TabsContentText = styled.Text`
  margin-left: 8px;
  justify-content: center;
  align-items: center;
`;
