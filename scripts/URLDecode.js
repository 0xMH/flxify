/**
	{
		"api":1,
		"name":"URL Decode",
		"description":"Decodes URL-encoded characters (e.g., %20 to space)",
		"author":"Ivan",
		"icon":"link",
		"tags":"url,decode,convert"
	}
**/

function main(input) {
	
	input.text = decodeURIComponent(input.text)
	
}
