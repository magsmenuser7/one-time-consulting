import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  base: mode === "development" ? "/one-time-consulting//" : "/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));
