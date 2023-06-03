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

export function getInfoItem(infoItem: InfoItem) {
    // eslint-disable-next-line regexp/no-unused-capturing-group, regexp/no-super-linear-backtracking, regexp/optimal-quantifier-concatenation
    const urlRegexp = /^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;

    let colorizedMessage = infoItem.message;
    if (
        infoItem.isUrlMessage === true ||
        (infoItem.isUrlMessage === undefined && urlRegexp.test(infoItem.message))
    ) {
        colorizedMessage = c.cyan(
            infoItem.message.replaceAll(/(\d+)/g, (_, port) => `${c.bold(port)}`),
        );
    } else {
        colorizedMessage = colorize(infoItem.message, infoItem.messageStyle);
    }

    return `  ${c.green('➜')}  ${c.bold(infoItem.name)}: ${colorizedMessage}`;
}
