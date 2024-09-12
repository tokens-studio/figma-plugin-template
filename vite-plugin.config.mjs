import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			// Could also be a dictionary or array of multiple entry points
			entry: 'src/plugin.ts'
		},
		outDir: 'dist',
		target: 'es6',
		emptyOutDir: false,
		rollupOptions: {
			output: [
				{
					format: 'es',
					entryFileNames: 'plugin.js'
				}
			]
		}
	},
	plugins: [react()]
});
