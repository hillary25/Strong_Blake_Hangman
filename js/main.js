(() => {
console.log('hangman script fired!');

  //create an array to hold the words to be guessed (MDN -> arrays, MDN const)
  const words = ["blue", "orange", "yellow", "magenta", "violet"];

  //set up a variable stack
  let currentWord; null,
    wordHint = document.querySelector('.hint-string'),
    guessBox = document.querySelector('input');

  function takeGuess() {
    //MDN -> 'this' keyword -'this' is whatever you and interacting with at the time and is firing off
    console.log(this.value);

    //if there is no letter, exit the game loop -> MDN 'or'
    if (this.value == "" || this.value.length < 1 ){
      return;
    }
  }

  function init() {
    //look at MDN -> the Math object
    currentWord = words[Math.floor(Math.random()*words.length)];

    //fill the hint with underscores -> MDN string methods / array .map method
    wordHint.textContent = currentWord.split("").map(letter => letter = "__").join(" "); //this splits each letter and makes a underscore in their place, joined back together in the end

    //MDN -> template string
    console.log(`guess this word: ${currentWord}. It's at ${ words.indexOf(currentWord)}`);//varible into the string, $ is for plugging data in and making it dynamic
  }

  //event handling always goes at the bottom
  // initButton.addEventListener('click', init);
  guessBox.addEventListener('keyup', takeGuess);

  init();
})();
