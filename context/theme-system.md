# 🎨 THEME_SYSTEM: Styling & Theming

## THEME_INITIALIZATION

### CRITICAL_SETUP
```javascript
// Required before using any components
import StyleSheet from 'react-native-extended-stylesheet';
import { DefaultTheme } from '@satoshi-ltd/nano-design';

StyleSheet.build(DefaultTheme); // MUST be called first!
```

### WHY_REQUIRED
- Components use theme variables (`$colorBase`, `$spaceM`, etc.)
- Without initialization, styles will fail to resolve
- Must be called once at app startup

## THEME_STRUCTURE

### COLOR_PALETTE
```javascript
// Primary colors
$colorAccent: '#FDCE44'        // Primary accent (yellow)
$colorBase: '#FFFEFE'          // Background (white)
$colorContent: '#000000'       // Primary text (black)
$colorContentLight: '#595859'  // Secondary text (gray)
$colorBorder: '#f0f0f0'        // Border (light gray)
$colorDisabled: '#999999'      // Disabled state (gray)

// State colors
$colorError: '#ff5c5c'         // Error (red)
$colorWarning: '#ffcc00'       // Warning (yellow)
$colorSuccess: '#28a745'       // Success (green)
```

### TYPOGRAPHY_SCALE
```javascript
// Font sizes
$fontSizeTitle: 24             // Main headings
$fontSizeSubtitle: 20          // Subheadings
$fontSizeBody: 17              // Default body text
$fontSizeCaption: 14           // Captions, labels
$fontSizeTiny: 11              // Very small text

// Font weights
$fontWeightDefault: '400'      // Normal text
$fontWeightBold: '700'         // Bold text

// Line heights
$lineHeightDefaultRatio: 1.3   // Tight line height
$lineHeightBodyRatio: 1.5      // Readable line height
```

### SPACING_SYSTEM
```javascript
// Consistent spacing scale
$spaceXXS: 2                   // Very tight spacing
$spaceXS: 4                    // Tight spacing
$spaceS: 8                     // Small spacing
$spaceM: 16                    // Default spacing
$spaceL: 24                    // Large spacing
$spaceXL: 32                   // Extra large spacing
$spaceXXL: 40                  // Maximum spacing
```

### BORDER_SYSTEM
```javascript
$borderColor: '$colorContent'   // Default border color
$borderRadius: '$spaceS'       // Default border radius (8px)
$borderStyle: 'solid'          // Default border style
$borderWidth: '$spaceXXS'      // Default border width (2px)
```

## COMPONENT_SPECIFIC_VARIABLES

### BUTTON_THEME
```javascript
$buttonHeight: '$spaceXXL + $spaceS'           // 48px
$buttonSmallHeight: '$spaceXL - $spaceXS'      // 28px
$buttonLargeHeight: '$spaceXXL + $spaceM'      // 56px
$buttonRadius: '$spaceS'                       // 8px
$buttonColorPrimary: '$colorContent'           // Black
$buttonColorSecondary: '$colorAccent'          // Yellow
$buttonChildrenColor: '$colorBase'             // White text
$buttonChildrenColorSecondary: '$colorContent' // Black text
```

### INPUT_THEME
```javascript
$inputBackgroundColor: '$colorBorder'          // Light gray background
$inputBorderColor: '$inputBackgroundColor'     // Same as background
$inputColor: '$colorContent'                   // Black text
$inputFontSize: '$fontSizeBody'               // 17px
$inputPaddingHorizontal: '$spaceM'            // 16px
$inputPaddingVertical: '$spaceM - $borderWidth' // 14px
$inputPlaceholderColor: '$colorDisabled'      // Gray placeholder

// Focus states
$inputBackgroundColorFocus: 'transparent'      // Clear background
$inputBorderColorFocus: '$colorContent'        // Black border

// Error states  
$inputBorderColorError: '$colorError'          // Red border

// Valid states
$inputBorderColorValid: '$colorSuccess'        // Green border
```

### MODAL_THEME
```javascript
$modalOverflowBackgroundColor: '$colorBase'    // White background
```

### PAGINATION_THEME
```javascript
$paginationSize: '$spaceS'                     // 8px dots
$paginationColor: '$colorBorder'               // Inactive gray
$paginationColorActive: '$colorContent'        // Active black
```

