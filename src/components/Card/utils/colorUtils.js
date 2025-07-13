export const hexToRgba = (hexColor, opacity = 1) => {
  const hex = hexColor.startsWith('#') ? hexColor : `#${hexColor}`;
  const r = parseInt(hex.substr(1, 2), 16);
  const g = parseInt(hex.substr(3, 2), 16);
  const b = parseInt(hex.substr(5, 2), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
