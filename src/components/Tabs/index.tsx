import React from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Container, TabsFooter, TabsContent, TabsContentText } from './styles';
import Home from '../../pages/Home';
import Transaction from '../../pages/Transaction';
import NewsTransactions from '../../pages/NewTransaction';

const Tabs: React.FC = () => {
  return (
    <Container>
      <TabsFooter>
        <TabsContent>
          <Icon name="list" color="#FF872C" size={24} />
          <TabsContentText>Listagem</TabsContentText>
        </TabsContent>
        <TabsContent>
          <Icon name="dollar-sign" color="#FF872C" size={24} />
          <TabsContentText>Cadastrar</TabsContentText>
        </TabsContent>
      </TabsFooter>
    </Container>
  );
};

export default Tabs;
