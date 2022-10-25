function primera(Param1, Param2) {
    console.log(typeof Param2)
    if (typeof Param2 == "undefined") {
        Param2 = 'x'
        for (let i = 0; i < Param1; i++) {
            console.log(Array(Param1).fill(Param2))
        }
    }
    else {
        for (let i = 0; i < Param1; i++) {
            console.log(Array(Param1).fill(Param2))
        }
    }
}
primera(5,'z')