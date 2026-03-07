/**
  {
    "api":1,
    "name":"Count Words",
    "description":"Counts the total number of words in text",
    "author":"Daniel Stone",
    "icon":"counter",
    "tags":"count,length,size,words"
  }
**/
function main(input) {
    let words = input.text.trim().match(/\S+/g)
    input.postInfo(`${words && words.length || 0} words`)
}
