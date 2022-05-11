const mat1 = [
  [2, 0],
  [1, 9],
];
const mat2 = [
  [3, 9],
  [4, 7],
];

const matElTop = (mat1, mat2, s, u) => {
  let sum = 0;
  for (let i = 0; i < mat1.length; i++) {
    sum += mat1[s][i] * mat2[i][u];
  }
  return sum;
};

const matKopaytr = (mat1, mat2) => {
  let ans = new Array();
  for (let i = 0; i < mat1.length; i++) {
    let satr = [];
    for (let j = 0; j < mat1.length; j++) {
      satr.push(matElTop(mat1, mat2, i, j));
    }
    ans.push(satr);
  }
  return ans;
};

console.log(matKopaytr(mat1, mat2));
