/**
  {
    "api":1,
    "name":"Rot13",
    "description":"Applies ROT13 cipher, shifting letters by 13 positions (reversible)",
    "author":"Paul Starr",
    "icon":"roman",
    "tags":"spoilers,encryption,plaintext"
  }
**/

function main(state) {
	let myText = state.text
	// adapted from Sophie Alpert's solution: https://stackoverflow.com/questions/617647/where-is-my-implementation-of-rot13-in-javascript-going-wrong
	state.text = myText.replace(/[a-z]/gi, function (c) {
 		return String.fromCharCode(	
 				(c <= "Z" ? 90 : 122) >= (c=c.charCodeAt(0)+13) ?  c :  c - 26
 			);
 		});
 	return state;
}
