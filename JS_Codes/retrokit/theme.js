import { save, load } from './storage.js';

const THEME_KEY = 'theme';
let currentTheme = 'light';
let listeners = [];
export const palettes = {
  light: {
    canvasBg: 0x0f1c24,
    gridStroke: 'rgba(156,174,219,0.27)',
    snakeHead: '#00e0ff',
    snakeTail: '#9caedb',
    food: '#00e0ff',
    foodGlow: 'rgba(0,224,255,0.35)',
    text: '#d8e9f0',
    accent: '#00e0ff',
    accentAlt: '#9caedb'
  },
  dark: {
    canvasBg: 0x1a0f00,
    gridStroke: 'rgba(255,210,138,0.35)',
    snakeHead: '#ff7a00',
    snakeTail: '#ffd28a',
    food: '#00e0ff',
    foodGlow: 'rgba(0,224,255,0.55)',
    text: '#111111',
    accent: '#ff7a00',
    accentAlt: '#ffd28a'
  }
};

export function init() {
  const saved = load(THEME_KEY);
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  currentTheme = saved || (prefersDark ? 'dark' : 'light');
  apply();
  
  window.matchMedia?.('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!load(THEME_KEY)) {
      currentTheme = e.matches ? 'dark' : 'light';
      apply();
      notify();
    }
  });
}

export function toggle() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  save(THEME_KEY, currentTheme);
  apply();
  notify();
}

export function get() {
  return currentTheme;
}

export function isDark() {
  return currentTheme === 'dark';
}

export function getPalette() {
  return palettes[currentTheme];
}

export function onChange(callback) {
  listeners.push(callback);
  return () => { listeners = listeners.filter(cb => cb !== callback); };
}

function apply() {
  document.body.classList.toggle('dark-theme', currentTheme === 'dark');
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.setAttribute('aria-pressed', String(currentTheme === 'dark'));
}

function notify() {
  listeners.forEach(cb => cb(currentTheme, getPalette()));
}
