var deckSuite = ['Clubs', 'Diamonds', 'Spades', 'Hearts']
var deckFace = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var fullDeck = []
function listerizer (thingToBeTagged) {
  return ("<li>" + thingToBeTagged + "</li>")
}

$(function() {
  deckSuite.forEach(function(suite) {
    var card = "";
    deckFace.forEach(function(face) {
      card = listerizer(face + " of " + suite);
      fullDeck.push(card);
    });
  });
  $('#full-deck').html(fullDeck)
})
