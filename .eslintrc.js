module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 8
  },
  env: {
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint', // 使用新语法时（比如async/await），eslint不报错
    sourceType: 'module' // 不使用'use strict'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: ['error', 2], // 缩进控制 2空格
    'no-mixed-spaces-and-tabs': 'error', // 禁止使用 空格 和 tab 混合缩进
    'no-regex-spaces': 'error', // 禁止正则表达式字面量中出现多个空格
    'no-multi-spaces': 'error', // 禁止出现多个空格而且不是用来作缩进的
    'block-spacing': ['error', 'never'], // 单行代码块中紧贴括号部分不允许包含空格。
    'comma-spacing': ['error', { before: false, after: true }], //在变量声明、数组字面量、对象字面量、函数参数 和 序列中禁止在逗号前使用空格,要求在逗号后使用一个或多个空格
    'semi-spacing': ['error', { before: false, after: true }], //禁止分号周围的空格
    'computed-property-spacing': ['error', 'never'], // 禁止括号和其内部值之间的空格
    'no-trailing-spaces': 'error', // 禁用行尾空格
    'no-spaced-func': 'error', // 禁止 function 标识符和圆括号之间有空格
    'space-before-function-paren': 'off', // 禁止 函数圆括号之前有一个空格
    'space-before-blocks': ['error', 'always'], // 禁止语句块之前的空格
    'space-in-parens': ['error', 'never'], // 禁止圆括号内的空格
    'space-infix-ops': ['error', { int32Hint: false }], // 要求中缀操作符周围有空格,设置 int32Hint 选项为 true (默认 false) 允许 a|0 不带空格。
    'space-unary-ops': 'error', // 要求或禁止在一元操作符之前或之后存在空格,new、delete、typeof、void、yield要求有空格，-、+、--、++、!、!!要求无空格。
    'spaced-comment': ['error', 'always'], // 要求在注释前有空白
    'arrow-spacing': 'error', // 要求箭头函数的箭头之前和之后有空格
    'generator-star-spacing': ['error', { before: false, after: true }], // 强制 generator 函数中 * 号前有空格，后无空格。
    'yield-star-spacing': ['error', { before: true, after: false }], // 强制 yield* 表达式中  * 号前有空格，后无空格。
    'no-irregular-whitespace': 'error', // 禁止不规则的空白。
    'template-curly-spacing': ['error', 'never'], // 强制模板字符串中花括号内不能出现空格
    'max-len': ['error', 120], // 每行字符不能超过120个
    'no-multiple-empty-lines': 'error', // 不允许多个空行
    'no-var': 'error', //用let/const代替var
    'no-const-assign': 'error', //不允许改变用const声明的变量
    'prefer-const': 'error', //如果一个变量不会被重新赋值，最好使用const进行声明。
    'no-use-before-define': 'error', //禁止定义前使用
    'no-cond-assign': 'off', // 禁止在条件语句中出现赋值操作符
    'no-constant-condition': 'off', // 禁止在条件中使用常量表达式
    'no-duplicate-case': 'error', // 禁止在 switch 语句中的 case 子句中出现重复的测试表达式
    'default-case': 'error', // 要求 Switch 语句中有 Default 分支
    eqeqeq: 'error', // 使用 === 和 !== 代替 == 和 !=
    'no-else-return': 'error', // 如果 if 块中包含了一个 return 语句，else 块就成了多余的了。可以将其内容移至块外。
    'no-fallthrough': 'error', // 禁止 case 语句落空
    'no-unneeded-ternary': 'error', //禁止可以在有更简单的可替代的表达式时使用三元操作符
    camelcase: ['error', { properties: 'never' }], // 要求使用骆驼拼写法,
    radix: 'error', // 在parseInt()中始终使用基数以消除意想不到的后果。
    quotes: ['error', 'single'], // 字符串开头和结束使用单引号
    'prefer-template': 'error', // 使用模板而非字符串连接
    'no-path-concat': 'error', // 当使用 _dirname 和 _filename 时不允许字符串拼接
    'no-useless-concat': 'error', // 禁止没有必要的字符拼接
    'comma-dangle': ['error', 'never'], // 多行对象字面量中要求拖尾逗号
    'no-dupe-keys': 'error', // 禁止在对象字面量中出现重复的键
    'no-prototype-builtins': 'error', // 禁止直接使用 Object.prototypes 的内置属性
    'no-extend-native': 'off', // 禁止扩展原生对象
    'no-new-object': 'error', // 禁止使用 Object 构造函数
    'object-shorthand': ['error', 'always'], //要求对象字面量简写语法
    'no-sparse-arrays': 'error', // 禁用稀疏数组
    'no-array-constructor': 'error', // 禁止使用 Array 构造函数
    'no-dupe-args': 'error', // 禁止在 function 定义中出现重复的参数
    'no-new-func': 'error', // 禁用Function构造函数
    'no-return-assign': 'off', // 禁止在返回语句中赋值
    'new-cap': 'off', // 要求构造函数首字母大写
    strict: 'error', // 使用强制模式开关use strict;
    'no-empty': ['error', { allowEmptyCatch: true }], // 禁止空块语句,但允许出现空的 catch 子句
    'no-extra-boolean-cast': 'error', // 禁止不必要的布尔类型转换
    'no-extra-parens': 'error', // 禁止冗余的括号
    'no-extra-semi': 'error', // 禁用不必要的分号
    semi: [2, 'always'], // 语句强制分号结尾
    'no-eval': 'off', // 禁用 eval()
    'no-with': 'error', // 禁用 with 语句
    'no-unexpected-multiline': 'error', // 禁止使用令人困惑的多行表达式。
    'no-unreachable': 'error', // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
    'no-unsafe-finally': 'error', // 禁止在 finally 语句块中出现控制流语句
    'valid-typeof': 'error', //强制 typeof 表达式与有效的字符串进行比较
    'no-case-declarations': 'error', // 禁止在 case 或 default 子句中出现词法声明
    'no-new-wrappers': 'error', // 禁止通过 new 操作符使用 String、Number 和 Boolean
    'no-useless-escape': 'error', // 禁用不必要的转义
    'handle-callback-err': 'error', // 强制回调错误处理
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'no-alert': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'consistent-return': 'off',
    'no-use-before-define': 'off',
    'no-fallthrough': 'off',
    'no-multi-assign': 'off',
    'one-var': 'off',
    'func-names': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    'no-mixed-operators': 'off',
    'prefer-template': 'warn'
  }
};
