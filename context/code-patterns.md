# 💻 CODE_PATTERNS: Implementation Guidelines

**Strict coding standards enforced by ESLint + Prettier. Violations cause build failures.**

## CRITICAL_RULES (Build Failures)

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

## COMPONENT_PATTERNS

### STANDARD_COMPONENT_STRUCTURE
```javascript
// Component.jsx
import PropTypes from 'prop-types';
import React from 'react';

import { style } from './Component.style';
import { Pressable } from '../../primitives';

const Component = ({
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
        disabled && style.disabled,
        customStyle,
      ]}
    >
      {children}
    </Pressable>
  );
};

Component.displayName = 'Component';

Component.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  style: PropTypes.object,
  onPress: PropTypes.func,
};

export { Component };
```

### STYLE_FILE_PATTERN
```javascript
// Component.style.js
import StyleSheet from 'react-native-extended-stylesheet';

export const style = StyleSheet.create({
  component: {
    backgroundColor: '$colorBase',
    borderRadius: '$borderRadius',
    padding: '$spaceM',
  },
  
  disabled: {
    backgroundColor: '$colorDisabled',
    opacity: 0.6,
  },
  
  primary: {
    backgroundColor: '$colorAccent',
  },
});
```

### INDEX_FILE_PATTERN
```javascript
// index.js
export * from './Component';
```

## REFACTORING_PRINCIPLES

### CLEAN_CODE_TARGETS
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
        has.shadow && !has.glassMode ? style.shadow : dynamicGlassStyles,
        customStyle,
      ]}
    >
      {image && <ImageBackground source={image} style={style.absolute} />}
      {blur && (
        <BlurView intensity={blurIntensity} tint={blurTint} style={style.absolute}>
          {color && <View style={[style.absolute, { backgroundColor: hexToRgba(color, blurOpacity) }]} />}
          {glassMode && <View style={[style.absolute, style.glassEffect, dynamicBorderStyles]} />}
        </BlurView>
      )}
      <View {...others} style={[style.content, small && style.small]}>
        {children}
      </View>
    </Pressable>
  );
};
```

### KEY_REFACTOR_TECHNIQUES
- **Eliminate intermediate variables** when not needed
- **Create reusable styles** (`style.absolute` for `position: absolute` patterns)
- **Use object conditions** (`const has = { shadow, glassMode }`)
- **Move Platform.select to styles** for better organization
- **Direct destructuring** in function parameters
- **Conditional rendering inline** instead of complex functions
- **Props spreading** (`{...others}`) for layout props to content

## BOOLEAN_PROPS_SYSTEM

### VARIANT_PATTERNS
```javascript
// ✅ CORRECT - Boolean variants
<Button primary large disabled />
<Text title bold color="accent" />
<Card blur shadow glassMode />

// ❌ WRONG - String variants
<Button variant="primary" size="large" disabled={true} />
<Text size="title" weight="bold" color="accent" />
```

### SIZE_PATTERNS
```javascript
// Size variants as boolean props
<Button small>Small Button</Button>
<Button large>Large Button</Button>
<Text tiny>Tiny text</Text>
<Text title>Title text</Text>
```

## DESTRUCTURING_PATTERNS

### FUNCTION_PARAMETERS
```javascript
// Clean parameter destructuring
const processBooking = ({ checkIn, checkOut, adults, children = [] }) => {
  // Implementation
};

