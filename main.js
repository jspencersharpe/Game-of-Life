$(document).ready(function(){
  $('table').addClass('hidden');
});
function matrixCreator(x, y) {
  var matrix=[];
  for(var i=0; i<x; i++) {
     matrix[i] = [];
     for(var j = 0; j<y; j++) {
      matrix[i][j] = Math.round(Math.random())
     }
  }
  return matrix;
}

$(document).ready(function(){
  var matrix = matrixCreator(40, 120);
  generateGrid(matrix);

  function generateGrid(matrix){
    var $table = $('#grid');
    $($table).empty();

    matrix.forEach(function(row){ // first time, row => [0, 0, 0]
      // create a tr for the row
      var $tr = $('<tr></td>');
      row.forEach(function(cell){ // first time, cell => 0
        // cell goes into a new td
        // that td goes into a tr
      var $td = createTableCell(cell);
        $($td).text(cell);
        $($tr).append($td);
      });
      // add that tr to the table
      $($table).append($tr);
    });
  }

  function createTableCell(value){
    var $td = $('<td></td>');
    // Apply alive or dead class to the td
    if(value === 1) {
      $($td).addClass('alive');
    } else {
      $($td).addClass('dead');
    }
    return $td;
  }

  function livingNeighborCount(x, y) {
    var neighbors = 0;
        for(var i = x-1; i<=x+1; i++) {
            if (i < 0 || i ===matrix.length) {     
            } else {
                for (var j = y-1; j<=y+1; j++) {
                   if (j < 0 || i ===matrix[i].length || (i===x && j===y)) {
                } else {    
                    if (matrix[i][j] === 1) {
                      neighbors += 1;
                    }
                  }     
                }
            }
         } 
        return neighbors;
  }

  
  function calculateNextState(currentState){
    var nextState = [];
    currentState.forEach(function(currentRow, x){
      var nextRow = [];
    currentRow.forEach(function(currentCell, y){
      var nextCellState = livingNeighborCount(x, y);
       // check if current cell alive
       if (currentState[x][y] === 1) {
         // if neighbors are greater than 2 or less than 3
           if (nextCellState < 2 || nextCellState  > 3) {
              nextCellState  = 0;
           } else { 
             nextCellState = 1;
           }        
                
       } else {
           if (nextCellState  === 3) {
               nextCellState  = 1;
           } else {
               nextCellState  = 0;    
         }
       }
       nextRow.push(nextCellState);
      });
      nextState.push(nextRow);
    });
    return nextState;
  }

 $("#tick").on('click', function(){
    // Tick button has been pressed
    $('table').removeClass('hidden');
    setInterval(function () {
     matrix = calculateNextState(matrix);
     generateGrid(matrix);  
    }, 10);     
    }); 
});

















