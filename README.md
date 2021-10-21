## **Índice**   
0. [Práctica 0](#id0)
1. [Práctica 1](#id1)
## P0<a name="id0"></a>
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

## P1<a name="id1"></a>
## **1 .Ataque DoS y DDos. Información sobre cada uno de estos conceptos y un detallar un ejemplo destacado sobre cada uno de estos.**
Los ataques de negación suelen ser los más usados por los ciberdelincuentes en el mundo.
El objetivo principal de estos tipos de ataques es dejar inutilizable el sistema, una determinada aplicación o máquina, con la finalidad de bloquear dicho servicio al que va destinado el ataque.

La técnica DoS (Denial of Service) consiste en realizar desde la misma máquina o IP una cantidad masiva de peticiones al servidor, llegando a bloquearlo por no tener capacidad de respuesta y empieza a rechazar cualquier tipo de respuesta, esto es cuando se materializa la denegación del servicio. Para entenderlo poniendo un ejemplo más cotidiano, podría ser una tienda/establecimiento, entran masivamente gente llenando el local y haciendo preguntas engañosas al dependiente llegando a colapsarlo sin realizar ninguna compra, de tal manera que están bloqueando la entrada a clientes reales sin poder ser atendidos.
Un ejemplo real sería que se hizo en 2018 contra GitHub, Los atacantes enviaron paquetes a 1,35 Tbps saturando así los servidores de la plataforma de desarrollo colaborativo GitHub. Lo más curioso es que utilizaron la propia memoria Caché de los servidores de GitHub para amplificar la potencia de ataque.
Durante este ataque, el tráfico de la plataforma se multiplicó por 51.000. A pesar de eso, los sistemas de defensa funcionaron correctamente y el servicio sólo estuvo caído durante 5 minutos.

La técnica DDoS (Distributed Denial of Service) es más utilizada que la técnica DoS, su diferencia reside en que que son ataques de bots (ordenadores zombis que se conectan a la vez al servidor que pretenden tumbar) distribuidos, que se realizan masivamente desde diferentes máquinas. 
Un ejemplo que me llamó mucho la atención de este tipo de ataques fue el que se dio en 2016 “se cae” y paraliza el mundo por horas”. Este ataque se cebó contra la empresa americana proveedora de Internet DynDNS, se cataloga como un ataque brutal que dejó en jaque y que afectó a grandes organizaciones y medios de comunicación internacionales como Netflix, Twitter,  Amazon o The New York Times, dejando inhabilitados todos sus servicios durantes horas. La mejor forma, sin duda, de “acabar” con Internet es mediante un ataque DDoS (como el que sufrió DynDNS), y cómo algunas de las empresas que tienen a su cargo la infraestructura básica que sostiene a internet están sufriendo este tipo de ataques de forma continua, en lo que parece una estrategia de recogida de información para ver hasta qué punto pueden aguantar y con qué defensas cuentan.
![Ataque DDoS](https://rockcontent.com/es/wp-content/uploads/sites/3/2020/05/Qu%C3%A9-es-un-ataque-ddos.jpg)
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

## 5. Ataque MID Información detallada sobre este tipo de ataque y ejemplo que explique su funcionamiento. Mencionar también un ejemplo conocido de ataque MID.




