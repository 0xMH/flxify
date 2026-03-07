/**
  {
    "api":1,
    "name":"Time to seconds",
    "description":"Converts time duration (hh:mm:ss) to total seconds",
    "author":"PeteChu",
    "icon":"watch",
    "tags":"transform,convert"
  }
**/

function timeToSeconds(durationText) {
  const [hours = 0, minutes = 0, seconds = 0] = String(durationText).split(':');
  return Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
}

function main(input) {
  input.insert('\n\n' + timeToSeconds(input.text));
}