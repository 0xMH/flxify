/**
	{
		"api":1,
		"name":"URL Encode",
		"description":"Encodes special characters for safe use in URLs",
		"author":"Ivan",
		"icon":"link",
		"tags":"url,encode,convert"
	}
**/

function main(input) {
	
	input.text = encodeURIComponent(input.text)
	
}
