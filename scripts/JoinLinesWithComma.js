/**
	{
		"api":1,
		"name":"Join Lines With Comma",
		"description":"Joins all lines together separated by commas",
		"author":"riesentoaster",
		"icon":"collapse",
		"tags":"join, comma",
		"bias": -0.1
	}
**/

function main(input) {
	input.text = input.text.replace(/\n/g, ',');
}
