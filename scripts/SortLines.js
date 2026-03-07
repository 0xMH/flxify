/**
     {
         "api":1,
         "name":"Sort lines",
         "description":"Sorts lines alphabetically (toggles reverse if already sorted)",
         "author":"Sebastiaan Besselsen",
         "icon":"sort-characters",
         "tags":"sort,alphabet"
     }
 **/

function main(input) {
    let sorted = input.text.replace(/\n$/, '').split('\n')
        .sort((a, b) => a.localeCompare(b))
        .join('\n');

    if (sorted === input.text) {
        sorted = sorted.split('\n').reverse().join('\n');
    }
    input.text = sorted;
}
