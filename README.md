# micro-frontend-module-federation
This repository is used to demonstrate the use of micro frontends using webpack 5 module federation. </br>
### The applicartion is constrcuted from the following componenets:
<ol>
	<li>host - this is the host application which acts as the container for all the other micro frontends.</li>
	<li>store - this is a micro-frontend which is resposible for the entire state of tha application, it is using redux</li>
	<li>arca - a micro frontend</li>
	<li>envelope - a micro frontend</li>
	<li>home - a micro frontend</li>
	<li>static files server - used for 2 things:
		<ol>
			<li>acting a web server for the arca micro frontend</li>
			<li>acting a a static files to show how the micro frontends remoteEntry.js files can be served from a static files server.</li>
		</ol>
	</li>
	<li> mfe-poc-component-library - this is a npm package which i wrote, which contains 3 compoenents which are used to mimic the use of a shared componenet library
	</li>
</ol>


## Installation
In order to make it sure all is runnnig, this is the order which you need to set it up:
<ol>
	<li>making sure the store is running:
		```
		cd store
		yarn start
		```
	</li>
	<li></li>
	<li></li>
	<li></li>
	<li></li>
</ol>
	
