function primera(Param1, Param2) {
    console.log(typeof Param2)
    if (typeof Param2 == "undefined") {
        Param2 = 'x'
        let cadena = Param2.repeat(Param1)
        for (let i = 0; i < Param1; i++) {
            console.log(cadena)
        }
    }
    else {
        let cadena = Param2.repeat(Param1)
        for (let i = 0; i < Param1; i++) {
            console.log(cadena)
        }
    }
}
primera(5,'N')