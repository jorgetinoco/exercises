function stepsToConvertToOnes(matrix) {
  let steps = 0;
  let newMatrix = [];

  let allAreOnes = true;

  while (allAreOnes) {
    
    for(let i = 0; i < matrix.length; i++) {
      const every = matrix[i].every(x => x === 1);
      allAreOnes = allAreOnes && every;
    }

    if (!allAreOnes) allAreOnes = true;
    else break;
    
    newMatrix = [];
    let allEqual = true;
    for(let i = 0; i < matrix.length; i++) {
      newMatrix[i] = [];
      for (let j = 0; j < matrix[i].length; j++) {
        const x1 = i - 1;
        const x2 = i + 1;
        const y1 = j - 1;
        const y2 = j + 1;
        let res = false;
        if (x1 >= 0 && matrix[x1][j] === 1) res = true;
        else if (x2 < matrix.length && matrix[x2][j] === 1) res = true;
        else if (y1 >= 0 && matrix[i][y1] === 1) res = true;
        else if (y2 < matrix[i].length && matrix[i][y2] === 1) res = true;
        newMatrix[i][j] = res ? 1 : (matrix[i][j] === 1 ? 1 : 0);
        allEqual = allEqual && matrix[i][j] === newMatrix[i][j];
      }
    }
    
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