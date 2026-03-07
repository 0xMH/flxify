/**
	{
		"api":1,
		"name":"Wadsworth Constant",
		"description":"Removes first 30% of text (Wadsworth Constant: skip boring intro)",
		"author":"Ivan",
		"icon":"scissors",
		"tags":"snap"
	}
**/


function main(state) {
	var all = state.text.split(" ") 
	all.splice(0, Math.ceil(all.length * 0.3))
	state.text = all.join(" ")
}
