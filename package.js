{
  "name": "website",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config webpack.config.js --progress --profile --colors --watch"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-preset-env": "^1.7.0",
    "css-loader": "^1.0.0",
    "cssnano": "^4.0.2",
    "del": "^3.0.0",
    "extract-text-webpack-plugin": "^4.0.0-beta.0",
    "file-loader": "^1.1.11",
    "gulp": "^3.9.1",
    "gulp-concat": "^2.6.1",
    "gulp-minify-css": "^1.2.4",
    "gulp-rename": "^1.3.0",
    "gulp-uglify": "^3.0.0",
    "optimize-css-assets-webpack-plugin": "^5.0.0",
    "style-loader": "^0.21.0",
    "url-loader": "^1.0.1",
    "webpack": "^4.15.1",
    "webpack-cli": "^3.0.8",
    "webpack-dev-server": "^3.1.4"
  },
  "dependencies": {}
}
