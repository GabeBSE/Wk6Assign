class Card {
    constructor(suit,name,value){
        this.name = name;
        this.suit = suit;
        this.value = value;
    }
}



class Deck {
    constructor() {
      this.cards = [];
      this.suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
      this.names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
      this.values = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    }

    createDeck() {
        console.log('Creating a new Deck');
        for (let i = 0; i < this.suits.length; i++) {
            for (let n = 0; n < this.names.length; n++) {
                this.cards.push(new Card(this.suits[i], this.names[n], this.values[n]));
            }
        }
    }


    shuffleDeck() {
        console.log('Shuffling Deck');
        const shuffleDeck = [];
        for (let i = 0; i < 52; i++) {
            let randomPosition = Math.floor((this.cards.length - i) * Math.random());
            let randomItem = this.cards.splice(randomPosition, 1);
            shuffleDeck.push(...randomItem);
        }
        return shuffleDeck;
    }

    dealDeck(players, shuffledCards) {
        console.log('Dealing Cards');
        
        
        // Determine the number of cards to deal to each player
        const cardsPerPlayer = Math.floor(shuffledCards.length / players.length);
    
        for (let i = 0; i < players.length; i++) {
            const dealingCards = shuffledCards.splice(0, cardsPerPlayer);
            players[i].cards.push(...dealingCards); //was .hands.push
        }
    }
    } 

class Players {
    constructor(name) {
        this.cards = []; //Player properties are here
        this.name = name;
        this.points = 0;
        // this.hands = [];
    }
}

class Game {
    constructor() {
        this.players = [];
    }

    start() {  //Created players - assigned names <---STARTING the game is initiated here
        const myDeck = new Deck();   //Creating the Deck and shuffling here
        this.players.push(new Players('Volibear'));
        this.players.push(new Players('Rengar'));
        console.log('DECLARE WAR!!!', this.players);

        myDeck.createDeck();   
        const shuffledDeck = myDeck.shuffleDeck(); 

        for (let i = 0; i < 26; i++) {
            this.players[0].cards.push(shuffledDeck[i]);
            this.players[1].cards.push(shuffledDeck[i + 26]);
        }
        
       //myDeck.dealDeck(this.players, shuffledDeck); This was used before the current changes.
       //let shuffledDeck = myDeck.shuffleDeck();  This was used before the current changes.


        // myDeck.dealDeck(this.players, shuffledDeck); //Dealing cards to Players


        this.playGame(); //This statement calls  `playGame()` method on the object (this.)
                        
        this.endGame();

    }

    playGame() {
        console.log('DECLARE WAR'); //Here players start entering a loop taking turns playing their hand of cards.
        let player1 = this.players[0]; // High value card will win the round
        let player2 = this.players[1]; //
        let roundWinner = '';  //<---telling me that it couldn't read it's value. But it is reading now.
        let turn = 0;
        while (player1.cards.length > 0 && player2.cards.length > 0) {  
            let player1Card = player1.cards.pop();                         
            let player2Card = player2.cards.pop();                   
            if (player1Card.value > player2Card.value) {
                roundWinner = player1.name; //<---------HERE IS THE roundWinner VALUE
                player1.points += 1;
                console.log('Turn: ', (turn +=1), '\nPlayer 1 card: ', player1Card.name, ' of ', player1Card.suit, 
                '\nplayer 2 Card: ', player2Card.name, ' of ', player2Card.suit, "\n"); 
                 
            }
            else if (player2Card.value > player1Card.value) {
                roundWinner = player2.name;
                player2.points +=1;
                console.log('Turn:', (turn += 1), '\nPlayer 1 Card: ', player1Card.name, ' of ', player1Card.suit,
                '\nPlayer 2 card: ', player2Card.name, ' of ', player2Card.suit, "\n");
            }                 
            else {
                console.log('Turn: ', (turn += 1), '\nPlayer 1 card: ', player1Card.name, ' of ', player1Card.suit, 
                '\nPlayer 2 card: ', player2Card.name, ' of ', player2Card.suit, "\n");
            }
        }
    }

    endGame() { //Here is where the winner of the game is determined based on their points. 
        let gameWinner = '';               //WHY CAN'T I GET PLAYER 2 TO WIN A GAME?
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