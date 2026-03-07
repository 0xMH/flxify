/**
{
    "api":1,
    "name":"CSV to JSON (headerless)",
    "description":"Converts CSV to JSON array of arrays without using headers",
    "author":"Flare576",
    "icon":"table",
    "tags":"table,convert",
    "bias": -0.2
}
 **/
const Papa = require('@flxify/papaparse');

function main(state) {
    try {
        const { data } = Papa.parse(state.text, { header:false });
        state.text = JSON.stringify(data, null, 2);
    }
    catch(error) {
        state.text = error.message || String(error);
        state.postError("Invalid CSV")
    }
}
