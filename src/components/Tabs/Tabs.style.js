import StyleSheet from 'react-native-extended-stylesheet';

export const style = StyleSheet.create({
  container: {
    backgroundColor: '$tabsBackgroundColor',
    borderRadius: '$borderRadius',
    padding: '$spaceXS',
  },

  item: {
    alignItems: 'center',
    backgroundColor: '$tabsBackgroundColor',
    borderRadius: '$borderRadius',
    flexDirection: 'row',
    gap: '$spaceXS',
    height: '$spaceXL + $spaceXXS',
    paddingHorizontal: '$spaceS + $spaceXXS',
  },

  active: {
    backgroundColor: '$tabsBackgroundColorActive',
  },

  secondaryActive: {
    backgroundColor: '$tabsBackgroundColorActiveSecondary',
  },

  text: {
    color: '$tabsColor',
  },

  textActive: {
    color: '$tabsColorActive',
  },

  textSecondaryActive: {
    color: '$tabsColorActiveSecondary',
  },
});
