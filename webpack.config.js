const path = require('path');
module.exports = {
    mode:"development",
    entry: "./src/App.js",

    output:{
        filename :'output.js',
        path:path.resolve(__dirname,'whatsappclone')
    }

},
module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };