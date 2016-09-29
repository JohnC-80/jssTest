var path = require('path');
module.exports ={
    entry: "./public/app.js",
    noInfo: true,
    output:{
        path: path.resolve(__dirname,"public/bundle"),
        publicPath: "/bundle",
        filename: "bundle.js"
    },
    module:{
      loaders:[
       {test: /\.js$/,
        include:[
                  path.resolve(__dirname, "public/")
              ],
        loader: "babel-loader"
       },
       {
           test: /\.css$/,
           loader: "style-loader!css-loader"
       }
      ]
    }
};


