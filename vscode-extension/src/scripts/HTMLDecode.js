/**
	{
		"api":1,
		"name":"HTML Decode",
		"description":"Decodes HTML entities to readable characters (e.g., &amp; to &)",
		"author":"See Source",
		"icon":"HTML",
		"tags":"html,decode,web"
	}
**/

const { decode } = require('@flxify/he')

function main(input) {
	input.text = decode(input.text)
}
