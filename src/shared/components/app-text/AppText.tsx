import {StyleSheet} from 'react-native';
import React from 'react';
import Text, {IRNTextProps} from '@freakycoder/react-native-custom-text';

interface Props extends React.PropsWithChildren<IRNTextProps> {}

const AppText = ({children, ...props}: Props): JSX.Element => {
  return <Text {...props}>{children}</Text>;
};

const styles = StyleSheet.create({});

export default AppText;
