/*
initially array is unsorted
 */
export const dictionary = [
    ['break', 'toxtash'],
    ['case', 'holat'],
    ['catch', 'ushla'],
    ['catch', 'tut'],
    ['continue', 'tashla'],
    ['debugger', 'debagger'],
    ['delete', 'ochir'],
    ['do', 'bajar'],
    ['else', 'unda'],
    ['finally', 'nihoyat'],
    ['finally', 'oxiri'],
    ['for', 'uchun'],
    ['function', 'funksiya'],
    ['function*', 'funksiya*'],
    ['if', 'agar'],
    ['in', 'in'],
    ['default', 'defolt'],
    ['default', 'oddiy'],
    ['instanceof', 'obyektTuri'],
    ['new', 'yangi'],
    ['new', 'yengi'],
    ['return', 'qaytar'],
    ['yield', 'ber'],
    ['yield*', 'ber*'],
    ['switch', 'ozgarish'],
    ['this', 'shu'],
    ['throw', 'otvor'],
    ['try', 'urin'],
    ['typeof', 'turi'],
    ['var', 'joyVar'],
    ['let', 'joy'],
    ['void', 'bosh'],
    ['while', 'qachonki'],
    ['with', 'bilan'],
    ['with', 'with'],
    ['Abstract', 'Abstrakt'],
    ['abstract', 'abstrakt'],
    ['Boolean', 'Mantiq'],
    ['boolean', 'mantiq'],
    ['Byte', 'Bayt'],
    ['byte', 'bayt'],
    ['Char', 'Ramz'],
    ['char', 'ramz'],
    ['class', 'klass'],
    ['Const', 'Doimiy'],
    ['const', 'doimiy'],
    ['Double', 'Ikkitalik'],
    ['double', 'ikkitalik'],
    ['Enum', 'Tur'],
    ['enum', 'tur'],
    ['extends', 'qoshimcha'],
    ['final', 'final'],
    ['Float', 'Onlik'],
    ['float', 'onlik'],
    ['goto', 'bor'],
    ['implements', 'implementlar'],
    ['import', 'ishlat'],
    ['Int', 'Butun'],
    ['int', 'butun'],
    ['interface', 'tuzilish'],
    ['interface', 'struktura'],
    ['Long', 'Uzun'],
    ['long', 'uzun'],
    ['native', 'native'],
    ['package', 'paket'],
    ['private', 'shaxsiy'],
    ['protected', 'himoyalangan'],
    ['public', 'ommaviy'],
    ['Short', 'Kalta'],
    ['short', 'kalta'],
    ['static', 'statik'],
    ['super', 'super'],
    ['synchronized', 'вписон'],
    ['throws', 'плюнуть'],
    ['transient', 'ахз'],
    ['volatile', 'volatile'],
    ['null', 'nol'],
    ['NaN', 'NaN'],
    ['undefined', 'aniqlanmagan'],
    ['true', 'ha'],
    ['false', 'yoq'],
    ['eval', 'qil'],
    // ['\'use strict\'', '\'далиСтрогача\''], Баг: global.osmon("'use strict'", 'js') возвращает 'use strict'
    //    operators
    ['\\{', '{'],
    ['\\}', '}'],
    ['\\=\\=', '=='],
    ['\\=\\=\\=', '==='],
    ['\\>\\=', '>='],
    ['\\<\\=', '<='],
    ['\\&\\&', 'va'],
    ['\\|\\|', 'yoki'],
    ['\\>', '>'],
    ['\\<', '<'],
    ['\\=', '='],
    ['\\;', ' ;'],
    ['\\!', '!'],
    ['\\+\\+', '++'],
    ['\\-\\-', '--'],
    //    Document methods
    ['document', 'dokument'],
    ['captureEvents', 'hodisalarniOl'],
    ['createAttribute', 'attributYarat'],
    ['createDocumentFragment', 'dokumentFragmentYarat'],
    ['createEvent', 'hodisYarat'],
    ['createNodeIterator', 'nodeIteratorYarat'],
    ['createRange', 'chegaraYarat'],
    ['createTextNode', 'nodeTextYarat'],
    ['createElement', 'elementYarat'],
    ['getElementsByClassName', 'klassdanElementOl'],
    ["getElementById","idDanElementOl"],
    ['importNode', 'importNode'],
    ['clear', 'tozala'],
    ['close', 'yop'],
    ['execCommand', 'komandaBajarish'],
    ['write', 'yoz'],
    ['writeln', 'yozChiziq'],
    //    Document Properties

    ['URL', 'ssilka'],

    ['value', 'qiymat'],
    //    Document event handlers

    //    Global event handlers

    //    Window properties
    ['window', 'oyna'],
    //    Window methods
    ['addEventListener', 'ishlovQosh'],
    ['alert', 'yozuv'],
    ['find', 'top'],
    ['focus', 'fokus'],
    ['getAttention', 'etiborQilish'],
    ['maximize', 'maksimallashtir'],
    ['minimize', 'minimallashtir'],
    ['moveBy', 'obor'],
    ['moveTo', 'oborish'],
    ['openDialog', 'ochishDialog'],
    ['print', 'chiqarish'],

    //    Window event handlers

    //    Node properties

    //    Node methods

    //    String properties

    //    String methods

    ['search', 'izla'],
    ['slice', 'kes'],
    ['split', 'bol'],

    //    String HTML wrapper methods

    //    Canvas properties

    //    Canvas methods

    //    Number properties

    //    Number methods

    //    Console methods

    ['count', 'sanash'],
    ['error', 'xatolik'],
    ['group', 'guruh'],
    ['groupEnd', 'guruhTugash'],
    ['info', 'info'],
    ['log', 'log'],
    ['profile', 'profil'],
    ['profileEnd', 'profilTugash'],
    ['table', 'jadval'],
    ['time', 'vaqt'],
    ['timeEnd', 'vaqtTugash'],

    //    XMLHttpRequest properties

    //    XMLHttpRequest methods

    //    XMLHttpRequest Inheritance

    //    XMLHttpRequest events

    //    Arrays properties
    ['Array', 'massiv'],
    //    Arrays methods
    ['from', 'dan'],
    ['isArray', 'massivTekshir'],
    ["map","toplam"],
    ['of', 'dan'],
    ['of', 'of'],
    ['values', 'qiymatlar'],
    //    Math properties
    ['Math', 'Matem'],
    ['Math', 'Matematika'],

    //math methods
    //    RegExp properties
    // ['input', 'yozuvchi'],
    // ['flags', 'bayroqlar'],
    // ['global', 'globalReg'],
    // ['ignoreCase', 'ignor'],
    // ['multiline', 'kopqatorlik'],
    // ['source', 'manbaa'],

    //    async/await functions

    //    Promise methods
    ['all', 'hamma'],
    ['then', 'shunda'],
    //    Object properties
    ['Object', 'Obyekt'],
    ['constructor', 'quruvchi'],
    //    Object methods
    ['assign', 'tayinla'],

    //    NodeJS/modules support
    ['module', 'qoshimchalar'],
    ['exports', 'eksportlar'],
    ['export', 'eksport'],
    ['global', 'global'],
];
