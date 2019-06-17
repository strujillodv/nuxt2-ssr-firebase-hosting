# Template for use Nuxt.js with Firebase Hosting

> Nuxt.js template

Esta plantilla se creó inspirada en el blog de [William Chong](https://medium.com/@williamchong007_49374), el cual puede ser consultado en [Quick Nuxt.js SSR prototyping with Firebase Cloud Functions](https://medium.com/likecoin/quick-nuxt-js-ssr-prototyping-with-firebase-cloud-functions-5277553610a8)

## Antes de empezar

Debe estar instalado vue-cli-init y firebase-tools

```bash
npm i -g @vue/cli-init

npm i -g firebase-tools
```
Luego desde la Consola de Firebase, creamos un nuevo proyecto; una vez creado vamos a la opción de agregar nueva app.

Después de crear la nueva app ingresamos a la configuración de la app y nos desplazamos a la pestaña Service accounts, al final damos click en Generate new private key.

Guardamos la key que nos proporciona ya que la necesitaremos más adelante, para mayor información se puede consultar en [Firebase Admin en tu servidor](https://firebase.google.com/docs/admin/setup).

## Instalación del Proyecto

Para crear el proyecto ejecutamos lo siguiente en la línea de comandos.

```bash
vue init strujillodv/nuxt2-ssr-firebase-hosting <project-name>
```

luego ingresamos al directorio del proyecto y ejecutamos npm i

```bash
cd <project-name>

npm i
```
En primer lugar sale la configuración de firebase init, procedemos a responder las preguntas que aparecen por consola.

Cuando salga la opción para configurar las características de firebase que necesitamos, solo agregamos Functions y Hosting, presionando tab y seleccionado con espacio, una vez esten marcadas solo estas dos características, damos enter.

```bash
? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to config
```

Luego aparece la opcion para seleccionar el proyecto firebase que creamos anteriormente.

```bash
Select a default Firebase project for this directory: 
```
Importante, luego de estas preguntas nos pregunta el lenguaje para usar Cloud Functions, seleccionamos Typescript.

```bash
? What language would you like to use to write Cloud Functions? 
Javascript
Typescript
```

Nos dirá que ya existen varios archivos de configuración en la carpeta de functions, que si queremos sobreescribirlos, a lo cual debemos decir que no.

```bash
```
Pregunta que si queremos configurar la aplicación para modo SPA, le decimos que no.

```bash
 ?Configure as a single-page app (rewrite all urls to /index.html)? No
```
Luego pregunta si queremos instalar las dependencias con npm ahora, le decimos que sí y esperamos que termine la instalación de todo lo necesrio para firebase, finaliza con la creación de un nuevo proyecto de Nuxt con ayuda de create-nuxt-app de igual forma aparecerán las preguntas relacionadas con el proyecto y al final instala lo esencial para trabajar con NUXT.

## Configuración

Vamos al archivo ubicado en functions/lib/serviceAccountKey.json.example colocamos en este archivo la llave privada generada por firebase al principio y le quitamos la extensión .example

Eliminamos el archivo firebase.json y renombramos el archivo firebase.json.example quitando el .example.

Ingresamos al archivo de configuración de NUXT src/nuxt.config.js y configuramos  el build quedando asi:

```bash
build: {
    extractCSS: true 
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {} 
  }
```

En este archivo solo agregamos el módulo para extraer los archivos CSS  por separado y comentamos la línea para extender webpack ya que por el momento no se va a utilizar.

## Desarrollo

Ahora si podemos empezar a modificar nuestro proyecto NUXT

```bash
cd src

npm run dev
```
Abrimos el link [http://localhost:3000/](http://localhost:3000/)

> Importante, las librerias y modulos que se instalen en el proyecto NUXT como dependencias, por ejemplo el módulo @nuxtjs/pwa, debe ser agregado también al archivo functions/packaje.json, de lo contrario pueden haber errores

```bash
src/package.json
"dependencies": {
   "@nuxtjs/pwa": "^2.6.0",
   "nuxt": "^2.0.0"
 },

functions/package.json
"dependencies": {
   "nuxt-start": "^2.8.1",
   "@nuxtjs/pwa": "^2.6.0",
   "firebase-admin": "^8.0.0",
   "firebase-functions": "^3.0.0"
 },
```
## Desplegar el proyecto

> Si se está usando WINDOWS, es recomendable usar GIT BASH, o configurar Visual Studio Code para usar GIT BASH, y manejar todo desde la consolas del editor, ya que si se ejecuta este comando desde el CMD pueden haber errores.

Ejecutamos desde el directorio principal

```bash
firebase deploy
```

Esperamos y con suerte ya podemos ver el proyecto en firebase hosting 


[https://nombredelproyecto.firebaseapp.com/](https://nombredelproyecto.firebaseapp.com/)

## Licenses

- [NuxtJS license](https://github.com/nuxt/nuxt.js/blob/master/LICENSE.md)
- [VueJS license](https://github.com/vuejs/vue/blob/master/LICENSE)
