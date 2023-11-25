import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

interface Props extends React.PropsWithChildren {
  name: string;
}

const AppMockScreen = ({name, children}: Props): JSX.Element => {
  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Text>{name}</Text>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppMockScreen;
