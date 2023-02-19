import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    marginHorizontal: 30,
    marginVertical: 10,
    flexDirection: 'row',
    alignContent: 'center',
  },
  textButton: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    flex: 1,
    position: 'absolute',
    left: '48%',
  },
  iconButton: {
    color: 'white',
  },
});

export default styles;
