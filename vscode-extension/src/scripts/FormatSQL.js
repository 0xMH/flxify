/**
	{
		"api":1,
		"name":"Format SQL",
		"description":"Formats SQL queries with proper indentation and line breaks",
		"author":"Ivan",
		"icon":"broom",
		"tags":"mysql,sql,prettify,clean,indent",
        "bias": -0.1
	}
**/

const { sql } = require('@flxify/vkBeautify')


function main(state) {
	state.text = sql(state.text)	
}
