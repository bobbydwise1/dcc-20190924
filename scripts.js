/*
This problem was asked by Apple.

Suppose you have a multiplication table that is N by N. That is, a 2D array where the value at the i-th row and j-th column is (i + 1) * (j + 1) (if 0-indexed) or i * j (if 1-indexed).

Given integers N and X, write a function that returns the number of times X appears as a value in an N by N multiplication table.

For example, given N = 6 and X = 12, you should return 4, since the multiplication table looks like this:

| 1 | 2 | 3 | 4 | 5 | 6 |

| 2 | 4 | 6 | 8 | 10 | 12 |

| 3 | 6 | 9 | 12 | 15 | 18 |

| 4 | 8 | 12 | 16 | 20 | 24 |

| 5 | 10 | 15 | 20 | 25 | 30 |

| 6 | 12 | 18 | 24 | 30 | 36 |

And there are 4 12's in the table.
*/

const makeTable = n => {
  let output = []
  let temp = []
  for (y = 1; y < n+1; y++ ) {
    temp = []
    for (x = 1; x < n+1; x++ ) {
      temp.push(x*y)
    }
    output.push(temp)
  }
  return output
}

const findProducts = (N,X) => {
  let multTable = makeTable(N)
  //console.table(multTable)
  let count = 0
  for ( ey = 0; ey < multTable.length; ey++ ) {
    for ( ex = 0; ex < multTable.length; ex++ ) {
      if (multTable[ey][ex] == X) {
        count++
      }
    }
  }
  return count
}

//let testTable = makeTable(5)
//console.log(testTable)

const makeHTMLTable = (yourMatrix) => {
  let output = '<table class="table table-bordered table-dark">\n<thead>'
  for ( x = 0; x < yourMatrix.length; x++ ) {
    output = output+'<th scope="col">' + yourMatrix[0][x] + '</th>\n'
  }
  output = output + '</tr>\n</thead>\n<tbody>'
  for (y = 1; y < yourMatrix.length; y++ ) {
    output = output + '<tr>\n'
    for ( x = 0; x < yourMatrix.length; x++ ) {
      if ( x == 0 ) {
        output = output + '<th scope="row">'+ yourMatrix[y][x] + '</th>\n'
      } else {
        output = output + '<th>'+ yourMatrix[y][x] + '</th>\n'
      }
    }
    output = output + '</tr>\n'
  }
  output = output + '</tbody>'
  return output
}

$(document).ready(function() {
  $('#form-1').submit(function(){
    event.preventDefault()
    let N = parseInt($('#input-1').val())
    //console.log('what is N?', N)
    let X = parseInt($('#input-2').val())
    //console.log('what is X?', X)
    let findProd = findProducts(N,X)
    $('#output-1').text(findProd)
    let newTable = makeHTMLTable(makeTable(N))
    //console.log(newTable)
    $('#output-2').html(newTable)
  })
});
