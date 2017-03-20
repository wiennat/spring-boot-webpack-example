Sample project to integrate Spring Boot and Webpack
 
* Webpack and webpack-dev-server build static resources in `src/main/front` and output it to `build/resources`. 
You need to reassign this path in `webpack.config.js` according to your project structure.

* All non-{css,js,json-update} requests to webpack-dev-server will be 
  proxied to `http://localhost:8080`. 
