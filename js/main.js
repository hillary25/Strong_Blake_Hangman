(() => {
console.log('hangman script friend');

  //create an array to hold the words to be guessed (MDN -> arrays, MDN const)
  const words = ["blue", "orange", "yellow", "magenta", "violet"];

  //set up a variable stack
  let initButton = document.querySelector('button');//this is the new document.getElementById, now use querySelector('all')

  function init() {
    debugger;
    console.log(words[3]);
  }

  //event handling always goes at the bottom
  initButton.addEventListener('click', init);

  // init();
})();
