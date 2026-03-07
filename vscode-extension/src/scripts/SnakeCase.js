/**
	{
		"api":1,
		"name":"Snake Case",
		"description":"Converts text to snake_case format, separating words with underscores",
		"author":"Ivan",
		"icon":"snake",
		"tags":"snake,case,function,lodash"
	}
**/

const { snakeCase } = require('@flxify/lodash.boop')

function main(input) {
	
    input.text = snakeCase(input.text)
	
}
