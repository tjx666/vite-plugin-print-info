import type { Plugin } from 'vite';

import type { InfoItem } from './utils';
import { getInfoItem } from './utils';

interface Options {
    infoList: InfoItem[];
}

export default function vitePluginPrintInfo(options: Options): Plugin {
    return {
        name: 'vite-plugin-print-info',
        enforce: 'pre',
        configureServer(server) {
            const _printUrls = server.printUrls;

            server.printUrls = () => {
                _printUrls();

                for (const infoItem of options.infoList) {
                    console.info(getInfoItem(infoItem));
                }
            };
        },
    };
}
