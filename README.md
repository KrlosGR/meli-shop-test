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

## Front React
Los siguuientes Script deben ser ejecutados dentro de su respectivo directorio __meli-shop-app__ luego de instalar sus dependencias.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
