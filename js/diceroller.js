


const statBlock = []

function rollAttributes(att)
 {
    var Result = document.getElementById(att);
    statBlock.length = 0;
    for (i = 0; i <= 5; i++) {
          var roll = Math.floor(Math.random()*6+1)+Math.floor(Math.random()*6+1) + 6; 
          statBlock.unshift(roll);
      } 
    Result.innerHTML = statBlock;
    console.log(statBlock);

 };




 