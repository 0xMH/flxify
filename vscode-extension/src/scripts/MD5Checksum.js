/**
	{
		"api":1,
		"name":"MD5 Checksum",
		"description":"Generates MD5 hash of text in hexadecimal format",
		"author":"Ivan",
		"icon":"fingerprint",
		"tags":"strip,slashes,remove"
	}
**/

const Hashes = require('@flxify/hashes')

function main(state) {
  var MD5 = new Hashes.MD5;
  state.text = MD5.hex(state.text)
}
