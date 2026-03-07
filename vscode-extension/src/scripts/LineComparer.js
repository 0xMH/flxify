/**
    {
        "api":1,
        "name":"Line compare",
        "description":"Checks if all lines match the first line and reports differences",
        "author":"Luis Fontes",
        "icon":"type",
        "tags":"string,match,text,compare,line",
        "bias": -0.1
    }
**/

function main(state) {

    const lines = state.text.split(/\n/);
    const first = lines[0];
    const differentLines = [];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];

        if (first !== line) differentLines.push(i + 1);
    }

    if (differentLines.length === 0)
        state.postInfo('Lines are equal')
    else if (differentLines.length === 1)
        state.postError(`Line ${differentLines[0]} is not equal to the line 1`);
    else
        state.postError(`Lines [${differentLines.join(", ")}] are not equal to line 1`);
}