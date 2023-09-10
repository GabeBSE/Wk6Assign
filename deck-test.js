
const expect = chai.expect
const assert = chai.assert

describe('Deck', () => {
  describe('createDeck', () => {
    it('should create a deck with 52 cards', () => {
      const myDeck = new Deck();
      myDeck.createDeck();
console.log(myDeck)      

      //expect(this thing).to.equal(this)
      expect(myDeck.cards).length(52)


    });
  });
});