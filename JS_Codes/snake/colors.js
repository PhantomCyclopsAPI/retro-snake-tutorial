import { isDark } from '../retrokit/theme.js';

export function getColors() {
  const dark = isDark();
  
  return {
    CANVAS_BG: dark ? 0x1a0f00 : 255,
    BORDER_COLOR: dark ? 'rgba(255,210,138,0.35)' : '#dddddd',
    
    GRAD_START: dark ? '#ff7a00' : '#007aff',
    GRAD_END: dark ? '#ffd28a' : '#d0e6ff',
    
    FOOD_COLOR: dark ? '#00e0ff' : '#FF5C00',
    FOOD_STROKE: dark ? 'rgba(10,26,34,0.95)' : 'rgba(255,255,255,0.95)',
    FOOD_GLOW: dark ? 'rgba(0,224,255,0.55)' : 'rgba(255,92,0,0.35)',
    
    SPEED_DOT_COLOR: dark ? '#ff7a00' : '#007aff',
    SHRINK_COLOR: dark ? '#ff7a00' : '#007aff',
    
    TEXT: dark ? '#111111' : '#000000'
  };
}
