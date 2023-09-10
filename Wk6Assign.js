class Card {                       //Created Card class to set up the card properties.
    constructor(suit,name,value){  
        this.name = name;
        this.suit = suit;
        this.value = value;  
    }
}



class Deck {
    constructor() {
      this.cards = []; //Will represent my array of cards or cards in the deck.
      this.suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs']; 
      this.names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
      this.values = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    }

    createDeck() {
        console.log('Creating a new Deck');
        for (let i = 0; i < this.suits.length; i++) { //this loop will itterate through my suits and names arrays
            for (let n = 0; n < this.names.length; n++) { 
                this.cards.push(new Card(this.suits[i], this.names[n], this.values[n]));
            }          //In this loop a new Card is made for each constructor set. The new Card object is pushed into
        }   //my cards array of my Deck object with this.cards.push new Card line of code. When called 52 cards populate.
    }                


    shuffleDeck() {
        console.log('Shuffling Deck'); //This is where the cards are shuffled randomly selecting from original deck
        const shuffleDeck = [];       //inside the for loop block code and we get a return shuffled deck.
        for (let i = 0; i < 52; i++) {
            let randomPosition = Math.floor((this.cards.length - i) * Math.random());
            let randomItem = this.cards.splice(randomPosition, 1);
            shuffleDeck.push(...randomItem);
        }
        return shuffleDeck;
    }

    dealDeck(players, shuffledCards) { //Here the new shuffledDeck  is distributed evenly between player 1 and player 2.
        console.log('Dealing Cards');
        
        
        // Determine the number of cards to deal to each player
        const cardsPerPlayer = Math.floor(shuffledCards.length / players.length);
    
        for (let i = 0; i < players.length; i++) {
            const dealingCards = shuffledCards.splice(0, cardsPerPlayer);
            players[i].cards.push(...dealingCards); 
        }
    }
    } 

class Players {          //Player properties
    constructor(name) {
        this.cards = []; //array represents the player's hand of cards
        this.name = name;//stores the player's name
        this.points = 0; //Keeps track of the player's points
        
    }
}

class Game {
    constructor() {
        this.players = []; //this will hold player objects
    }

    start() {  //Created players - assigned names <---STARTING the game is initiated here
        const myDeck = new Deck();   //Creating the Deck and shuffling here
        this.players.push(new Players('Volibear'));
        this.players.push(new Players('Rengar'));  //Lists players
        console.log('DECLARE WAR!!!', this.players); //displays Declare War to the console.

        myDeck.createDeck();   
        const shuffledDeck = myDeck.shuffleDeck(); //calls createDeck and shuffleDeck methods to shuffle the deck.

        for (let i = 0; i < 26; i++) {
            this.players[0].cards.push(shuffledDeck[i]); //Here distribution of 26 cards to each player
            this.players[1].cards.push(shuffledDeck[i + 26]);
        }
        
       

        this.playGame(); //This statement calls  `playGame()` method to start the game
                        
        this.endGame();  //This statement calls  `endGame()` method to end the game

    }

    playGame() { //The game play is controlled here between two players.
        console.log('DECLARE WAR'); //Declare War is printed to console.
        let player1 = this.players[0]; // player1 and player2 are the variables in my playGame method.
        let player2 = this.players[1]; //0 represents player 1 and 1 represents player2 
        let roundWinner = '';  // roundWinner will keep track of the winner each round
        let turn = 0; //
        while (player1.cards.length > 0 && player2.cards.length > 0) {  
            let player1Card = player1.cards.pop(); //Represents PLAYERS DRAWING CARDS from their hands during each                      
            let player2Card = player2.cards.pop(); //turn of the game                
            if (player1Card.value > player2Card.value) {
                roundWinner = player1.name;      //PLAYER ONE WINS THE ROUND WITH HIGHER CARD
                player1.points += 1;
                console.log('Turn: ', (turn +=1), '\nPlayer 1 card: ', player1Card.name, ' of ', player1Card.suit, 
                '\nplayer 2 Card: ', player2Card.name, ' of ', player2Card.suit, "\n"); 
                                                                                         //OR
            }
            else if (player2Card.value > player1Card.value) { //PLAER TWO WINS THE ROUND WITH HIGHER CARD
                roundWinner = player2.name;
                player2.points +=1;
                console.log('Turn:', (turn += 1), '\nPlayer 1 Card: ', player1Card.name, ' of ', player1Card.suit,
                '\nPlayer 2 card: ', player2Card.name, ' of ', player2Card.suit, "\n");
            }                                                             //OR IF TIE, NO POINTS AWARDED
            else {
                console.log('Turn: ', (turn += 1), '\nPlayer 1 card: ', player1Card.name, ' of ', player1Card.suit, 
                '\nPlayer 2 card: ', player2Card.name, ' of ', player2Card.suit, "\n");
            }
        }
    }

    endGame() { //Here is where the winner of the game is determined based on their points. 
        let gameWinner = '';              
        let player1 = this.players[0];
        let player2 = this.players[1];
        let winnerPoints = 0;

        if (player1.points > player2.points) {
            gameWinner = player1.name;
            winnerPoints = player1.points;
            alert('GAME OVER!' + " " + gameWinner + " Won The Game!\nFINAL SCORES:\n"  
            
            + player1.name + ": " + player1.points + "\n" + player2.name + ': ' + player2.points + "\nBetter Luck Next Time!")
                 
        } else if (player2.points > player1.points) {
            gameWinner = player2.name;
            winnerPoints = player2.points;
            alert('GAME OVER!' + " " + gameWinner + " Won The Game!\nFINAL SCORES:\n"  
            
            + player1.name + ": " + player1.points + "\n" + player2.name + ': ' + player2.points + "\nBetter Luck Next Time!")
        } else {       
            alert('GAME OVER!\nTIED GAME\nFINAL SCORES:\n' + " " +  player1.name + ": " + player1.points + "\n" + player2.name + 
            ': ' + player2.points + "\nBetter Luck Next Time!");
        }

    }
        
}

let game = new Game();
game.start();