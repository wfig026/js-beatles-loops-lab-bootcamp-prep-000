// add solution here
function theBeatlesPlay(musicians, instrumants) {
  var theBeatles = [];
  
  for (i = 0; i < 4; i++) {
    theBeatles.push(musicians[i] + 'plays' + instruments[i])
  }
  return theBeatles;
}