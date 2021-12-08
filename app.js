const {crearArchivo} = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('yargs')
.option('b',{
alias:'numero',
type:'number',
demandOption: true
})
.option('l',{
    alias:'listar',
    type:'boolean',
    demandOption: true,
    default : false
    })
    .option('h',{
        alias: 'hasta',
        type:'number',
        demandOption: false,
        default : 20,
        describe: 'Este es el numero hasta donde quieres la tabla'
        })
.check((argv,options) =>{
    if(isNaN(argv.numero)){
        throw'La base tiene que ser un numero'
    }
    return true;
})
.argv; 



console.clear();
//argv propio de node
//console.log(process.argv);
//argv que viene del yargs
console.log(argv);


//Forma no muy recomendada 
//const [ , ,arg3='numero=5'] = process.argv;
//const [, numero] = arg3.split('='); 

//console.log(arg3);
//imprimir la tabla del 5 en la consola
//let numero = 9;
crearArchivo(argv.b, argv.l,argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
.catch(err => Console.log(err));