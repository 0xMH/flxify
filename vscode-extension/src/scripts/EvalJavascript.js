/**
     {
         "api":1,
         "name":"Eval Javascript",
         "description":"Executes JavaScript code and appends the output as a comment",
         "author":"Sebastiaan Besselsen",
         "icon":"command",
         "tags":"js,script,run"
     }
 **/

function main(input) {
    const script = input.text.replace(/\n\n\/\/ Result:[\s\S]*$/, '');

    let output = '';
    try {
        output = eval(script);
        if (typeof output !== 'string') {
            output = JSON.stringify(output, null, 2);
        }
    } catch (e) {
        input.postError(e.toString());
    }

    input.text = script + "\n\n// Result:\n\n" + output;
}
