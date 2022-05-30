const { guardarDB, leerDB } = require('./helpers/guadarArchivo');
const { inquirerMenu, pausaa, leerInpt, listadoTareasBorrar, confirmar, mostrarListadoChecklist} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
require('colors');
console.clear();


const main = async() =>{

   let opt='';
   const tareas=new Tareas();
   const tareasDB =leerDB();

    if(tareasDB){
        //Establecer las tareas
        tareas.cargarTareasFromArray(tareasDB);
    }
   
   do{

        opt= await inquirerMenu();
       

        switch(opt){
                case '1':
                    const desc=await leerInpt('Descripcion: ');
                    tareas.crearTarea(desc);
                break;

                case '2':
                   tareas.listadoCompleto();
                break;
                case '3':
                 tareas.listarPendientesCompletadas(true);
               
                break;

                case '4':
                    tareas.listarPendientesCompletadas(false);
                    
                break;
                
                case '5':
                       const ids= await mostrarListadoChecklist(tareas.listadoArr);
                        tareas.toggleCompletadas(ids);
                break;


                case '6':
                        const id= await listadoTareasBorrar(tareas.listadoArr);
                        if(id!=='0'){
                            const ok= await confirmar('¿Estas seguro?');
                            if(ok){
                                tareas.borrarTarea(id);
                            }
                        }
                      
                break;


        }

        guardarDB(tareas.listadoArr);
        await pausaa();
   
    }while(opt !== '0');
   
}

main()

  