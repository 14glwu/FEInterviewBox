module.exports = {
  base: '/FEInterviewBox/',
  title: '前端面试盒子',
  description: '常用的JS代码和前端知识点',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebar: require('./sidebar'),
    nav: [
      { text: 'JS函数实现', link: '/function/' }, // 内部链接 以docs为根目录
      { text: 'JS算法', link: '/algorithm/' }, // 内部链接 以docs为根目录
      { text: 'JS设计模式', link: '/patterns/' }, // 内部链接 以docs为根目录
      { text: '博客', link: 'http://ericwu.cn/' }, // 外部链接
      { text: 'GitHub', link: 'https://github.com/14glwu/FEInterviewBox' }
      // 下拉列表
      // {
      //   text: 'GitHub',
      //   items: [
      //     {
      //       text: 'GitHub地址',
      //       link: 'https://github.com/14glwu/FEInterviewBox'
      //     }
      //   ]
      // }
    ]
  }
};
