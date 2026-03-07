/**
	{
		"api":1,
		"name":"Join Lines With Space",
		"description":"Joins all lines together separated by spaces",
		"author":"riesentoaster",
		"icon":"collapse",
		"tags":"join, space",
		"bias": -0.1
	}
**/

function main(input) {
	input.text = input.text.replace(/\n/g, ' ');
}
