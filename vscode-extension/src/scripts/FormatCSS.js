/**
	{
		"api":1,
		"name":"Format CSS",
		"description":"Formats CSS with proper indentation and line breaks",
		"author":"Ivan",
		"icon":"broom",
		"tags":"css,prettify,clean,indent",
        "bias": -0.1
	}
**/

const { css } = require('@flxify/vkBeautify')


function main(state) {
	state.text = css(state.text)	
}
