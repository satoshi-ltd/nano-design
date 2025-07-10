# CLAUDE.md

This file provides comprehensive guidance for AI assistants when working with the `@satoshi-ltd/nano-design` React Native design system library.

## Code Style Guidelines

**⚠️ CRITICAL:** Follow `CODE_GUIDELINES.md` exactly. ESLint will **block commits** if violated.

**Key Rules:** Import order (alphabetical + newlines) | Props order (Typical → Events → Style) | CSS alphabetical | Single quotes | Trailing commas

## Project Overview

`@satoshi-ltd/nano-design` is a lightweight, flexible React Native design system library built with Expo. It provides a comprehensive set of reusable UI components and primitives for building consistent, accessible mobile applications.

**Version:** 0.2.87
**Package:** `@satoshi-ltd/nano-design`
**Repository:** https://github.com/satoshi-ltd/nano-design
**License:** MIT

## Development Commands

### Library Commands
- `npm run build` - Build the library using react-native-builder-bob
- `npm run lint` - Run ESLint with auto-fix on src/ directory
- `npm run start` - Start Expo development server
- `npm run release` - Version bump, publish to npm, and push tags

### Demo Application Commands
The `demo/` directory contains a standalone Expo app that demonstrates the design system:
- `cd demo && npm run start` - Start demo app
- `cd demo && npm run web` - Run demo in web browser
- `cd demo && npm run ios` - Run demo on iOS simulator
- `cd demo && npm run android` - Run demo on Android emulator

## Architecture

The library follows a strict three-tier component architecture:

### 1. Primitives (`src/primitives/`)
**Purpose:** Basic building blocks that wrap React Native components
**Components:**
- `Activity` - Activity indicator component with platform-specific behavior (`src/primitives/Activity/`)
- `Icon` - Icon component with size utilities (`src/primitives/Icon/`)
- `Input` - Text input with theme integration (`src/primitives/Input/`)
- `Pressable` - Touchable component with feedback (`src/primitives/Pressable/`)
- `ScrollView` - Scrollable container (`src/primitives/ScrollView/`)
- `Text` - Typography component with color/size utilities (`src/primitives/Text/`)
- `View` - Layout container (`src/primitives/View/`)

### 2. Components (`src/components/`)
**Purpose:** Composite UI components built from primitives
**Components:**
- `Action` - Action buttons (`src/components/Action/`)
- `Button` - Primary button with variants (primary, secondary, outlined) (`src/components/Button/`)
- `Card` - Content card with color utilities, background image, and blur support (`src/components/Card/`)
- `Image` - Image component with loading indicator (`src/components/Image/`)
- `Modal` - Modal dialog (`src/components/Modal/`)
- `Notification` - Toast/notification component (`src/components/Notification/`)
- `Pagination` - Dot-based pagination (`src/components/Pagination/`)
- `Screen` - Screen-level container (`src/components/Screen/`)
- `SectionList` - Sectioned list component (`src/components/SectionList/`)
- `Tabs` - Tab navigation (`src/components/Tabs/`)

### 3. Systems (`src/systems/`)
**Purpose:** Higher-level behavioral components
**Components:**
- `Confirm` - Confirmation dialog system (`src/systems/Confirm/`)
- `Menu` - Context menu system (`src/systems/Menu/`)
- `Setting` - Settings/preferences UI (`src/systems/Setting/`)

## Theme System

### Theme Location
The design system uses a centralized theme in `src/theme/default.theme.js` exported as `DefaultTheme`.

### Theme Initialization
**CRITICAL:** Theme must be initialized using `react-native-extended-stylesheet`:
```javascript
import StyleSheet from 'react-native-extended-stylesheet';
import { DefaultTheme } from '@satoshi-ltd/nano-design';

StyleSheet.build(DefaultTheme);
```

### Theme Structure
The theme provides semantic tokens organized by category:

