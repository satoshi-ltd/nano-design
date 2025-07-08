# @satoshi-ltd/nano-design

A lightweight, flexible React Native design system library built with Expo. This library provides a comprehensive set of reusable UI components and primitives for building consistent, accessible mobile applications.

## 🚀 Installation

```bash
npm install @satoshi-ltd/nano-design
```

### Peer Dependencies

Install the required peer dependencies:

```bash
npm install @react-navigation/native expo-blur expo-haptics prop-types react react-native react-native-extended-stylesheet react-native-safe-area-context react-native-web
```

## 📁 Architecture

The library follows a three-tier component architecture:

### 1. **Primitives** (`/primitives`)
Basic building blocks that wrap React Native components:
- `Icon` - Icon component with size utilities
- `Input` - Text input with theme integration
- `Pressable` - Touchable component with feedback
- `ScrollView` - Scrollable container
- `Text` - Typography component with color/size utilities
- `View` - Layout container

### 2. **Components** (`/components`)
Composite UI components built from primitives:
- `Action` - Action buttons
- `Button` - Primary button with variants (primary, secondary, outlined)
- `Card` - Content card with color utilities
- `Modal` - Modal dialog
- `Notification` - Toast/notification component
- `Pagination` - Dot-based pagination
- `Screen` - Screen-level container
- `SectionList` - Sectioned list component
- `Tabs` - Tab navigation

### 3. **Systems** (`/systems`)
Higher-level behavioral components:
- `Confirm` - Confirmation dialog system
- `Menu` - Context menu system
- `Setting` - Settings/preferences UI

## 🎨 Theme System

### Setup
Initialize the theme system with `react-native-extended-stylesheet`:

```javascript
import StyleSheet from 'react-native-extended-stylesheet';
import { DefaultTheme } from '@satoshi-ltd/nano-design';

// Build theme
StyleSheet.build(DefaultTheme);
```

### Theme Structure
The theme provides semantic tokens for:

