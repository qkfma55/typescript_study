import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'
import tsconfigPaths from 'vite-tsconfig-paths' // npm i -D vite-tsconfig-paths


// FSD 구조에 맞춘 절대 경로 설정을 Vite에 적용합니다.
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    // tsconfigPaths(),
  ],

  resolve: {
    alias: { // 별칭을 설정하면 파일 경로를 상대경로로 간략하게 가져다 사용할 수 있음
      '@src': fileURLToPath(new URL('./src', import.meta.url)),
      '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@features': fileURLToPath(new URL('./src/features', import.meta.url)),
      '@entities': fileURLToPath(new URL('./src/entities', import.meta.url)),
      '@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
    },
  },
  // 개발 서버 설정 (선택 사항)
  server: {
    port: 3000,
    open: true,
  },
})