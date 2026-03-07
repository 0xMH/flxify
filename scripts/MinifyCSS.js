/**
	{
		"api":1,
		"name":"Minify CSS",
		"description":"Removes whitespace and comments to compress CSS",
		"author":"Ivan",
		"icon":"broom",
		"tags":"css,minify,clean,indent",
        "bias": -0.1
	}
**/

const { cssmin } = require('@flxify/vkBeautify')


function main(state) {
	state.text = cssmin(state.text)	
}
