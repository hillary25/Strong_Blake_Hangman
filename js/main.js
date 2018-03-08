(() => {
	console.log('hangman script fired!');

	//create an array to hold the words to be guessed (MDN => arrays, MDN const)
	const  words = ["apple", "orange", "strawberry", "pineapple", "grapes",];



	//set up a variable stack; anything on the page you want the user to interact with needs a connection between js and html
	//let initButton = document.querySelector('.init-button');  //if you see getElementByID replace with this, use querySelector or querySelectorAll and put class or id name in brackets
	let currentWord = null,
		wordHint = document.querySelector('.hint-string'),
		guessBox = document.querySelector('#userInput'),
		wrongGuesses = 0,
		correctGuesses = 0,
		resetScreen = document.querySelector('.reset-screen')
		resetButton = resetScreen.querySelector('button'),
		wrongLetterList = document.querySelector('.wrong-letters'),
		wrongLetterArray = []
		message = "";

	function resetGame(){
		//reset game and pick a new words
		let gamePieces = Array.from(document.querySelectorAll('.show-piece'));
		gamePieces.forEach(piece => piece.classList.remove('show-piece'));
		wrongGuesses = 0;
		guessBox.value = "";
		wrongLetterList.textContent = "";
		init();
	}

	function showResetScreen(message) {
		//user has lost, reset stuff and start over
		resetScreen.classList.add('show-piece');
		resetScreen.querySelector('h3').textContent = message;
	}

	function takeGuess() {
		//debugger;
		//MDN -> 'this' keyword
		console.log(this.value);
		//if there's no letter, exit the game loop -> MDN 'or'
		if (this.value === "" || this.value.length < 1) {
			return;
		}

		let currentGuess = this.value;

		//set up the win and lose paths (if/else)
		if (!currentWord.includes(this.value)) {
			//losing path
			//compare the letter guess to the word to see if it's in there
			console.log('invalid letter!');
			//store wrong guesses so we can show them to the user
			wrongLetterArray.push(this.value);
			//add them to the paragraph tag
			wrongLetterList.textContent = wrongLetterArray.join(" ");
			//turn on the hangman piece
			document.querySelector(`.wrong${wrongGuesses}`).classList.add('show-piece');

			if (wrongGuesses >= 5) {
				//increment the wrongGuesses variable
				showResetScreen(message = "You Lose");

			} else {
				//you lose, reset the game
				wrongGuesses++;
			}

		} else {
			//winning path
			let matchAgainst = currentWord.split("");
			var hintString = wordHint.textContent.split(" ");

			matchAgainst.forEach((letter, index) => {
				if(letter === currentGuess) {
					hintString[index] = currentGuess;
					correctGuesses++;
				}
			});

			wordHint.textContent = "";
			wordHint.textContent = hintString.join(" ");

			if (correctGuesses === currentWord.length){
				showResetScreen(message = "You Win");
			}
		}
	}

	function init() {
		//look at MDN -> the Math object
		//debugger;
		//console.log(words[3]); //pick the third word in the array words
		currentWord = words[Math.floor(Math.random()*words.length)]; //math.floor rounds out the number, math.random generates random number, *words.length: multiply by the length of the array

		//fill the hint with underscores -> MDN string methods / array .map method
		wordHint.textContent = currentWord.split("").map(letter => letter = "__").join(" "); //split splits apart an array currentWord.splt = make a temporary array
		//.map go through the array; .join = join it all back together and make it text

		//let thisIndex = words.indexOf(currentWord);

		//MDN => template string
		console.log(`guess this word: ${currentWord}. It's at ${words.indexOf(currentWord)}`); //${} putting a variable into the string
	}

	//event handling always goes at bottom
	//initButton.addEventListener('click', init);
	guessBox.addEventListener('keyup', takeGuess);
	resetButton.addEventListener('click', resetGame);

	init();
})();
