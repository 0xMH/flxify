/**
	{
		"api":1,
		"name":"Reverse Lines",
		"description":"Reverses the order of lines (last line becomes first)",
		"author":"@Clarko",
		"icon":"flip",
		"tags":"reverse,order,invert,mirror,flip,upside,down"
	}
**/

function main(input) {
	input.text = input.text.split('\n').reverse().join('\n')
	
}
