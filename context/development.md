# 🛠️ DEVELOPMENT: Commands & Workflows

## DEVELOPMENT_COMMANDS

### LIBRARY_COMMANDS
```bash
npm run build         # Build library with react-native-builder-bob
npm run lint          # ESLint with auto-fix on src/
npm run start         # Start Expo development server  
npm run release       # Version bump + publish + push tags
```

### DEMO_APP_COMMANDS
```bash
cd demo && npm run start    # Start demo app
cd demo && npm run web      # Run demo in browser
cd demo && npm run ios      # iOS simulator
cd demo && npm run android  # Android emulator
```

## AUTOMATED_PIPELINES

### PIPELINE_PATCH_COMMAND
When you say **"pipeline patch"** or **"pipeline patch [description]"**:

1. **Version bump**: package.json + CLAUDE.md
2. **Build**: `npm run build` (stops if fails)
3. **Publish**: `npm publish` (stops if fails)  
4. **Commit**: Descriptive git commit
5. **Push**: `git push` (only if all succeeded)

### COMMIT_MESSAGE_FORMAT
```
📦 v0.2.XX - [Brief description]

[Detailed changes]
- Feature/fix 1
- Feature/fix 2

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

## COMPONENT_DEVELOPMENT

### ADDING_NEW_PRIMITIVE
```bash
# 1. Create component directory
mkdir src/primitives/NewPrimitive

# 2. Create files
touch src/primitives/NewPrimitive/NewPrimitive.jsx
touch src/primitives/NewPrimitive/NewPrimitive.style.js  
touch src/primitives/NewPrimitive/index.js

# 3. Export in primitives/index.js
# 4. Test in demo app
```

### COMPONENT_TEMPLATE
```javascript
// NewComponent.jsx
import PropTypes from 'prop-types';
import React from 'react';

import { style } from './NewComponent.style';
import { Pressable } from '../../primitives';

const NewComponent = ({
  children,
  disabled = false,
  primary = false,
  style: customStyle,
  onPress,
  ...others
}) => {
  return (
    <Pressable
      {...others}
      disabled={disabled}
      onPress={onPress}
      style={[
        style.component,
        primary && style.primary,
        customStyle,
      ]}
    >
      {children}
    </Pressable>
  );
};

NewComponent.displayName = 'NewComponent';

NewComponent.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  style: PropTypes.object,
  onPress: PropTypes.func,
};

export { NewComponent };
```

### STYLE_TEMPLATE  
```javascript
// NewComponent.style.js
import StyleSheet from 'react-native-extended-stylesheet';

export const style = StyleSheet.create({
  component: {
    backgroundColor: '$colorBase',
    borderRadius: '$borderRadius',
    padding: '$spaceM',
  },
  
  primary: {
    backgroundColor: '$colorAccent',
  },
});
```

### INDEX_TEMPLATE
```javascript
// index.js
export * from './NewComponent';
```

## TESTING_WORKFLOW

### DEMO_APP_TESTING
```javascript
// Add to demo/App.jsx
import { NewComponent } from '@satoshi-ltd/nano-design';

// Test all variants
<NewComponent>Basic</NewComponent>
<NewComponent primary>Primary</NewComponent>  
<NewComponent disabled>Disabled</NewComponent>
<NewComponent onPress={() => console.log('pressed')}>Interactive</NewComponent>
```

### VALIDATION_CHECKLIST
- [ ] Component builds without errors
- [ ] PropTypes validation works
- [ ] Theme variables integrated  
- [ ] Demo app renders correctly
- [ ] Export chain works (main index.js)
- [ ] ESLint passes
- [ ] Follows three-tier architecture

## THEME_DEVELOPMENT

### ADDING_THEME_VARIABLES
```javascript
// src/theme/default.theme.js
export const DefaultTheme = {
  // Add new variables
  $newColor: '#ff0000',
  $newSpacing: 20,
  
  // Group by category
  // Colors, Typography, Spacing, Component-specific
};
```

### USING_NEW_VARIABLES
```javascript
// In component styles
const style = StyleSheet.create({
  container: {
    backgroundColor: '$newColor',
    margin: '$newSpacing',
  },
});
```

## BUILD_SYSTEM

### LIBRARY_BUILD_PROCESS
1. **Babel compilation**: src/ → build/module/
2. **Package validation**: Checks exports, dependencies
3. **Output structure**: ES modules for tree shaking

### DEMO_APP_SETUP
```javascript
// demo/App.jsx structure
import StyleSheet from 'react-native-extended-stylesheet';
import { DefaultTheme } from '../src';

StyleSheet.build(DefaultTheme); // Initialize theme

export default function App() {
  return (
    <View>
      {/* Component showcase */}
    </View>
  );
}
```

## TROUBLESHOOTING

### COMMON_ISSUES
```bash
# Theme not working
StyleSheet.build(DefaultTheme); // Must be called first

# Component not rendering
# Check export chain: Component → index.js → main index.js

# Build failing
npm run lint --fix  # Fix style issues first

# Demo app not updating  
cd demo && npm start -- --clear-cache
```

### DEBUG_COMMANDS
```bash
# Check exports
node -e "console.log(require('./src/index.js'))"

# Validate package.json
npm pack --dry-run

# Test import paths
node -e "const { Button } = require('@satoshi-ltd/nano-design'); console.log(Button)"
```

## CODE_STANDARDS

### CRITICAL_RULES
- **Import order**: External → @-scoped → Relative (alphabetical + newlines)
- **Props order**: Typical → Events → Style
- **CSS properties**: Alphabetical always
- **Single quotes + trailing commas**: Required by Prettier
- **Component refactoring**: Follow patterns in CODE_GUIDELINES.md

### ESLINT_ENFORCEMENT
ESLint will **block commits** if rules violated. Key rules:
- `import/order` - Import ordering
- `prefer-const` - Use const when possible
- `prefer-destructuring` - Destructure objects/arrays
- `no-duplicate-imports` - One import per module

## NEXT_STEP
Read `context/components.md` for complete component reference.