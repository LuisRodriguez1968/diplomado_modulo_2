//funcionando
let texto = "Faltan numero de ocurrencias"
let dato = 0
function primera(Param2, Param1) {
   if (typeof Param1 === 'number') {dato = Param2}
   if (typeof Param1 === 'undefined') {dato = "Undefined"}
   if (Param1 < 1) {dato = "No tiene valor"}


      for (let i = 0; i < Param1; i++) {
         console.log(dato)
      }
   
}
