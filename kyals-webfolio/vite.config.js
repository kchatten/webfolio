import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Specify the output format and MIME type for JavaScript files
    rollupOptions: {
      output: {
        format: 'es', // Specify the output format (ES module)
        mimeTypes: {
          '.js': 'application/javascript', // Set the MIME type for .js files
        },
      },
    },
  },
});
