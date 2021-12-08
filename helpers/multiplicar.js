const fs = require('fs');
const colors = require('colors');
const crearArchivo = async(numero = 5, listar = false, hasta = 10 ) =>{
    try {
      
       
    
        let salida = "";
        let consola = "";
        for(let i = 1;i<=hasta;i++){
            salida +=(`${numero} ${'x'.green} ${i} es = ${numero * i}\n`);
             consola +=(`${numero} x ${i} es = ${numero * i}\n`);
        }
        
        if(listar){ console.log(colors.blue("============"));
        console.log(colors.green(`Tabla del ${numero}`));
        console.log(colors.blue("============"));
         console.log(salida);
        }
      
        fs.writeFileSync(`./salida/tabla-${numero}.txt`,consola);
        
        return(`tabla-de-${numero}.txt creado`);
        
    } catch (err) {
        throw err;
        
    }
    

   
    

}

module.exports = {
    crearArchivo
}