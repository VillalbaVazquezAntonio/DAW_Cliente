
class Persona {
  // Constructor.
  constructor(id, nombre, apellido1, apellido2) {
    this.id = id;
    this.nombre = nombre;
	  this.apellido1 = apellido1;
	  this.apellido2 = apellido2;
  }
  
  // Getters
  get_id() {
     return this.id;
  }
  get_nombre() {
     return this.nombre;
  }
  get_apellido1() {
     return this.apellido1;
  }
  get_apellido2() {
     return this.apellido2;
  }
  
  //Setters
  set_id(value) {
     return this.id = value;
  }
  set_nombre(value) { 
	return this.nombre = value;
  }
  set_apellido1(value) { 
	return this.apellido1 = value;
  }
  set_apellido2(value) { 
	return this.apellido2 = value;
  }

  // Función que se va a ejecutar al iniciar el index que devuelve un array de personas ya creadas.
  crearPersonasInicial(){
	var listaPersonas = [{
		id: 1,
		nombre: "Antonio Javier",
		apellido1: "Villalba",
		apellido2: "Vázquez"
	},
	{
		id: 2,
		nombre: "Jose",
		apellido1: "Barril",
		apellido2: "Olvera"
	},
	{
		id: 3,
		nombre: "Sergio",
		apellido1: "Julian",
		apellido2: "Barto"
	}
	];
	return listaPersonas;
  }
}
	

