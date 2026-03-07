/**
	{
		"api":1,
		"name":"Trim",
		"description":"Removes whitespace from the beginning and end of text",
		"author":"Joshua Nozzi",
		"icon":"scissors",
		"tags":"trim,whitespace,empty,space",
	}
**/

function main(state) {
  
  state.text = state.text.trim();
  
}
