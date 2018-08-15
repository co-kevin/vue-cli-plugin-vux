const fs = require('fs')

module.exports = (api, options, rootOptions) => {
  const appVueContent = readAppVue()
  rootOptions.appVueContent = appVueContent

  api.render('./template')

  // 修改 `package.json` 里的字段
  api.extendPackage({
    dependencies: {
      'vux': '^2.9.2'
    },
    devDependencies: {
      'less': '^3.8.1',
      'less-loader': '^4.1.0',
      'vue-loader': '14.2.3',
      'vue-template-compiler': '^2.5.17',
      'vux-loader': '^1.2.9'
    }
  })
}

function readAppVue () {
  const content = fs.readFileSync('src/App.vue', { encoding: 'utf-8' })
  return content
}