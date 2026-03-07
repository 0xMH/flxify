/**
	{
		"api":1,
		"name":"Count Characters",
		"description":"Counts the total number of characters in text",
		"author":"Ivan",
		"icon":"counter",
		"tags":"count,length,size,character"
	}
**/


const { size } = require('@flxify/lodash.boop')

function main(input) {
	
	input.postInfo(`${size(input.text)} characters`)
	
}
