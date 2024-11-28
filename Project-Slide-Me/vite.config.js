import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	base: './', // ใช้ './' ถ้าจะ deploy ใน subdirectory
	plugins: [react()],
	publicDir: 'public',
});
