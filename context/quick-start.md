# 🚀 QUICK_START: 30-Second Context

## WHAT_IS_NANO_DESIGN
Lightweight React Native design system. Three-tier component architecture for consistent, accessible mobile apps.

## CORE_FLOW
```
Theme Setup → Primitives → Components → Systems → Your App
```

## THREE_TIERS
- **Primitives**: Basic building blocks (Text, View, Input, Pressable)
- **Components**: Composite UI elements (Button, Card, Modal, Image)  
- **Systems**: Complex interactions (Confirm, Menu, Setting)

## KEY_FILES
- **Main exports**: src/index.js
- **Theme system**: src/theme/default.theme.js
- **Demo app**: demo/App.jsx
- **Style patterns**: CODE_GUIDELINES.md

## TECH_STACK
- **Core**: React Native + Expo
- **Styling**: react-native-extended-stylesheet
- **Advanced**: expo-blur, expo-haptics, expo-sensors
- **Build**: react-native-builder-bob
- **Demo**: Standalone Expo app

## START_COMMANDS
```bash
npm install @satoshi-ltd/nano-design
npm run build         # Build library
cd demo && npm start  # Interactive demo
```

## BASIC_SETUP
```javascript
import StyleSheet from 'react-native-extended-stylesheet';
import { DefaultTheme, Button, Card, Text } from '@satoshi-ltd/nano-design';

StyleSheet.build(DefaultTheme); // Required!

<Card blur shadow>
  <Text title>Hello World</Text>
  <Button primary onPress={() => {}}>Get Started</Button>
</Card>
```

## NEXT_STEP
Read `context/architecture.md` for complete system understanding.