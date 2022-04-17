import fs from 'fs/promises'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    plugins: [react()],
    server: {
      open: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    esbuild: {
      loader: 'jsx',
      include: /src\/.*\.jsx?$/,
      exclude: [],
    },
    optimizeDeps: {
      esbuildOptions: {
        plugins: [
          {
            name: 'load-js-files-as-jsx',
            setup(build) {
              const isWin = process.platform === 'win32'
              build.onLoad(
                { filter: isWin ? /src\\.*\.js$/ : /src\/.*\.js$/ },
                async (args) => ({
                  loader: 'jsx',
                  contents: await fs.readFile(args.path, 'utf8'),
                })
              )
            },
          },
        ],
      },
    },
  })
}
