

# FairlieAgileComponents

This project was generated using [Nx](https://nx.dev).

> ng generate @nrwl/angular:library --name=mat-incrementor --directory=ui --buildable --importPath=@fairlieagile/mat-incrementor --prefix=fa --publishable --strict --tags=ui --no-interactive

> ng generate @schematics/angular:component --name=mat-incrementor --export --project=ui-mat-incrementor --changeDetection=OnPush --flat --inlineStyle --inlineTemplate --prefix=fa --no-interactive

> ng generate @nrwl/angular:library --name=dev-banner --directory=ui --buildable --importPath=@fairlieagile/dev-banner --prefix=fa --publishable --strict --tags=ui --no-interactive

> ng generate @schematics/angular:component --name=dev-banner --export --project=ui-dev-banner --changeDetection=OnPush --flat --inlineStyle --inlineTemplate --prefix=fa --no-interactive

> ng generate @nrwl/angular:library --name=material --directory=ui --prefix=fa --strict --tags=ui --no-interactive

> ng generate @nrwl/angular:library --name=fa-tenant --directory=util --addModuleSpec --buildable --importPath=@fairlieagile/tenant --prefix=fa-tenant --publishable --simpleModuleName --tags=util --no-interactive 

> ng generate @nrwl/angular:library --name=fa-theme-picker --directory=util --addModuleSpec --buildable --importPath=@fairlieagile/theme-picker --prefix=fa-theme-picker --publishable --simpleModuleName --tags=util --no-interactive

> ng generate @nrwl/angular:library --name=layout --directory=ui --buildable --importPath=@fairlieagile/layout --prefix=fa --publishable --simpleModuleName --tags=ui --no-interactive
> ng generate @schematics/angular:component --name=container --project=ui-layout --style=scss --changeDetection=OnPush --displayBlock --export --flat --inlineStyle --inlineTemplate --prefix=fa --no-interactive

## scripts

demo app: tenant1 on http://localhost:4300 & http://tenant1.localhost:4300. tenant2 on http://tenant2.localhost:4300
> npm run start

demo app: tenant3 on http://localhost:4310  & http://tenant1.localhost:4310
> npm run start:tenant3

build & deploy layout components to NPM
> npm run deploy:layout


View a diagram of the dependencies of your projects.
> nx dep-graph

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
