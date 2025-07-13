# CODE_GUIDELINES.md

**Strict coding standards enforced by ESLint + Prettier. Violations cause build failures.**

## CRITICAL RULES (Build Failures)

### Import Order - `import/order` ESLint Rule
```javascript
// External (alphabetical)
import { BlurView } from 'expo-blur';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Platform } from 'react-native';

// @-scoped internal (alphabetical)
import { Button } from '@company/package';

// Relative imports (alphabetical)
import { Activity, View } from '../../primitives';
import { style } from './Component.style';
```
**Rules:** External → @-scoped → Relative | Alphabetical within groups | Newlines between groups

### Props Order - Component Pattern
```javascript
const Component = ({
  // 1. Typical props (alphabetical)
  disabled, large, primary,
  // 2. Event handlers (alphabetical)  
  onPress, onSubmit,
  // 3. Others last
  ...others
}) => {
  return (
    <Element
      {...others}           // 1. Others first
      disabled={disabled}   // 2. Typical (A-Z)
      onPress={onPress}     // 3. Events (A-Z)
      style={style.element} // 4. Style last
    />
  );
};
```

### CSS Properties - Alphabetical Always
```javascript
const style = StyleSheet.create({
  container: {
    backgroundColor: '$colorBase',  // A
    borderRadius: '$borderRadius',  // B
    padding: '$spaceM',             // P
    position: 'absolute',           // P
  },
});
```

### Prettier Rules - Auto-enforced
- **Single quotes:** `'text'` never `"text"`
- **Arrow parens:** `(param) => {}` never `param => {}`
- **Trailing commas:** Required everywhere `{ prop, }`
- **Semicolons:** Required `;`
- **120 char limit:** Auto-wrapped

## STANDARD PATTERNS

### Component Refactoring Principles

**Target:** Clean, maintainable, minimal code
```javascript
// ✅ EXCELLENT - Card refactor example
const Card = ({
  blur = false,
  children,
  color = 'base',
  shadow = false,
  small,
  style: customStyle,
  onPress,
  ...others
}) => {
  const { getGlassLighting } = useGyroscope(glassMode && blur, shadow);
  
  const has = { shadow, glassMode: glassMode && blur };
  const dynamicGlassStyles = has.glassMode ? getGlassLighting() : undefined;

  return (
    <Pressable
      onPress={onPress}
      style={[
        style.card,
        outlined ? style.outlined : !blur && !image ? getColor(color) : {},
        has.shadow && !has.glassMode ? style.shadow : dynamicGlassStyles ? extractShadowStyles(dynamicGlassStyles) : {},
        customStyle,
      ]}
    >
      {image && <ImageBackground source={image} style={style.absolute} />}
      {blur && (
        <BlurView intensity={blurIntensity} tint={blurTint} style={style.absolute}>
          {color && <View style={[style.absolute, { backgroundColor: hexToRgba(color, blurOpacity) }]} />}
          {glassMode && <View style={[style.absolute, style.glassEffect, extractBorderStyles(dynamicGlassStyles)]} />}
        </BlurView>
      )}
      <View {...others} style={[style.content, small && style.small]}>
        {children}
      </View>
    </Pressable>
  );
};
```

**Key Refactor Techniques:**
- **Eliminate intermediate variables** when not needed
- **Create reusable styles** (`style.absolute` for `position: absolute` patterns)
- **Use object conditions** (`const has = { shadow, glassMode }`)  
- **Move Platform.select to styles** for better organization
- **Direct destructuring** in function parameters
- **Conditional rendering inline** instead of complex functions
- **Props spreading** (`{...others}`) for layout props to content

### Component Structure
```javascript
// 1. Imports (order enforced)
import PropTypes from 'prop-types';
import React from 'react';

// 2. Component
const Component = ({ prop1, onEvent, ...others }) => {
  return <Element {...others} />;
};

// 3. Display name
Component.displayName = 'Component';

// 4. PropTypes (alphabetical)
Component.propTypes = {
  prop1: PropTypes.string,
};

// 5. Export
export { Component };
```

### State Naming
```javascript
// ✅ CORRECT
const [busy, setBusy] = useState(false);
const [visible, setVisible] = useState(true);
const [data, setData] = useState(null);

// ❌ WRONG
const [isLoading, setIsLoading] = useState(false);
const [show, setShow] = useState(true);
```

### Boolean Props
```javascript
// ✅ CORRECT - Boolean variants
<Button primary large disabled />
<Text title bold />

// ❌ WRONG - String variants
<Button variant="primary" size="large" />
```

### Error Handling
```javascript
// Async operations
try {
  const result = await apiCall();
  return result;
} catch (error) {
  console.warn('Operation failed:', error);
  return null;
}

// Optional chaining
const value = data?.property?.subProperty ?? defaultValue;
```

## ESLint Configuration
```javascript
{
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
  "rules": {
    "import/order": ["error", { /* alphabetical + newlines */ }],
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "warn",
    "react/display-name": "off"
  }
}
```

## Prettier Configuration
```javascript
{
  arrowParens: 'always',
  semi: true,
  singleQuote: true,
  printWidth: 120,
  trailingComma: 'all',
  useTabs: false,
}
```

---

**⚠️ ENFORCEMENT:** ESLint will ERROR and block commits if these rules are violated. Prettier auto-fixes formatting. Follow these patterns exactly.