### TABS_THEME
```javascript
$tabsBackgroundColor: '$colorBorder'           // Inactive background
$tabsColor: '$colorContentLight'               // Inactive text
$tabsBackgroundColorActive: '$colorContent'    // Active background
$tabsColorActive: '$colorBase'                 // Active text (white)
$tabsBackgroundColorActiveSecondary: '$colorAccent' // Alt active (yellow)
$tabsColorActiveSecondary: '$colorContent'     // Alt active text
```

## USING_THEME_VARIABLES

### IN_COMPONENT_STYLES
```javascript
import StyleSheet from 'react-native-extended-stylesheet';

export const style = StyleSheet.create({
  container: {
    backgroundColor: '$colorBase',       // Theme background
    borderColor: '$colorBorder',         // Theme border
    borderRadius: '$borderRadius',       // Theme radius
    borderWidth: '$borderWidth',         // Theme border width
    padding: '$spaceM',                  // Theme spacing
  },
  
  title: {
    color: '$colorContent',              // Theme text color
    fontSize: '$fontSizeTitle',          // Theme font size
    fontWeight: '$fontWeightBold',       // Theme font weight
  },
});
```

### COLOR_RESOLUTION_UTILITIES
```javascript
// Components include getColor utility
import { getColor } from './modules';

// Resolves theme color or custom hex
const colorStyle = getColor('accent');    // Returns { color: '$colorAccent' }
const customStyle = getColor('#ff0000');  // Returns { color: '#ff0000' }
```

## BOOLEAN_PROP_SYSTEM

### COLOR_PROPS
```javascript
<Text color="accent">Accent colored text</Text>
<Text color="error">Error colored text</Text>
<Text color="#ff0000">Custom hex color</Text>
```

### SIZE_PROPS
```javascript
<Text title>Title size (24px)</Text>
<Text subtitle>Subtitle size (20px)</Text>
<Text>Body size (17px - default)</Text>
<Text caption>Caption size (14px)</Text>
<Text tiny>Tiny size (11px)</Text>
```

### VARIANT_PROPS
```javascript
<Button primary>Primary button</Button>
<Button secondary>Secondary button</Button>
<Button outlined>Outlined button</Button>
<Button small>Small button</Button>
<Button large>Large button</Button>
```

## CUSTOM_THEMING

### EXTENDING_DEFAULT_THEME
```javascript
import { DefaultTheme } from '@satoshi-ltd/nano-design';

const CustomTheme = {
  ...DefaultTheme,
  
  // Override existing colors
  $colorAccent: '#007AFF',              // Blue accent
  $colorBase: '#1C1C1E',                // Dark background
  $colorContent: '#FFFFFF',             // White text
  
  // Add custom variables
  $customColor: '#FF3B30',              // Custom red
  $customSpacing: 20,                   // Custom spacing
};

StyleSheet.build(CustomTheme);
```

### USING_CUSTOM_VARIABLES
```javascript
const style = StyleSheet.create({
  customContainer: {
    backgroundColor: '$customColor',
    padding: '$customSpacing',
  },
});
```

## DARK_MODE_PATTERN
```javascript
const DarkTheme = {
  ...DefaultTheme,
  $colorBase: '#000000',                // Black background
  $colorContent: '#FFFFFF',             // White text
  $colorBorder: '#333333',              // Dark gray border
  $colorContentLight: '#CCCCCC',        // Light gray text
};

const LightTheme = DefaultTheme;

// Switch themes
const currentTheme = isDark ? DarkTheme : LightTheme;
StyleSheet.build(currentTheme);
```

## PLATFORM_SPECIFIC_THEMING
```javascript
import { Platform } from 'react-native';

const PlatformTheme = {
  ...DefaultTheme,
  
  // Platform-specific overrides
  $fontSizeBody: Platform.select({
    ios: 17,
    android: 16,
    web: 14,
  }),
  
  $spaceM: Platform.select({
    ios: 16,
    android: 16,
    web: 12,
  }),
};
```

## DEBUGGING_THEME

### THEME_VALIDATION
```javascript
// Check if theme is built
console.log(StyleSheet.value('$colorAccent')); // Should return '#FDCE44'

// Check if component styles resolve
console.log(StyleSheet.flatten(style.container)); // Should show resolved values
```

### COMMON_ISSUES
```bash
# Theme variables not resolving
StyleSheet.build(DefaultTheme); // Ensure this is called

# Components not styled correctly  
# Check import: import StyleSheet from 'react-native-extended-stylesheet'
# Not: import { StyleSheet } from 'react-native'

# Custom theme not working
# Ensure custom theme includes all required variables
```

## NEXT_STEP
Read `context/code-patterns.md` for implementation guidelines.