#### Colors
- `$colorAccent` - Primary accent color (#FDCE44)
- `$colorBase` - Base/background color (#FFFEFE)
- `$colorContent` - Primary text color (#000000)
- `$colorContentLight` - Secondary text color (#595859)
- `$colorBorder` - Border color (#f0f0f0)
- `$colorDisabled` - Disabled state color (#999999)
- `$colorError` - Error state color (#ff5c5c)
- `$colorWarning` - Warning state color (#ffcc00)
- `$colorSuccess` - Success state color (#28a745)

#### Typography
- `$fontSizeTitle` - 24px
- `$fontSizeSubtitle` - 20px
- `$fontSizeBody` - 17px
- `$fontSizeCaption` - 14px
- `$fontSizeTiny` - 11px

#### Spacing
- `$spaceXXS` - 2px
- `$spaceXS` - 4px
- `$spaceS` - 8px
- `$spaceM` - 16px
- `$spaceL` - 24px
- `$spaceXL` - 32px
- `$spaceXXL` - 40px

## 📚 Component Usage

### Basic Components

#### Button
```javascript
import { Button } from '@satoshi-ltd/nano-design';

// Primary button
<Button onPress={() => {}}>Click me</Button>

// Secondary button
<Button secondary onPress={() => {}}>Secondary</Button>

// Outlined button
<Button outlined onPress={() => {}}>Outlined</Button>

// With icon
<Button icon="heart" onPress={() => {}}>Like</Button>

// Sizes
<Button small onPress={() => {}}>Small</Button>
<Button large onPress={() => {}}>Large</Button>

// States
<Button disabled onPress={() => {}}>Disabled</Button>
<Button activity onPress={() => {}}>Loading</Button>
```

#### Text
```javascript
import { Text } from '@satoshi-ltd/nano-design';

// Typography hierarchy
<Text title>Title Text</Text>
<Text subtitle>Subtitle Text</Text>
<Text>Body Text (default)</Text>
<Text caption>Caption Text</Text>
<Text tiny>Tiny Text</Text>

// Colors
<Text color="accent">Accent Text</Text>
<Text color="error">Error Text</Text>
<Text color="success">Success Text</Text>
<Text color="#FF0000">Custom Color</Text>

// Styling
<Text bold>Bold Text</Text>
<Text align="center">Centered Text</Text>
<Text secondary>Secondary Font</Text>
```

#### Input
```javascript
import { Input } from '@satoshi-ltd/nano-design';

<Input
  placeholder="Enter text"
  value={value}
  onChangeText={setValue}
  error={errorMessage}
  valid={isValid}
/>
```

#### View
```javascript
import { View } from '@satoshi-ltd/nano-design';

<View>
  <Text>Content</Text>
</View>
```

### Complex Components

#### Card
```javascript
import { Card } from '@satoshi-ltd/nano-design';

<Card color="accent">
  <Text>Card content</Text>
</Card>
```

#### Modal
```javascript
import { Modal } from '@satoshi-ltd/nano-design';

<Modal visible={isVisible} onClose={() => setIsVisible(false)}>
  <Text>Modal content</Text>
</Modal>
```

#### Tabs
```javascript
import { Tabs } from '@satoshi-ltd/nano-design';

<Tabs
  tabs={[
    { title: 'Tab 1', content: <Text>Content 1</Text> },
    { title: 'Tab 2', content: <Text>Content 2</Text> },
  ]}
  secondary={false}
/>
```

#### Pagination
```javascript
import { Pagination } from '@satoshi-ltd/nano-design';

<Pagination
  current={currentPage}
  total={totalPages}
  onPress={setCurrentPage}
/>
```

### System Components

#### Confirm
```javascript
import { Confirm } from '@satoshi-ltd/nano-design';

<Confirm
  visible={showConfirm}
  title="Confirm Action"
  message="Are you sure?"
  onConfirm={() => {}}
  onCancel={() => setShowConfirm(false)}
/>
```

#### Menu
```javascript
import { Menu } from '@satoshi-ltd/nano-design';

<Menu
  visible={showMenu}
  options={[
    { title: 'Option 1', onPress: () => {} },
    { title: 'Option 2', onPress: () => {} },
  ]}
  onClose={() => setShowMenu(false)}
/>
```

#### Setting
```javascript
import { Setting } from '@satoshi-ltd/nano-design';

<Setting
  title="Setting Item"
  description="Setting description"
  onPress={() => {}}
/>
```

## 🎯 Best Practices

### Theme Usage
1. Always use theme variables instead of hardcoded values
2. Build the theme once at app startup
3. Use semantic color names for consistency

### Component Patterns
1. Use primitives for basic layouts
2. Compose components for complex UI patterns
3. Follow the component hierarchy (primitives → components → systems)

### Styling
1. Each component uses `react-native-extended-stylesheet` for theme integration
2. Custom styles can be passed via the `style` prop
3. Theme variables are accessible using `$` prefix

## 🔧 Development

### Scripts
- `npm run build` - Build the library
- `npm run lint` - Run ESLint with auto-fix
- `npm run start` - Start Expo development server
- `npm run release` - Version bump and publish

### Demo App
Test components in the demo application:
```bash
cd demo
npm install
npm run start
```

## 📝 Component Props Reference

### Button Props
- `activity: boolean` - Show loading spinner
- `children: ReactNode` - Button text/content
- `disabled: boolean` - Disable button
- `flex: boolean` - Make button flexible
- `icon: string` - Icon name
- `large: boolean` - Large size variant
- `outlined: boolean` - Outlined style
- `secondary: boolean` - Secondary style
- `small: boolean` - Small size variant
- `onPress: function` - Press handler

### Text Props
- `align: 'left' | 'center' | 'right'` - Text alignment
- `bold: boolean` - Bold font weight
- `children: ReactNode` - Text content
- `color: string` - Text color (theme key or hex)
- `flex: boolean` - Flexible text
- `secondary: boolean` - Secondary font family
- `title: boolean` - Title size
- `subtitle: boolean` - Subtitle size
- `caption: boolean` - Caption size
- `tiny: boolean` - Tiny size

### Input Props
- `placeholder: string` - Placeholder text
- `value: string` - Input value
- `onChangeText: function` - Text change handler
- `error: string` - Error message
- `valid: boolean` - Valid state
- All React Native TextInput props

## 🤝 Contributing

This library is designed to be simple, consistent, and extensible. When adding new components:

1. Follow the three-tier architecture
2. Use theme variables for styling
3. Include PropTypes for type validation
4. Add proper displayName for debugging
5. Follow existing naming conventions

## 📄 License

MIT License - see LICENSE file for details.