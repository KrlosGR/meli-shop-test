# Proyecto test para MELI Job
Proyecto para el desarrollo de clone de MELI for Job.

## Node Express Server

Proyecto en node para exponer API de consulta de articulos en MELI API.
Existen 2 endpoints rest para consultas de items:
- /api/items?q=`[query]` (Optiene mediante query listado de items).
- /api/items:id  (Optiene mediante id del producto una descripcion del mismo).

### Server GraphQl
Existe un endpoint unico para consulta de items por __ID__ expuesta en un servicio GraphQl solo de prueba.
EndPoint: `/api/`
Consulta o quiery de prueba:

`{
  item(id: "MLA871659803") {
    item {
      title
      picture
    }
  }
}`
### Instalacion dependencias
Ejecuta `npm install`, dentro del directorio `server-api-rest` instalando así todas las dependencias en el path _node\_modules_.

#### Start el Server

### `npm run dev`
Ejecuta `npm run dev`, dentro del directorio `server-api-rest` para empezar el server el puerto __4000__ en modo desarrollo __TypeScript__.
Consultas: [http://localhost:4000](http://localhost:4000) para consultar Server.

### `npm run build`
Ejecuta `npm run build`, dentro del directorio `server-api-rest` para transpilar desde TypeScript to JavaScript ES6.

### `npm run start:dev`
Ejecuta `npm run start:dev` dentro del directorio `server-api-rest` para empezar el server el puerto __4000__ en modo desarrollo con codigo transpilado __JavaScript__.
Consultas: [http://localhost:4000](http://localhost:4000) para consultar Server.

