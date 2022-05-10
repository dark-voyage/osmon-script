import { compile } from './core';

// export for module
export { compile as yopta };

// find scripts
if (typeof window !== 'undefined') {
    //get osmon from script
    document.querySelectorAll('[language="osmonscript"]').forEach(yoptaToJs);
    document.querySelectorAll('[type="text/x-osmonscript"]').forEach(yoptaToJs);
}

async function yoptaToJs(scriptNode: Element) {
    if (scriptNode.parentNode !== null) {
        //get osm from script
        const yoptaText: string =
            scriptNode.textContent || (await getTxtFromSrc(scriptNode));
        //remove old script
        scriptNode.parentNode.removeChild(scriptNode);
        //create mixed script
        addScriptNode(compile(yoptaText, 'osm'));
    }
}

async function getTxtFromSrc(node: Element) {
    //find srcs
    const src = node.getAttribute('src');
    let resp = '';
    if (src !== null && src.length) {
        const fe = await fetch(src, {
            method: 'GET',
        });
        resp = await fe.text();
    }
    return resp;
}

function addScriptNode(compiled: string) {
    const script = document.createElement('script');
    script.innerHTML = compiled;
    document.body.appendChild(script);
}
