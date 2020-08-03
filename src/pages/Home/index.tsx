import React from 'react';
import { View, Text } from 'react-native';
import { Container, ContainerContent, ContainerList, Title } from './styles';
import Header from '../../components/Header';
import Cards from '../../components/Cards';
import Tab from '../../components/Tabs';
import TransactionList from '../../components/TransactionList';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Cards />
      </Container>
      <ContainerContent>
        <Title>Listagem</Title>
        <ContainerList>
          <TransactionList />
          <TransactionList />
        </ContainerList>
      </ContainerContent>

      <Tab />
    </>
  );
};

export default Home;
