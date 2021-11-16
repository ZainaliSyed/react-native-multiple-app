/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';

import Config from 'react-native-config';

class App extends React.Component {
  render() {
    console.log('Config : ', Config);
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>
          Welcome
        </Text>

        <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>
          Hello from {Config.VERSION} App
        </Text>
      </View>
    );
  }
}

export default App;
