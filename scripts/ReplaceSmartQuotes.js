/**
	{
		"api":1,
		"name":"Replace Smart Quotes",
		"description":"Replaces curly/smart quotes with straight quotes",
		"author":"Thomas Bauer (https://github.com/tbauer428)",
		"icon":"broom",
        "tags":"smart,quotes,quotations,quotation,smart-quotes,smart-quotations"
	}
**/

function main(input) {
  input.text = input.text
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/“”/g, '"');
}
