
# micro-frontend-module-federation
This repository is used to demonstrate the use of micro frontends using webpack 5 module federation. 

### The applicartion is constrcuted from the following componenets:
1. host - this is the host application which acts as the container for all the other micro frontends.

2. store  - this is a micro-frontend which is resposible for the entire state of tha application, it is using redux.
	
3. arca - a micro frontend
	
4. envelope - a micro frontend
	
5. home - a micro frontend
	
6. static files server - used for 2 things:

   a. acting a web server for the arca micro frontend

   b. acting a a static files to show how the micro frontends remoteEntry.js files can be served from a static files server.
		
7. mfe-poc-component-library - this is a npm package which i wrote, which contains 3 components which are used to mimic the use of a shared component library
	


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

```
cd host
yarn start
```

once all parts are up and running, browse to the host url this is our application
