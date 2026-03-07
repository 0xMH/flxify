/**
	{
		"api":1,
		"name":"Start Case",
		"description":"Converts text to Start Case, capitalizing the first letter of each word",
		"author":"Ivan",
		"icon":"type",
		"tags":"start,case,function,lodash"
	}
**/

const { startCase } = require('@flxify/lodash.boop')

function main(input) {
	
    input.text = startCase(input.text)
	
}
