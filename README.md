# My Angular Material Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.
## What does it do?
I almost always work with angular material for nice components. I found myself doing the same thing over and over again:
1. generate a table component, using the material table schematic
1. create a service connecting to a backend url to retrieve objects, using the typical CRUD methods (getAll, save, delete, ...)
1. create an interface matchine the json from the backend

Then I suddenly realized: 
> If the material table schematic exists, shouldn't it be possible to create my own schematic that executes the above steps?


### How does it work?
It follows the same structure as the steps described above:
1. call the material table schematics
1. generate the service and a dummy interface using a template

That's it - it was quite easy, I was able to cobble this together in a few hours, based on the [angular blog post](https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2) and [the official docs](https://angular.io/guide/schematics).

A more elaborate blogpost with all the details will appear soon on [my personal website](http://www.pieterjd.be/).
