/**
	{
		"api":1,
		"name":"Deburr",
		"description":"Removes accents and diacritics, converting to basic Latin characters",
		"author":"Ivan",
		"icon":"colosseum",
		"tags":"burr,special,characters,function,lodash"
	}
**/

const { deburr } = require('@flxify/lodash.boop')

function main(input) {
	
    input.text = deburr(input.text)
	
}
