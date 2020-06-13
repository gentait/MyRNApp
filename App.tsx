import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
});

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>見えやすい文字列</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
