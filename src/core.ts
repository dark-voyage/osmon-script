import polyfill from 'globalthis';
import dictionary from './dictionary/sortedOsmon.json';

function escapeRegExp(str: string) {
    str = str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

    if (/^\w+$/.test(str)) {
        str = '\\b' + str + '\\b';
    }

    return str;
}

function yoptReplaceAll(str: string, search: string, replacement: string) {
    const re = new RegExp(escapeRegExp(search), 'g');
    return str.replace(re, replacement);
}

/**
 * @param text текст, по которому следует пройтись
 * @param to язык текста ('ys' or 'js')
 */
function iterateText(text: string, to: 'js' | 'osm' = 'osm') {
    const langCol = to === 'osm' ? 1 : 0;
    const dick = dictionary;
    dick.sort((a, b) => {
        const al = a[langCol].length;
        const bl = b[langCol].length;
        return bl - al;
    }).forEach(
        (pair) => (text = yoptReplaceAll(text, pair[langCol], pair[+!langCol]))
    );

    return text;
}

/**
converter
 */
export function compile(text: string, lang: 'js' | 'osm' = 'osm'): string {
    /* text - text for replace
     * lang - lang
     */
    interface Literals {
        [key: string]: string;
    }
    const commentRegExp = /((?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:\/\/.*))/g;
    const tmpToken = 'ys_' + new Date().getTime() + '_';
    const rStringLiterals: Literals = {};
    text = text.replace(
        /\"(?:\\.|[^\"\\])*\"|\'(?:\\.|[^\'\\])*\'/g,
        function (val, pos) {
            const needKey = tmpToken + pos;
            rStringLiterals[needKey] = val;
            return needKey;
        }
    );
    const commentsArray = text.match(commentRegExp) || [];
    text = iterateText(text, lang);
    // comeback comments
    text = text.replace(commentRegExp, () => commentsArray.shift() || '');
    // comeback strings
    for (const key in rStringLiterals) {
        text = text.replace(key, rStringLiterals[key]);
    }
    return text;
}

// to globals
const globalThis = polyfill() as any;
globalThis.yopta = compile;
