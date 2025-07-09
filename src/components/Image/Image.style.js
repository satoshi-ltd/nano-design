import StyleSheet from 'react-native-extended-stylesheet';

export const style = StyleSheet.create({
  container: {
    backgroundColor: '$colorBorder',
    overflow: 'hidden',
    position: 'relative',
  },

  image: {
    height: '100%',
    width: '100%',
  },

  activity: {
    left: '50%',
    position: 'absolute',
    top: '50%',
  },
});
