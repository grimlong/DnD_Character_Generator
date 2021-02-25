const statBlock = []
function rollAttributes(att)
 {
   var Result = document.getElementById(att);
   statBlock.length = 0;
    for (i = 0; i <= 5; i++) {
          var roll = Math.floor(Math.random()*6+1)+Math.floor(Math.random()*6+1) + 6; 
          statBlock.unshift(roll.toFixed());
      } 
      
   document.getElementById("stat1").innerHTML = statBlock[0];
   document.getElementById("stat2").innerHTML = statBlock[1];
   document.getElementById("stat3").innerHTML = statBlock[2];
   document.getElementById("stat4").innerHTML = statBlock[3];
   document.getElementById("stat5").innerHTML = statBlock[4];
   document.getElementById("stat6").innerHTML = statBlock[5];
   
    
   console.log(statBlock);
    
   }
   

// const statBlock = []
// const statBox = ["stat1", "stat2", "stat3", "stat4", "stat5", "stat6"]

// function rollAttributes(att)
//  {
//    var Result = document.getElementById(att);
//    statBlock.length = 0;
//     for (i = 0; i <= 5; i++) {
//           var roll = Math.floor(Math.random()*6+1)+Math.floor(Math.random()*6+1) + 6; 
//           statBlock.unshift(roll);
//       } 
 
//  var box = document.getElementById("stat"+i);
//    for (var  i=0; i=6; i++){
//       box[i].innerHTML = statBlock[i];
//    }

//  }