/**
	{
		"api":1,
		"name":"Kebab Case",
		"description":"Converts text to kebab-case format, separating words with hyphens",
		"author":"Ivan",
		"icon":"kebab",
		"tags":"kebab,case,function,lodash"
	}
**/

const { kebabCase } = require('@flxify/lodash.boop')

function main(input) {
	
    input.text = kebabCase(input.text)
	
}
