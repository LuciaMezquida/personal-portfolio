![Lucia](https://i.ibb.co/BgXwFPC/luci-laptop.jpg)

# Portafolio de Lucía Mezquida

Hay 3 tipos de ficheros y carpetas:

- Los ficheros que están sueltos en la raíz del repositorio, como gulpfile.js, package.json... Son la configuración del proyecto y no necesitamos modificarlos.
- La carpeta `src/`: son los ficheros de nuestra página web, como HTML, CSS, JS...
- Las carpetas `public/` y `docs/`, que son generadas automáticamente cuando arrancamos el proyecto. Los ficheros que hay dentro de `src/`, son procesados y generados dentro de `public/` y `docs/`.

## Guía de inicio rápido

> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/)

### Pasos a seguir para clonar y arrancar este proyecto

1. **Clona el repositorio.**
1. **Abre una terminal** en la carpeta raíz de tu repositorio.
1. **Instala las dependencias** locales ejecutando en la terminal el comando:

```bash
npm install
```

### Pasos para arrancar el proyecto:

Una vez instaladas las dependencias, arrancamos el proyecto. **El proyecto hay que arrancarlo cada vez que nos ponemos a programar.** Para ello, hay que ejecutar el comando:

```bash
npm start
```

Este comando:

- **Abre una ventana de Chrome y muestra tu página web**, al igual que hace el plugin de VS Code Live Server (Go live).
- También **observa** todos los ficheros que hay dentro de la carpeta `src/`, para que cada vez que modifiques un fichero **refresca tu página en Chrome**.
- También **procesa los ficheros** HTML, SASS / CSS y JS y los **genera y guarda en la carpeta `public/`**. Por ejemplo:
   - Convierte los ficheros SASS en CSS.
   - Combina los diferentes ficheros de HTML y los agrupa en uno o varios ficheros HTML.

Después de ejecutar `npm start` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta `src/` y programar cómodamente.

### Pasos para publicar el proyecto en GitHub Pages:

Para generar tu página para producción ejecuta el comando:

```bash
npm run docs
```

Y a continuación:

1. Sube a tu repo la carpeta `docs/` que se te acaba de generar.
1. Entra en la pestaña `settings` de tu repo.
1. Y en el apartado de GitHub Pages activa la opción **master branch /docs folder**.

Además, los comandos:

```bash
npm run push-docs
```
o

```bash
npm run deploy
```

son un atajo que nos genera la versión de producción y hace push de la carpeta `docs/` del tirón.

## Flujo de archivos con Gulp

Estas tareas de Gulp producen el siguiente flujo de archivos:


## `gulpfile.js` y `config.json`

**Gulpfile.js** usa el fichero `config.json` de configuración con las rutas de los archivos a generar / observar.

De esta manera separarmos las acciones que están en `gulpfile.js` de la configuración de las acciones que están en `config.json`.

## Estructura de carpetas


```
src
 ├─ api // los ficheros de esta carpeta se copian en public/api/
 |  └─ data.json
 ├─ images
 |  └─ logo.jpg
 ├─ js // los ficheros de esta carpeta se concatenan en el fichero main.js y este se guarda en public/main.js
 |  └─ main.js
 ├─ scss
 |  ├─ core
 |  |  ├─_reset.scss
 |  |  └─_variables.scss
 |  ├─ layout
 |  |  ├─_contact.scss
 |  |  ├─_footer.scss
 |  |  ├─_header.scss
 |  |  └─_projects.scss
 |  └─ pages
 |  |  └─_page.scss
 |  └─ main.scss
 └─ html
    └─ partials
    |  ├─ article.html
    |  ├─ contact.html
    |  ├─ footer.html
    |  ├─ header.html
    |  ├─ link.html
    |  ├─ main.html
    |  └─ projects.html
    └─ index.html  
```

