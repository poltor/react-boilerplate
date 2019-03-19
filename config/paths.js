const fs = require('fs');
const path = require('path');


const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = relativePath => path.resolve(appDirectory, relativePath);


const moduleFileExtensions = ['js', 'json', 'jsx'];


const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find(ext =>
    fs.existsSync(resolveFn(`${filePath}.${ext}`)),
  );

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }

  return resolveFn(`${filePath}.js`);
};


module.exports = {
  appPath: resolvePath('.'),
  appAssets: resolvePath('assets'),
  appBuild: resolvePath('build'),
  appHtml: resolvePath('assets/index.html'),
  appIndexJs: resolveModule(resolvePath, 'src/index'),
  appPolyfills: resolvePath('src/polyfills'),
  appSrc: resolvePath('src'),
  config: resolvePath('config'),
  nodeModules: resolvePath('node_modules'),
  packageJson: resolvePath('package.json'),
};


