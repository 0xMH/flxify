/**
    {
        "api":1,
        "name":"SHA512 Hash",
        "description":"Generates SHA512 hash of text in hexadecimal format",
        "icon":"fingerprint",
        "tags":"strip,slashes,remove"
    }
**/

const Hashes = require('@flxify/hashes')

function main(state) {
  var SHA512 = new Hashes.SHA512;
  state.text = SHA512.hex(state.text)
}
