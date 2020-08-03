import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { shade } from 'polished';
import React from 'react';
import { StatusBar, Platform, View } from 'react-native';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor={shade(0.1, '#5636D3')}
        />
        <View
          style={{
            backgroundColor: `${shade(0.1, '#5636D3')}`,
            height: Platform.OS === 'ios' ? 24 : null,
          }}
        />
        <Routes />
      </NavigationContainer>
    </>
  );
};

export default App;
