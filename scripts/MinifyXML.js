/**
	{
		"api":1,
		"name":"Minify XML",
		"description":"Removes whitespace and comments to compress XML and HTML",
		"author":"Ivan",
		"icon":"broom",
		"tags":"html,minify,clean,indent",
        "bias": -0.1
	}
**/

const { xmlmin } = require('@flxify/vkBeautify')


function main(state) {
	state.text = xmlmin(state.text)	
}
