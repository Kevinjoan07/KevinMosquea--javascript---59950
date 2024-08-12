class Tareas {
  constructor(nombre, estado, descripcion) {
    this.nombre = nombre;
    this.estado = estado;
    this.descripcion = descripcion;
  }

  // Método para mostrar la información de la tarea
  mostrarInfo() {
    console.log(
      `Nombre: ${this.nombre},Estado: ${this.estado},Descripción: ${this.descripcion}`
    );
  }

  // Método para cambiar el estado de la tarea
  cambiarEstado(nuevoEstado) {
    this.estado = nuevoEstado;
  }
}

//clase para agregar, eliminar y modificar estados de las tareas
class Funciones {
  constructor() {
    this.Tareas = [];
  }

  //Metodo para Agregar tareas a la lista
  agregarTareas(tarea) {
    this.Tareas.push(tarea);
  }

  //encontrar una tarea en la lista
  EncontrarPersona(numTarea) {
    let indice = this.Tareas.indexOf(numTarea);
    return this.Tareas[indice];
  }

  // Método para mostrar todas las tareas de la lista
  mostrarTareas() {
    this.Tareas.forEach((tarea, index) => {
      console.log(`Tarea ${index + 1}:`);
      tarea.mostrarInfo();
      console.log("---");
    });
  }

  // Método para cambiar el estado de una tarea por su nombre
  cambiarEstadoTarea(nombre, nuevoEstado) {
    const tarea = this.Tareas.find((t) => t.nombre == nombre);
    if (tarea) {
      tarea.cambiarEstado(nuevoEstado);
      console.log(
        `El estado de la tarea ${nombre} ha sido cambiado a "${nuevoEstado}".`
      );
    } else {
      console.log(`No se encontró ninguna tarea con el nombre "${nombre}".`);
    }
  }

  //metodo para eliminar tarea especifica de la lista
  eliminarPersona(nombre) {
    const pos = this.Tareas.findIndex((tarea) => tarea.nombre == nombre);
    if (pos !== -1) {
      this.Tareas.splice(pos, 1);
    } else {
      console.error("Tarea " + nombre + " no encontrada");
    }
  }
}

//objeto   gestor de acciones a realizar con la lista de tareas
const tareitas = new Funciones();

let op = parseInt(
  prompt(
    "Bienvenido a tu Lista de tareas   \n Que deseas realizar ? \n \n 1. Agregar tarea \n 2. Cambiar estado de tarea \n 3. Ver lista de tareas \n 4. Eliminar tarea \n \n  0. Exit"
  )
);

do {
  switch (op) {
    case 1:
      let estado = "Activo";
      let nombreTarea = prompt("Cuales el nombre de la tarea");
      let descripcionTarea = prompt("Descripcion de la tarea");
      tareitas.agregarTareas(new Tareas(nombreTarea, estado, descripcionTarea));

      break;

    case 2:

    let cambiarEstadoTarea = prompt(
      "Indique el nombre de la tarea que desea cambiar el estado"
    );
    let estadoNuevo = parseInt(
      prompt(
        "Indique que  a que estado se actualizara la tarea \n 1.Activo \n 2. Impedimento  \n 3. Completada "
      )
    );

    let control = " "
      do {
       
        if (estadoNuevo == 1) {
          tareitas.cambiarEstadoTarea(cambiarEstadoTarea, "Activo");
        } else if (estadoNuevo == 2) {
          tareitas.cambiarEstadoTarea(cambiarEstadoTarea, "Impedimento");
        } else if (estadoNuevo == 3) {
          tareitas.cambiarEstadoTarea(cambiarEstadoTarea, "Completada");
        } else {
          console.log("Por favor Ingrese una opcion valida");
        }


        control = prompt("Desea que se actualizara otra tarea \n Y/N").toUpperCase()

        if (control == "Y") {
          cambiarEstadoTarea = prompt(
            "Indique el nombre de la tarea que desea cambiar el estado"
          );


          estadoNuevo = parseInt(
            prompt(
              "Indique que  a que estado se actualizara la tarea \n 1.Activo \n 2. Impedimento  \n 3. Completada "
            )
          );
        } 
        else{
          tareitas.mostrarTareas()
        }

      } while (control != "N");

      break;

    case 3:
      tareitas.mostrarTareas();

      break;

    case 4:
      let nombre = prompt("Que tarea desea eliminar?");
      tareitas.eliminarPersona(nombre);
      console.log(tareitas);

      break;

    default:
      alert("Porfavor ingrese una opcion correcta");
      break;
  }

  op = parseInt(
    prompt(
      "Bienvenido a tu Lista de tareas   \n Que deseas realizar ? \n \n 1. Agregar tarea \n 2. Cambiar estado de tarea \n 3. Ver lista de tareas \n 4. Eliminar tarea \n \n  0. Exit"
    )
  );
} while (op != 0);

// actualizar estado de la tarea: Permitir al usuario marcar tareas como  Activo,vencidos , completadas.
