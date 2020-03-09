function stepsToConvertToOnes(matrix) {
  let steps = 0;
  let newMatrix = [];

  // This is my break condition. When we reach a solution then the loop stops
  let allAreOnes = true;

  while (allAreOnes) {
    
    // Checks if all the internal arrays contains only 1s
    for(let i = 0; i < matrix.length; i++) {
      const every = matrix[i].every(x => x === 1);
      allAreOnes = allAreOnes && every;
    }

    // if all are ones, we have a result. Reset and continue otherwise
    if (allAreOnes) break;
    allAreOnes = true;
    
    newMatrix = [];
    let allEqual = true;

    for(let i = 0; i < matrix.length; i++) {
      newMatrix[i] = [];
      for (let j = 0; j < matrix[i].length; j++) {
        // if position is already 1, no need to compare anything
        if (matrix[i][j] === 1) {
          newMatrix[i][j] = 1;
          allEqual = allEqual && true;
          continue;
        }

        // generate "cross indexes"
        const x1 = i - 1;
        const x2 = i + 1;
        const y1 = j - 1;
        const y2 = j + 1;

        // check the "cross" of the one
        let res = false;
        if (x1 >= 0 && matrix[x1][j] === 1) res = true;
        else if (x2 < matrix.length && matrix[x2][j] === 1) res = true;
        else if (y1 >= 0 && matrix[i][y1] === 1) res = true;
        else if (y2 < matrix[i].length && matrix[i][y2] === 1) res = true;

        // assign the new value to new matrix
        newMatrix[i][j] = res ? 1 : 0;
        allEqual = allEqual && matrix[i][j] === newMatrix[i][j];
      }
    }
    
    // if the new matrix is exactly the same than the original, then we reach an unsolvable matrix
    if (allEqual) {
      steps = -1;
      break;
    }

    matrix = newMatrix;
    steps++;
  }

  return steps;
}

module.exports = stepsToConvertToOnes