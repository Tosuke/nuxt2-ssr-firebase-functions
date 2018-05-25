module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './server/entry-main.js'
    config.entry.functions = './server/entry-functions.js'
    return config
  }
}
