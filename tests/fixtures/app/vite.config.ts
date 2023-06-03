import { defineConfig } from 'vite';

import vitePluginPrintInfo from 'vite-plugin-print-info';

const APP_ENV = process.env.APP_ENV ?? 'fat';

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
                },
            ],
        }),
    ],
});
