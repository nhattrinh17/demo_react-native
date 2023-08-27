import React from 'react';
import {Text, View, Button} from 'react-native';

function Detail(props: any): JSX.Element {
  const {navigation} = props;

  return (
    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
      <Text style={{color: '#000'}}>Login</Text>
      <Button title="Go to Home" onPress={() => navigation.popToTop()} />
      <Button
        title="Go to Test React Native"
        onPress={() => navigation.navigate('Test Native')}
      />
    </View>
  );
}

export default Detail;
