/**
     {
         "api":1,
         "name":"Natural Sort Lines",
         "description":"Sorts lines alphabetically with natural number ordering (1, 2, 10 not 1, 10, 2)",
         "author":"Sebastiaan Besselsen",
         "icon":"sort-numbers",
         "tags":"sort,natural,natsort"
     }
 **/

function main(input) {
    let sorted = input.text.replace(/\n$/, '').split('\n')
        .sort((a, b) => a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'}))
        .join('\n');

    if (sorted === input.text) {
        sorted = sorted.split('\n').reverse().join('\n');
    }
    input.text = sorted;
}
