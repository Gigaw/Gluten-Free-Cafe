import React from 'react';
import HomeSection from './HomeSection';
import CategoryItem from './CategoryItem';
import {FlatGrid} from 'react-native-super-grid';
import {FlatList} from 'react-native';
const categoriesData = [
  {name: 'test name 1', id: 1},
  {name: 'test name 2', id: 2},
  {name: 'test name 3', id: 3},
  {name: 'test name 3', id: 4},
  {name: 'test name 3', id: 4},
  {name: 'test name 3', id: 4},
];
const Categories = () => {
  return (
    <HomeSection name="Categories" onPress={() => null}>
      <FlatList
        // itemDimension={130}
        data={categoriesData}
        renderItem={({item}) => (
          <CategoryItem name={item.name} onPress={() => null} />
        )}
        scrollEnabled={false}
        numColumns={2}
      />
    </HomeSection>
  );
};

export default Categories;
