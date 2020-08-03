import React from 'react';
import { Text } from 'react-native';
import {
  Container,
  ContainerCard,
  Title,
  Value,
  ValueText,
  Category,
  CategoryTitle,
  Data,
} from './styles';

const TransactionList: React.FC = () => {
  return (
    <Container>
      <ContainerCard>
        <Title>Desenvolvimneto de sites</Title>
        <Value>
          <ValueText>R$ 12.000,00</ValueText>
          <Category>
            <CategoryTitle>Vendas</CategoryTitle>
            <Data>02/08/2020</Data>
          </Category>
        </Value>
      </ContainerCard>
    </Container>
  );
};

export default TransactionList;
