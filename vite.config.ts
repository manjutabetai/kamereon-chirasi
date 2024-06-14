import { defineConfig } from 'vite'
// Viteの設定を定義するための関数。TypeScriptの型補完をサポートします。
import vue from '@vitejs/plugin-vue'
// Vite用のVueプラグイン。Vueコンポーネントを処理するために使用します。
import { fileURLToPath } from 'url'
// URLオブジェクトからファイルパスを生成するユーティリティ関数。
import path from 'path'
// Node.jsのパスモジュール。ファイルやディレクトリのパス操作を行います。
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    vue(),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/],
      imports: ['vue', 'vue-router', 'pinia'],
      dts: true,
      vueTemplate: true,
      eslintrc: { enabled: true },
    }),
  ],
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // @というエイリアスをsrcディレクトリにマップします。import時に@を使用してsrcディレクトリのファイルを参照できます。
      // fileURLToPathとnew URLを使用して、URLからファイルパスを生成します。これにより、環境に依存しないパス解決が可能になります。

      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/@Pages'),
      '@Stores': path.resolve(__dirname, 'src/@Stores'),
      // @componentsというエイリアスをsrc/componentsディレクトリにマップします。import時に@componentsを使用してsrc/componentsディレクトリのファイルを参照できます。
      // path.resolve(__dirname, "src/components")を使用して、絶対パスを生成します。__dirnameは現在のディレクトリのパスを表します。
    },
  },
})
