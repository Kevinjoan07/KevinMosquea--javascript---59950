document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('taskForm');
  const taskList = document.getElementById('taskList');

  taskForm.addEventListener('submit', (event) => {
      event.preventDefault();

      // Obtener valores de los inputs
      const taskName = document.getElementById('taskName').value;
      const taskDescription = document.getElementById('taskDescription').value;

      // Crear un nuevo elemento de lista
      const taskItem = document.createElement('li');
      taskItem.className='resultado'
      taskItem.textContent = `${taskName}: ${taskDescription} `;

      // Crear botón de eliminar
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Eliminar';
      deleteButton.addEventListener('click', () => {
          taskList.removeChild(taskItem);
      });

      // Crear botón de actualizar
      const updateButton = document.createElement('button');
      updateButton.textContent = 'Actualizar';
      updateButton.addEventListener('click', () => {
          const newTaskName = prompt('Nuevo nombre de la tarea:', taskName);
          



           const newTaskDescription = prompt('Nueva descripción de la tarea:', taskDescription);


          if (newTaskName && newTaskDescription) {
              taskItem.textContent = `${newTaskName}: ${newTaskDescription} `;
              taskItem.appendChild(updateButton);
              taskItem.appendChild(deleteButton);
          }
      });

      // Agregar botones al elemento de lista
      taskItem.appendChild(updateButton);
      taskItem.appendChild(deleteButton);

      // Agregar el nuevo elemento a la lista de tareas
      taskList.appendChild(taskItem);

      // Limpiar los inputs
      taskForm.reset();
  });
});
