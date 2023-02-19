import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';

function EmptyBox(props: any) {
  const {height, flex} = props;

  return (
    <View
      style={{
        height: height,
        flex: flex,
        width: '100%',
      }}></View>
  );
}

EmptyBox.propTypes = {
  height: PropTypes.number,
  flex: PropTypes.number,
};

export default EmptyBox;
