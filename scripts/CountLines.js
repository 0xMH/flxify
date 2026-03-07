/**
	{
		"api":1,
		"name":"Count Lines",
		"description":"Counts the total number of lines in text",
		"author":"andipaetzold",
		"icon":"counter",
		"tags":"count,length,size,line"
	}
**/

function main(input) {
	
	input.postInfo(`${input.text.split('\n').length} lines`)
	
}
