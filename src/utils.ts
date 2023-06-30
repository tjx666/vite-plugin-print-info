import c from 'picocolors';

interface Style {
    color: 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray';
    bold: boolean;
}

export interface InfoItem {
    name: string;
    message: string;
    messageStyle?: Partial<Style>;
    isUrlMessage?: boolean;
}

function colorize(str: string, style?: Partial<Style>) {
    if (style?.color) {
        str = c[style.color](str);
    }

    if (style?.bold !== undefined) {
        str = c.bold(str);
    }

    return str;
}

function isUrlStr(str: string) {
    // eslint-disable-next-line regexp/no-unused-capturing-group
    const urlRegexp = /^(https?:\/\/)?[\w-]+(\.[\w-]+)*(:\d+)?([/#?]\S*)?$/;
    return urlRegexp.test(str) && !/^[\w-]+$/.test(str);
}

export function getInfoItem(infoItem: InfoItem) {
    let colorizedMessage = infoItem.message;
    if (
        infoItem.isUrlMessage === true ||
        (infoItem.isUrlMessage === undefined && isUrlStr(infoItem.message))
    ) {
        colorizedMessage = c.cyan(
            infoItem.message.replaceAll(/(\d+)/g, (_, port) => `${c.bold(port)}`),
        );
    } else {
        colorizedMessage = colorize(infoItem.message, infoItem.messageStyle);
    }

    return `  ${c.green('➜')}  ${c.bold(infoItem.name)}: ${colorizedMessage}`;
}
