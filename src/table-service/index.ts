import {chain, externalSchematic, Rule, SchematicContext, Tree} from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function tableService(_options: any): Rule {
    console.log(_options);
    let tableComponentName = `${_options.entityName.toLowerCase()}list`;
    return chain([
      externalSchematic("@angular/material","table",{"name": tableComponentName}),
      (tree: Tree, _context: SchematicContext) => {return tree}
    ]);
}
