// add solution here
function theBeatlesPlay(musicians, instrumants) {
  var strings = [];
  
  for (i = 0; i < 4; i++) {
    strings.push(musicians[i] + 'plays' + instruments[i])
  }
  return strings;
}