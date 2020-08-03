import React, { useState, useCallback } from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ButtomClosed,
  Container,
  AvatarContainer,
  Avatar,
  AvatarContent,
  AvatarUser,
  AvatarMail,
  ContainerItems,
  LogOut,
} from './styles';
import avatar from '../../assets/avatar.jpg';

interface Props {
  color: string;
  size: number;
}

const CustomDrawerContent: React.FC<Props> = ({ navigation, ...rest }) => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...rest}>
          <ButtomClosed>
            <Text onPress={() => navigation.closeDrawer()}>
              <Icon name="close" size={26} color="#000" />
            </Text>
          </ButtomClosed>
          <Container>
            <AvatarContainer>
              <Avatar source={avatar} />
              <AvatarContent>
                <AvatarUser>Dan Almeida</AvatarUser>
                <AvatarMail>01 de Agosto</AvatarMail>
              </AvatarContent>
            </AvatarContainer>
            <ContainerItems>
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="home-outline" color={color} size={size} />
                )}
                label="Home"
                onPress={() => {
                  navigation.navigate('home');
                }}
              />

              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="finance" color={color} size={size} />
                )}
                label="Transação"
                onPress={() => {
                  navigation.navigate('transaction');
                }}
              />

              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="account-edit" color={color} size={size} />
                )}
                label="Profile"
                onPress={() => {}}
              />

              <DrawerItem
                icon={({ color, size }) => (
                  <Icon
                    name="comment-question-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Suporte"
                onPress={() => {}}
              />

              <LogOut>
                <DrawerItem
                  icon={({ color, size }) => (
                    <Icon name="exit-to-app" color={color} size={size} />
                  )}
                  label="Sair"
                  onPress={() => {}}
                />
              </LogOut>
            </ContainerItems>
          </Container>
        </DrawerContentScrollView>
      </View>
    </>
  );
};

export default CustomDrawerContent;
