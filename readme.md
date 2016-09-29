## JSS Test

Testing out [JSS](https://github.com/cssinjs/jss) for styling React Components for a reusable framework.
This test uses [webpack](http://webpack.github.io/) for building/execution,
[react-jss](https://github.com/cssinjs/react-jss) to package up dynamic addition/subtraction of `<style>` tags containing component styles.

## To Run...
This will launch `webpack-dev-server` hosted at `localhost:8080`
```sh
npm start
```
Then open a web-browser pointed to `localhost:8080`

## Additional Notes
JSS uses JSON objects to represent styles. The syntax is slightly different from standard CSS(border-left becomes ‘border-left’.) Camelcase, as well as other features such as Sass-like nesting can be added using [jss plugins](https://github.com/cssinjs?query=jss-). The example uses [jss-preset-default](https://github.com/cssinjs/jss-preset-default) which loads up a set of common plugins (camelcase, nesting, etc). It’s very similar to coding style objects for inline styles, but with the additional freedom of media queries and pseudo-selectors.
