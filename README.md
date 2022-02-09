# micro-frontend-module-federation
This repository is used to demonstrate the use of micro frontends using webpack 5 module federation. 

### The applicartion is constrcuted from the following componenets:
host - this is the host application which acts as the container for all the other micro frontends.

store  - this is a micro-frontend which is resposible for the entire state of tha application, it is using redux.
	
arca - a micro frontend
	
envelope - a micro frontend
	
home - a micro frontend
	
static files server - used for 2 things:

1. acting a web server for the arca micro frontend
2. acting a a static files to show how the micro frontends remoteEntry.js files can be served from a static files server.
		
mfe-poc-component-library - this is a npm package which i wrote, which contains 3 components which are used to mimic the use of a shared component library
	


## Installation
In order to make it sure all is running, this is what is required to set it up:
making sure the store is running:
```
cd store
yarn start
```

make sure the static files server is running
```
cd static_files_server
yarn start
```

now you can start each of the other micro frontend
```
cd envelope
yarn start
```

```
cd arca
yarn start
```

```
cd home
yarn start
```

now we can start the host application
```
cd host
yarn start
```
