
const expect = chai.expect
const assert = chai.assert

describe('Deck', () => { //This is showing I am testing within my Deck class.
  describe('createDeck', () => { // This is showing my test case is with my createDeck method
    it('should create a deck with 52 cards', () => { //Stating what my testing function should do.
      const myDeck = new Deck();       //test parameters
      myDeck.createDeck();            //creats an instance of deck (myDeck) then calls my createDeck method and logs
console.log(myDeck)                   //result to the console.

      //Write test here
      expect(myDeck.cards).length(52)  //expect function will check to see if the deck is equal to 52 cards. 
                                       //Equal to 52 will pass. If deck is not 52 then the test will fail.

    });
  });
});