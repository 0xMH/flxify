/**
	{
		"api":1,
		"name":"Join Lines",
		"description":"Joins all lines together with no separator or delimiter",
		"author":"riesentoaster",
		"icon":"collapse",
		"tags":"join"
	}
**/

function main(input) {
	input.text = input.text.replace(/\n/g, '');
}
