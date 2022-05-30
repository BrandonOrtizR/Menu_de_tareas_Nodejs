const { green } = require('colors');
const { resolve } = require('path');

require('colors');

const mostrarMenu = () =>{

    return new Promise(resolve => {
        console.clear();
        console.log('===============================');
        console.log('     Seleccione una opcion     '.gray);
        console.log('===============================');
        console.log(`${'1'.green}. Crear tarea`);
        console.log(`${'2'.green}. Listar tarea`);
        console.log(`${'3'.green}. Listar tareas completadas`);
        console.log(`${'4'.green}. Listar tareas pendientes`);
        console.log(`${'5'.green}. Cmpletar tareas(s)`);
        console.log(`${'6'.green}. Borrar tarea`);
        console.log(`${'0'.green}. Salir\n`);
    
        const readline = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });
    
    
        readline.question('Selecione una opcion: ',(opt) => {
            readline.close();
            resolve(opt);
        });

    });
    
}

const pausa = () => {

    return new Promise(resolve=>{
        const readline = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });
    
    
        readline.question(`Presione ${'ENTER'.blue} para continuar\n`,(opt) => {
            readline.close();
            resolve();
        });

    });



}
module.exports= {
    mostrarMenu,
    pausa
}