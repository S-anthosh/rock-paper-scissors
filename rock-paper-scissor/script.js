function pickcomputermove(){
    const randomnumber=Math.random();
                let computermove ='';
                if(randomnumber>= 0 && randomnumber< 1/3){
                          computermove='rock';
                }
                else if(randomnumber>= 1/3 && randomnumber< 2/3){
                      computermove ='paper';
                }
                else if(randomnumber>= 2/3 && randomnumber< 1){
                    computermove ='sicssors';
                } 
                return computermove;
}
let score= JSON.parse(localStorage.getItem('score'));
if (score===null){
  score={
  win:0,
  lose:0,
  tie:0
}
}
updatescore();
  
function playgame(playermove){
    const computermove = pickcomputermove();
    let result='';
    
    if(playermove==='paper'){
                if(computermove==='rock'){
                  result='You win';
                }
                else if(computermove==='paper'){
                  result='Tie';
                }
                else if(computermove==='sicssors'){
                  result='You lose';
                }
    }
    else if(playermove==='rock'){
                if(computermove==='rock'){
                  result='Tie';
                }
                else if(computermove==='paper'){
                  result='You lose';
                }
                else if(computermove==='sicssors'){
                  result='You win';
                }
    }
    else if(playermove==='sicssors'){
        if(computermove==='rock'){
          result='You lose';
        }
        else if(computermove==='paper'){
          result='You win';
        }
        else if(computermove==='sicssors'){
          result='Tie';
        }
    }

   if(result === 'You lose'){
    score.lose+=1;
   }
   else if(result === 'You win'){
    score.win+=1;
   }
   else if(result === 'Tie'){
    score.tie+=1;
   }
    localStorage.setItem('score',JSON.stringify(score));
    updatescore();
    document.querySelector('.js-result').innerHTML=result;
    document.querySelector('.js-move').innerHTML=`You picked ${playermove}. Computer picked ${computermove}`;
}
function updatescore(){
  document.querySelector('.js-score').innerHTML= `Wins ${score.win}.  Loses${score.lose}.  Ties${score.tie}`;
}