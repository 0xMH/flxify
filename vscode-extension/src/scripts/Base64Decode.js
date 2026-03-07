/**
	{
		"api":1,
		"name":"Base64 Decode",
		"description":"Decodes Base64-encoded text back to plain text",
		"author":"See Source",
		"icon":"metamorphose",
		"tags":"base64,btoa,decode"
	}
**/

const { decode } = require('@flxify/base64')

function main(input) {
	
    input.text = decode(input.text)
	
}
