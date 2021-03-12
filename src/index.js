module.exports = function towelSort(matrix) {
    const stack = [];
    if (!matrix) {
        return [];
    }
    for (i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            let j = matrix[i].length;
            for (j = 0; j < matrix[i].length; j++) {
                stack.push(matrix[i][j]);
            }
        } else {
            for (j = matrix[i].length - 1; j >= 0; j--) {
                stack.push(matrix[i][j]);
            }
        }
    }
    return stack;
}