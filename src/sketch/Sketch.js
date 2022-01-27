import words from './wordsRefined.txt'

export default (p, {}) =>{
  // TODO: read state from function parameters
  let wordsRaw;
  let usedWords = [];
  let attempts = 0;
  let input;
  const letters = 5;
  const maxTries = 6;
  let enterPressed = false;

  p.preload = () => {
    wordsRaw = p.loadStrings(words);
  }

  p.setup = () => {
    console.log(wordsRaw);
    p.resizeCanvas(700,800);  
    p.textSize(60);
    p.textAlign(p.CENTER);
  }

  p.draw = () => {
    p.background(0);
    
    for(let i = 0; i < maxTries; i++){
      for(let j = 0; j < letters; j++){
        p.fill(150);
        p.rect((j+2)*75, (i+1)*75, 60, 60);
        if(i<attempts){
          // console.log("here");
          p.fill(255);
          p.text(usedWords[i].charAt(j), (j+2)*75+5, (i+1)*75+3, 60, 60);
        }
        // console.log("test");
      }
    }
    
    if(enterPressed){
      console.log(document.getElementById('txt').value);
      let guess = document.getElementById('txt').value;
      document.getElementById('txt').value='';
      if(guess.length==5&&wordsRaw.includes(guess)){
        usedWords.push(guess.toUpperCase());
        attempts++;
      }
      enterPressed=false; 
    }
  }

  document.addEventListener("keydown", function(event) {
    if(event.keyCode==13)
      enterPressed=true;
  });
}