#### Colors
- `$colorAccent` - Primary accent color (#FDCE44)
- `$colorBase` - Base/background color (#FFFEFE)
- `$colorBorder` - Border color (#f0f0f0)
- `$colorContent` - Primary text color (#000000)
- `$colorContentLight` - Secondary text color (#595859)
- `$colorDisabled` - Disabled state color (#999999)
- `$colorError` - Error state color (#ff5c5c)
- `$colorWarning` - Warning state color (#ffcc00)
- `$colorSuccess` - Success state color (#28a745)

#### Typography
- `$fontSizeTitle` - 24px
- `$fontSizeSubtitle` - 20px
- `$fontSizeBody` - 17px (default)
- `$fontSizeCaption` - 14px
- `$fontSizeTiny` - 11px
- `$fontWeightDefault` - '400'
- `$fontWeightBold` - '700'
- `$lineHeightDefaultRatio` - 1.3
- `$lineHeightBodyRatio` - 1.5

#### Spacing
- `$spaceXXS` - 2px
- `$spaceXS` - 4px
- `$spaceS` - 8px
- `$spaceM` - 16px (default)
- `$spaceL` - 24px
- `$spaceXL` - 32px
- `$spaceXXL` - 40px

#### Component-Specific Variables
- Button: `$buttonHeight`, `$buttonColorPrimary`, `$buttonChildrenColor`, etc.
- Input: `$inputBackgroundColor`, `$inputBorderColor`, `$inputFontSize`, etc.
- Modal: `$modalOverflowBackgroundColor`
- Pagination: `$paginationSize`, `$paginationColor`
- Tabs: `$tabsBackgroundColor`, `$tabsColor`

## Platform-Specific Behavior

- **Activity Indicator**: Never shows on web (`Platform.OS !== 'web'`) to avoid loading issues
- **Image Component**: Uses platform detection to conditionally render loading states

## Component Patterns

### File Structure
Each component follows a consistent structure:
```
ComponentName/
├── ComponentName.jsx          # Main component
├── ComponentName.style.js     # Styles using react-native-extended-stylesheet
├── index.js                   # Export file
└── modules/                   # Utility functions (if needed)
    ├── getColor.js           # Color resolution
    ├── getFontSize.js        # Font size utilities
    ├── getSize.js            # Size calculations
    └── index.js              # Module exports
```

### Component Implementation Patterns

#### PropTypes
All components use PropTypes for type validation:
```javascript
Component.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  // etc.
};
```

#### Style Integration
Components use `react-native-extended-stylesheet` for theme integration:
```javascript
import StyleSheet from 'react-native-extended-stylesheet';

const style = StyleSheet.create({
  container: {
    backgroundColor: '$colorBase',
    padding: '$spaceM',
  },
});
```

#### Boolean Props for Variants
Components use boolean props for variants:
- `primary`, `secondary`, `outlined` for buttons
- `title`, `subtitle`, `caption`, `tiny` for text sizes
- `small`, `large` for size variants

### Utility Modules

#### getColor.js Pattern
Resolves color values from theme or custom colors:
```javascript
export const getColor = (value) => style[value] || { color: value };
```

#### getFontSize.js Pattern
Resolves font sizes based on boolean props:
```javascript
export const getFontSize = ({ title, subtitle, caption, tiny }) =>
  title ? style.title : subtitle ? style.subtitle : caption ? style.caption : tiny ? style.tiny : style.body;
```

### Design System Utilities

#### Built-in Utility Functions
- **`getColor(value)`** - Resolves theme colors or custom hex values
- **`getFontSize(props)`** - Determines font size from boolean typography props  
- **`hexToRgba(hex, opacity)`** - Converts hex colors to rgba (used in Card blur effects)
- **`useGyroscope(enabled)`** - Dynamic glass lighting for Card component

#### Advanced Card Features
```javascript
// Glassmorphism with gyroscope
<Card blur glassMode>          // Dynamic glass lighting
<Card blur color="#fff" />     // Blur with color overlay
<Card image={source} />        // Image background
```

### Architecture Rules

**Primitives:** Wrap single React Native components (Text, View, Image)
**Components:** Compose primitives (Card = View + BlurView + Activity)
**Systems:** Handle complex interactions (Confirm, Menu, Setting)

## Dependencies

### Peer Dependencies (Required)
The library requires these peer dependencies in the consuming app:
- `@react-navigation/native` - Navigation library
- `expo-blur` - Blur effects for Card glassmorphism
- `expo-haptics` - Haptic feedback
- `expo-sensors` - Gyroscope support for Card glass effects
- `prop-types` - Runtime type checking
- `react` - React library
- `react-native` - React Native framework
- `react-native-extended-stylesheet` - Theme system
- `react-native-safe-area-context` - Safe area handling
- `react-native-web` - Web compatibility

### Build Dependencies
- `react-native-builder-bob` - Library build tool
- `@satoshi-ltd/eslint` - ESLint configuration

## Usage Guidelines for AI Assistants

### When Using This Design System

1. **Always Initialize Theme First**
   ```javascript
   import StyleSheet from 'react-native-extended-stylesheet';
   import { DefaultTheme } from '@satoshi-ltd/nano-design';
   
   StyleSheet.build(DefaultTheme);
   ```

2. **Import Components Properly**
   ```javascript
   import { Button, Text, View } from '@satoshi-ltd/nano-design';
   ```

3. **Use Theme Variables**
   - Prefer theme variables over hardcoded values
   - Use semantic color names (e.g., `color="accent"` instead of `color="#FDCE44"`)

4. **Follow Component Hierarchy**
   - Use primitives for basic layouts
   - Use components for complex UI patterns
   - Use systems for high-level behaviors

5. **Consistent Prop Patterns**
   - Boolean props for variants (`primary`, `secondary`, `outlined`)
   - Size props (`small`, `large`)
   - Standard props (`disabled`, `onPress`, `children`)

### Common Component Usage Patterns

#### Button Examples
```javascript
// Primary button
<Button onPress={() => {}}>Click me</Button>

// Variants
<Button secondary onPress={() => {}}>Secondary</Button>
<Button outlined onPress={() => {}}>Outlined</Button>

// Sizes and states
<Button small onPress={() => {}}>Small</Button>
<Button large disabled onPress={() => {}}>Large Disabled</Button>
<Button activity onPress={() => {}}>Loading</Button>
```

#### Text Examples
```javascript
// Typography hierarchy
<Text title>Title Text</Text>
<Text subtitle>Subtitle Text</Text>
<Text>Body Text (default)</Text>
<Text caption>Caption Text</Text>
<Text tiny>Tiny Text</Text>

// Colors and styling
<Text color="accent" bold>Accent Bold Text</Text>
<Text color="error" align="center">Error Text</Text>
```

#### Card Examples
```javascript
// Basic card
<Card>
  <Text>Card content</Text>
</Card>

// Blur card with glassmorphism
<Card blur glassMode>
  <Text>Glass effect card</Text>
</Card>

// Blur card with color overlay
<Card blur color="#ffffff" blurOpacity={0.2}>
  <Text>Card with white overlay</Text>
</Card>

// Image background card
<Card image={{ uri: 'https://example.com/image.jpg' }}>
  <Text>Card with image background</Text>
</Card>
```

#### Image Examples
```javascript
// Basic image with loading indicator
<Image 
  source={{ uri: 'https://example.com/image.jpg' }}
  style={{ width: 300, height: 200 }}
/>

// Custom activity indicator
<Image 
  source={{ uri: 'https://example.com/image.jpg' }}
  activityColor="#ff0000"
  activitySize="large"
  style={{ width: 300, height: 200 }}
/>
```


### Best Practices

1. **Always use theme variables** instead of hardcoded values
2. **Follow the three-tier architecture** when building apps
3. **Use semantic color names** for consistency
4. **Pass custom styles via style prop** when needed
5. **Leverage utility modules** for consistent behavior
6. **Use PropTypes** for type safety
7. **Test components in the demo app** during development

### Common Pitfalls to Avoid

1. **Not initializing theme** - Components won't render correctly
2. **Hardcoding colors/sizes** - Breaks theming consistency
3. **Mixing component tiers** - Violates architecture principles
4. **Forgetting peer dependencies** - App won't build
5. **Not using semantic props** - Reduces maintainability

This design system is optimized for consistency, accessibility, and developer experience. Follow these guidelines to build cohesive React Native applications.

## Maintenance Rule for AI Assistants

**CRITICAL:** This CLAUDE.md file serves as the single source of truth for the project. With every substantial code change, you MUST update this file to reflect:

1. **New Components:** Add to the appropriate tier (primitives/components/systems) with file paths
2. **Theme Changes:** Update theme variables, colors, typography, or spacing
3. **Architectural Changes:** Modify component patterns, file structures, or dependencies
4. **API Changes:** Update prop patterns, usage examples, or component interfaces
5. **Build/Command Changes:** Modify development commands or build processes

**When to Update:**
- Adding/removing/modifying components
- Changing theme variables or structure
- Updating dependencies or peer dependencies
- Modifying build scripts or development workflow
- Adding new architectural patterns or conventions

**How to Update:**
- Edit the relevant sections in this file
- Keep examples current with actual implementation
- Update version numbers and component lists
- Ensure all file paths and command references are accurate

This ensures project continuity and context preservation across development sessions.

## Automated Pipeline Commands

### Pipeline Patch
When the user says **"pipeline patch"** or **"pipeline patch [description]"**, automatically execute the complete patch release process:

1. **Version bump:** Increment patch version in package.json and CLAUDE.md
2. **Build:** Execute `npm run build` and stop if it fails
3. **Publish:** Execute `npm publish` and stop if it fails
4. **Commit:** Create git commit with descriptive message
5. **Push:** Execute `git push` only if all previous steps succeeded

**Commit message format:**
```
📦 v0.2.XX - [Brief description]

[Detailed description of changes]
- Feature/fix 1
- Feature/fix 2
- etc.
```

**Usage options:**
```
User: "pipeline patch"
Assistant: [Analyzes changes automatically and executes pipeline]

User: "pipeline patch [description]"
Assistant: [Executes pipeline with provided description]
```

**Error handling:**
- If any step fails, stop the pipeline and report the error
- Do not proceed to next steps if current step fails
- Always use TodoWrite to track pipeline progress

This command streamlines the release process and ensures informative commit messages for better project history.