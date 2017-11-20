const pathTo = require('path');
const fs = require('fs-extra');
const webpack = require('webpack');

const entry = {index: pathTo.resolve('src', 'entry.js')};
const weexEntry = {index: pathTo.resolve('src', 'entry.js')};
const vueWebTemp = 'temp';
const hasPluginInstalled = fs.existsSync('./web/plugin.js');
var isWin = /^win/.test(process.platform);


function getEntryFileContent(entryPath, vueFilePath) {
  let relativePath = pathTo.relative(pathTo.join(entryPath, '../'), vueFilePath);
  let contents = '';
  if (hasPluginInstalled) {
    const plugindir = pathTo.resolve('./web/plugin.js');
    contents = 'require(\'' + plugindir + '\') \n';
  }
  if (isWin) {
    relativePath = relativePath.replace(/\\/g,'\\\\');
  }
  contents += 'var App = require(\'' + relativePath + '\')\n';
  contents += 'App.el = \'#root\'\n';
  contents += 'new Vue(App)\n';
  return contents;
}

var fileType = '';

function walk(dir) {
  dir = dir || '.';
  const directory = pathTo.join(__dirname, 'src', dir);
  fs.readdirSync(directory)
    .forEach((file) => {
      const fullpath = pathTo.join(directory, file);
      const stat = fs.statSync(fullpath);
      const extname = pathTo.extname(fullpath);
      const basename = pathTo.basename(fullpath);
      if (stat.isFile() && extname === '.vue' && basename != 'App.vue' ) {
        if (!fileType) {
          fileType = extname;
        }
        if (fileType && extname !== fileType) {
          console.log('Error: This is not a good practice when you use ".we" and ".vue" togither!');
        }
        const name = pathTo.join(dir, pathTo.basename(file, extname));
        if (extname === '.vue') {
          const entryFile = pathTo.join(vueWebTemp, dir, pathTo.basename(file, extname) + '.js');
          fs.outputFileSync(pathTo.join(entryFile), getEntryFileContent(entryFile, fullpath));
          
          entry[name] = pathTo.join(__dirname, entryFile) + '?entry=true';
        }
          weexEntry[name] = fullpath + '?entry=true';
      } else if (stat.isDirectory() && ['build','include','assets','filters','mixins'].indexOf(file) == -1 ) {
        const subdir = pathTo.join(dir, file);
        walk(subdir);
      }
    });
}

walk();
// web need vue-loader
const plugins = [
  new webpack.optimize.UglifyJsPlugin({minimize: true}),
  new webpack.BannerPlugin({
    banner: '// { "framework": ' + (fileType === '.vue' ? '"Vue"' : '"Weex"') + '} \n',
    raw: true,
    exclude: 'Vue'
  })
];
const webConfig = {
    context: pathTo.join(__dirname, ''),
    entry: entry,
    output: {
        path: pathTo.join(__dirname, 'dist'),
        filename: '[name].web.js',
    },
    module: {
        // webpack 2.0
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'css-loader'
                }]
            },
            {
                test: /\.vue(\?[^?]+)?$/,
                use: [{
                    loader: 'vue-loader'
                }]
            }
        ]
    },
    plugins: plugins
};
const weexConfig = {
    entry: weexEntry,
    output: {
        path: pathTo.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                }]
            },
            {
                test: /\.vue(\?[^?]+)?$/,
                use: [{
                    loader: 'weex-loader'
                }]
            },
            {
                test: /\.we(\?[^?]+)?$/,
                use: [{
                    loader: 'weex-loader'
                }]
            }
        ],
    },
    plugins: plugins,
};

var exports = [webConfig, weexConfig];

module.exports = exports;
