import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    minify: false, 
    // EP0? SPOILER: We will enable obfuscation here later!
    // terserOptions: {
    //   compress: { drop_console: true, drop_debugger: true },
    //   mangle: { toplevel: true },
    //   format: { comments: false }
    // }
  },
  server: {
    open: true
  }
});
