
/**
  {
    "api":1,
    "name":"To Unicode Escaped String",
    "description":"Converts text to Unicode escape sequences (\\uXXXX format)",
    "author":"luisfontes19",
    "icon":"broom",
    "tags":"string,unicode,convert,escape"
  }
**/

function main(state) {
  state.text = toUnicode(state.text);
}

function toUnicode(str) {
  return [...str].map(c => {
    let hex = c.charCodeAt(0).toString(16);
    if (hex.length == 2) hex = "00" + hex;
    return ("\\u" + hex).slice(-7);
  }).join("");
}

