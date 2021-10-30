
## **Índice**
[INICIO](#id0)
<a name="id0"></a>

0. [Práctica 0](#id1)
1. [Práctica 1](#id2)
2. [Práctica 2](#id3)
3. [Práctica 3](#id4)
4. [Práctica 1](#id5)


</br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br>
## P0<a name="id1"></a>
# DAW_Cliente
 👋 Hola, soy Antonio Javier Villalba Vázquez

 ### 🌱 Actualmente estoy aprendiendo
 - Html, CSS, MarkDown.
 - Java, JavaScript, Php.
 - Synfony, Angular.

## 💞️ Estoy buscando colaborar en
> Aplicaciones webs.
> Creacion de páginas webs.

## 👀 Me interesa
> Me interesa mucho todo lo relacionado con la ciberseguridad.

<br/><br/><br/><br/> 

## P1<a name="id2"></a>
## **1 .Ataque DoS y DDos. Información sobre cada uno de estos conceptos y un detallar un ejemplo destacado sobre cada uno de estos.**
Los ataques de negación suelen ser los más usados por los ciberdelincuentes en el mundo.
El objetivo principal de estos tipos de ataques es dejar inutilizable el sistema, una determinada aplicación o máquina, con la finalidad de bloquear dicho servicio al que va destinado el ataque.

La técnica DoS (Denial of Service) consiste en realizar desde la misma máquina o IP una cantidad masiva de peticiones al servidor, llegando a bloquearlo por no tener capacidad de respuesta y empieza a rechazar cualquier tipo de respuesta, esto es cuando se materializa la denegación del servicio. Para entenderlo poniendo un ejemplo más cotidiano, podría ser una tienda/establecimiento, entran masivamente gente llenando el local y haciendo preguntas engañosas al dependiente llegando a colapsarlo sin realizar ninguna compra, de tal manera que están bloqueando la entrada a clientes reales sin poder ser atendidos.
Un ejemplo real sería que se hizo en 2018 contra GitHub, Los atacantes enviaron paquetes a 1,35 Tbps saturando así los servidores de la plataforma de desarrollo colaborativo GitHub. Lo más curioso es que utilizaron la propia memoria Caché de los servidores de GitHub para amplificar la potencia de ataque.
Durante este ataque, el tráfico de la plataforma se multiplicó por 51.000. A pesar de eso, los sistemas de defensa funcionaron correctamente y el servicio sólo estuvo caído durante 5 minutos.

La técnica DDoS (Distributed Denial of Service) es más utilizada que la técnica DoS, su diferencia reside en que que son ataques de bots (ordenadores zombis que se conectan a la vez al servidor que pretenden tumbar) distribuidos, que se realizan masivamente desde diferentes máquinas. 
Un ejemplo que me llamó mucho la atención de este tipo de ataques fue el que se dio en 2016 “se cae” y paraliza el mundo por horas”. Este ataque se cebó contra la empresa americana proveedora de Internet DynDNS, se cataloga como un ataque brutal que dejó en jaque y que afectó a grandes organizaciones y medios de comunicación internacionales como Netflix, Twitter,  Amazon o The New York Times, dejando inhabilitados todos sus servicios durantes horas. La mejor forma, sin duda, de “acabar” con Internet es mediante un ataque DDoS (como el que sufrió DynDNS), y cómo algunas de las empresas que tienen a su cargo la infraestructura básica que sostiene a internet están sufriendo este tipo de ataques de forma continua, en lo que parece una estrategia de recogida de información para ver hasta qué punto pueden aguantar y con qué defensas cuentan.
![Ataque DDoS](https://rockcontent.com/es/wp-content/uploads/sites/3/2020/05/Qu%C3%A9-es-un-ataque-ddos.jpg)
</br>
 ## **2. URI.**
URI (identificador de recursos uniforme) esta idea fue concebida por Tim Berners-Lee y sirve para acceder a un recurso físico o abstracto de internet, es decir,I es el camino para identificar cualquiera de esos puntos de contenido, ya sea una página de texto, un vídeo o un clip de sonido, una imagen fija o animada, o un programa. 
La URI tiene como objetivo, y como su propio nombre en definición nos indica, identificar los recursos de una red de forma particular. Este objetivo se lleva a cabo gracias a las siguientes partes:

- Scheme (esquema): proporciona información sobre el protocolo utilizado.
- Authority (autoridad): identifica el dominio.
- Path (ruta): muestra la ruta exacta al recurso.
- Query (consulta): representa la acción de consulta.
- Fragment (fragmento): designa una parte del recurso principal.


Una de las diferencias entre URL y URI es que tanto la URL como el URN se encuentran dentro del URI.
URL es un conjunto de letras y símbolos que identifica un recurso, habitualmente una página concreta, dentro de una web. Con las URL podemos conseguir que cada página o cada entrada, disponga de una dirección propia y concreta para visualizarse en nuestro navegador.
URN son muy parecidos a las URL, ya que identifican recursos en la web, pero con alguna diferencia en este caso con respecto a  las URL, ya que éstas no indican exactamente dónde se encuentra ese objeto.
</br>
## **3. Protocolos de seguridad SSL y TLS y cuándo es usado cada uno.**
El protocolo SSL es un protocolo criptográfico (técnicas de cifrado o codificado destinadas a alterar las representaciones lingüísticas de ciertos mensajes con el fin de hacerlos ininteligibles a receptores no autorizados), proporcionando en los datos una integridad y privacidad entre dos puntos/comunicaciones, como podría ser el caso de app más usada en comunicación, WhatSapp, comunicación “supuestamente” entre dos puntos con total privacidad entre los mensajes de punto a punto, garantizando una transmisión de la información a través de la red sin ser modificada ni interceptada, dando garantías de que sólo los receptores y emisores serán los que tengan acceso a la comunicación de manera íntima.
Si nos basamos en el modelo OSI, el protocolo SSL se utiliza entre la capa de aplicación y la capa de transporte. Uno de sus usos, es el que se realiza junto al protocolo HTTP, dando lugar al HTTPS. De esta forma se consigue que la información transmitida entre un sitio web y un usuario (en ambos sentidos), sea segura, sobre todo cuando se trata de información sensible: datos confidenciales, contraseñas, información bancaria, imágenes personales, entre otros.
En el protocolo SSL utiliza tanto criptografía asimétrica(se utiliza para realizar el intercambio de las claves) como simétrica.

El protocolo TLS es la evolución del Certificado SSL, éste nos garantiza el intercambio de datos en un entorno seguro y privado entre el usuario y el servidor, mediante aplicaciones como HTTP, POP3, IMAP, SSH, SMTP o NNTP. Dado que está basado en el protocolo SSL  funciona de manera similar, en resumen; encripta la información compartida.

Vamos a explicar un ejemplo de cuando es usado SSL/TLS combinado con HTTP:

- Un usuario realiza una petición HTTP segura a través de un navegador a un sitio web (HTTPS://www.pccomponentes.com/)

- El servidor donde está alojado el sitio web, envía (si lo tiene) el certificado que incluye la clave pública del servidor. En caso de no tener certificado SSL, se producirá un error.

- El navegador comprueba que la entidad emisora del certificado o CA (clave de acceso) sea de confianza. En caso contrario, pedirá al usuario que acepte el certificado bajo su responsabilidad.
Llegados a este punto, el navegador generará una clave simétrica, que será cifrada mediante la clave pública del servidor para ser enviada de manera segura al mismo.

- De esta forma, la comunicación ya se ha establecido de manera segura, y será cifrada en ambos sentidos mediante la clave generada en el punto anterior.

</br>

## **4. Cifrado DES. Información detallada, porqué ya no es usado de forma asidua y ejemplos sobre este tipo de cifrado.**
Data Encryption Standar es un algoritmo protito de cifrado (un método para cifrar información) por bloques. Se creó con objeto de proporcionar al público en general un algoritmo de cifrado normalizado para redes de ordenadores.

- Las principales desventajas de DES son:
Se considera un secreto de estado de EE. UU., Por lo que está protegido por leyes específicas y no puede circular en hardware o software fuera de ese país sin el permiso específico del Departamento de Estado.
- Sus ventajas incluyen:
Es el sistema más utilizado en el mundo, el más utilizado, el más barato y el más probado.
Es muy rápido y fácil de implementar.
Desde sus inicios, no se ha roto con un sistema real.
Des actualmente no suele utilizarse debido a que es inseguro para muchas aplicaciones, esto es porque la longitud de clave de 56 bits es corto, las claves de DES se han roto en menos de 24 horas.
Por ejemplo, si tomamos el mensaje de texto plano "8787878787878787" y lo ciframos con la clave DES "0E329232EA6D0D73", terminamos con el texto cifrado "0000000000000000". Si el texto cifrado se descifra con la misma clave DES secreta "0E329232EA6D0D73", el resultado es el texto sin formato original "8787878787878787".
Este ejemplo es limpio y ordenado porque nuestro texto sin formato tenía exactamente 64 bits de longitud. Lo mismo sería si el texto sin formato fuera un múltiplo de 64 bits, pero la mayoría de los mensajes no entran en esta categoría. No serán un múltiplo exacto de 64 bits (es decir, un múltiplo exacto de 16 números hexadecimales).
</br>
## 5. Ataque MID Información detallada sobre este tipo de ataque y ejemplo que explique su funcionamiento. Mencionar también un ejemplo conocido de ataque MID.

Este ataque es un método mediante el cual los hackers informáticos interceptan el tráfico de datos de dos partes involucradas en una conexión, haciéndose pasar por una de ellas, haciéndoles creer que se están comunicando entre sí cuando en realidad es el intermediario el que recibe la conexión. 
Existen diferentes tipos de ataques MID:
- Ataques basados en servidores DHCP.
- ARP cache poisoning
- Ataques basados en servidores DNS.
- Simulación de un punto de acceso inalámbrico.
- Ataque Man in the Browser.

*Un ejemplo que explica su funcionamiento es el siguiente:*
**Suplantar la IP:** el primer paso es falsificar los datos del sitio web (por ejemplo) para que el equipo de las víctimas crea que se está comunicando con el sitio web original.
- **Suplantar ARP:** consta de "envenenar" la caché ARP para que la dirección MAC del atacante/hacker pueda vincularse a la IP de la víctima.
- **Suplantar DNS:** Los servidores recuerdan estas traducciones  y las guardan en un caché. El atacante/hacker accede a la caché y cambia las traducciones para redirigir al usuario a un sitio web falso.
* El siguiente paso es descifrar la información que ha interceptado*
- **Suplantar HTTPS:** el atacante instala un certificado de seguridad falso para que el navegador crea que es de confianza y le proporcione la clave para descifrar los datos que se envían.
- **Vulnerar el navegador en SSL:** los hackers se aprovechan de la vulnerabilidad del cifrado por bloques en el protocolo SSL.
- **Secuestrar SSL:** se produce cuando el navegador se conecta primero a un protocolo no seguro (HTTP) y luego redirige al usuario a la versión segura (HTTPS): El hacker actúa justo antes de que se produzca ese cambio, desviando la ruta del tráfico hacia su equipo.
- **SSL stripping:** el atacante usa alguno de los métodos que hemos citado anteriormente para establecerse como intermediario de la comunicación. Una vez hecho esto, cambiará la versión segura de la web (HTTPS) por una no segura (HTTP), de manera que los datos le lleguen descifrados.

(No encontré ningún ejemplo al respecto pero puedo decirte uno que comentamos con un profesor en clase que se podría realizar con este tipo de ataque)
Si nos conectamos a una red inhámbrica wifi, suplantando su identidad para que los clientes de dicho establecimiento crean que es la original del sitio, y a partir de ahí podremos acceder a todos sus datos.
</br>
## 5. Ampliar la información proporcionada por el temario sobre las herramientas FTP y SSH.
**FTP** significa Protocolo de transferencia de archivos, que se traduce aproximadamente como Protocolo de transferencia de archivos. Como sugiere su nombre, se trata de un protocolo que permite transferir archivos directamente de un dispositivo a otro. Es un protocolo que se ha eliminado ahora, pero que ha estado en vigor durante más de 50 años.
Este protocolo funciona entre pc´s conectados a una red TCP(Protocolo de control de transmisión). Este protocolo TCP admite muchas tecnologías, incluida Internet. 
Un dato importante es que el protocolo FTP era muy inseguro, por lo que la información no viajaba codificada. En 2001 esto se solucionó con el protocolo FTPS, que le añade una capa SSH para hacerlo más seguro y privado.

![FTP](https://i.blogs.es/79ad1f/conectarte/1366_2000.jpg)

</br>

**SSH**
SSH o Secure Shell es un protocolo de comunicación de red que permite que dos computadoras se comuniquen y poder compartir datos. Una ventaja de ssh es que la comunicación entre dos ordenadores encriptados, lo que significa que se puede usar en redes privada/seguras.
El protocolo SSH en redes corporativas, por ejemplo:

- Proporcionar acceso seguro para usuarios y procesos automatizados
- Transferencias de archivos interactivas y automatizadas
- Emitir comandos remotos
- Administrar la infraestructura de red y otros componentes del sistema de misión crítica.


![SSH](https://www.ssh.com/hubfs/Imported_Blog_Media/How_does_the_SSH_protocol_work_-2.png)
[INICIO](#id0)


<br/><br/>
<br/><br/>
## P2<a name="id3"></a>
##  1 HTML5. Historia, curiosidades, características principales. 
**HTML** es un lenguaje de marcado combina texto con instrucciones codificadas sobre cómo darle formato a ese texto, usando el término de *"etiquetas"*.
HTML5 es un lenguaje de marcado que fue fundado en 2004 por el Grupo de Trabajo de Tecnología de Aplicaciones de Hipertexto Web.
Como dato de curiosidad, los elementos semánticos comunes de HTML5:
- article
- aside
- details
- figcaption
- figure
- footer
- header
- main
- mark
- nav
- section
- summary
- time
 
 Algunas de las características de **HTML5** son:
- **Introducción de audio y video** : Las etiquetas de audio y video son las dos principales adiciones a HTML5. Permite a los desarrolladores incrustar un video o audio en su sitio web.
- **Gráficos vectoriales**:Se puede usar para dibujar gráficos con varias formas y colores a través de secuencias de comandos, generalmente JS
- Encabezado y pie de página: con estas nuevas etiquetas, ya no es necesario identificar los dos elementos con una etiqueta *<div>*. El pie de página se coloca al final de la página web, mientras que el encabezado se coloca al principio de la página web. Al usar los elementos HTML5 *<header>* y *<footer>* correspondientemente, el navegador sabrá qué cargar primero y qué cargar después.
- **Etiqueta de navegación:**  La etiqueta *<nav>* define un conjunto de enlaces de navegación.
 
![HTML](https://acumbamail.com/blog/wp-content/uploads/2014/10/maquetacion-email-html.png)
 
</br>
 
 ##  2. CSS3. Historia, curiosidades, características principales. 
 CSS es una de las tres tecnologías fundamentales que se utilizan en la web (las otras dos son HTML y JavaScript). CSS son las siglas de Cascading Style Sheets: las pistas están realmente en las palabras 'cascada' y 'estilo' con cascada que describe la forma en que un estilo puede pasar de uno a otro.
 
Uno de los muchos beneficios de **CSS** es que se puede utilizar más de un estilo en un documento HTML.
El primer sitio en el que Lie probó CSS fue el navegador web *Arena*. Desde su primera creación, Lie pasó a crear conjuntamente las versiones * CSS1, CSS2 y RFC 2318 * con Tim Berners-Lee y Robert Cailliau. En su primera década de existencia *(1994 - 2004)* CSS, en todas sus especificaciones, se convirtió en un estándar web establecido que influyó en gran medida en el aspecto y la accesibilidad de la World Wide Web tal como la conocemos hoy. CSS3 se publicó en 1999.
Algunas de sus características son: esquinas redondeadas, sombras, degradados, transiciones o animaciones , así como nuevos diseños como múltiples columnas, cajas flexibles o diseños de cuadrícula.

 ![CSS](https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/pseudoclases-css-first-child-last-child-nth-child-t1.png)
 </br>
 ## 3. JavaScript. Historia, curiosidades, características principales. 
 
**JavaScript** es un lenguaje de secuencias de comandos, es uno de los tres lenguajes principales que se utilizan para desarrollar páginas web, en resumen, JavaScript nos permite agregar funcionalidad y comportamientos a su sitio web, lo que permite que los visitantes de su sitio web interactúen con el contenido de muchas formas. JavaScript es principalmente un lenguaje del lado del cliente *(Front-end)*, lo que significa que se ejecuta en su ordenador dentro de su navegador. Sin embargo, más recientemente, la introducción de Node.js ha permitido que JavaScript también ejecute código en los servidores *(Back-end)*.
En septiembre de 1995, un programador de Netscape llamado Brandan Eich desarrolló un nuevo lenguaje de programación en solo 10 días...asombroso. Originalmente se llamaba Mocha, pero rápidamente se conoció como LiveScript y, más tarde, JavaScript.
Algunas características de JS pueden ser:
- **Validación de la entrada del usuario**
JavaScript es muy útil al usar formularios por ejemplo, ya que tiene la capacidad de validar la entrada del usuario en busca de errores y también ahorra tiempo.
- **Cálculos sencillos del lado del cliente**
Ya que JavaScript es una tecnología del lado del cliente, puede realizar cálculos básicos en el navegador.  Mayor control
JavaScript proporciona un mayor control al navegador en lugar de depender completamente de los servidores web. 
- **Independiente de la plataforma**
JavaScript puede ejecutarse en Windows, Macintosh y otros sistemas compatibles con Netscape. 
-  **Manejo de fechas y horas**
A diferencia de otros lenguajes de programación, JavaScript tiene funciones integradas para determinar la fecha y la hora. 
 - **Generación de contenido HTML**
JavaScript tiene características muy útiles para generar contenido HTML de forma dinámica para la web. Nos permite agregar texto, enlaces, imágenes, tablas, etc. después de que ocurra un evento (por ejemplo, clic del mouse).

 ![JS](https://st2.myideasoft.com/idea/ct/82/myassets/blogs/javascript-kutuphane-platform.jpg)
 </br>
  ## 4. ¿Qué son WebKit y Blink? WebKit. Historia, curiosidades, características principales e información básica sobre este. Ejemplos de navegadores web que usen WebKit, Blink y otro similar que encuentren. 
 
 WebKit y Blink ambos son motores de navegación.
En el caso de WebKit es un motor de navegador desarrollado por Apple y utilizado principalmente en su navegador web Safari, así como en todos los navegadores web iOS. WebKit también es utilizado por el navegador BlackBerry, las consolas PlayStation a partir de la PS3, los sistemas operativos móviles Tizen y un navegador incluido con el lector de libros electrónicos Amazon Kindle. La interfaz de programación de aplicaciones (API) C ++ de WebKit proporciona un conjunto de clases para mostrar contenido web en Windows e implementa funciones del navegador como seguir enlaces cuando el usuario hace clic, administrar una lista hacia atrás y administrar un historial de páginas visitadas recientemente.
**Blink** es un motor de navegador desarrollado como parte del proyecto Chromium (desde 2013) con contribuciones de *Google, Facebook, Microsoft, Opera Software, Adobe, Intel, IBM, Samsung y otros*. Se anunció por primera vez en abril de 2013.
 
 ![WebKit&Blink](https://schepp.dev/img/webkit.png)
 
 [INICIO](#id0)
   
<br/><br/><br/><br/>
 
 # P3<a name="id4"></a> 
 
 
 ## 1.TypeScript. Historia, curiosidades, características principales. Similitudes con JavaScript.
TypeScript es un lenguaje de programación desarrollado por Microsoft. El lenguaje viene con una ampliación de programación orientada a objetos basada en clases, así como escritura estática opcional en JavaScript. Es posible crear aplicaciones JavaScript para el lado del cliente o del servidor utilizando TypeScript.
Además, el lenguaje admite archivos de definición que contienen información de tipo de las bibliotecas JavaScript actuales. Esta característica es bastante similar a los archivos de encabezado en los lenguajes C o C ++ que describen la estructura de los archivos de objetos actuales. Como resultado, otros programas pueden hacer uso de estos valores y actuar como entidades que se escribieron estáticamente usando TypeScript.
TypeScript es un lenguaje relativamente nuevo. Fue lanzado para uso público en octubre de 2012. Fue el resultado de dos años de desarrollo en Microsoft, con Anders Hejlsberg, el arquitecto principal de c #, así como el creador de Delphi y Turbo Pascal trabajando también en el proyecto.
 ** JavaScript ** :  
Se puede utilizar directamente en navegadores.
Las bibliotecas JS funcionan de forma predeterminada
 ** TypeScript** :
Convertido a código JavaScript para que sea comprensible para los navegadores.
Dado que es un superconjunto, todas las bibliotecas de JavaScript y otros códigos de JavaScript funcionan sin cambios.
  ![TypeScript](https://miro.medium.com/max/1400/1*5yBOYWrozMMR4eOIASxmeg.png)
 

## 2 .¿Qué son React, Angular y Vue.js?.
Los tres son framework. **Angular** es un marco de Javascript creado con Typescript, mientras que Reactjs es una biblioteca de Javascript y creado con JSX. Angular se usa principalmente para crear aplicaciones complejas de nivel empresarial como aplicaciones de una sola página y aplicaciones web progresivas, mientras que React se usa para crear componentes de interfaz de usuario en cualquier aplicación con datos variables. La curva de aprendizaje de Angular es más pronunciada debido a que tiene demasiadas funcionalidades integradas, mientras que el tamaño del paquete de React es más pequeño.
 
## 3 .React. Historia, curiosidades, características principales.
React fue creado por Jordan Walke, un ingeniero de software de Facebook, quien lanzó un primer prototipo de React llamado "FaxJS". Fue influenciado por XHP,  **una biblioteca de componentes HTML para PHP) *. Se implementó por primera vez en el News Feed de Facebook en 2011 y luego en Instagram en 2012. Fue de código abierto en JSConf US en mayo de 2013.
Algunas características de React son:
**JSX: extensión de sintaxis de JavaScript **. Se usa con React para describir cómo debería verse la interfaz de usuario.
**DOM virtual:** React mantiene una representación ligera del DOM "real" en la memoria, y eso se conoce como DOM "virtual".
**Rendimiento**. React usa VDOM, lo que hace que las aplicaciones web se ejecuten mucho más rápido que las desarrolladas con marcos frontales alternativos
** Extensiones **. Proporciona renderizado del lado del servidor, lo que implica renderizar una aplicación web normalmente del lado del cliente en el servidor, y luego envía una página completamente renderizada al cliente.
 </br>
 # HAZ CLIC EN LA IMAGEN PARA VER EL VÍDEO 
 
[![HAZ CLIC EN LA IMAGEN](https://www.loopeando.com/wp-content/uploads/2019/05/react-logo-990x557.png)](https://www.youtube.com/watch?v=EMk6nom1aS4&ab_channel=CarlosAzaustre-AprendeJavaScript)

 
## 4 .Angular. Historia, curiosidades, características principales.
El framework **Angular** nació en *2010*, antes de su lanzamiento, un empleado de Google llamado Miško Hevery estaba desarrollando un proyecto paralelo. Este proyecto paralelo tenía como objetivo facilitar la creación de aplicaciones web para un par de proyectos internos en los que estaba trabajando. Este proyecto paralelo más tarde se conoció como **AngularJS** (Angular debido al <> en HTML).
Años más tarde, entre la fecha 2014-2015, el panorama del desarrollo web comenzó a cambiar y AngularJS chocó contra una pared.
Algunas características generales de Angular son:
**Multiplataforma **: con Angular ,se pueden desarrollar aplicaciones web progresivas (PWA). 
** Alta velocidad y rendimiento óptimo **: Angular redefine la máquina virtual JavaScript moderna convirtiendo las plantillas en código.
** Arquitectura Modelo Vista y Controlador ** : MVC son las siglas de Model-View-Controller. Los datos de la aplicación son gestionados por el modelo y Vista que gestiona la visualización de datos. Mientras que el controlador juega como un conector entre la vista y las capas del modelo.
** Enlace de datos bidireccional eficiente **: la característica de Angular más efectiva es su sistema de enlace de datos bidireccional. La capa vista representa exactamente la capa modelo y se mantienen en perfecta sincronización. Si realiza algún cambio en el modelo, los usuarios pueden ver en el modelo de vista automáticamente.

 # HAZ CLIC EN LA IMAGEN PARA VER EL VÍDEO
[![HAZ CLIC EN LA IMAGEN](https://i.ytimg.com/vi/mog8EKQX5HI/maxresdefault.jpg)](https://www.youtube.com/watch?v=kqYuyACFVkE&ab_channel=VictorRoblesWEB)

## 5 .Vue.js. Historia, curiosidades, características principales.
**VueJS** es un marco de JavaScript progresivo de código abierto que se utiliza para desarrollar interfaces web interactivas. Es uno de los marcos famosos que se utilizan para simplificar el desarrollo web. **VueJS** se centra en la capa de vista. Se puede integrar fácilmente en grandes proyectos para el desarrollo de* front-end *sin ningún problema.
La instalación de **VueJS** es muy fácil de comenzar. Cualquier desarrollador puede comprender y crear interfaces web interactivas fácilmente en cuestión de tiempo. **VueJS** es creado por Evan You, un ex empleado de Google. La primera versión de **VueJS** se lanzó en *febrero de 2014*. Recientemente ha alcanzado las *64,828 estrellas en GitHub*, lo que la hace muy popular.
Algunas de sus características son: 
**DOM virtual**
VueJS hace uso de DOM virtual, que también es utilizado por otros frameworks como React, Ember, etc. Los cambios no se realizan en el DOM, sino que se crea una réplica del DOM que está presente en forma de estructuras de datos JavaScript. . Siempre que se deben realizar cambios, se realizan en las estructuras de datos de JavaScript y esta última se compara con la estructura de datos original. Los cambios finales luego se actualizan al DOM real, que el usuario verá cambiar. Esto es bueno en términos de optimización, es menos costoso y los cambios se pueden realizar a un ritmo más rápido.
 
**El enlace de datos**
La función de enlace de datos ayuda a manipular o asignar valores a los atributos HTML, cambiar el estilo, asignar clases con la ayuda de la directiva de enlace llamada v-bind disponible con VueJS.
 
**Componentes**
Los componentes son una de las características importantes de VueJS que ayuda a crear elementos personalizados, que se pueden reutilizar en HTML.
 
**Manejo de eventos**
v-on es el atributo agregado a los elementos DOM para escuchar los eventos en VueJS.
 
**Animación / Transición**
VueJS proporciona varias formas de aplicar la transición a los elementos HTML cuando se agregan, actualizan o eliminan del DOM. VueJS tiene un componente de transición incorporado que debe envolverse alrededor del elemento para lograr un efecto de transición. Podemos agregar fácilmente bibliotecas de animación de terceros y también agregar más interactividad a la interfaz.
 
**Propiedades calculadas**
Esta es una de las características importantes de VueJS. Ayuda a escuchar los cambios realizados en los elementos de la interfaz de usuario y realiza los cálculos necesarios. No hay necesidad de codificación adicional para esto.
 
**Plantillas**
VueJS proporciona plantillas basadas en HTML que unen el DOM con los datos de la instancia de Vue. Vue compila las plantillas en funciones virtuales DOM Render. Podemos hacer uso de la plantilla de las funciones de render y para ello tenemos que reemplazar la plantilla con la función de render.
 
**Directivas**
VueJS tiene directivas integradas como v-if, v-else, v-show, v-on, v-bind y v-model, que se utilizan para realizar varias acciones en la interfaz.
 
**Vigilantes**
Los observadores se aplican a los datos que cambian. Por ejemplo, elementos de entrada de formulario. Aquí, no tenemos que agregar ningún evento adicional. Watcher se encarga de manejar cualquier cambio de datos haciendo que el código sea simple y rápido.
 
**Enrutamiento**
La navegación entre páginas se realiza con la ayuda de vue-router.


[INICIO](#id0)
 
