`URL: `https://jose-daniel-g.github.io/AngularAdvengers/v2/


# CarritoCompras

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## 📋 Product Management Components

| Component | Functionality | Description |
|-----------|---------------|-------------|
| **ProductFormComponent** | `CREATE`, `EDIT` | Formulario para crear y editar productos |
| **ProductListComponent** | `INDEX` 'list' | Lista y visualización de productos |
| **ProductDetailComponent** | `SHOW` 'Detail' | Muestra los detalles de un producto |

 ng g c components/employees
 ng g s service/data 
| Comandos de Generación                |   Tipo    |
|---------------------------------------|-----------|
| ng g s services/userdata              | Service   |
| ng g c components/user --skip-tests   | Component |
| ng g m app-routing --flat --module=app| Module    |
| ng b   --configuration production     | Build     |

#### Frontend-Store ADD Adminlte
```
npm install admin-lte bootstrap @fortawesome/fontawesome-free
npm install jquery --save
npm install --save-dev @types/jquery
```
###### Deploy Angular en GitHub Pages

1. **Revisar el `angular.json`**  
   - Ir a:  
     ```json
     "projects": { "frontend-store": {
     ```
   - Ese es el **nombre de tu proyecto**.  
   - En la sección `build > options`, agrega (debajo de `outputPath`):  
     ```json
     "baseHref": "/frontend-store/"
     ```
---

2. **Instalar la herramienta de despliegue (si no está instalada)**  
   ```bash
   npm install -g @angular/cli
   ng add angular-cli-ghpages
   ng build --configuration production --base-href "/AngularAdvengers/v2/"
   ng deploy --base-href="/AngularAdvengers/v2/" --dir=v2
   ```
   ---
  "styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "node_modules/@fortawesome/fontawesome-free/css/all.min.css",
    "node_modules/admin-lte/dist/css/adminlte.min.css",
    "src/styles.css"
  ],
  "scripts": [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
    "node_modules/admin-lte/dist/js/adminlte.min.js"
  ]
  ---
   #### CONFIG ANGULAR.JSON
   - De lo contrario si ya esta en angular.json configurado
   ```bash
   ng build --configuration production 
   ng deploy

   ```
   *Configurar GitHub Pages en GitHub*

   **Ir a tu repo en GitHub → Settings > Pages.**

   - Seleccionar:

   - Branch: gh-pages

   - Folder: / (root)

   - Guardar. 
  ```
  npm i --save-dev @types/bootstrap
  npm install bootstrap jquery jquery-ui-dist slick-carousel line-awesome jquery-nice-select
  ```
### VERSIONS 

```
ng version
npx tsc -v
npm install @ngx-translate/core@latest @ngx-translate/http-loader@latest
ng add @angular/localize

```
