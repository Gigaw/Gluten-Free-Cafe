import React from 'react';
import {View} from 'react-native';

interface Props {
  horizontal?: boolean;
  size?: number;
}

const Spacer = ({horizontal = false, size = 20}: Props): JSX.Element => {
  const defaultValue = 'auto';

  return (
    <View
      style={{
        width: horizontal ? size : defaultValue,
        height: !horizontal ? size : defaultValue,
      }}
    />
  );
};

export default Spacer;
