// @ts-ignore
export function prettyPrint(data) {
    let jsonLine = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg;
    let replacer = function(match: any, pIndent: string, pKey: string, pVal: string | string[], pEnd: any) {
        let key = '<span class="json-key" style="color: brown">',
            val = '<span class="json-value" style="color: navy">',
            str = '<span class="json-string" style="color: olive">',
            r = pIndent || '';
        if (pKey)
            r = r + key + pKey.replace(/[": ]/g, '') + '</span>: ';
        if (pVal)
            r = r + (pVal[0] === '"' ? str : val) + pVal + '</span>';
        return r + (pEnd || '');
    };

    return JSON.stringify(data, null, 3)
        .replace(/&/g, '&amp;').replace(/\\"/g, '&quot;')
        .replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(jsonLine, replacer);
}