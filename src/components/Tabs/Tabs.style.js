import StyleSheet from 'react-native-extended-stylesheet';

export const style = StyleSheet.create({
  container: {
    backgroundColor: '$colorBorder',
    borderRadius: '$borderRadius',
    padding: '$spaceXS',
  },

  item: {
    alignItems: 'center',
    backgroundColor: '$colorBorder',
    borderRadius: '$borderRadius',
    flexDirection: 'row',
    gap: '$spaceXS',
    height: '$spaceXL + $spaceXXS',
    paddingHorizontal: '$spaceS + $spaceXXS',
  },

  active: {
    backgroundColor: '$colorContent',
  },

  accent: {
    backgroundColor: '$colorAccent',
  },
});
