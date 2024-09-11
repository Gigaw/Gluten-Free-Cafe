import {View, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Spacer from '@shared/components/spacer/Spacer';
import AppText from '@shared/components/app-text/AppText';

interface Props extends React.PropsWithChildren {
  name: string;
  onPress: () => void;
}

const HomeSection = ({children, name, onPress}: Props) => {
  return (
    <View>
      <View style={styles.topWrapper}>
        <AppText h3>{name}</AppText>
        <Pressable onPress={onPress}>
          <AppText h4>View All</AppText>
        </Pressable>
      </View>
      <Spacer size={10} />
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  topWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomeSection;
