const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function(moves) {
  let X = 0;
  let Y = 0
  for(let i = 0; i < moves.length; i++){
    if(moves[i] === 'north') {
      Y += 1
    }
    if(moves[i] === 'south') {
      Y -= 1
    }
    if(moves[i] === 'west') {
      X -= 1
    }
    if(moves[i] === 'east') {
      X += 1
    }
  }return [X, Y]
};

console.log(finalPosition(moves))