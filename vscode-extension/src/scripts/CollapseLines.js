/**
    {
        "api":1,
        "name":"Collapse lines",
        "description":"Removes all line breaks, joining text into a single line",
        "author":"Dennis",
        "icon":"collapse",
        "tags":"strip,remove,collapse,join"
    }
**/

function main(input) {
    let split = input.text.split(/\r\n|\r|\n/)
    input.postInfo(`${split.length} lines collapsed`)
    input.fullText = split.join()
}
