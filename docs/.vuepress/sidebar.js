module.exports = {
  '/function/': [
    {
      title: 'Group 1', // 必要的
      path: '/function/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1, // 可选的, 默认值是 1
      children: ['/']
    }
  ],
  '/algorithm/': [
    {
      title: '常见算法', // 必要的
      path: '/algorithm/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 0, // 可选的, 默认值是 1
      children: addPrefix('/algorithm/find-and-sort/', ['find', 'sort'])
    },
    {
      title: '剑指offer', // 必要的
      path: '/algorithm/sword-to-offer/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      // collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 0, // 可选的, 默认值是 1
      children: addPrefix('/algorithm/sword-to-offer/', getArrayFromNum(66))
    }
  ]
};
function addPrefix(prefix, links) {
  return links.map((item) => `${prefix}${item}`);
}
function getArrayFromNum(num) {
  const res = [];
  for (let i = 1; i <= num; i++) {
    res.push(`${i}`);
  }
  return res;
}
