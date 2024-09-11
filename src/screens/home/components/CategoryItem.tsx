import {Text, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';

interface Props {
  name: string;
  onPress: () => void;
}

const CategoryItem = ({name, onPress}: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    
  },
});

export default CategoryItem;
