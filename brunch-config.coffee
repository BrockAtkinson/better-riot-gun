exports.config =
  files:
    javascripts:
      joinTo:
        'app.js': /^app/
        'vendor.js': /^(?!app)/
    stylesheets:
      joinTo:
        'app.css'
  server:
    hostname: '0.0.0.0'
    port: 8087
    noPushState: true
    stripSlashes: true
  plugins:
    riot:
      extension: 'riot'
      pattern: /\.riot$/
      template: 'pug'
