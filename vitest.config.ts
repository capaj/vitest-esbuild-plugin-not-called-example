import { defineConfig } from 'vite'

// import { esbuildDecorators } from '@anatine/esbuild-decorators'

// const plugin = esbuildDecorators({
//   force: true
// })


export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      plugins: [{
        name: 'replace-a-file',
        setup(build) {
          build.onLoad(
            { filter: /\.ts$/ },
            () => ({
              contents: `console.log('Hello from an esbuild plugin')`,
            })
          )
        }
      }]
    }
  }
})
