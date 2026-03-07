/**
  {
    "api": 1,
    "name": "Add Line Numbers",
    "description": "Prepends line numbers to each line with aligned spacing",
    "author": "Flxify",
    "icon": "list-ol",
    "tags": "line,number,prefix,count,add"
  }
**/

function main(state) {
  var lines = state.text.split('\n');
  var width = String(lines.length).length;
  var result = lines.map(function(line, i) {
    var num = String(i + 1);
    while (num.length < width) num = ' ' + num;
    return num + '  ' + line;
  });
  state.text = result.join('\n');
}
