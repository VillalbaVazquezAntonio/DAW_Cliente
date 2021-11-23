## Documentación <br>
### Antonio Javier Villalba Vázquez. <br>

### Funcionabilidad. <br>
 La práctica consiste en la creación de una página web que muestre un listado (en formato tabla) de personas con su nombre completo (nombre, apellidos e id usuario) y que tendrá la funcionalidad mediante 4 botones, de añadir una nueva persona a la lista de personas, eleminar último elemento de la fila, formatear tabla completa y un botón adicional en la tabla para el borrado de usuario por fila.
 **Personas.js:** almacena las propiedades y atributos de cada persona perteneciente a la lista. Esta clase está compuesta por los siguientes atributos y métodos:<br>
 *Atributos:*<br>
-  _nombre: atributo que almacenará el nombre de la persona.
- _apellidos: atributo que almacenará los apellidos de la persona.
*Métodos:*<br>
- get nombre(): método que devuelve el valor del atributo _nombre del objeto Persona actual.
- set nombre(nombre): método que asigna al atributo _nombre del objeto Persona el nombre introducido como argumento.
- get apellidos(): método que devuelve el valor del atributo _apellidos del objeto Persona actual.
- set apellidos(apellidos): método que asigna al atributo _apellidos del objeto Persona los apellidos introducidos como argumento.
- Función que se va a ejecutar al iniciar el index que devuelve un array de personas ya creadas.
  *crearPersonasInicial()*: función en la cual se crearán tres usuarios y dicha función la hemos creado de manera que cuando se ejecute el index se creen los tres usuarios y se ejecute la función sin necesidad de invocarla. Devolverá un array con los datos de la persona.
  <br><br>
   **script.js**<br>
   - *function nuevaFilaTabla(persona)*: con esta función vamos a crear con elementos html y javascript(usando elementos DOM) para generar nuevas filas en la tabla con los datos de persona.
   - Las variables en donde se guardan los botones, cada una con su configuración de añadir/borrar/limpiar/borradoIndividual.
   - *function borrarFila(posicion)*: función para borrar fila según la posición que recibe por parámetro. Además, he añadido (investigando en ello por mi cuenta) una variable que almacena una función nativa de js de *confirm* para que anuncie un mensaje al usuario ¿si está seguro del borrado? para asegurarnos dicho cambio en la tabla. Añadí también para que se borre justo la fila antes de que lance el **alert** con un tiempo de **200** milisegundos, asegurándonos así que se borra el registro justo antes de que lance la alerta con el mensaje y se haga efectivo.
   - *function agregarFila()*: con esta función, al clicar en el botón del **index** "añadir una nueva persona" nos va a lanzar 3 prompt que almacenarán en cada una de las variables lo que el usuario introduzca(nombre y apellidos, generando nosotros el id+1 a cada usuario creado).
   - *function eliminarUltimaFila()*: ésta función eleminará el último elemento del array, último registro creado. Adicionalmente he creado de manera individual un botón que elimina al lado de cada row el usuario que deseemos, sin necesidad de que sea el último registo. No es una función que devuelva un valor, nos va a indicar si se realizó correctamente el borrado, si no se puedo realizar (además que no podría borrar el encabezado de dicha tabla).
   - *function limpiarTabla()*: de manera adicional, por curiosidad, he añadido un botón nuevo para resetar la tabla, borrara todos los registros de la tabla, pero como tenemos una función que se ejecutará al iniciar el index, si atualizamos nuestro fichero HTML volverán a verse los tres registros iniciales que se pide en la práctica.
   <br>
   **index.html**: <br>
   Aquí tendremos lo visual de cara al usuario, la estructura de nuestra web, agregando los archivos js con sus funcionabilidades, los botones llamando a sus correspondientes funciones. Hemos usado para front-end Bootstrap, con sus respectiva configuración para decorar tanto la tabla como los botones. Una aplicación simple para que el usuario entienda todo solo leyendo la aplicacion web, pero con bastante funcionabilidad para que el usuario interactúe con ella.
   <br>

   # Cabe destacar que he usado todos los elementos que se recogen en el temario (desde elementos DOM para la creación de la tabla en el index, splice, addEventListener, entre otros) y algunos adicionales investigados por mi cuenta para darle mi toque personal y creativo a la práctica.


