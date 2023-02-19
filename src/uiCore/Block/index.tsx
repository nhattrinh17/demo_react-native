import React from 'react';
import {View} from 'react-native';
interface BlockType {
  flex: number;
  flexDirection: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  backgroundColor: string;
  style: any;
  children: any;
}

function Block(props: BlockType): JSX.Element {
  const {
    flex,
    flexDirection = 'column',
    backgroundColor = '',
    style = {},
  } = props;

  return (
    <View
      style={{
        flex: flex,
        flexDirection: flexDirection || 'row-reverse',
        backgroundColor: backgroundColor || '',
        ...style,
      }}>
      {props.children}
    </View>
  );
}

export default Block;
