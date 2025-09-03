// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Вариант A: укажи ИМЯ РЕПОЗИТОРИЯ (если Pages на https://username.github.io/repo)
  base: '/fb-ig-landing/',
  // Вариант B (универсальный): относительные пути, если хостишь где угодно
  // base: './',
})
