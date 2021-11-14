/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, StatusBar, View} from 'react-native';

import Config from 'react-native-config';
import {SOME_KEY} from 'react-native-dotenv';

class App extends React.Component {
  render() {
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
          Hello from {Config.VERSION} {SOME_KEY} App
        </Text>
      </View>
    );
  }
}

export default App;
