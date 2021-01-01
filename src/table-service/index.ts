import {
  apply, applyTemplates,
  chain,
  externalSchematic,
  mergeWith, move,
  Rule, Tree,
  url
} from '@angular-devkit/schematics';
import {strings} from "@angular-devkit/core";
import {join, normalize} from "path";
import {getWorkspace} from '@schematics/angular/utility/config';


export function setupOptions(host: Tree, options: any): Tree {
  const workspace = getWorkspace(host);
  if (!options.project) {
    options.project = Object.keys(workspace.projects)[0];
  }
  const project = workspace.projects[options.project];

  options.path = join(normalize(project.root), 'src');
  return host;
}

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function tableService(_options: any): Rule {
  return (tree: Tree) => {
    setupOptions(tree, _options);
    console.log(_options);
    let name = _options.entityName.toLowerCase();
    let tableComponentName = `${_options.entityName.toLowerCase()}list`;

    const templateSource = apply(url('./files'), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        camelize: strings.camelize,
        name: name,
        backendUrl: _options.backendUrl
      }),
      move(normalize(join(_options.path,_options.servicePath) as string))
    ]);
    return chain([
      //collectionname and schematic name based on ng generate command at https://material.angular.io/guide/schematics#table-schematic (was also confirmed on github: stored in folder called table)
      //options array: based on schema.json cf https://github.com/amcdnl/material-schematics/blob/master/src/table/schema.json
      externalSchematic("@angular/material", "table", {"name": tableComponentName}),
      //generate service and merge
      mergeWith(templateSource)
    ]);
  }
}
