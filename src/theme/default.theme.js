export const DefaultTheme = {
  // -- palette ----------------------------------------------------------------
  // $colorAccent: '#FBD90C',
  $colorAccent: '#FDCE44',
  $colorBase: '#FFFEFE',
  $colorBorder: '#f0f0f0',
  $colorContent: '#000000',
  $colorContentLight: '#595859',
  $colorDisabled: '#999999',

  // States
  $colorError: '#ff5c5c',
  $colorWarning: '#ffcc00',
  $colorSuccess: '#28a745',

  // -- typography -------------------------------------------------------------
  $fontWeightDefault: '400',
  $fontWeightBold: '700',
  $fontWeightDefaultSecondary: '400',
  $fontWeightBoldSecondary: '700',
  $fontSizeTitle: 24,
  $fontSizeSubtitle: 20,
  $fontSizeBody: 17,
  $fontSizeCaption: 14,
  $fontSizeTiny: 11,
  $lineHeightDefaultRatio: 1.3,
  $lineHeightBodyRatio: 1.5,

  // -- spacing ----------------------------------------------------------------
  $spaceXXS: 2,
  $spaceXS: 4,
  $spaceS: 8,
  $spaceM: 16,
  $spaceL: 24,
  $spaceXL: 32,
  $spaceXXL: 40,

  // -- border -----------------------------------------------------------------
  $borderColor: '$colorContent',
  $borderRadius: '$spaceS',
  $borderStyle: 'solid',
  $borderWidth: '$spaceXXS',

  // == <primitives> ===========================================================
  // -- <Input> ----------------------------------------------------------------
  $inputBackgroundColor: '$colorBorder',
  $inputBorderColor: '$inputBackgroundColor',
  $inputBorderRadius: '$borderRadius',
  $inputBorderStyle: '$borderStyle',
  $inputBorderWidth: '$borderWidth',
  $inputColor: '$colorContent',
  $inputFontFamily: 'font-bold',
  $inputFontWeight: '$fontWeightDefault',
  $inputFontSize: '$fontSizeBody',
  $inputPaddingHorizontal: '$spaceM',
  $inputPaddingVertical: '$spaceM - $borderWidth',
  $inputPlaceholderColor: '$colorDisabled',
  // -- focus
  $inputBackgroundColorFocus: 'transparent',
  $inputBorderColorFocus: '$colorContent',
  // -- error
  $inputBackgroundColorError: '$inputBackgroundColorFocus',
  $inputBorderColorError: '$colorError',
  // -- valid
  $inputBackgroundColorValid: '$inputBackgroundColorFocus',
  $inputBorderColorValid: '$colorSuccess',
  // -- <View> -----------------------------------------------------------------
  $viewGap: '$spaceM',
  $viewOffset: '$spaceM',
  // -- <?> --------------------------------------------------------------------

  // == <components> ===========================================================
  // -- <Action> ---------------------------------------------------------------
  $actionFontFamily: 'font-bold',
  $actionFontWeight: '$fontWeightDefault',
  // -- <Button> ---------------------------------------------------------------
  $buttonFontFamily: 'font-bold',
  $buttonFontWeight: '$fontWeightDefault',
  $buttonColorPrimary: '$colorContent',
  $buttonColorSecondary: '$colorAccent',
  $buttonChildrenColor: '$colorBase',
  $buttonChildrenColorSecondary: '$colorContent',
  $buttonHeight: '$spaceXXL + $spaceS',
  $buttonSmallHeight: '$spaceXL - $spaceXS',
  $buttonLargeHeight: '$spaceXXL + $spaceM',
  $buttonRadius: '$spaceS',
  // -- <Modal> ----------------------------------------------------------------
  $modalOverflowBackgroundColor: '$colorBase',

  // -- <Pagination> -----------------------------------------------------------
  $paginationSize: '$spaceS',
  $paginationColor: '$colorBorder',
  $paginationColorActive: '$colorContent',
};
