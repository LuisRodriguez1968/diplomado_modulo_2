function primera(Param1, Param2 = 'x') {//Param2 es parametro por defecto
    console.log(`My Param1: ${Param1}, My type: ${typeof Param1}`)
    console.log(`My Param2: ${Param2}, My type: ${typeof Param2}`)
    if (typeof Param1 == "number") {
        let cadena = Param2.repeat(Param1)
        for (let i = 0; i < Param1; i++) {
            console.log(cadena)
        }
    }
    else {
        console.log(typeof Param1)
    }
}
primera()//en caso de no tener Param2 definido aquí, utiliza el Param2='x' parametro por defecto