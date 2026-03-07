/**
    {
        "api":1,
        "name":"Markdown Quote",
        "description":"Prefixes each line with > to create markdown blockquotes",
        "author":"Dan2552",
        "icon":"term",
        "tags":"quote,markdown"
    }
**/

function main(input) {
    input.text = input.text.split("\n").map(line => "> " + line).join("\n");
}
