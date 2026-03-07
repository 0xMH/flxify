/**
	{
		"api":1,
		"name":"Camel Case",
		"description":"Converts text to camelCase format, removing spaces and capitalizing words",
		"author":"Ivan",
		"icon":"camel",
		"tags":"camel,case,function,lodash"
	}
**/

const { camelCase } = require('@flxify/lodash.boop')

function main(input) {
	
    input.text = camelCase(input.text)
	
}
