/**
    {
        "api":1,
        "name":"SHA1 Hash",
        "description":"Generates SHA1 hash of text in hexadecimal format",
        "icon":"fingerprint",
        "tags":"strip,slashes,remove"
    }
**/

const Hashes = require('@flxify/hashes')

function main(state) {
  var SHA1 = new Hashes.SHA1;
  state.text = SHA1.hex(state.text)
}
