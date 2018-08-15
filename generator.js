const fs = require('fs')

module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    scripts: {
      test: 'vue-cli-service test'
    }
  })

  const appVueContent = readAppVue()
  rootOptions.appVueContent = appVueContent
  
  api.render('./template')

  api.extendPackage({
    dependencies: {
      'vux': '^2.9.2'
    }
  })
}

function readAppVue () {
  const content = fs.readFileSync('src/App.vue', { encoding: 'utf-8' })
  return content
}