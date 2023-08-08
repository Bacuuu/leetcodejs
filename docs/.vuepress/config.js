const getConfig = require("vuepress-bar");
let { nav, sidebar } = getConfig();
sidebar[0].children = sidebar[0].children.filter(i => i)
sidebar.unshift({
  title: 'Guide',
  path: '/'
})

module.exports = {
    base: '/',
    title: 'LeetcodeJs',
    themeConfig: {
        sidebar
        // sidebar
    }
}