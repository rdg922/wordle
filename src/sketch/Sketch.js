// import words from './wordsRefined.txt'
import { WORDS } from  './wordsSource.ts'
import { VALIDGUESSES } from './validGuesses.ts'

export default (p, {}) =>{
  // TODO: read state from function parameters
  let usedWords = [];
  let attempts = 0;
  const letters = 5;
  const maxTries = 6;
  let enterPressed = false;
  let wordToGuess;

  // p.preload = () => {
  //   wordsRaw = p.loadStrings(words);
  // }

  p.setup = () => {
    p.resizeCanvas(700,600);  
    p.textSize(60);
    p.textAlign(p.CENTER);
    wordToGuess = WORDS[Math.round(Math.random()*WORDS.length-0.5)];
    // console.log(wordToGuess);
  }

  p.draw = () => {
    p.background(50);
    
    for(let i = 0; i < maxTries; i++){
      for(let j = 0; j < letters; j++){

        p.fill(255);
        p.rect((j+2)*75, (i+1)*75, 60, 60);

        if(i<attempts){
          if(wordToGuess.includes(usedWords[i].charAt(j)))
          {
            if(wordToGuess.charAt(j)===usedWords[i].charAt(j)){
              p.fill(0,255,0);
              p.rect((j+2)*75, (i+1)*75, 60, 60);
            }
            else{
              p.fill(255,255,0);
              p.rect((j+2)*75, (i+1)*75, 60, 60);
            }
          }

          p.fill(50);
          p.text(usedWords[i].charAt(j).toUpperCase(), (j+2)*75+8, (i+1)*75+3, 60, 60);
        }

      }
    }
    
    if(enterPressed){
      console.log(document.getElementById('txt').value);

      let guess = document.getElementById('txt').value;
      document.getElementById('txt').value='';

      if(guess.length==5&&(WORDS.includes(guess)||VALIDGUESSES.includes(guess))){
        usedWords.push(guess.toLowerCase());
        attempts++;
        if(guess===wordToGuess)
        {
          //Finish the game here
        }
      }

      enterPressed=false; 
    }
  }

  document.addEventListener("keydown", function(event) {
    if(event.keyCode==13)
      enterPressed=true;
  });
}
