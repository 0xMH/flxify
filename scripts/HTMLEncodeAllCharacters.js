/**
    {
        "api":1,
        "name":"HTML Encode all characters",
        "description":"Encodes every character to HTML numeric entities for obfuscation",
        "author":"Ivan",
        "icon":"HTML",
        "tags":"html,encode,web,email",
        "bias":-0.1
    }
**/

function main(input) {
    let str = input.text;
    var out = "";
    for (var i = 0; i < str.length; i++) {
         out += `&#${str.charCodeAt(i)};`;
    }
    input.text = out;
}
