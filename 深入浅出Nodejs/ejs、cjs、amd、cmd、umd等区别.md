- **AMD 与 CMD：**

AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。
CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。
CMD 推崇依赖就近，AMD 推崇依赖前置。

- **ES Module 与 CommonJS:**

CommonJS 模块是对象，是运行时加载，运行时才把模块挂载在 exports 之上（加载整个模块的所有），加载模块其实就是查找对象属性。
ES Module 不是对象，是使用 export 显示指定输出，再通过 import 输入。此法为编译时加载，编译时遇到 import 就会生成一个只读引用。等到运行时就会根据此引用去被加载的模块取值。所以不会加载模块所有方法，仅取所需。
CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
CommonJS 模块是运行时加载，ES6 模块是编译时输出接口

- **CommonJS 与 AMD/CMD:**

AMD/CMD 是 CommonJS 在浏览器端的解决方案。
CommonJS 是同步加载（代码在本地，加载时间基本等于硬盘读取时间）。
AMD/CMD 是异步加载（浏览器必须这么做，代码在服务端）

- **UMD 与 AMD/CMD**

UMD（Universal Module Definition）是 AMD 和 CommonJS 的糅合，跨平台的解决方案。
AMD 模块以浏览器第一的原则发展，异步加载模块。
CommonJS 模块以服务器第一原则发展，选择同步加载，它的模块无需包装(unwrapped modules)。
UMD 先判断是否支持 Node.js 的模块（exports）是否存在，存在则使用 Node.js 模块模式。再判断是否支持 AMD（define 是否存在），存在则使用 AMD 方式加载模块。
