/**
	{
		"api":1,
		"name":"HTML Encode",
		"description":"Encodes special characters to HTML entities (e.g., & to &amp;)",
		"author":"See Source",
		"icon":"HTML",
		"tags":"html,encode,web"
	}
**/

const { encode } = require('@flxify/he')

function main(input) {
	input.text = encode(input.text)
}
