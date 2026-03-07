/**
	{
		"api":1,
		"name":"Minify JSON",
		"description":"Removes whitespace to compress JSON into a single line",
		"author":"riesentoaster",
		"icon":"broom",
		"tags":"html,minify,clean,indent",
        "bias": -0.1
	}
**/

function main(input) {
    input.text = JSON.stringify(JSON.parse(input.text));
}
