function segunda(Param1, Param2) {
    for (let i = 0; i < Param1; i++) {
        if (typeof Param2 === undefined) {
            let Param2 = "X"
        }
        else {
            Param2 = Param2
        }
        console.log(Array(Param1).fill(Param2))
    }
}
segunda(2,'X')