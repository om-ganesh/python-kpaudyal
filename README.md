# WebApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.9.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Setup Bootstrap for the project

Install bootstrap 4, run following command

- `npm install bootstrap`
  [You will notice the bootstrap will be added to the package.json dependencies]

Import the CSS

- Add link to bootstrap css in angular.json / styles section `node_modules/bootstrap/dist/css/bootstrap.min.css`
  [There is also alternative way to do this by importing bootstrap.min.css directly in the style.css file]

Install angular wrapper library for Bootstrap  
If we need to use bootstrap javascript components, it will require JQuery to be installed. So, the better option is to use the angular wrapper "ngx-bootstrap"

- `npm install ngx-bootstrap@10 --save`  
  <em>Note</em>: Use the compatibile version for your angular

Add the required bootstrap modules in app.module.ts  
ngx-bootstrap contains variety of modules that can be used in your angular project  
For example, we want to use Dropdown, and Tooltip components.

## Angular Project setup guidelines

- Follow recommended structural guidelines
  - https://angular.io/guide/styleguide
- Follow eslints and prettier
  - https://dev.to/this-is-angular/configure-prettier-and-eslint-with-angular-526c
- Add husky for pre-commit checks
  - https://dev.to/mariokandut/how-to-add-husky-to-angular-420g
- Get data from Server
  - https://angular.io/tutorial/tour-of-heroes/toh-pt6

## Important Links

When we are working with the fe frameworks and importing various node modules, we should match the compatibility

Compatibility between bootstrap and angular

- https://valor-software.com/ngx-bootstrap/#/documentation#getting-started
- https://ng-bootstrap.github.io/#/getting-started (Check for the angular, bootstrap dependency chart)

Reference Articles

- https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/ (Good Article)
- https://www.freecodecamp.org/news/how-to-add-bootstrap-css-framework-to-an-angular-application/
