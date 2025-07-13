# 📦 COMPONENTS: Complete Reference

## PRIMITIVES (src/primitives/)

### Activity
**Purpose**: Platform-aware loading indicators
```javascript
<Activity color="accent" size="large" />
<Activity size="small" style={{ margin: 10 }} />
```
**Props**: `color`, `size` (`small|large`)
**Behavior**: Hidden on web platform to prevent loading issues

### Icon  
**Purpose**: Scalable icon component with size utilities
```javascript
<Icon name="arrow-right" size="large" color="accent" />
<Icon name="star" size="small" />
```
**Props**: `name`, `size` (`small|large`), `color`
**Modules**: `getSize()` utility for size calculations

### Input
**Purpose**: Text input with theme integration and validation states
```javascript
<Input placeholder="Enter text" />
<Input error validationMessage="Required field" />
<Input valid value="Valid input" />
```
**Props**: `placeholder`, `error`, `valid`, `validationMessage`
**States**: Default, focus, error, valid with theme colors

### Pressable
**Purpose**: Touchable component with haptic feedback
```javascript
<Pressable onPress={() => {}} haptic>
  <Text>Touch me</Text>
</Pressable>
```
**Props**: `onPress`, `haptic`, `disabled`
**Features**: Platform-aware haptic feedback via expo-haptics

### ScrollView
**Purpose**: Scrollable container with theme integration
```javascript
<ScrollView horizontal showsScrollbar={false}>
  <Text>Scrollable content</Text>
</ScrollView>
```
**Props**: Standard React Native ScrollView props
**Styling**: Theme-integrated with consistent behavior

### Text
**Purpose**: Typography component with semantic sizing and colors
```javascript
<Text title>Main Heading</Text>
<Text subtitle color="accent">Subheading</Text>
<Text caption>Small text</Text>
<Text tiny>Very small text</Text>
```
**Props**: `title`, `subtitle`, `caption`, `tiny`, `color`, `bold`, `align`
**Modules**: `getColor()`, `getFontSize()` utilities

### View
**Purpose**: Layout container with flex utilities and spacing
```javascript
<View flex align="center" justify="spaceBetween" gap>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</View>
```
**Props**: `flex`, `align`, `justify`, `row`, `spaceBetween`, `gap`, `offset`
**Utilities**: Complete flexbox helper system

## COMPONENTS (src/components/)

### Action
**Purpose**: Action buttons with consistent styling
```javascript
<Action onPress={() => {}}>Action Button</Action>
<Action disabled>Disabled Action</Action>
```
**Props**: `onPress`, `disabled`, `children`
**Usage**: Secondary actions, toolbar buttons

### Button
**Purpose**: Primary interaction buttons with variants and states
```javascript
<Button primary onPress={() => {}}>Primary</Button>
<Button secondary>Secondary</Button>
<Button outlined large>Outlined Large</Button>
<Button activity>Loading...</Button>
<Button disabled>Disabled</Button>
```
**Props**: `primary`, `secondary`, `outlined`, `small`, `large`, `activity`, `disabled`
**Features**: Loading states, size variants, consistent theming

### Card
**Purpose**: Content containers with advanced effects
```javascript
// Basic card
<Card>
  <Text>Basic content</Text>
</Card>

// Glassmorphism with gyroscope
<Card blur glassMode shadow>
  <Text>Dynamic glass effect</Text>
</Card>

// Color overlay
<Card blur color="#ffffff" blurOpacity={0.2}>
  <Text>White overlay</Text>
</Card>

// Image background
<Card image={{ uri: 'https://...' }}>
  <Text>Content over image</Text>
</Card>

// Combined effects
<Card image={{ uri: '...' }} blur shadow>
  <Text>Image + blur + shadow</Text>
</Card>
```
**Props**: `blur`, `blurIntensity`, `blurOpacity`, `blurTint`, `color`, `glassMode`, `image`, `outlined`, `shadow`, `small`
**Features**: 
- Glassmorphism with gyroscope lighting effects
- Image backgrounds with blur overlays
- Platform-aware shadow systems
- Layered rendering (image → blur → content)

### Image
**Purpose**: Image component with loading indicators
```javascript
<Image 
  source={{ uri: 'https://...' }}
  style={{ width: 300, height: 200 }}
  activityColor="accent"
  activitySize="large"
/>
```
**Props**: `source`, `activityColor`, `activitySize`, Standard Image props
**Features**: Platform-aware loading states, consistent activity indicators

### Modal
**Purpose**: Overlay dialogs and modals
```javascript
<Modal visible onClose={() => setVisible(false)}>
  <Text>Modal content</Text>
  <Button onPress={() => setVisible(false)}>Close</Button>
</Modal>
```
**Props**: `visible`, `onClose`, `children`
**Features**: Backdrop dismiss, safe area handling

