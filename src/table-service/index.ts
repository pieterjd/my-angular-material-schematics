import {chain, externalSchematic, Rule, SchematicContext, Tree} from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function tableService(_options: any): Rule {
    console.log(_options);
    let tableComponentName = `${_options.entityName.toLowerCase()}list`;
    return chain([
      //collectionname and schematic name based on ng generate command at https://material.angular.io/guide/schematics#table-schematic (was also confirmed on github: stored in folder called table)
      //options array: based on schema.json cf https://github.com/amcdnl/material-schematics/blob/master/src/table/schema.json
      externalSchematic("@angular/material","table",{"name": tableComponentName}),
      (tree: Tree, _context: SchematicContext) => {return tree}
    ]);
}