// Nested destructuring with defaults
const { hotel: { id: hotelId } = {} } = context;
const { language = LANGUAGES.DEFAULT } = context;
```

### COMPONENT_PROPS
```javascript
// Separate concerns in destructuring
const Component = ({
  // Component behavior
  blur,
  disabled,
  primary,
  // Content
  children,
  // Events
  onPress,
  onSubmit,
  // Styling (always last)
  style: customStyle,
  // Layout props spread
  ...others
}) => {
  // Implementation
};
```

## STYLE_INTEGRATION_PATTERNS

### THEME_VARIABLE_USAGE
```javascript
// Always use theme variables, never hardcoded values
const style = StyleSheet.create({
  container: {
    backgroundColor: '$colorBase',      // ✅ Theme variable
    padding: '$spaceM',                 // ✅ Theme spacing
    borderRadius: '$borderRadius',      // ✅ Theme radius
  },
  
  // ❌ WRONG - Hardcoded values
  wrong: {
    backgroundColor: '#ffffff',         // ❌ Hardcoded
    padding: 16,                        // ❌ Magic number
    borderRadius: 8,                    // ❌ Magic number
  },
});
```

### CONDITIONAL_STYLING
```javascript
// Clean conditional styling
const Component = ({ primary, disabled, customStyle }) => {
  return (
    <View
      style={[
        style.base,                     // Base styles
        primary && style.primary,       // Variant styles
        disabled && style.disabled,     // State styles
        customStyle,                    // Custom overrides last
      ]}
    >
      {children}
    </View>
  );
};
```

## UTILITY_PATTERNS

### MODULE_UTILITIES
```javascript
// getColor.js pattern
export const getColor = (value) => {
  return style[value] || { color: value };
};

// getFontSize.js pattern
export const getFontSize = ({ title, subtitle, caption, tiny }) => {
  if (title) return style.title;
  if (subtitle) return style.subtitle;
  if (caption) return style.caption;
  if (tiny) return style.tiny;
  return style.body;
};
```

### PLATFORM_PATTERNS
```javascript
// Platform-specific styles in style files
const style = StyleSheet.create({
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
      web: {
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      },
    }),
  },
});
```

## ERROR_HANDLING_PATTERNS

### PROPTYPES_VALIDATION
```javascript
Component.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  size: PropTypes.oneOf(['small', 'large']),
  style: PropTypes.object,
  type: PropTypes.oneOf(['primary', 'secondary', 'outlined']),
};
```

### GRACEFUL_FALLBACKS
```javascript
// Handle missing props gracefully
const Component = ({ 
  color = 'base',                      // Default values
  size = 'medium', 
  children,
  ...others 
}) => {
  // Safe rendering with fallbacks
  return (
    <View style={getColor(color) || style.default}>
      {children || <Text>No content</Text>}
    </View>
  );
};
```

## ARCHITECTURE_COMPLIANCE

### THREE_TIER_ADHERENCE
```javascript
// ✅ CORRECT - Component built from primitives
import { Pressable, Text, View } from '../../primitives';

const Button = ({ children, ...props }) => {
  return (
    <Pressable {...props}>
      <View>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
};

// ❌ WRONG - Using React Native directly in components
import { TouchableOpacity, Text as RNText } from 'react-native';
```

### EXPORT_CHAIN_COMPLIANCE
```javascript
// 1. Component exports itself
export { Component };

// 2. Component directory index.js
export * from './Component';

// 3. Tier index.js (primitives/components/systems)
export * from './Component';

// 4. Main index.js
export * from './primitives';
export * from './components';
export * from './systems';
```

## ESLINT_ENFORCEMENT

### CRITICAL_RULES
```javascript
// prefer-const over let
const value = getValue();              // ✅
let value = getValue();               // ❌

// prefer-template over concatenation
const message = `Hello ${name}`;       // ✅
const message = 'Hello ' + name;       // ❌

// prefer-destructuring
const { name, age } = user;            // ✅
const name = user.name;               // ❌

// no-duplicate-imports
import { A, B } from 'module';         // ✅
import { A } from 'module';           // ❌
import { B } from 'module';           // ❌
```

### AUTO_FORMATTING
```javascript
// Prettier enforces these automatically:
// - Single quotes: 'text' not "text"
// - Trailing commas: { prop, }
// - Semicolons: required
// - 120 character limit: auto-wrapped
```

## ESLINT_CONFIGURATION
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

## PRETTIER_CONFIGURATION
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

## NEXT_STEP
All context files complete - you now understand the full Nano Design system!

---

**⚠️ ENFORCEMENT:** ESLint will ERROR and block commits if these rules are violated. Prettier auto-fixes formatting. Follow these patterns exactly.