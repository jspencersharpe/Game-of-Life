/*
Random Matrix
function(x, y) {
  var matrix=[];
  for(var i=0; i < x; i++) {
  matrix[i]=[];
  for(varj = 0; j < y; j++) {
    matrix[i][j] = Math.round(Math.random())
    }
  }
  return matrix;
}
 
*/

var dataStructure = [[0, 1, 0], 
                     [1, 1, 0], 
                     [1, 1, 1]];

var $grid = document.getElementById('grid');
function nextCycle(dataStructure) {
  $grid.innerHTML = "";
  for(var i =0; i < dataStructure.length; i++) {
          var $tr = document.createElement('tr');
          $grid.appendChild($tr);
  
          for (var j = 0; j < dataStructure.length; j++) {
            var $td = document.createElement('td');
            $td.innerText = dataStructure[i][j];
            $tr.appendChild($td);
            if (dataStructure[i][j] === 0) {
                    $td.style.backgroundColor = 'red';
            } else {
                   $td.style.backgroundColor = 'blue';
            } 
          }
  }
}
document.addEventListener("DOMContentLoaded", function(){  
   nextCycle(dataStructure); 
});