### Notification
**Purpose**: Toast notifications and alerts
```javascript
<Notification 
  type="success" 
  message="Operation successful"
  onDismiss={() => {}}
/>
<Notification type="error" message="Error occurred" />
```
**Props**: `type` (`success|error|warning`), `message`, `onDismiss`
**Features**: Auto-dismiss, themed colors, smooth animations

### Pagination
**Purpose**: Dot-based pagination indicators
```javascript
<Pagination 
  currentPage={1}
  totalPages={5}
  onPageChange={(page) => setPage(page)}
/>
```
**Props**: `currentPage`, `totalPages`, `onPageChange`
**Features**: Interactive dots, themed colors, smooth transitions

### Screen
**Purpose**: Screen-level containers with safe area handling
```javascript
<Screen>
  <Text>Screen content</Text>
</Screen>
```
**Props**: `children`, Standard View props
**Features**: Safe area integration, consistent screen structure

### SectionList
**Purpose**: Sectioned list component
```javascript
<SectionList
  sections={[
    { title: 'Section 1', data: ['Item 1', 'Item 2'] },
    { title: 'Section 2', data: ['Item 3', 'Item 4'] }
  ]}
  renderItem={({ item }) => <Text>{item}</Text>}
  renderSectionHeader={({ section }) => <Text title>{section.title}</Text>}
/>
```
**Props**: Standard React Native SectionList props
**Features**: Themed section headers, consistent styling

### Tabs
**Purpose**: Tab navigation component
```javascript
<Tabs 
  tabs={['Tab 1', 'Tab 2', 'Tab 3']}
  activeTab={0}
  onTabChange={(index) => setActiveTab(index)}
/>
```
**Props**: `tabs`, `activeTab`, `onTabChange`
**Features**: Smooth transitions, themed active states, responsive design

## SYSTEMS (src/systems/)

### Confirm
**Purpose**: Confirmation dialogs with actions
```javascript
<Confirm
  visible={showConfirm}
  title="Delete Item"
  message="Are you sure you want to delete this item?"
  confirmText="Delete"
  cancelText="Cancel"
  onConfirm={() => handleDelete()}
  onCancel={() => setShowConfirm(false)}
/>
```
**Props**: `visible`, `title`, `message`, `confirmText`, `cancelText`, `onConfirm`, `onCancel`
**Features**: Themed buttons, backdrop dismiss, keyboard handling

### Menu
**Purpose**: Context menus and dropdowns
```javascript
<Menu
  visible={showMenu}
  anchor={{ x: 100, y: 200 }}
  items={[
    { label: 'Edit', onPress: () => edit() },
    { label: 'Delete', onPress: () => delete() }
  ]}
  onClose={() => setShowMenu(false)}
/>
```
**Props**: `visible`, `anchor`, `items`, `onClose`
**Features**: Position calculation, backdrop dismiss, themed items

### Setting
**Purpose**: Settings and preferences UI
```javascript
<Setting
  title="Notifications"
  subtitle="Receive push notifications"
  value={notifications}
  onToggle={(value) => setNotifications(value)}
/>
```
**Props**: `title`, `subtitle`, `value`, `onToggle`
**Features**: Switch controls, consistent styling, accessibility

## THEME_INTEGRATION

### COLOR_SYSTEM
All components support theme color props:
```javascript
<Text color="accent">Accent text</Text>
<Text color="error">Error text</Text>
<Text color="#ff0000">Custom hex</Text>
```

### SIZE_VARIANTS
Boolean props for size control:
```javascript
<Button small>Small</Button>
<Button large>Large</Button>
<Text tiny>Tiny text</Text>
<Text title>Title text</Text>
```

### SPACING_SYSTEM
Consistent spacing via theme variables:
```javascript
// All components use theme spacing
$spaceXS: 4, $spaceS: 8, $spaceM: 16, $spaceL: 24, $spaceXL: 32
```

## ADVANCED_PATTERNS

### COMPOSITION_EXAMPLE
```javascript
<Card blur shadow>
  <View gap>
    <Text title>Welcome</Text>
    <Text subtitle color="accent">Get started</Text>
    <View row spaceBetween>
      <Button secondary onPress={() => {}}>Cancel</Button>
      <Button primary onPress={() => {}}>Continue</Button>
    </View>
  </View>
</Card>
```

### ACCESSIBILITY_SUPPORT
```javascript
<Button
  accessibilityLabel="Save document"
  accessibilityHint="Saves the current document"
  onPress={save}
>
  Save
</Button>
```

## NEXT_STEP
Read `context/theme-system.md` for complete theming guide.