/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import ListScreen from './src/containers/ListScreen';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{ height: '100%' }}>
          <ListScreen />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
