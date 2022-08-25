# APIRESTDESAFIO

Desafio con una api rest

# APIRESTDESAFIO -> API Rest

## Descripción

Api REST con dos endpoints para calcular expresiones matematicas

- **URL**= https://apirestdesafioslingr.herokuapp.com/

## Guía de inicio

Para obtener una copia del proyecto se deberá hacer click en el botón "Clonar" y copiar la dirección ssh o https dependiendo si se tiene una clave ssh vinculada con el proyecto o no. Ejemplo de una dirección https es: "https://github.com/Polisthefano/APIRESTDESAFIO.git". Luego, se deberá clonar el proyecto con el comando "git clone + la dirección https copiada", luego hay que abrir una terminal en la dirección del proyecto, ejecutar "git checkout + el nombre de la rama a la que se quiere ir".

Instalar dependencias:
npm i

Correr el servidor accesible desde localhost
node app.js

## Requisitos

Para poder ver la librería se necesitará tener instalado Git para poder clonarse el proyecto.

### Configuración

Es necesario configurar las siguientes variables de entorno

\*PORT=8080

## ENDPOINTS

### GET Calcular expresión

Calculamos la expresion enviada por query params, el query debe ir codificado con encodeURIComponent

#### URL

```
${URL}/api/math/expresiones?expresion=
```

#### QUERY PARAMS

?expresion=1%2B2

### POST Calcular expresion

Calculamos la expresion enviada en el body

#### URL

```
${URL}/api/math/expresiones
```

#### BODY

{"expresion":"1+2"}

## Herramientas

### Desarrollo

- [NODEJS](https://nodejs.org/es/) v16.15.1 o superior
- [ANGULAR](https://angular.io/) v14.1.3 o superior
- [Postman](https://www.postman.com/)

## Versionado

Versionado Semántico 1.0.0

Dado un número de versión MAYOR.MENOR.PARCHE, se incrementa:
la versión MAYOR cuando realizas un cambio incompatible en el API,
la versión MENOR cuando añades funcionalidad que compatible con versiones anteriores, y
la versión PARCHE cuando reparas errores compatibles con versiones anteriores.
Para tags de git utilizar **v**MAYOR.MENOR.PARCHE (ejemplo v1.1.0), para versionado de docker imagen utilizar MAYOR.MENOR.PARCHE (ejemplo 1.1.0).

## Autores

Sthefano Politino
