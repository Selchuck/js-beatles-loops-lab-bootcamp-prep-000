// begining of first function
function theBeatlesPlay(musician, instruments) {
  let emptyArray = [];
  for(var i = 0; i < musician.length; i++){
    var string= musician[0] + instruments[0];
    emptyArray.push(musician[i] + " plays " + instruments[i] );
  }
  return emptyArray;
}
// end of first function


// begining of second function
function johnLennonFacts(argument){
  var array = [];
  var i = 0;
  while (i < argument.length){
    array.push(argument[i] + "!!!");
    i++;
  }
  return array;
}
// end of second function