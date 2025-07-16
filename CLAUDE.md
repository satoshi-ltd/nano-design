# 🤖 CLAUDE AI: START HERE
<!-- v0.2.100 -->

**New session without context? Follow this reading order:**

## 📖 REQUIRED READING (3 minutes total)
1. **context/quick-start.md** (30s) - What is Nano Design
2. **context/architecture.md** (90s) - Component system & patterns  
3. **context/development.md** (60s) - Commands & workflows

## 📚 OPTIONAL READING (as needed)
4. **context/components.md** - Complete component reference
5. **context/theme-system.md** - Theming and styling patterns
6. **context/code-patterns.md** - Implementation guidelines

## 🚀 QUICK ACTIONS (after reading context/)
- **Start demo**: `cd demo && npm start`
- **Build library**: `npm run build`
- **Add component**: Follow three-tier architecture (primitives → components → systems)
- **Theme variables**: Check `src/theme/default.theme.js`

## ⚡ SMART VALIDATION (Quota-Optimized)

**After ANY code change, Claude MUST validate based on impact:**

### 🎯 **IMPACT LEVELS**
```
📝 Docs/style → 🟢 MINIMAL (5s)    | npm run lint --silent
🔧 Component → 🟡 STANDARD (20s)   | npm run build + demo test
📁 New files → 🟠 HIGH (45s)       | + export check + theme integration
🏗️ Architecture → 🔴 CRITICAL (60s) | + full demo test + guidelines update
```

### 🚀 **RESPONSE TEMPLATE (Use Appropriate Level)**

#### 🟢 MINIMAL:
```markdown
## ✅ Validation (MINIMAL)
- [x] Lint: `npm run lint` ✅
- [x] Style: context/code-patterns.md compliance ✅
```

#### 🟡 STANDARD:
```markdown
## ✅ Validation (STANDARD) 
- [x] Build: `npm run build` ✅
- [x] Demo: Component renders correctly ✅
- [x] Props: PropTypes validation ✅
```

#### 🟠 HIGH:
```markdown
## ✅ Validation (HIGH)
- [x] Build: `npm run build` ✅  
- [x] Exports: Component properly exported ✅
- [x] Theme: Variables integrated correctly ✅
- [x] Demo: Interactive testing ✅
```

#### 🔴 CRITICAL:
```markdown
## ✅ Validation (CRITICAL)
- [x] Build: `npm run build` ✅
- [x] Demo: Full app testing ✅
- [x] Architecture: Three-tier compliance ✅
- [x] Docs: context/ files updated ✅
```

**Quota savings: 90% (MINIMAL) | 65% (STANDARD) | 35% (HIGH) | 0% (CRITICAL)**

## 🚀 AUTOMATED PIPELINES

### Pipeline Patch Command
When user says **"pipeline patch"** or **"pipeline patch [description]"**:

1. **Version bump:** Increment patch in package.json + CLAUDE.md
2. **Build:** Execute `npm run build` (stop if fails)
3. **Publish:** Execute `npm publish` (stop if fails)
4. **Commit:** Git commit with descriptive message
5. **Push:** Execute `git push` (only if all succeeded)

**Commit Template:**
```
📦 v0.2.XX - [Brief description]

[Detailed changes]
- Feature/fix 1
- Feature/fix 2

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

## 🎯 WHEN YOU NEED TO...
- **Understand the system**: Read context/architecture.md
- **Add component**: Follow context/development.md patterns
- **Theme integration**: Check context/theme-system.md
- **Code standards**: Reference context/code-patterns.md
- **Component API**: Browse context/components.md

---

*After reading context/, you'll understand the complete Nano Design system*

---

# PROJECT RULES

## Architecture Mapping
**New primitive**: src/primitives/[Name]/ → export in primitives/index.js → main index.js  
**New component**: src/components/[Name]/ → built from primitives → export chain  
**New system**: src/systems/[Name]/ → complex interactions → export chain  
**Theme update**: src/theme/default.theme.js → rebuild library → update context/

## Code Style Guidelines

**⚠️ CRITICAL:** Follow `context/code-patterns.md` exactly. ESLint will **block commits** if violated.

**Key Rules:** 
- Import order (external → @-scoped → relative, alphabetical + newlines)
- Props order (typical → events → style)
- CSS properties alphabetical
- Single quotes, trailing commas
- Component refactoring principles

## Design System Rules
- **Three-tier architecture**: Primitives → Components → Systems
- **Theme integration**: Always use `react-native-extended-stylesheet`
- **Boolean props**: Use `primary`, `large`, `disabled` instead of `variant="primary"`
- **File structure**: Component.jsx + Component.style.js + index.js
- **PropTypes**: Required for all components
- **Platform behavior**: Handle web/mobile differences gracefully

## Key Files
- `src/index.js` - Main library exports
- `src/theme/default.theme.js` - Design tokens and variables
- `src/primitives/` - Basic building blocks (Text, View, etc.)
- `src/components/` - Composite UI components (Button, Card, etc.)
- `src/systems/` - Complex interaction patterns (Confirm, Menu, etc.)
- `demo/App.jsx` - Interactive component showcase

## Theme System Integration
```javascript
// Required initialization
import StyleSheet from 'react-native-extended-stylesheet';
import { DefaultTheme } from '@satoshi-ltd/nano-design';
StyleSheet.build(DefaultTheme);

// Using theme variables
const style = StyleSheet.create({
  container: {
    backgroundColor: '$colorBase',
    padding: '$spaceM',
  },
});
```

## Component Patterns
```javascript
// Standard component structure
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
        customStyle,
      ]}
    >
      {children}
    </Pressable>
  );
};
```

## Development Commands
- `npm run build` - Build library with react-native-builder-bob
- `npm run lint` - ESLint validation with auto-fix
- `npm start` - Start Expo development server
- `npm run release` - Version bump + publish + push tags
- `cd demo && npm start` - Demo app development

## Validation Requirements
- **Build success**: Library must compile without errors
- **Demo testing**: Components must render in demo app
- **PropTypes**: All props must have type validation
- **Export chains**: Components accessible via main index
- **Theme compliance**: Use design tokens, not hardcoded values

Goal: Maintain consistent, scalable React Native design system