/**
	{
		"api":1,
		"name":"URL Entities Decode",
		"description":"Decodes percent-encoded characters (e.g., %48%65%6C%6C%6F to Hello)",
		"author":"luisfontes19",
		"icon":"percentage",
		"tags":"url,decode,full",
        "bias": -0.1
	}
**/


function fullUrlDecode(str) {
	var codes = str.split("%");
	var decoded = '';

	for (var i = 0; i < codes.length; i++) {
		decoded += String.fromCharCode(parseInt(codes[i], 16));
	}

	return decoded;
}

function main(state) {
	state.text = fullUrlDecode(state.text);
}
