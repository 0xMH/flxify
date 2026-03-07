/**
	{
		"api":1,
		"name":"Format XML",
		"description":"Formats XML and HTML with proper indentation and line breaks",
		"author":"Ivan",
		"icon":"broom",
		"tags":"html,prettify,clean,indent",
        "bias": -0.1
	}
**/

const { xml } = require('@flxify/vkBeautify')


function main(state) {
	state.text = xml(state.text)	
}
