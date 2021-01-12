# TECHNICAL FRONTEND TEST

## Herramientas utilizadas

### - Webpack
### - React
 ### - React-router
### - React-testing-library
### - Sass
### - Jest
### - Babel 
### - Cypress
### - Cypress-testing-library
### - Docker
### - Docker-compose


 ## ¿Cómo correr el proyecto?
En la raiz de este repositorio se deben ejecutar `make build` y luego `make start`, despues para ver el frontend debes entrar en tu navegador en ```http://localhost:8081``` y el middleware en ```http://localhost:8082```, en la siguiente sección se explica detenidamente los comandos disponibles.

También se puede `Correr sin docker`, cuya explicación esta en la sección de correr sin docker.

 ## Comandos

Escribiendo `make help` se pueden visualizar los comandos disponibles en el makefile.

#### `make build` 
Construye los contenedores, lleva a cabo las configuraciones e instala las dependencias de docker del frontend y el middleware utilizando cache para ejecutarse más rapido.

### `make build-nocache`
Construye los contenedores, lleva a cabo las configuraciones e instala las dependencias de docker del frontend y el middleware de docker del frontend y el middleware sin utilizar cache para que ejecute todas las configuraciones por defecto.

### `make start`
Levantar los contenedores con docker-compose y ejecutar el frontend ```http://localhost:8081``` y el middleware en ```http://localhost:8082``` en modo background, se necesita correr antes el build.

### `make start-no-background`
Levantar los contenedores con docker-compose y ejecutar el frontend ```http://localhost:8081``` y el middleware en ```http://localhost:8082``` sin modo background, se necesita correr antes el build.

### `make logs`
Ver los logs de los contenedores de docker                    

### `make stop`
Se detienen los los contenedores levantados con docker-compose                  

### `make unit-tests`
Se corren las pruebas unitarias del frontend, no es necesario estar corriendo el contenedor para ejecutarlas.

### `make e2e-tests-console`
Se corren las pruebas e2e en la consola, es necesario que este corriendo el contenedor de frontend, es decir, ejecutar el comando ```make start``` y luego si ejecutar este comando.


 ## Correr sin docker

Para correr el proyecto sin docker se deben entrar en la carpeta de frontend y middleware e instalar las dependencias con `npm install`.

Para facilidad de revisión del ejercicio se suben al repo los archivos con las variables de entorno, aunque por obvias razones esto no se debe hacer para un sitio que se despliegue a producción.

En el middleware se ejecuta `npm run dev` 

El frontend en modo development se ejecuta con `npm run dev` que utiliza el ```webpack-dev-server``` para ejecutar el proyecto.

Para correrlo en modo production se debe crear el build con `npm run build` y se debe hacer serve del compilado con alguna extensión como [serve](https://www.npmjs.com/package/serve), ejecutando la carpeta del compilado con `serve dist/ -p 8081`.


 ## Pruebas e2e en UI

 Por cuestiones de tiempo no se ejecuto la funcionalidad para correr las pruebas e2e con cypress desde el ui con el contenedor de docker, por lo cual es necesario correr el proyecto como se explica en `Correr sin docker`, entrar en la carpeta de frontend y ejecutar `npm run cy:open` el cual abrirá una instancia de electron de cypress que permitira ver y ejecutar las pruebas e2e desarrolladas en este proyecto.

En el siguiente [issue](https://github.com/diegocastillogz/ecommerce-test/issues/1) del repositorio estan adjuntos los videos de las pruebas.


 ## Webpack
En este proyecto el objetivo principal de Webpack es generar un build minificado del proyecto para optimizar su velocidad incluyendo no solo el código de React y Javascript sino que también las imagenes y estilos de Sass.

También se ejecutan otras configuraciones como los alias de las carpetas, configuración para el react-router, generación del build, y uso de ES6 con babel. 

 ## Middleware estructura

 La estructura del middleware esta basada en la clean architecture ya que es una estructura diseñada para software extendible, con alta cohesión y bajo acoplamiento y esta basada en un repo de [dev-mastery](https://github.com/dev-mastery/comments-api)

 ## Docker a producción
Utilizar Docker en este proyecto sirve para que los revisores ejecuten el proyecto de forma más rapida utilizando unos pocos comandos, para utilizarlo en producción debería mejorarse su instalación, build y ejecución.

 ## ¿Qué mejoraría?

 - Agregaría typescript para que el código se entienda mejor con el sistema tipado que le permite a otros desarrolladores conocer la estructura de los objetos o variables que se utilizan.

- Agregaría animaciones al frontend para mejorar la experiencia de usuario.

- Agregaría internacionalización para que los textos esten centralizados, sean más fáciles de cambiar y se puedan implementar otros idiomas.

 - Agregaría tests al middleware, no lo hice porque creo que no es el objetivo principal de la prueba y los tests están en el frontend.
 
 - Haría que las pruebas e2e funcionen en modo ui desde el contenedor de docker, pero esta configuración puede tomar mucho tiempo e igual las pruebas e2e corren en la consola.

 - No entedí con el endpoint dado como se hacía get de los autores ya que por cada producto debería hacer un request por cada autor a un endpoint lo cual haría que el middleware se demorara un tiempo considerable en cargar estos datos y según el wireframe no se muestran en ningún lugar.

 - Mejoraría las configuraciones de Webpack y para el middleware para despliegues en producción.
