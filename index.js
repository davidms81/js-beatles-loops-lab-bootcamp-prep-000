// add solution here
function theBeatlesPlay(musicians, instruments) {
  var sentence = [];
  for (var i = 0; i < musicians.length; i++) {
    sentence.push(musicians[i] + " plays " + instruments[i]);
  }
  return sentence;
}

function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var newFacts = [];
  var i = 0
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!")
    i++;
  }
  return newFacts;
}

function johnLennonFacts(facts) {
  var results = [];
  var count = 0;
  while (count < facts.length) {
    results.push(facts[count] + "!!!");
    count++;
  }
  return results;
}

function iLoveTheBeatles(num) {
  var phrases = [];
  do {
    phrases.push("I love the Beatles!");
    num++
  } while (num < 15);
  return phrases;
}