/**
    {
        "api":1,
        "name":"SHA256 Hash",
        "description":"Generates SHA256 hash of text in hexadecimal format",
        "icon":"fingerprint",
        "tags":"strip,slashes,remove"
    }
**/
const Hashes = require('@flxify/hashes')

function main(state) {
  var SHA256 = new Hashes.SHA256;
  state.text = SHA256.hex(state.text)
}
