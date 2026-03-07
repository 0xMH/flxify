/**
    {
        "api":1,
        "name":"Remove Duplicate Lines",
        "description":"Removes duplicate lines, keeping only the first occurrence of each",
        "author":"andipaetzold",
        "icon":"filtration",
        "tags":"unique,duplicate"
    }
**/

function main(input) {
    let lines = input.text.split('\n')
    let out = unique(lines)

    input.text = out.join('\n')
    
    input.postInfo(`${lines.length - out.length} lines removed`)

}

function unique(array) {
	return [...new Set(array)]
}
