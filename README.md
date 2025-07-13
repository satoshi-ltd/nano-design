# 🎨 Nano Design

A lightweight, flexible React Native design system library built with Expo.

[![npm version](https://badge.fury.io/js/@satoshi-ltd%2Fnano-design.svg)](https://badge.fury.io/js/@satoshi-ltd%2Fnano-design)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Quick Start

### Installation

```bash
npm install @satoshi-ltd/nano-design
```

### Peer Dependencies

Install required peer dependencies:

```bash
npm install react-native-extended-stylesheet expo-blur expo-haptics expo-sensors
```

### Basic Setup

```javascript
import StyleSheet from 'react-native-extended-stylesheet';
import { DefaultTheme } from '@satoshi-ltd/nano-design';

// Initialize theme (required)
StyleSheet.build(DefaultTheme);
```

### First Component

```javascript
import { Button, Card, Text } from '@satoshi-ltd/nano-design';

export default function App() {
  return (
    <Card>
      <Text title>Welcome to Nano Design</Text>
      <Text>A beautiful design system for React Native</Text>
      <Button onPress={() => alert('Hello!')}>
        Get Started
      </Button>
    </Card>
  );
}
```

## 📱 Demo App

Explore components with the included demo:

```bash
cd demo
npm install
npm run start
```

## 🏗️ Architecture

### Three-Tier Component System

**Primitives** → Basic building blocks (Text, View, Input)  
**Components** → Composite UI elements (Button, Card, Modal)  
**Systems** → Complex interactions (Confirm, Menu, Setting)

### Component Examples

```javascript
// Primitives
<Text title color="accent">Heading</Text>
<View flex align="center" gap>
  <Text>Content</Text>
</View>

// Components  
<Button primary large onPress={handlePress}>
  Primary Action
</Button>

<Card blur glassMode shadow>
  <Text>Glassmorphism Card</Text>
</Card>

// Systems
<Confirm
  title="Delete Item"
  message="Are you sure?"
  onConfirm={handleDelete}
/>
```

## 🎨 Theme System

### Using Theme Variables

```javascript
import { style } from './MyComponent.style';

const style = StyleSheet.create({
  container: {
    backgroundColor: '$colorBase',
    padding: '$spaceM',
    borderRadius: '$borderRadius',
  },
});
```

### Available Theme Variables

```javascript
// Colors
$colorAccent     // #FDCE44 - Primary accent
$colorBase       // #FFFEFE - Background  
$colorContent    // #000000 - Primary text
$colorError      // #ff5c5c - Error state

// Spacing
$spaceXS         // 4px
$spaceS          // 8px  
$spaceM          // 16px (default)
$spaceL          // 24px
$spaceXL         // 32px

// Typography
$fontSizeTitle   // 24px
$fontSizeBody    // 17px (default)
$fontSizeCaption // 14px
```

## 📦 Components Overview

### Core Components

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| **Button** | Primary actions | Variants, sizes, loading states |
| **Card** | Content containers | Blur, glass effects, images |
| **Text** | Typography | Semantic sizes, colors |
| **View** | Layouts | Flex helpers, spacing |
| **Input** | Form controls | Validation states, themes |

### Advanced Features

```javascript
// Glassmorphism with gyroscope
<Card blur glassMode shadow>
  <Text>Dynamic glass lighting</Text>
</Card>

// Image backgrounds with blur
<Card image={{ uri: 'https://...' }} blur>
  <Text>Content over image</Text>
</Card>

// Loading states
<Button activity onPress={handleAsync}>
  Processing...
</Button>
```

## 🛠️ Development

### Commands

```bash
npm run build     # Build library
npm run lint      # Run ESLint
npm start         # Start Expo dev server
npm run release   # Version bump + publish
```

### Code Guidelines

- **Import Order**: External → @-scoped → Relative (alphabetical)
- **Props Order**: Typical → Events → Style
- **CSS Properties**: Alphabetical always
- **Single quotes** and **trailing commas** required

## 🤝 Contributing

1. **Fork** the repository
2. **Create** feature branch: `git checkout -b feature/amazing-feature`
3. **Follow** CODE_GUIDELINES.md patterns
4. **Test** with demo app: `cd demo && npm start`
5. **Submit** pull request

### Component Development

```javascript
// Component structure
const MyComponent = ({ 
  children,
  disabled = false,
  onPress,
  ...others 
}) => {
  return (
    <Pressable
      {...others}
      disabled={disabled}
      onPress={onPress}
      style={[style.component, others.style]}
    >
      {children}
    </Pressable>
  );
};
```

## 📚 Resources

- **Documentation**: Full component API and examples
- **Demo App**: Interactive component showcase  
- **CODE_GUIDELINES.md**: Development standards
- **TypeScript**: PropTypes for runtime validation

## 📄 License

MIT © [SATOSHI LTD](https://github.com/satoshi-ltd)

---

**Built with ❤️ for React Native developers**