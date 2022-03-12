function chessPrediction(line, column) {
    /*if((line + column) % 2 === 0) {
        return 1;
    } else {
        return 0;
    }*/

    if(line % 2 !== 0) {
        if(column % 2 !== 0){
            return 1;
        } else {
            return 0;
        }
    }else if(line % 2 === 0) {
        if (column % 2 === 0) {
            return 1;
        } else {
            return 0;
        }
    }
}

console.log(chessPrediction(1, 1));
console.log(chessPrediction(6, 9));
console.log(chessPrediction(8, 8));
console.log(chessPrediction(5, 91));