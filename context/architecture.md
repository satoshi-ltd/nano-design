# 🏗️ ARCHITECTURE: Component System

## THREE_TIER_HIERARCHY
Nano Design follows a strict three-tier component architecture for maintainability and consistency.

### PRIMITIVES (src/primitives/)
**PURPOSE**: Basic building blocks that wrap React Native components
**COMPONENTS**:
- `Activity` - Loading indicators with platform behavior
- `Icon` - Scalable icons with size utilities
- `Input` - Text inputs with theme integration  
- `Pressable` - Touchable areas with haptic feedback
- `ScrollView` - Scrollable containers
- `Text` - Typography with semantic sizing
- `View` - Layout containers with flex utilities

### COMPONENTS (src/components/)
**PURPOSE**: Composite UI elements built from primitives
**COMPONENTS**:
- `Action` - Action buttons with variants
- `Button` - Primary/secondary/outlined buttons
- `Card` - Content cards with blur/glass effects
- `Image` - Images with loading states
- `Modal` - Overlay dialogs
- `Notification` - Toast notifications
- `Pagination` - Dot-based pagination
- `Screen` - Screen-level containers
- `SectionList` - Sectioned list components
- `Tabs` - Tab navigation

### SYSTEMS (src/systems/)
**PURPOSE**: Complex interaction patterns
**COMPONENTS**:
- `Confirm` - Confirmation dialogs
- `Menu` - Context menus
- `Setting` - Settings/preferences UI

## THEME_SYSTEM

### INITIALIZATION_REQUIRED
```javascript
import StyleSheet from 'react-native-extended-stylesheet';
import { DefaultTheme } from '@satoshi-ltd/nano-design';

StyleSheet.build(DefaultTheme); // CRITICAL: Must run before using components
```

### THEME_STRUCTURE
```javascript
// Colors
$colorAccent: '#FDCE44'      // Primary accent
$colorBase: '#FFFEFE'        // Background
$colorContent: '#000000'     // Primary text
$colorBorder: '#f0f0f0'      // Border
$colorError: '#ff5c5c'       // Error states

// Spacing
$spaceXS: 4, $spaceS: 8, $spaceM: 16, $spaceL: 24, $spaceXL: 32

// Typography  
$fontSizeTitle: 24, $fontSizeBody: 17, $fontSizeCaption: 14
```

## COMPONENT_PATTERNS

### BOOLEAN_PROPS_SYSTEM
```javascript
// ✅ CORRECT - Boolean variants
<Button primary large disabled />
<Text title bold color="accent" />
<Card blur shadow glassMode />

// ❌ WRONG - String variants
<Button variant="primary" size="large" />
```

### FILE_STRUCTURE_PATTERN
```
ComponentName/
├── ComponentName.jsx          # Main component
├── ComponentName.style.js     # Styles with theme variables
├── index.js                   # Clean export
└── modules/                   # Utilities (if needed)
    ├── getColor.js           # Color resolution
    ├── getFontSize.js        # Size utilities
    └── index.js              # Module exports
```

### STYLE_INTEGRATION
```javascript
import StyleSheet from 'react-native-extended-stylesheet';

const style = StyleSheet.create({
  container: {
    backgroundColor: '$colorBase',    // Theme variable
    borderRadius: '$borderRadius',    // Theme variable
    padding: '$spaceM',              // Theme variable
  },
});
```

## EXPORT_SYSTEM

### HIERARCHICAL_EXPORTS
```
src/index.js → Main library entry
├── primitives/index.js → All primitives
├── components/index.js → All components  
├── systems/index.js → All systems
└── theme/index.js → Theme exports
```

### USAGE_PATTERNS
```javascript
// Single import for all components
import { Button, Card, Text, View } from '@satoshi-ltd/nano-design';

// Or specific imports
import { Button } from '@satoshi-ltd/nano-design/src/components';
import { Text } from '@satoshi-ltd/nano-design/src/primitives';
```

## ADVANCED_FEATURES

### CARD_GLASSMORPHISM
```javascript
<Card blur glassMode shadow>           // Dynamic glass with gyroscope
<Card blur color="#fff" blurOpacity={0.2} />  // Color overlay
<Card image={{ uri: '...' }} blur />   // Image + blur combination
```

### PLATFORM_BEHAVIORS
- **Activity indicators**: Hidden on web to prevent loading issues
- **Shadow styles**: Platform.select for iOS/Android/Web compatibility
- **Haptic feedback**: iOS/Android only via expo-haptics

## BUILD_SYSTEM

### LIBRARY_BUILD
- **Tool**: react-native-builder-bob
- **Output**: build/module/ (ES modules)
- **Target**: React Native + Web compatibility

### DEMO_APP
- **Purpose**: Interactive component showcase
- **Location**: demo/ directory
- **Commands**: `cd demo && npm start`

## DEPENDENCIES

### PEER_DEPENDENCIES (Required in consuming app)
```json
{
  "expo-blur": "*",           // Card glassmorphism
  "expo-haptics": "*",        // Touch feedback
  "expo-sensors": "*",        // Gyroscope for glass effects
  "react-native-extended-stylesheet": "*", // Theme system
  "react": "*",
  "react-native": "*"
}
```

## NEXT_STEP
Read `context/development.md` for implementation workflows.