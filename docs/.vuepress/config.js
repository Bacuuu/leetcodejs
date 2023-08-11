const getConfig = require("vuepress-bar");
let { nav, sidebar } = getConfig();
sidebar[0].children = sidebar[0].children.filter(i => i)
sidebar.unshift({
  title: '根目录',
  path: '/'
})
// 把sidebar的标题换为文件名称
sidebar.forEach(one => {
  if (one.children) {
    one.children = one.children.map(two => {
      return {
        title: two.split('/')[1],
        path: two
      }
    })
  }
})
console.log(sidebar)
module.exports = {
    base: '/',
    title: 'LeetcodeJs',
    themeConfig: {
        sidebar,
        nav: [
          { text: '主页', link: 'https://www.bigmix.cn' },
        ]
    }
}