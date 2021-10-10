const numberPyramid = size => {
    let shape = ''
    for(let i = 1; i <= size; i++){
        for(let j = 1; j <= (2 * size) - 1; j++){
            if(j <= i) {
                shape += j   
            } else if (size * 2 - j <= i){
                shape += (size * 2 - j)
            } else shape += ' '
        }
        shape += '\n'
    }
        for(let i = size - 1; i >= 1; i--){
        for(let j = 1; j <= (2 * size) - 1; j++){
            if(j <= i) {
                shape += j   
            } else if (size * 2 - j <= i){
                shape += (size * 2 - j)
            } else shape += ' '
        }
        shape += '\n'
    }
    console.log(shape)
}

numberPyramid(5)