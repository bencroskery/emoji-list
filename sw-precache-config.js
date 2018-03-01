module.exports = {
  maximumFileSizeToCacheInBytes: 40000000,
  staticFileGlobs: [
    'index.html',
    'manifest.json',
    'src/list.json',
    'bower_components/webcomponentsjs/webcomponents-lite.min.js',
    'images/*'
  ],
  navigateFallback: 'index.html'
};
