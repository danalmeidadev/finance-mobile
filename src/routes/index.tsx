import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import CustomDrawerContent from '../components/DrawerContent';
import Home from '../pages/Home';
import Transaction from '../pages/Transaction';

interface Props {
  focused: boolean;
  color: string;
  size: number;
}

const MenuDrawer = createDrawerNavigator();

const Routes: React.FC<Props> = () => {
  return (
    <MenuDrawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <MenuDrawer.Screen name="home" component={Home} />
      <MenuDrawer.Screen name="transaction" component={Transaction} />
    </MenuDrawer.Navigator>
  );
};

export default Routes;
