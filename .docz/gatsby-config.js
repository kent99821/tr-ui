const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'ToRingUI',
    description: 'A Design UI library for React',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'D:\\qianduan\\React\\UI\\tr-ui\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'ToRingUI',
        description: 'A Design UI library for React',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'D:\\qianduan\\React\\UI\\tr-ui',
          templates:
            'D:\\qianduan\\React\\UI\\tr-ui\\node_modules\\docz-core\\dist\\templates',
          docz: 'D:\\qianduan\\React\\UI\\tr-ui\\.docz',
          cache: 'D:\\qianduan\\React\\UI\\tr-ui\\.docz\\.cache',
          app: 'D:\\qianduan\\React\\UI\\tr-ui\\.docz\\app',
          appPackageJson: 'D:\\qianduan\\React\\UI\\tr-ui\\package.json',
          appTsConfig: 'D:\\qianduan\\React\\UI\\tr-ui\\tsconfig.json',
          gatsbyConfig: 'D:\\qianduan\\React\\UI\\tr-ui\\gatsby-config.js',
          gatsbyBrowser: 'D:\\qianduan\\React\\UI\\tr-ui\\gatsby-browser.js',
          gatsbyNode: 'D:\\qianduan\\React\\UI\\tr-ui\\gatsby-node.js',
          gatsbySSR: 'D:\\qianduan\\React\\UI\\tr-ui\\gatsby-ssr.js',
          importsJs: 'D:\\qianduan\\React\\UI\\tr-ui\\.docz\\app\\imports.js',
          rootJs: 'D:\\qianduan\\React\\UI\\tr-ui\\.docz\\app\\root.jsx',
          indexJs: 'D:\\qianduan\\React\\UI\\tr-ui\\.docz\\app\\index.jsx',
          indexHtml: 'D:\\qianduan\\React\\UI\\tr-ui\\.docz\\app\\index.html',
          db: 'D:\\qianduan\\React\\UI\\tr-ui\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
