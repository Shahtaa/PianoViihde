import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
// Убираем плагин изображения, если он не нужен
// import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    react(),
    visualizer({ filename: './dist/stats.html' }), // Визуализатор сборки для анализа чанков
    // Убираем плагин, если он не установлен
    // viteImagemin() // Оптимизация изображений для уменьшения их размера
  ],
  server: {
    hmr: true, // Включаем горячую замену модулей (HMR)
    watch: {
      usePolling: true, // Это полезно для работы с некоторыми файловыми системами, например, Docker
    },
  },
  build: {
    chunkSizeWarningLimit: 1500, // Увеличиваем лимит предупреждения о размере чанков
    sourcemap: false, // Отключаем sourcemaps для production сборки
    cacheDir: './node_modules/.vite', // Указываем директорию для кэширования сборки
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Разделяем большие библиотеки на отдельные чанки
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0]
          }
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Оптимизация популярных зависимостей
    exclude: ['some-heavy-dependency'], // Исключаем тяжелые зависимости, если они не используются в основном потоке
  },
})
