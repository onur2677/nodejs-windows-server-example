const { Service } = require('node-windows')

const { join } = require('path')

const service = new Service({
  name: 'windows service example',
  description: 'Example web server',
  script: join(__dirname, 'server.js')
})

service.on('install', () => {
  console.info('install')
  service.start()
})

service.install()
