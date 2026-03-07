/**
	{
		"api":1,
		"name":"Minify SQL",
		"description":"Removes whitespace and comments to compress SQL queries",
		"author":"Ivan",
		"icon":"broom",
		"tags":"mysql,sql,minify,clean,indent",
        "bias": -0.1
	}
**/

const { sqlmin } = require('@flxify/vkBeautify')


function main(state) {
	state.text = sqlmin(state.text)	
}
