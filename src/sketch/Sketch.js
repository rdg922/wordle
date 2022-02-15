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
  let typing = "";

  // p.preload = () => {
  //   wordsRaw = p.loadStrings(words);
  // }

  function myFunction() {
    document.getElementById('render').style.position = "relative";
    document.getElementById('render').style.left = "50%";
    document.getElementById('render').style.right = "50%";
  }

  p.setup = () => {
    p.resizeCanvas(700,600);  
    p.textSize(60);
    p.textAlign(p.CENTER);
    wordToGuess = WORDS[Math.round(Math.random()*WORDS.length-0.5)];
    myFunction();
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
        if(i==attempts){
          p.fill(120,120,120);
          p.rect((j+2)*75, (i+1)*75, 60, 60);
          if(j<=typing.length){
            p.fill(50);
            p.text(typing.charAt(j).toUpperCase(), (j+2)*75+8, (i+1)*75+3, 60, 60);
          }
        }
      }
    }
    
    if(enterPressed){
      console.log(typing);

      let guess = typing.toLowerCase();
      
      if(guess.length==5&&(WORDS.includes(guess)||VALIDGUESSES.includes(guess))){
        usedWords.push(guess.toLowerCase());
        attempts++;
        
        if(guess===wordToGuess)
        {
          //Finish the game here
        }
        guess="";
        typing="";
      }

      enterPressed=false; 
    }
  }

  document.addEventListener("keydown", function(event) {
    if(event.keyCode==13)
      enterPressed=true;
    if(event.keyCode>=65&&event.keyCode<=90){
      if(typing.length<5){
        typing += String.fromCharCode(event.keyCode);
      }
    }
    if(event.keyCode==8){
      typing = typing.substr(0,typing.length-1);
    }
  });
}
