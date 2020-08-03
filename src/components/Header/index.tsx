import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import logo from '../../assets/logo.png';
import { Container, IConMenu } from './styles';

const Header: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <Image source={logo} style={{ width: 170 }} />
        <IConMenu onPress={() => navigation.openDrawer()}>
          <Icon name="align-right" size={26} color="#fff" />
        </IConMenu>
      </Container>
    </>
  );
};

export default Header;
