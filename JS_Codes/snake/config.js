/**
 * Snake 游戏配置
 */

export const GRID_SIZE = 20;
export const TILE_SIZE = 20;
export const CANVAS_SIZE = GRID_SIZE * TILE_SIZE;

export const FPS_RENDER = 120;
export const INITIAL_SPEED = 5;           // 格/秒
export const MAX_SPEED = 15;
export const SPEED_INCREMENT = 0.4;
export const SCORE_PER_SPEEDUP = 2;
export const MAX_SCORE_FOR_SPEEDUP = 20;

export const SPEED_BOOST_DURATION = 5000; // ms
export const FLASH_DURATION = 300;        // ms
export const SHRINK_EFFECT_DURATION = 500;// ms

export const PARTICLE_COUNT = 10;
export const PARTICLE_LIFE = 60;

export const STORAGE_KEY = 'snake:highScore';
