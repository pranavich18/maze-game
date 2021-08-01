var rows=10, cols=10;
var dir = ["right", "left" ,"bottom", "top"];
var i=1, j=1;
var startTime=0;
var timeInterval = null;

//Recursive Back-Tracking ALgorithm For Carving Out the Walls
async function drawPath(v, r, c){
  // random sort (Shwartzian's Transform)
  let directions = dir
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
  for(var i=0;i<directions.length;i++){
    currentcell  = document.getElementById("cell_" + (r+1) + "_" + (c+1));
    r1=r,c1=c;
    var opp;
    switch(directions[i]){
      case "right": 
        c1++; 
        opp = "left";
      break;
      case "left": 
        c1--; 
        opp = "right";
      break;
      case "top": 
        r1--; 
        opp = "bottom";
      break;
      case "bottom": 
        r1++; 
        opp = "top";
      break;
    }
    if(r1<rows && c1<cols && r1>=0 && c1>=0 && v[r1][c1]==0){
      v[r1][c1]=1;
      nextcell  = document.getElementById("cell_" + (r1+1) + "_" + (c1+1));

      //remove wall
      currentcell.style["border-"+directions[i]] = "none";
      nextcell.style["border-"+opp] = "none";
      drawPath(v,r1,c1);
    }
  }
}

//Game Levels
function setLevelHard(){
  rows=40, cols=40;
}
function setLevelMedium(){
  rows=20, cols=20;
}
function setLevelEasy(){
  rows=10, cols=10;
}

 function createEmptyMaze(){
    if(document.getElementById("tbl") == null){
      startTime=0;
      var i,j;
      var table = document.createElement("table");
      var tbody = document.createElement("tbody");
      for(i=1;i<=rows;i++){
        var row = document.createElement("tr");
        for(j=1;j<=cols;j++){
          var col = document.createElement("td");
          if(i == 1 && j == 1){
            col.style.backgroundColor = "#055052";
          }
          else{
            col.style.backgroundColor = "#28FFBF";
          }
          col.setAttribute("id", "cell_" + i + "_" + j);
          // setting height for td depending upon the size of grid
          switch(rows){
            case 40: 
              col.style.height = "1.5ch";
            break;
            case 20:
              col.style.height = "3ch";
            break;
            default: col.style.height = "6ch";
          }
          row.appendChild(col);
        }
        tbody.appendChild(row);
      }
      table.appendChild(tbody);
      table.setAttribute("id", "tbl")
      document.getElementById("maze").appendChild(table);
      vis = new Array() ;
      for(var i=0;i<rows;i++){
        temp = new Array();
        for(var j=0;j<cols;j++){
          temp.push(0);
        }
        vis.push(temp);
      }
      vis[0][0]=1;
      drawPath(vis, 0,0);
    }
  }

  //Game Controls
  document.addEventListener("keydown", function(event){
    if(document.getElementById("tbl")!= null){
      var key = event.code ;
      var curcell = document.getElementById("cell_" + i + "_" + j);
      //left(A)
      if(key === 'ArrowLeft' || key === 'KeyA'){
        if(j-1 >=1 && curcell.style["border-left"]==="none"){
          curcell.style.backgroundColor = "#28FFBF";
          j--;
          curcell = document.getElementById("cell_" + i + "_" + j);
          curcell.style.backgroundColor = "rgb(5, 80, 82)";
          if(i==rows && j==cols){
            alert("You Won!!");
            clearInterval(timeInterval);
            if(document.getElementById("restart")==null){
              var restart = document.createElement('p');
              restart.innerHTML = "Press R to restart!!";
              restart.setAttribute("id", "restart");
              document.getElementById("instruc").appendChild(restart);
            }

          }
        }
      }
      //up(W)
      if(key === 'ArrowUp' || key === 'KeyW'){
        if(i-1>=1 && curcell.style["border-top"]==="none"){
          curcell.style.backgroundColor = "#28FFBF";
          i--;
          curcell = document.getElementById("cell_" + i + "_" + j);
          curcell.style.backgroundColor = "rgb(5, 80, 82)";
          if(i==rows && j==cols){
            alert("You Won!!");
            clearInterval(timeInterval);
            if(document.getElementById("restart")==null){
              var restart = document.createElement('p');
              restart.innerHTML = "Press R to restart!!";
              restart.setAttribute("id", "restart");
              document.getElementById("instruc").appendChild(restart);
            }
          }
        }
      }
      //right(D)
      if(key === 'ArrowRight' || key === 'KeyD'){
        if(j+1<=cols && curcell.style["border-right"]==="none"){
          curcell.style.backgroundColor = "#28FFBF";
          j++;
          curcell = document.getElementById("cell_" + i + "_" + j);
          curcell.style.backgroundColor = "rgb(5, 80, 82)";
          if(i==rows && j==cols){
            alert("You Won!!");
            clearInterval(timeInterval);
            if(document.getElementById("restart")==null){
              var restart = document.createElement('p');
              restart.innerHTML = "Press R to restart!!";
              restart.setAttribute("id", "restart");
              document.getElementById("instruc").appendChild(restart);
            }
          }
        }
      }
      //down(S)
      if(key === 'ArrowDown' || key ==='KeyS'){
        if(i+1<=rows && curcell.style["border-bottom"]==="none"){
          curcell.style.backgroundColor = "#28FFBF";
          i++;
          curcell = document.getElementById("cell_" + i + "_" + j);
          curcell.style.backgroundColor = "rgb(5, 80, 82)";
          if(i==rows && j==cols){
            alert("You Won!!");
            clearInterval(timeInterval);
            if(document.getElementById("restart")==null){
              var restart = document.createElement('p');
              restart.innerHTML = "Press R to restart!!";
              restart.setAttribute("id", "restart");
              document.getElementById("instruc").appendChild(restart);
            }
          }
        }
      }
    }
    else{
      i=1, j=1;
    }
  });

  // change innerHTML for clock
  function changeTime(){
    document.getElementById("clock").innerHTML = "Time- " + (++startTime) + " seconds";
  }

  //Game Options
  document.addEventListener("keydown", function(event){
    //Start Game
    if(event.code==="Enter"){
      //creating a clock
      var t = document.createElement("p");
      t.innerHTML = "Time- " + startTime + " seconds";
      t.setAttribute("id", "clock");
      document.getElementById("time").appendChild(t);
      timeInterval = setInterval(changeTime, 1000);

      document.getElementById("options").style.display = "none";
      var exit = document.createElement("p");
      exit.innerHTML = "Press Esc for exit";
      exit.setAttribute("id","exit");
      document.getElementById("instruc").appendChild(exit);
      createEmptyMaze();
    }
    //Exit Game
    if(event.code==="Escape"){
      document.getElementById("tbl").remove();
      document.getElementById("options").style.display = "inline";
      document.getElementById("exit").remove();
      if(document.getElementById("restart")!=null){ 
        document.getElementById("restart").remove();
      }
      //remove clock
      document.getElementById("clock").remove();
      startTime=0;
      clearInterval(timeInterval);
    }
    //Restart Game
    if(event.code==="KeyR"){
      document.getElementById("tbl").remove();
      document.getElementById("options").style.display = "inline";
      document.getElementById("exit").remove();
      document.getElementById("restart").remove();
      //remove clock
      document.getElementById("clock").remove();
      startTime=0;
      clearInterval(timeInterval);
    }
  });


  