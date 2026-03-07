/**
	{
		"api":1,
		"name":"Trim Start",
		"description":"Removes whitespace from the beginning of text",
		"author":"Joshua Nozzi",
		"icon":"scissors",
		"tags":"trim,start,left,leading,beginning,whitespace,empty,space",
	}
**/

function main(state) {
  
  state.text = state.text.trimStart();
  
}
