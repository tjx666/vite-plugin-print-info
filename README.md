# vite-plugin-print-info

[![npm](https://img.shields.io/npm/v/vite-plugin-print-info.svg)](https://npmjs.com/package/vite-plugin-print-info) [![downloads](https://img.shields.io/npm/dw/vite-plugin-print-info)](https://npmjs.com/package/vite-plugin-print-info) [![Unit Test](https://github.com/tjx666/vite-plugin-print-info/actions/workflows/unit-test.yml/badge.svg)](https://github.com/tjx666/vite-plugin-print-info/actions/workflows/unit-test.yml)

Starter template for [vite-plugin-print-info](https://github.com/unjs/vite-plugin-print-info).

## Installation

```bash
npm i -D vite-plugin-print-info
```

## Usage

```ts
// vite.config.ts
import vitePluginPrintInfo from 'vite-plugin-print-info';

export default defineConfig({
  plugins: [
    vitePluginPrintInfo({
      infoList: [
        {
          name: 'APP_ENV',
          message: APP_ENV,
          messageStyle: {
            color: 'yellow',
            bold: true,
          },
        },
        {
          name: 'Recommend',
          message: 'https://abc.com/test-page?debug=1',
          // manually disable url detect
          // isUrlMessage: false
        },
      ],
    }),
  ],
});
```

## License

[MIT](./LICENSE) License © 2023-PRESENT [YuTengjing](https://github.com/tjx666)
