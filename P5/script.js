//Variable que recoge el tbody de la tabla que lo generaremos dinámicamente
const cuerpoTabla = document.querySelector("#cuerpoTabla");
const table = document.getElementById("tablaprueba");

// Recorrer toda la lista de personas recogidas de la clase Persona
const listaPersonas = new Persona().crearPersonasInicial();

listaPersonas.forEach(persona => {
	var personaObjeto = new Persona(persona.id, persona.nombre, persona.apellido1, persona.apellido2);
    nuevaFilaTabla(personaObjeto);
});
//Función nuevo registro
function nuevaFilaTabla(persona){
	
	// Crear un <tr>
    var tr = document.createElement("tr");
	tr.align = "center";
	
    // Creamos el <td> de id y lo adjuntamos a tr
    var tdId = document.createElement("td");
    tdId.textContent = persona.get_id(); // el textContent del td es el nombre
    tr.appendChild(tdId);
	
    // El td de nombre
    var tdNombre = document.createElement("td");
    tdNombre.textContent = persona.get_nombre();
    tr.appendChild(tdNombre);
	
    // El td de apellido1
    var tdApellido1 = document.createElement("td");
    tdApellido1.textContent = persona.get_apellido1();
    tr.appendChild(tdApellido1);
	
	// El td de apellido2
    var tdApellido2 = document.createElement("td");
    tdApellido2.textContent = persona.get_apellido2();
    tr.appendChild(tdApellido2);
	
	// El td del botón de borrado
	var tdButton = document.createElement("td");
	
	//Botón de borrado
	var btn = document.createElement("button");
	btn.innerHTML = "Borrar";
	btn.type = "button";
	btn.className = 'btn btn-danger';
	
	//Evento Botón de borrado, cuando en el index se hace "click" en el botón realizamos esta función de escucha.
	btn.addEventListener("click", function (e) {
		var posicion = e.target.parentNode.parentNode.rowIndex - 1;
		borrarFila(posicion);	
	});
	//Añadimos el Botón de borrado al td del Botón de borrado (siempre insertar los nodos inferiores en los superiores )
	tdButton.appendChild(btn);
	
	//Añadimos el td del Botón en el tr de la tabla
	tr.appendChild(tdButton);
	
    //Finalmente agregamos el <tr> al cuerpo de la tabla
    cuerpoTabla.appendChild(tr);
}
// función borrar fila
function borrarFila(posicion){
	var confirmar = confirm("¿Desea eliminar la posición " +posicion+ " de la tabla?");
	if (confirmar) {
		cuerpoTabla.deleteRow(posicion);
		listaPersonas.splice(posicion, 1);
		setTimeout(function(){ 
			alert("Fila "+posicion+" borrada"); 
		}, 200);
	} else {
		alert("No se eliminó el registro.");
	}
}
// función crear nueva persona, lanzando los prompt y almacenándolos
function agregarFila(){
	
  var nombre = prompt("Escribe el nombre para el nuevo registro:", "");
  var apellido1 = prompt("Escribe el apellido1 para el nuevo registro:", "");
  var apellido2 = prompt("Escribe el apellido2 para el nuevo registro:", "");
  var id = listaPersonas.length + 1;
  

  // Nuevo objeto en el cual mediante el push agregamos al array una nueva persona que recibe por parámetro "objetoPersona)"
  var objetoPersona = new Persona(id,nombre,apellido1,apellido2);
  listaPersonas.push(objetoPersona);
  nuevaFilaTabla(objetoPersona);
  
}
// Función eleminar última fila
function eliminarUltimaFila(){
	var tableLength = table.rows.length;
	var posicion = tableLength - 1;
    var confirmar = confirm("¿Desea eliminar la posición " +posicion+ " de la tabla?");
	// confirmar es un booleano en el cual por defecto esta en "true", por ello si es "true" entrará en el if para lanza el alert.
	if (confirmar) {
		if(tableLength <= 1){
			alert('No se puede eliminar el encabezado!');
		}else{
			table.deleteRow(posicion);
			listaPersonas.splice(posicion, 1);
			setTimeout(function(){ 
				alert("Fila "+ posicion +" borrada"); 
			}, 200);
		}
	}else{
		alert("No se eliminó el registro.");
	}
}
// Funcionabilidad adicional opcional mía, borrado de toda la tabla.
function limpiarTabla(){
    var confirmar = confirm("¿Desea eliminar todos los registros de la tabla?");
	if (confirmar) {
	  var rowCount = table.rows.length;
	  for(var i = rowCount - 1; i>0;i--){
		  table.deleteRow(i);
	  }
	  listaPersonas.splice(0, listaPersonas.length);
	  setTimeout(function(){ 
		  alert("Se ha limpiado la tabla con éxito.");
	  }, 200);
	}else{
	  alert("No se ha limpiado la tabla.");
	}
}